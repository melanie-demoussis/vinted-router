import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

//import composant
import OfferCard from "../components/OfferCard";
import Main from "../components/Main";

// import des images
// import secondPlan from "../assets/secondPlan.webp";
// import logo from "../assets/logo-vinted.svg";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const flechData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        // console.log(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    flechData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="App">
      <Main />

      <div className="card">
        {data.offers.map((offer) => {
          return <OfferCard offerInfos={offer} key={offer._id} />;
        })}
      </div>
    </div>
  );
};
export default Home;
