import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      console.log(response.data);
      if (response.data.token) {
        handleToken(response.data.token);
        navigate("/signup");
      }
    } catch (error) {
      console.log(error.response.data);
    }
    return (
      <div>
        <h2>Se connecter </h2>
        <form onSubmit={handleLogin}>
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
        </form>
        ;
      </div>
    );
  };
  console.log("Parfait");
};
export default Login;
