import { useKeycloak } from '@react-keycloak/web';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  useEffect(() => {
    if (keycloak.authenticated) {
      keycloak.logout();
    } else {
      navigate('/');
    }
  }, [keycloak, navigate]);

  return <div>Logging out...</div>;
};

export default Logout;