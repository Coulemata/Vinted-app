
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Signup from "../pages/SignUp";


const Header = ({handleToken, token}) => {
    const navigate = useNavigate();

    return <header>
    <div>
        <img className ="logo" src="./src/assets/img/logo-vinted.png"/>
    </div>
    <div>
        <input className="search-input" name="search" placeholder="recherche"/>
    </div>
    <div> 
        {!token ? (
            <> 
        <Link to="/signup"> <button className="btn-light" >S'inscrire</button></Link>
        <Link to ="/login"> <button className="btn-light">Se connecter</button></Link>
            </>
  ) : (
        <button onClick={()=>{handleToken() }}className="btn-dark"> Deconnexion</button>
        )};
    </div>
    <div>
        <button className="btn-dark">Vend tes articles</button>
    </div>
    </header>
  };
  
  export default Header;



