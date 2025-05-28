import Keycloak from 'keycloak-js';

// Singleton pattern implementation
const keycloakInstance = (function() {
  let instance;

  function createInstance() {
    const keycloak = new Keycloak({
      url: 'http://147.93.19.71:9000/',
      realm: 'ECOM',
      clientId: 'Ecommerce'
    });
    return keycloak;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

export default keycloakInstance;