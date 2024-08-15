import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <h1
        className={`font-mono flex justify-center pt-40 font-bold text-3xl ${
          color === "white" ? "text-black" : "text-white"
        }`}
      >
        Background Color Changer in React :)
      </h1>
      <div className="bg-slate-300 fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  flex flex-wrap center font-mono space-x-5  justify-center px-3 py-3 rounded-2xl">
        <button
          onClick={() => setColor("red")}
          className="text-red-600  border-solid border-red-600 border-2 rounded-lg px-2 py-2"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="text-blue-600  border-solid border-blue-600 border-2 rounded-lg px-2 py-2"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("pink")}
          className="text-pink-400  border-solid border-pink-400 border-2 rounded-lg px-2 py-2"
        >
          Pink
        </button>
        <button
          onClick={() => setColor("green")}
          className="text-green-600  border-solid border-green-600 border-2 rounded-lg px-2 py-2"
        >
          Green
        </button>
        <button
          onClick={() => setColor("black")}
          className="text-black  border-solid border-black border-2 rounded-lg px-2 py-2"
        >
          Black
        </button>
        <button
          onClick={() => setColor("white")}
          className="text-white  border-solid border-white border-2 rounded-lg px-2 py-2"
        >
          White
        </button>
      </div>
    </div>
  );
}
export default App;
