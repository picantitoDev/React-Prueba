import React, { useState, useCallback } from "react";
import "./App.css";

const COLORES = [
  { name: "red" },
  { name: "green" },
  { name: "blue" },
  { name: "pink" },
  { name: "yellow" },
];

/**
 * Botón individual para seleccionar color.
 * @param {{ color: string, index: number, isSelected: boolean, onSelect: (index: number) => void }}
 */
const ColorButton = ({ color, index, isSelected, onSelect }) => {
  const baseStyle = {
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
  };

  return (
    <button
      onClick={() => onSelect(index)}
      className="color-button"
      aria-label={`Seleccionar color ${color}`}
      aria-pressed={isSelected}
      role="radio"
      style={baseStyle}
    >
      {color}
    </button>
  );
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const backgroundColor = COLORES[currentIndex].name;

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
        role="radiogroup"
        aria-label="Selector de color"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        {COLORES.map((colorObj, index) => (
          <ColorButton
            key={colorObj.name}
            color={colorObj.name}
            index={index}
            isSelected={currentIndex === index}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}
