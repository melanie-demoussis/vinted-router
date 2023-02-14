import "./App.css";

// import package

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import des composants
import Header from "./components/Header";

// import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

function App() {
  const [token, setToken] = useState();
  const [search, setSearch] = useState();

  const handleToken = (token) => {
    if (token) {
      setToken(token);
    } else {
      setToken(null);
    }
  };

  return (
    //  Router = Doit contenir tout le site//
    <Router>
      {/* Routes = Doit contenir toutes les routes */}
      {/* Je veux que mon header s'affiche sur toutes les pages */}
      <Header
        token={token}
        search={search}
        setSearch={setSearch}
        handleToken={handleToken}
      />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
    // Elements englobe la logique de paiement. je lui donne une props "stripe" pour lui montrer que j'ai un compte
  );
}

export default App;
