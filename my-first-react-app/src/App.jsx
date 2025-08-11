import React, { useState, useCallback, useEffect } from "react";
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % COLORES.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + COLORES.length) % COLORES.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Copy color to clipboard
  const copyColor = () => {
    navigator.clipboard.writeText(backgroundColor);
    alert(`Color ${backgroundColor} copiado al portapapeles`);
  };

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
      <h1 style={{ color: "#fff", textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}>
        Selector de Colores
      </h1>

      <h2
        style={{ color: "#fff", cursor: "pointer" }}
        onClick={copyColor}
        title="Click para copiar el color"
      >
        Color actual: {backgroundColor}
      </h2>

      <div className="button-group" style={{ display: "flex", flexWrap: "wrap" }}>
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

      <button
        onClick={() => setCurrentIndex(Math.floor(Math.random() * COLORES.length))}
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: "0.5rem 1rem",
          marginTop: "1rem",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Color Aleatorio 🎲
      </button>
    </div>
  );
}
