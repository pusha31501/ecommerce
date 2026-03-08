import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="hover:scale-105 transition-all duration-300"
        />
      </Link>
      <div className="space-y-2">
        <h3 className="font-bold text-lg mt-4">{product.name}</h3>
        <p className="text-xl text-blue-900 text-bold">${product.price}</p>
        <div className="flex auto">
          <Link
            className="px-4 py-2 md:px-2  text-white text-sm bg-gray-800 mr-4 rounded-sm hover:-translate-y-1 transition-all duration-300"
            to={`/products/${product.id}`}
          >
            View Details
          </Link>
          <button
            onClick={() => addToCart(product.id)}
            className="px-4 py-2 text-white text-sm bg-blue-800  rounded-sm cursor-pointer hover:-translate-y-1 transition-all duration-300"
          >
            Add to Cart {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
