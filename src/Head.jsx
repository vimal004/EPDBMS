import React from "react";
import "./index.css"; // Import your CSS file
import Btn from "./Btn";
import { useState } from "react";

const Head = () => {
  const [mode, setmode] = useState(false);
  const changemode = () => {
    mode === false ? setmode(true) : setmode(false);
    console.log(mode);
  };
  return (
    <div className="relative">
      <div className="px-4 py-2 text-2xl font-extrabold text-center text-white bg-black bg-opacity-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1>Payroll Employee Management System</h1>
            <h2>Made with Oracle DB and React</h2>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 mt-4 mr-2 text-sm">
        <Btn
          propname={"Dark Mode"}
          propcss={
            mode === false
              ? "p-2 text-black bg-white border rounded-xl "
              : "border border-transparent p-2 text-white bg-black border rounded-xl "
          }
          propfunc={changemode}
        />
      </div>
    </div>
  );
};

export default Head;
