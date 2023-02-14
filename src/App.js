import "./App.css";

// import package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des composants/pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [token, setToken] = useState();

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
      <Header handleToken={handleToken} token={token}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
