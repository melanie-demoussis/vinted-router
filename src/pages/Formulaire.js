import { Link } from "react-router-dom";

const Formulaire = () => {
  return (
    <div>
      <h1>Je suis sur la page formulaire</h1>
      <Link to="/">
        <div>
          <h1>Vers la page d'accueil</h1>
        </div>
      </Link>
    </div>
  );
};
export default Formulaire;
