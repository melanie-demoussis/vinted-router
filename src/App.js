import "./App.css";
// import package
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import des composants
import Formulaire from "./pages/Formulaire";

// import des images
import secondPlan from "./assets/secondPlan.webp";
import logo from "./assets/logo-vinted.svg";

function App() {
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
    //  Router = Doit contenir tout le site//
    <Router>
      <div className="App">
        <header>
          <img src={logo} alt="logo vinted" />
          <div> RECHERCHE</div>
        </header>
        <main>
          {/* Routes = Doit contenir toutes les routes */}
          <Routes>
            <Route path="/formulaire" element={<Formulaire />}></Route>
          </Routes>

          <div className="second-plan">
            <img src={secondPlan} alt="dressing" />
            <div className="first-plan">
              <h2>Prêts à faire du tri dans vos placards ?</h2>
              <Link to="/formulaire">Commencer à vendre</Link>
            </div>
          </div>
          <div className="offer">
            <div className="product_pictures">
              {data.offers.map((offer, index) => {
                return (
                  <div key={index} className="">
                    <h2 className="user">
                      <img
                        src={offer.product_pictures.map((i) => i.url)}
                        alt="avatar"
                      />
                      {offer.owner.account.username}
                    </h2>
                    <div>
                      <span>{offer.product_price} €</span>
                      <span>{offer.product_details.map((i) => i.marque)}</span>

                      {/* <span>{offer.product_details}</span> */}
                      {/* <span>{offer.product_details}</span> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
