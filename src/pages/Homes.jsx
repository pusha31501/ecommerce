import React from "react";
import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

const Homes = () => {
  const products = getProducts();
  return (
    <div className="py-2 px-4 md:px-10 flex flex-col space-y-4 bg-white/50 backdrop-blur-md max-w-5xl mx-auto my-2 shadow-sm shadow-gray-900">
      <div className="text-center pt-8">
        <h1 className="font-bold text-4xl text-orange-600">
          Welcome to ShopHub
        </h1>
        <p className="text-gray-800">
          Discover amazing products at great prices
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="font-semibold text-2xl">Our Products</h2>
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homes;
