import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //Je récupère l'id présent dans l'url
  const params = useParams();
  const id = params.id;
  // console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="offer">
      <img src={data.product_image.secure_url} alt="product" />
      <div className="information">
        <p>{data.product_price} €</p>
        {data.product_details.map((detail, index) => {
          const key = Object.keys(detail)[0];
          // console.log(key);
          // console.log(detail[key]);
          return (
            <div key={index}>
              <span>{key} : </span>
              <span>{detail[key]}</span>
            </div>
          );
        })}
        <p> {data.product_name}</p>
        <p>{data.product_description}</p>
        <p>{data.owner.account.username}</p>
        <button>ACHETER</button>
      </div>
    </div>
  );
};

export default Offer;
