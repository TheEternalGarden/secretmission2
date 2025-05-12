"use client";
import React from "react";

const CrossmintCheckout = () => {
  return (
    <iframe
      src="https://www.crossmint.io/checkout/b43aabcc-8bd7-44d5-9fb7-9baea4db8e62"
      width="100%"
      height="650px"
      style={{ border: 'none', borderRadius: '12px' }}
      loading="lazy"
      allow="payment *"
    />
  );
};

export default function Product() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-center text-black select-none mb-8">
        Product Page
      </h1>
      <div className="w-full max-w-4xl">
        <CrossmintCheckout />
      </div>
    </div>
  );
}
