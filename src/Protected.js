import { useKeycloak } from '@react-keycloak/web';

const Protected = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <h2>Protected Page</h2>
      {keycloak.authenticated && (
        <div>
          <p>User is authenticated</p>
          <p>Access Token: {keycloak.token}</p>
        </div>
      )}
    </div>
  );
};

export default Protected;