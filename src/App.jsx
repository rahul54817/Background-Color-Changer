import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className=" w-full h-screen duration-100"
        style={{ backgroundColor: color }}
      >
       
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"></div>
      <div className="flex justify-center flex-wrap bg-white px-3 py-2 rounded-3xl gap-3 shadow-lg">
        <button
          onClick={() => {setColor("black")}}
          className="outline-none px-4 p-1 text-white rounded-full shadow-lg "
          style={{ backgroundColor: "black" }}
        >
          Black
        </button>

        <button
          onClick={() => {setColor("Green")}}
          className="outline-none px-4 p-1 text-white rounded-full shadow-lg "
          style={{ backgroundColor: "Green" }}
        >
          Green
        </button>
        <button
          onClick={() => {setColor("Yellow")}}
          className="outline-none px-4 p-1 text-white rounded-full shadow-lg "
          style={{ backgroundColor: "Yellow" }}
        >
          Yello
        </button>
        <button
          onClick={() => {setColor("blue")}}

          className="outline-none px-4 p-1 text-white rounded-full shadow-lg "
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => {setColor("red")}}

          className="outline-none px-4 p-1 text-white rounded-full shadow-lg "
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>

        <button
          onClick={() => {setColor("pink")}}

          className="outline-none px-4 p-1 text-white rounded-full shadow-lg "
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>

        <button
          onClick={() => {setColor("purple")}}

          className="outline-none px-4 p-1 text-white rounded-full shadow-lg "
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        


        <button
          
        onClick={() => {setColor("gray")}}
          className="outline-none px-4 p-1 text-white rounded-full shadow-lg "
          style={{ backgroundColor: "gray" }}
        >
          Gray
        </button>

        <button
        onClick={() => {setColor("olive")}}
          className="outline-none px-4 p-1 text-white rounded-full shadow-lg "
          style={{ backgroundColor: "olive" }}
        >
          Olive
        </button>
      </div>
    </>
  );
}

export default App;
