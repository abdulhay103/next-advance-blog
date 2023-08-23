"use client";
import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-5 py-2 bg-lime-600 rounded text-white font-bold hover:bg-inherit border-2 border-lime-600 hover:border-lime-600 hover:text-lime-600 transition ease-in-out">
      {children}
    </button>
  );
};

export default Button;
