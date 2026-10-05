import React from "react";

const ProductCard = ({ product }) => {
  // Discounted price calculation
  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Product Image & Badges */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />

        {/* Discount Badge */}
        {product.discountPercentage > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-rose-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
            {product.discountPercentage}% OFF
          </span>
        )}

        {/* Availability Badge */}
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm ${
            product.stock > 0 ? "bg-emerald-600" : "bg-slate-500"
          }`}
        >
          {product.availabilityStatus || "In Stock"}
        </span>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category & Brand */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="font-semibold uppercase tracking-wider text-indigo-600">
            {product.brand || product.category}
          </span>
          <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[10px]">
            {product.sku}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-1.5 text-base font-bold text-slate-900 line-clamp-1">
          {product.title}
        </h3>

        {/* Description */}
        <p className="mt-1 text-xs text-slate-500 line-clamp-2">
          {product.description}
        </p>

        {/* Rating & Stock */}
        <div className="mt-3 flex items-center justify-between text-xs">
          {/* Rating */}
          <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-amber-700">
            <svg
              className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold">{product.rating}</span>
            <span className="text-[10px] text-amber-600">
              ({product.reviews?.length || 0})
            </span>
          </div>

          {/* Stock count */}
          <span className="text-[11px] font-medium text-slate-500">
            Stock: <span className="font-bold text-slate-800">{product.stock}</span>
          </span>
        </div>

        {/* Price Section */}
        <div className="mt-4 border-t border-slate-100 pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-slate-900">
              ${product.price}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-xs text-slate-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Meta Info (Shipping, Warranty) */}
        <div className="mt-3 space-y-1 rounded-xl bg-slate-50 p-2.5 text-[11px] text-slate-600">
          <div className="flex items-center gap-1.5">
            <span>🚚</span>
            <span className="truncate">{product.shippingInformation}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>🛡️</span>
            <span className="truncate">{product.warrantyInformation}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1">
          {product.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-md bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;