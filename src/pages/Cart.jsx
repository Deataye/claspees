import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="min-h-[500px] flex flex-col justify-center items-center bg-white">
      <h1 className="text-[50px] font-montserrat font-extrabold mb-6">Your cart is empty</h1>

      <Link
        to="/"
        className="bg-black text-white font-montserrat px-6 py-2 rounded hover:opacity-90 transition"
      >
        Continue shopping
      </Link>

      <div className="mt-8 font-montserrat text-center">
        <p className="text-base  font-semibold mb-2">Have an account?</p>
        <Link
          to="/login"
          className="text-purple-600 hover:underline text-base font-medium"
        >
          Log in
        </Link>
        <span className="text-base font-medium"> to check out faster.</span>
      </div>
    </section>
  );
};

export default Cart;
