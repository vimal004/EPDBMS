import React, { useState, useEffect } from "react";
import Btn from "./Btn";
const Body = () => {
  const [mode, setMode] = useState(false);
  const modeChange = () => {
    // Toggle mode state
    setMode((prevMode) => !prevMode);
  };

  return (
    <div className="box-border p-4 mt-4 text-center">
      <h1 className="text-xl font-extrabold text-white">Admin Login</h1>
      <div className="text-sm text-black">
        <input
          className="px-2 py-1 mt-2 border border-gray-100 rounded-md"
          placeholder="Username"
        />
        <div className="mt-1">
          <input
            className="px-2 py-1 mt-2 border border-gray-100 rounded-md"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="mt-2">
          <Btn
            propname="Login"
            propfunc={modeChange}
            propcss={"p-2 text-black bg-white border rounded-xl"}
          />
        </div>
        <h1 className="mt-2 text-white">
          {mode === true ? "Logged In" : "Logged Out"}
        </h1>
      </div>
    </div>
  );
};

export default Body;
