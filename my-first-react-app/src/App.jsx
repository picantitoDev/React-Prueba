import React, { useState, useCallback } from "react";
import "./App.css";

const COLORES = ["red", "green", "blue", "pink", "yellow"];

const ColorButton = ({ color, index, isSelected, onSelect }) => (
  <button
    onClick={() => onSelect(index)}
    className={`color-button ${isSelected ? "selected" : ""}`}
    aria-label={`Cambiar fondo a color ${color}`}
    tabIndex={0}
    style={{
      backgroundColor: color,
      border: isSelected ? "3px solid #333" : "2px solid transparent",
      color: "#fff",
      padding: "0.5rem 1rem",
      margin: "0.25rem",
      borderRadius: "8px",
      cursor: "pointer",
      boxShadow: isSelected ? "0 0 10px rgba(0,0,0,0.3)" : "none",
      transition: "all 0.3s ease",
    }}
  >
    {color.charAt(0).toUpperCase() + color.slice(1)}
  </button>
);

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

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
<<<<<<< HEAD
      <h1>Selector de Colores</h1>
      <h2>Color actual : {backgroundColor}</h2>
      <div className="button-group">
=======
      <h1 style={{ color: "#fff", textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}>
        Selector de Colores
      </h1>
      <div className="button-group" style={{ display: "flex", flexWrap: "wrap" }}>
>>>>>>> 6b91a36fe73385cd2feace45f1f39dcccad692f6
        {COLORES.map((color, index) => (
          <ColorButton
            key={color}
<<<<<<< HEAD
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
=======
            color={color}
            index={index}
            isSelected={currentIndex === index}
            onSelect={handleSelect}
          />
>>>>>>> 6b91a36fe73385cd2feace45f1f39dcccad692f6
        ))}
      </div>
    </div>
  );
}
