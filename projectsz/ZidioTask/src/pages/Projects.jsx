import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { Star, ShoppingCart } from "lucide-react";
import { Mystore } from "../context/AuthContext";

const Projects = () => {
  const {products, setProducts,loading} = useContext(Mystore)

  
  const [error, setError] = useState("");

 

  if (loading) {
    return (
      <div className="flex min-h-64 items-center justify-center">
        {" "}
        <p className="text-gray-500">Loading products...</p>{" "}
      </div>
    );
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error} </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Products
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Explore our latest collection
          </p>
        </div>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
          {products.length} Products
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="relative flex h-60 items-center justify-center bg-white p-6">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold capitalize text-green-700">
                {product.category}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-5">
              <h2 className="line-clamp-2 min-h-12 text-base font-semibold text-gray-900">
                {product.title}
              </h2>

              <p className="mt-2 line-clamp-3 min-h-[60px] text-sm leading-5 text-gray-500">
                {product.description}
              </p>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">
                <Star size={17} className="fill-amber-400 text-amber-400" />

                <span className="text-sm font-semibold text-gray-800">
                  {product.rating?.rate ?? "N/A"}
                </span>

                <span className="text-sm text-gray-400">
                  ({product.rating?.count ?? 0} reviews)
                </span>
              </div>

              {/* Price and Button */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price?.toFixed(2)}
                </span>

                <button
                  type="button"
                  onClick={() => console.log("Selected product:", product)}
                  className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-600"
                >
                  <ShoppingCart size={16} />
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
