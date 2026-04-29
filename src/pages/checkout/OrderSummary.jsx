import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        (cart || []).map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) =>
              String(deliveryOption.id) === String(cartItem.deliveryOptionId),
          );

          const deleteCartItem = async () => {
<<<<<<< HEAD
            try {
              await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/cart-items/${cartItem.productId}`,
              );
              loadCart();
            } catch (error) {
              console.error("Delete failed:", error);
            }
=======
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            loadCart();
>>>>>>> parent of c4d61a1 (create .env and updated backend url)
          };

          const deliveryDate = selectedDeliveryOption?.estimatedDeliveryTimeMs
            ? dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                "dddd, MMMM D",
              )
            : "Not available";

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">Delivery date: {deliveryDate}</div>

              <div className="cart-item-details-grid">
                <img
                  className="product-image"
                  src={cartItem.product?.image}
                  alt={cartItem.product?.name}
                />

                <div className="cart-item-details">
                  <div className="product-name">
                    {cartItem.product?.name || "Unknown product"}
                  </div>

                  <div className="product-price">
                    ${formatMoney(cartItem.product?.priceCents || 0)}
                  </div>

                  <div className="product-quantity">
                    <span>
                      Quantity:{" "}
                      <span className="quantity-label">
                        {cartItem.quantity || 0}
                      </span>
                    </span>

                    <span className="update-quantity-link link-primary">
                      Update
                    </span>

                    <span
                      className="delete-quantity-link link-primary"
                      onClick={deleteCartItem}
                    >
                      Delete
                    </span>
                  </div>
                </div>

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
