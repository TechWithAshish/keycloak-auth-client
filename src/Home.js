import { useKeycloak } from '@react-keycloak/web';
import { Link } from 'react-router-dom';

const Home = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <h1>Welcome</h1>
      {keycloak.authenticated ? (
        <div>
          <p>Hello {keycloak.tokenParsed?.preferred_username}!</p>
          <Link to="/protected">Go to Protected Page</Link>
          <br />
          <Link to="/logout">Logout</Link>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Home;