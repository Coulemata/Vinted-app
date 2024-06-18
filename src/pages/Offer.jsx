import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  //   console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <body className="body-offer">
    <main className="offer-container" >
      <h1>Page Offer</h1>
      <img  className= "offer-img" src={data.product_image.secure_url} alt={data.product_name} />{}

      {/* Pour chaque objet dans product_details je veux afficher le nom de sa clefs et son contenu */}

      <div className="offer-details">
      {data.product_details.map((detail, index) => {
        // Je parcours product_details, je récupère chaque objet sous le nom de details
        console.log("élément dans le tableau   ", detail);
        // Je récupère la liste des clef de detail sous le nom de keys
        const keys = Object.keys(detail);
        console.log("liste des clefs   ", keys);
        // Je récupère la string en première position dans keys (la seule) sous le nom de key
        const key = keys[0];
        console.log("clef sortie du tableau  ", key);

        return (

          <p key={index}>
            {key} {detail[key]}
          </p> 
    
        );
      } )}
      </div>
    </main>
    </body>
  );
};

export default Offer;
