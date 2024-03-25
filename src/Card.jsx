import React from "react";

const Card = () => {
  return (
    <div className="border border-black rounded-lg mt-6 ml-4 bg-gray-500 w-64 h-64">
      <h1 className="text-white text-lg font-bold p-2 m-0">Name</h1>
      <p className="text-white p-2 m-0">Address</p>
      <p className="text-white p-2 m-0">Number</p>
    </div>
  );
};

export default Card;
