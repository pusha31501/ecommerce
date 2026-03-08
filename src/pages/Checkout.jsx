import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const {
    getCartItemsWithProduct,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart,
  } = useCart();
  const cartItem = getCartItemsWithProduct();
  const total = getCartTotal();
  console.log(cartItem);

  function placeOrder() {
    if (!total) return;
    alert("Place Order Success");
    clearCart();
  }

  return (
    <div className="py-2 px-4 mt-20 md:px-10 flex flex-col space-y-4 bg-white/50 backdrop-blur-md lg:max-w-4xl mx-auto my-2 shadow-sm shadow-gray-900">
      <h1 className="font-bold text-2xl">Check Out</h1>
      <div className="flex gap-2">
        <div className="flex-1 flex-col gap-4 bg-blue-200/40 p-4 rounded-md">
          {cartItem.length <= 0 ? (
            <p className="text-red-600">Empty Cart, Please Order an item </p>
          ) : (
            <p className="font-semibold">Order Summary</p>
          )}
          <div>
            {cartItem.map((cart) => (
              <div
                key={cart.id}
                className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4"
              >
                <img src={cart.product.image} alt={cart.product.name} />
                <div className="col-span-2">
                  <p className="font-bold text-xl">{cart.product.name}</p>
                  <p className="text-blue-700 text-xl">${cart.product.price}</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-left font-semibold space-x-2 text-xl">
                    <p
                      className="cursor-pointer px-2 rounded-sm bg-gray-300 hover:bg-gray-200"
                      onClick={() => updateQuantity(cart.id, cart.quantity - 1)}
                    >
                      -
                    </p>
                    <p>{cart.quantity}</p>
                    <p
                      className="cursor-pointer px-2 rounded-sm bg-gray-300 hover:bg-gray-200"
                      onClick={() => updateQuantity(cart.id, cart.quantity + 1)}
                    >
                      +
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-xl">
                      ${(cart.product.price * cart.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(cart.id)}
                    className="bg-gray-600 mt-4 text-sm text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-gray-800 transition-all duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {total && (
          <div className="flex flex-col w-sm p-4 bg-white/50 rounded-sm shadow-sm shadow-gray-600">
            <p className="font-bold text-xl mb-2">Total</p>
            <div className="grid grid-cols-2 justify-between">
              <p className="text-gray-500 text-sm">SubTotal</p>
              <p className="font-bold">${total.toFixed(2)}</p>
            </div>
            <div className="grid grid-cols-2 justify-between mb-2">
              <p className="text-gray-900 text-md font-bold">Total</p>
              <p className="font-bold text-blue-800 text-xl">
                ${total.toFixed(2)}
              </p>
            </div>
            <hr />
            <button
              onClick={placeOrder}
              className="bg-blue-700 text-white rounded-sm mt-2 py-2 hover:bg-blue-800 cursor-pointer"
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
