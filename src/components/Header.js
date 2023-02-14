import { Link } from "react-router-dom";
import logo from "../assets/logo-vinted.svg";
const Header = () => {
  return (
    <header>
      <div>
        <img className="logo" src={logo} alt="logo vinted" />
      </div>
      <div>
        <input type="text" placeholder="Recherche des articles" />
        <div> button de tri </div>
      </div>
      <div>
        <span> tri de prix </span>
        <input type="checkbox" />
        <span> checkbox</span>
        <span>prix entre</span>
        <Link to={"/signup"}>
          <button> S'incrire</button>
        </Link>

        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;
