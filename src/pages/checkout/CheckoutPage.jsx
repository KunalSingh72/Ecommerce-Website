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
      try {
        const deliveryRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/delivery-options?expand=estimatedDeliveryTime`,
        );

        setDeliveryOptions(deliveryRes.data || []);

        const paymentRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/payment-summary`,
        );

        setPaymentSummary(paymentRes.data || null);
      } catch (error) {
        console.error("Checkout fetch error:", error);
        setDeliveryOptions([]);
        setPaymentSummary(null);
      }
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
          <OrderSummary
            cart={cart || []}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}
