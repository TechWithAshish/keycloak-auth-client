import { Routes, Route, Navigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import Login from './Login';
import Logout from './Logout';
import Protected from './Protected';
import Home from './Home';

function App() {
  const { keycloak } = useKeycloak();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/protected"
          element={
            keycloak.authenticated ? (
              <Protected />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;