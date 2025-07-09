import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">👋 Welcome to React!</h1>
      <p className="text-lg mb-2">You clicked <span className="font-semibold">{count}</span> times.</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
