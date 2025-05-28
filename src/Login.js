import { useKeycloak } from '@react-keycloak/web';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  useEffect(() => {
    if (keycloak.authenticated) {
      navigate('/');
    }
  }, [keycloak.authenticated, navigate]);

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => keycloak.login()}>Login with Keycloak</button>
    </div>
  );
};

export default Login;