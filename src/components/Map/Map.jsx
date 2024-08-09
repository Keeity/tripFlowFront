import { Link, Navigate } from "react-router-dom";
import "./Map.css";
// import { useAuth } from "../../context/AuthContext"

function Map() {
  // const { logout } = useAuth()

  function handleLogout() {
    //     logout()
    // navigate('/login')
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="map">
      <nav>
        <Link to="/painel">Meu painel</Link>
        <Link to="/produtos">rodutos</Link>
        {/* <Link  to= '/cadastro'>Cadastro</Link> */}
      </nav>

      <button onClick={handleLogout} className="baseline-sidebar-text">
        Logout
      </button>
    </div>
  );
}

export default Map;
