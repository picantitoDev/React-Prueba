import React, { useState, useCallback } from "react";
import "./App.css";

const COLORES = ["red", "green", "blue", "pink", "yellow"];

/**
 * Botón individual para seleccionar color.
 * @param {{ color: string, index: number, isSelected: boolean, onSelect: (index: number) => void }}
 */
const ColorButton = ({ color, index, isSelected, onSelect }) => (
  <button
    onClick={() => onSelect(index)}
    className={`color-button ${isSelected ? "selected" : ""}`}
    aria-label={`Cambiar fondo a color ${color}`}
    style={{
      backgroundColor: color,
      border: isSelected ? "3px solid #fff" : "2px solid transparent",
      color: "#fff",
      padding: "0.5rem 1.25rem",
      margin: "0.25rem",
      borderRadius: "8px",
      cursor: "pointer",
      boxShadow: isSelected ? "0 0 12px rgba(0,0,0,0.4)" : "none",
      transition: "all 0.3s ease",
      fontWeight: "bold",
      textTransform: "capitalize",
    }}
  >
    {color}
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
        padding: "2rem",
      }}
    >
      <h1 style={{ color: "#fff", textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
        Selector de Colores
      </h1>
      <p style={{ color: "#fff", marginBottom: "1.5rem", fontSize: "1.2rem" }}>
        Color actual: <strong>{backgroundColor}</strong>
      </p>

      <div
        className="button-group"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        {COLORES.map((color, index) => (
          <ColorButton
            key={color}
            color={color}
            index={index}
            isSelected={currentIndex === index}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}