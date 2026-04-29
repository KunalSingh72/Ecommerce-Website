import axios from "axios";
import { useState, useEffect } from "react";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import "./checkout-header.css";
import "./CheckoutPage.css";

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
<<<<<<< HEAD
      try {
        const deliveryRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/delivery-options?expand=estimatedDeliveryTime`,
        );
=======
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
>>>>>>> parent of c4d61a1 (create .env and updated backend url)

        setDeliveryOptions(deliveryRes.data || []);

<<<<<<< HEAD
        const paymentRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/payment-summary`,
        );

        setPaymentSummary(paymentRes.data || null);
      } catch (error) {
        console.error("Checkout fetch error:", error);
        setDeliveryOptions([]);
        setPaymentSummary(null);
      }
=======
      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
>>>>>>> parent of c4d61a1 (create .env and updated backend url)
    };

    fetchCheckoutData();
  }, [cart]);

  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
<<<<<<< HEAD
          <OrderSummary
            cart={cart || []}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />
=======
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
>>>>>>> parent of c4d61a1 (create .env and updated backend url)

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}
