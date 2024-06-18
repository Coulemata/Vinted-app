
import { useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = ({handleToken}) =>{

    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleEmail = event => {
        const value = event.target.value;
        setEmail(value);
      };
    
    const handlePassword = event => {
        const value = event.target.value;
        setPassword(value);
      };


     const handleSubmit = async(event)  => {
        event.preventDefault();
      
      try {  const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
      
        });
        console.log(response.data)
      
        if (response.data.token) {
        
          handleToken(response.data.token);
        
          navigate("/");
        }
      } catch (error) {
        console.log(error)
      }
      };

    return (

        <form className="form-container" onSubmit={handleSubmit} >
           <h1>Se connecter</h1>
          <input type="email" value={email} placeholder="Email" onChange={handleEmail} />
          <input type="password" value={password} placeholder="Mot de passe" onChange={handlePassword} />
          <button className="btn-dark">S'inscrire</button>
       </form>
    )

};

export default Login