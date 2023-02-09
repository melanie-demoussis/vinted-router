import axios from "axios";
import { useEffect, useState } from "react";

//import composant
import OfferCard from "../components/OfferCard";
import Signup from "../pages/Signup";

// import des images
import secondPlan from "../assets/secondPlan.webp";
import logo from "../assets/logo-vinted.svg";

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
      <header>
        <img className="logo" src={logo} alt="logo vinted" />
        <div>
          <input type="text" />
        </div>
        <div> button de tri </div>
        <div>
          <span> tri de prix </span>
          <input type="checkbox" />
          <span> checkbox</span>
          <span>prix entre</span>
          <button
            onClick={() => {
              return <Signup />;
            }}
          >
            {" "}
            S'incrire
          </button>
          <button onClick>Se connecter</button>
          <button>Vends tes articles</button>
        </div>
      </header>
      <main>
        <div className="second-plan">
          <img src={secondPlan} alt="dressing" />
          <div className="first-plan">
            <h2>Prêts à faire du tri dans vos placards ?</h2>
            <>Commencer à vendre</>
          </div>
        </div>
        <div className="card">
          {data.offers.map((offer) => {
            return <OfferCard offerInfos={offer} key={offer._id} />;
          })}
        </div>
      </main>
    </div>
  );
};
export default Home;
