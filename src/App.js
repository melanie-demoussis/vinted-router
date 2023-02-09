import "./App.css";

// import package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des composants/pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";

function App() {
  return (
    //  Router = Doit contenir tout le site//
    <Router>
      {/* Routes = Doit contenir toutes les routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
