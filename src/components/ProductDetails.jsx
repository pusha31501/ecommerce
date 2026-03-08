import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item?.id === product?.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (!foundProduct) {
      navigate("/");
      return;
    }
    setProduct(foundProduct);
  }, [id]);

  return (
    <div className="px-6 md:px-40 py-4 min-w-screen">
      <div className="mx-auto bg-white/30 p-4 rounded-sm shadow-sm shadow-gray-800 backdrop-blur-2xl flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[50%] overflow-hidden">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-full rounded-sm cursor-pointer hover:scale-130 transition-all duration-300"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">{product?.name}</h1>
          <p className="text-blue-800 text-xl font-bold">${product?.price}</p>
          <p>{product?.description}</p>
          <button
            onClick={() => addToCart(product.id)}
            className="px-4 py-2 text-white bg-blue-800 rounded-sm hover:bg-blue-700 cursor-pointer trnasition-all duration-300"
          >
            Add Cart {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
