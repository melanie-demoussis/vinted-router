import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("hello");
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      // console.log(response.data);
      if (response.data.token) {
        handleToken(response.data.token);
        navigate("/");
      }
      // console.log("ca ne fonctionne pas");
    } catch (error) {
      // console.log("ça ne va pas");
      console.log(error.response.data);
      console.log(error.data.status);
    }
  };
  return (
    <div className="login">
      <h2>Se connecter </h2>
      <form className="connect" onSubmit={handleLogin}>
        <input
          value={email}
          type="email"
          placeholder="Adresse email"
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
        <input type="submit" value="Se connecter" />
        <Link to="/signup"> Pas encore de compte ? Inscris-toi </Link>
      </form>
    </div>
  );
};
export default Login;
