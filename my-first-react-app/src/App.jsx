import React, { useState } from "react";
import "./App.css";

export default function App() {
  const COLORES = ["red", "green", "blue", "pink", "yellow"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundColor = COLORES[currentIndex];

  return (
    <div
      className="App"
      style={{
        backgroundColor,
        transition: "background-color 0.5s ease",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Selector de Colores</h1>
      <h2>Color actual : {backgroundColor}</h2>
      <div className="button-group">
        {COLORES.map((color, index) => (
          <button
            key={color}
            onClick={() => setCurrentIndex(index)}
            className={`color-button ${
              currentIndex === index ? "selected" : ""
            }`}
            aria-label={`Cambiar fondo a color ${color}`}
            tabIndex={0}
            style={{
              backgroundColor: color,
              border:
                index === currentIndex
                  ? "1px solid black"
                  : "1px solid transparent",
              color: "white",
            }}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
