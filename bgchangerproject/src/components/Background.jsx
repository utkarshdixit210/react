import React, { useState } from 'react';
import './background.css';

function Background() {
  const [color, setColor] = useState("#ff0000");

  // Functions to change the background color
//   const red = () => {
//     setColor("#ff0000");
//   };
//   const blue = () => {
//     setColor("#0000ff");
//   };
//   const green = () => {
//     setColor("#008000");
//   };
//   const pink = () => {
//     setColor("#ffc0cb");
//   };

  return (
    <div 
      className="w-full h-screen" 
      style={{ backgroundColor: color }}  // Dynamically changing the background color
    >
      <div className="fixed flex justify-center gap-3 bottom-12 inset-x-0 px-2">
        <button
          onClick={()=>setColor("red")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Red
        </button>
        <button
          onClick={()=>setColor("blue")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Blue
        </button>
        <button
          onClick={()=>setColor("green")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Green
        </button>
        <button
          onClick={()=>setColor("pink")}
          className="px-4 py-2 bg-pink-500 text-white rounded"
        >
          Pink
        </button>
        
      </div>
    </div>
  );
}

export default Background;
