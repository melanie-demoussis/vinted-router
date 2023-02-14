import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MbRYXI5IKJPnWhLFG2IWzvzC7HN3KdvfXMGtS0Zmcm42HhXWAo5qhLtHcMgLv6yPL3HXv7Z6q0sY2RO6vLW7tu200p7YfDbL0"
);

const Payment = () => {
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
      <div></div>
    </div>
  );
};
export default Payment;
