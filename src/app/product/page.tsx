"use client";
import React from "react";

export default function Product() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-center text-black select-none mb-8">
        Product Page
      </h1>
      <div className="w-full max-w-2xl bg-gray-100 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">Product Name</h2>
        <p className="text-gray-700 mb-6">
          This is a description of the product. You can add more details here, such as features, specifications, and pricing.
        </p>
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
