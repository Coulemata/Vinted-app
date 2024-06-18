
import { useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = ({handleToken}) => {
    
    const [username, setUserName] = useState ("");
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter]= useState(false);
    const navigate = useNavigate();

    const handleUserName = event => {
      const value = event.target.value; 
      setUserName(value);
    }
    const handleEmail = event => {
      const value = event.target.value;
      setEmail(value);
    };
  
    const handlePassword = event => {
      const value = event.target.value;
      setPassword(value);
    };
  
    const handleNewsletter= () => {
      setNewsletter(!newsletter)
    };
    

const handleSubmit = async(event)  => {
  event.preventDefault();

try {  const response = await axios.post(
  "https://lereacteur-vinted-api.herokuapp.com/user/signup",
  {
    email,
    username,
    password,
    newsletter,

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
   
   <>
   
   <form className="form-container" onSubmit={handleSubmit} >
    <h1>S'inscrire</h1>
      <input type="text" value={username} placeholder="Nom d'utilisateur" onChange={handleUserName}  />
      <input type="email" value={email} placeholder="Email" onChange={handleEmail} />
      <input type="password" value={password} placeholder="Mot de passe" onChange={handlePassword} />

      <div className='newsletter-part'>
      <input type= "checkbox" checked ={newsletter} onChange={handleNewsletter}/>
      <label >  S'inscrire à notre Newsletter</label>
      </div>
      <p>En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de Confidentialité de Vinted. Je confirme avoir au moins 18 ans.</p>
      <button className="btn-dark">S'inscrire</button>
 

   </form>
   </>)
   
  }

export default Signup