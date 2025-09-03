import React from "react";
import ReactDOM from "react-dom/client";
import Post from "./Post";
import Counter from "./Counter"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Counter></Counter>
    <Post></Post>
  </React.StrictMode>
);
