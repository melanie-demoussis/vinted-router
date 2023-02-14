import { Link } from "react-router-dom";
import logo from "../assets/logo-vinted.svg";

const Header = ({ token, handleToken, search, setSearch }) => {
  return (
    <header>
      <div>
        <Link to="/">
          <button>
            <img className="logo" src={logo} alt="logo vinted" />
          </button>
        </Link>
      </div>

      <div>
        <input
          value={search}
          type="text"
          placeholder="Recherche des articles"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <div> button de tri </div>
      </div>

      <div className="header-button">
        <span> tri de prix </span>
        <input type="checkbox" />
        <span> checkbox</span>
        <span>prix entre</span>
        {/* si le token existe, on affiche déconnexion, autrement s'inscrire ou se connecter */}
        {token ? (
          <button
            onClick={() => {
              handleToken(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <div>
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </div>
        )}
        {/* <Link to="/signup">
          <button> S'incrire</button>
        </Link>
        <Link to="/login">
          <button>Se connecter</button>
        </Link> */}

        <Link to="/publish">
          <button>Vends tes articles</button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
