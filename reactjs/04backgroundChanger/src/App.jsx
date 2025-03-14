import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-2 py-1 rounded-lg">
          <button
          onClick={()=>setColor("red")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={()=>setColor("green")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={()=>setColor("blue")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={()=>setColor("black")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
          onClick={()=>setColor("white")}
            className="outline-none px-4 py-1 text-black rounded-full shadow-lg "
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
          <button
          onClick={()=>setColor("pink")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
          onClick={()=>setColor("lavender")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{ backgroundColor: "lavender" }}
          >
            Lavender 
          </button>

          <button
          onClick={()=>setColor("yellow")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
          onClick={()=>setColor("purple")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg "
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
