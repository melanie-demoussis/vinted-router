import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //passer isLoading à "true"
      setIsLoading(true);
      //récupérer le contenu de CardElement
      //récupère les données bancaires que l'utilisateur entre
      const CardElement = elements.getElement(CardElement);
      // demande de création d'un token via l'API stripe
      //envoi des données bancaires dans la requete
      const stripeResponse = await stripe.createToken(CardElement, {
        name: "L'id de l'acheteur",
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      // une fois le token récupèré
      //on envoit une requete au serveur
      // en envoyant  le token reçu depuis l'API stripe
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          stripeToken,
        }
      );
      console.log(response.data);
      //Si la réponse du serveur est favorable, la transaction a eu lieu
      if (response.data.status === "succeeded") {
        setIsLoading(false);
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form className="verified-card" onSubmit={handleSubmit}>
        <h1>Formulaire de paiement</h1>
        <div className="card-number">
          <CardElement />
        </div>{" "}
        {completed ? (
          <p>Paiement effectué</p>
        ) : (
          <button disabled={isLoading}>Payer</button>
        )}
      </form>
    </div>

    // <div>
    //   {!completed ? (
    //     <form onSubmit={handleSubmit}>
    //       <CardElement />
    //       <button type="submit">Valider</button>
    //     </form>
    //   ) : (
    //     <span>Paiement effectué !</span>
    //   )}
    // </div>
  );
};
export default CheckoutForm;
