import React, { useState } from "react";
import "./App.css";

export default function App() {
  const COLORES = ["red", "green", "blue", "pink", "yellow"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundColor = COLORES[currentIndex];

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Colores!</h1>
      {COLORES.map((color, index) => (
        <button
          key={color}
          onClick={() => setCurrentIndex(index)}
          className={currentIndex === index ? "selected" : ""}
          style={{
            outline: `5px solid ${
              index === currentIndex
                ? "black"
                : "transparent"
            }`,
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
