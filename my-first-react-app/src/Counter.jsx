import { useState, useEffect, useRef } from "react";

export default function Counter() {
  const [message, setMessage] = useState(() => {
    // Load saved message if available
    return localStorage.getItem("message") || "";
  });
  const [saved, setSaved] = useState(false);
  const inputRef = useRef(null);

  // Auto-focus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Sync message to localStorage
  useEffect(() => {
    localStorage.setItem("message", message);
  }, [message]);

  const handleSave = () => {
    if (!message.trim()) {
      alert("⚠️ No puedes guardar un mensaje vacío");
      return;
    }
    alert(`✅ El mensaje guardado es: ${message}`);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
  };

  return (
    <div className="flex flex-col items-center gap-3 p-4 max-w-sm mx-auto bg-gray-50 rounded-2xl shadow">
      <input
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Escribe tu mensaje..."
        className="w-full border p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />

      <div className="text-sm text-gray-500 self-end">
        {message.length}/50{" "}
        {message.length > 50 && (
          <span className="text-red-500 font-bold">⚠️ Muy largo</span>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Guardar
        </button>
        <button
          onClick={() => setMessage("")}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition"
        >
          Limpiar
        </button>
      </div>

      {saved && (
        <p className="text-green-600 font-semibold">✔ Mensaje guardado</p>
      )}
    </div>
  );
}
