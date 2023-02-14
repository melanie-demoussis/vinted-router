import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      if (response.data.token) {
        //si je reçois un token
        handleToken(response.data.token); // enregistre le token (mise à jour)
        // je redirige vers home
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
      console.log(error.data.status);
      //si il y a un message "error" que le mail existe déjà je préviens l'utilisateur
      if (error.response.data.message === "This email already has an account") {
        //alors
        setErrorMessage(
          "Cet email est déjà utilisé, veuillez entrer un email valide"
        );
      } // si il manque des paramètres, envoyer un message pour demander de compléter les inputs
      if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Veuillez remplir tous les champs");
      }
    }
  };

  return (
    <div className="inscription">
      <h2>S'incrire</h2>

      <form className="form" onSubmit={handleSignup}>
        <input
          value={username}
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          value={password}
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <span className="newsletter">
          <input
            checked={newsletter}
            type="checkbox"
            onChange={() => {
              setNewsletter(!newsletter);
            }}
          />
          <p>S'incrire à notre newsletter</p>
        </span>
        <button type="submit">S'incrire</button>
        {errorMessage && <p>{errorMessage}</p>}
        <Link to="/login">Tu as déjà un compte ? Connecte-toi</Link>
      </form>
    </div>
  );
};
console.log("ok");
export default Signup;
