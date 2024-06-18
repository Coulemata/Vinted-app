import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

const Publish = (token) => {

    const [picture, setPicture] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [condition, setCondition] = useState("");
    const [place, setPlace] = useState("");
    const [price, setPrice] = useState("0");



    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("picture", picture);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("condition", condition);
            formData.append("city", place);
            formData.append("brand", brand);
            formData.append("size", size);
            formData.append("color", color);

            const response = axios.post(" https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                FormData,
                {
                  headers: {
                    authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                  }
                }
        
            )

        } catch (error) {
            console.log(error);
        }
    };


return token ? (

    <form className="publish-form-container" onSubmit={handleSubmit}>
        <div className="input-container"> 
        <label>Ajouter une photo</label>
        {picture && <img src={URL.createObjectURL(picture)} alt="Image" />}
        <input type="file"  value="" placeholder="file"  onChange={event => {
              setPicture(event.target.files[0]);
            }}/>
        </div>
       
       <div><input type = "text" placeholder="Title" name = "Title" value={title} onChange={(event)=>{
        setTitle(event.target.value)
       }} />
        <textarea placeholder="ex: porté quelques fois, taille correctement"  
        value={description} onChange={(event)=>{
            setDescription(event.target.value)}} ></textarea>
        </div>
        <div className="input-container">        
        <input type = "text" placeholder="Brand" name = "brand" value={brand} onChange={(event)=>{
            setBrand(event.target.value)}} />
        <input type = "text" placeholder="Size" name="size" value ={size} onChange={(event)=>{
            setSize(event.target.value)}} />
        <input type = "text" placeholder="Color"name= "color" value={color} onChange={(event)=>{
            setColor(event.target.value)}}  />
        <input type = "text" placeholder="Condition" name = "Condition" value={condition} onChange={(event)=>{
            setCondition(event.target.value)}} />
        <input type = "text" placeholder="Place" name="Place" value={place} onChange={(event)=>{
            setPlace(event.target.value)}}  />
        </div>
        <div className="input-container">
            <input type = "number" placeholder="Price" name ="Price" value={price} onChange={(event)=>{
            setPrice(event.target.value)}} /> 
         </div>
         <button > Ajouter </button>
        
    </form>


) : (

    <Navigate to="/login" />
)

}

export default Publish