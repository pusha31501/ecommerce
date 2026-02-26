import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        className="hover:scale-105 transition-all duration-300"
      />
      <div className="space-y-2">
        <h3 className="font-bold text-lg mt-4">{product.name}</h3>
        <p className="text-xl text-blue-900 text-bold">${product.price}</p>
        <div className="flex auto">
          <Link className="px-4 py-2 text-white bg-gray-800 mr-4 rounded-sm hover:-translate-y-1 transition-all duration-300">
            View Details
          </Link>
          <button className="px-4 py-2 text-white bg-blue-800  rounded-sm cursor-pointer hover:-translate-y-1 transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
