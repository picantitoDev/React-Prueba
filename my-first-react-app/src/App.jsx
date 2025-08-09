import React, { useState, useCallback, memo } from "react";
import "./App.css";

const COLORES = ["red", "green", "blue", "pink", "yellow"];

/**
 * Botón individual para seleccionar color.
 */
const ColorButton = memo(({ color, index, isSelected, onSelect }) => (
  <button
    onClick={() => onSelect(index)}
    className={`color-button ${isSelected ? "selected" : ""}`}
    aria-label={`Seleccionar color ${color}`}
    aria-checked={isSelected}
    role="radio"
    style={{ backgroundColor: color }}
  >
    {color}
  </button>
));

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const backgroundColor = COLORES[currentIndex];

  return (
    <div
      className="App"
      style={{ "--bg-color": backgroundColor }}
    >
      <h1>Selector de Colores</h1>
      <p>
        Color actual: <strong>{backgroundColor}</strong>
      </p>

      <div className="button-group" role="radiogroup" aria-label="Selector de color">
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
