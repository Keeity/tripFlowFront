import { Link, Navigate } from "react-router-dom";
import "./ImgSignin.css";
// import { useAuth } from "../../context/AuthContext"

function ImgSignin() {
  // const { logout } = useAuth()

  function handleLogout() {
    //     logout()
    // navigate('/login')
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="imgSignin">
    <div className="h2signin">
    <h2 className="h2imgsignin">Experiências que transformam,<br></br>       Lugares que inspiram...</h2>
    <h2 className="h2imgsignin" left="20">Experiências que transformam,<br></br>       Lugares que inspiram...</h2>
    </div>
    <img    type="image/jpeg"  src="/public/imgsignin.jpeg"
          // <link rel="icon" href="/logotrip.png" />    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
 
    ></img>

    </div>
  );
}

export default ImgSignin;
