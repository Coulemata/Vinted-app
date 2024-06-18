import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Hero from "../Components/Hero";

const Home = () => {
   
          const [isLoading, setIsLoading] = useState(true);
          const [data, setData] = useState([]);
          

          useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await axios.get(
                  "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
                );
                // console.log(response.data);
                setData(response.data);
                setIsLoading(false);
              } catch (error) {
                console.log(error);
              }
            };
            fetchData();
          }, []);
          return isLoading ? (
            <p>Loading ...</p>
          ) : (
            <main className="home-card-container">
              <Hero />
                {data.offers.map((offer, id)=> {
                  console.log(offer)

                return ( 
                    <Link to={`/offers/${offer._id}`} key={offer._id}>  
                <article className="card-container">
                    <div>
                    <img className="owner-card" src= {offer.owner.account.avatar} />
                    <span> {offer.owner.account.username}</span>
                    </div>
                    <div>
                        <img className="img-card-container" src={offer.product_image.secure_url}  alt={offer.product_name} />
                    </div>
                    <div>
                        <p>{offer.product_price} €</p>
                        {offer.product_details.map((product_detail, index)=> {
                            return(
                                <>
                                <p key={index}> {product_detail["TAILLE"]}</p>
                                <p key={index}> {product_detail["MARQUE"]}</p>
                                </>
                            )
                        }
                        
                        )}
                    </div>

                </article>
                 </Link>
                )}
            )}
            
            </main>
        
  )};
  
  export default Home;