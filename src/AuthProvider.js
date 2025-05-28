import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloakSingleton from './keycloak';
import { useEffect, useRef } from 'react';

export const AuthProvider = ({ children }) => {
  const keycloak = keycloakSingleton.getInstance();
  const initialized = useRef(false);

  const onKeycloakEvent = (event, error) => {
    console.log('Keycloak event:', event, error);
  };

  const onKeycloakTokens = (tokens) => {
    console.log('Keycloak tokens:', tokens);
  };

  // Prevent re-initialization
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      // You can add any post-initialization logic here
    }
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        pkceMethod: 'S256',
        checkLoginIframe: false,
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
        flow: 'standard' // Explicitly set the flow
      }}
      onEvent={onKeycloakEvent}
      onTokens={onKeycloakTokens}
      autoRefreshToken={true}
    >
      {children}
    </ReactKeycloakProvider>
  );
};