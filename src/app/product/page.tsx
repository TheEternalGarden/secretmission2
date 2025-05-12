"use client";
import React from "react";

export default function Product() {
  return (
    <main className="min-h-screen bg-white">
      <HamburgerMenu />
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-2xl font-bold text-black mb-8">YEEZY Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product cards will go here */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">YEEZY 350</h2>
            <p className="text-gray-600">Coming Soon</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">YEEZY 500</h2>
            <p className="text-gray-600">Coming Soon</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">YEEZY 700</h2>
            <p className="text-gray-600">Coming Soon</p>
          </div>
        </div>
      </div>
    </main>
  );
}
