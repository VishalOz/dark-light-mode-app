import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.body;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="app">
      <nav className="navbar">
        <h1>☕Lava Jongue</h1>
        <button onClick={ () => setDarkMode (!darkMode)} className="dark-mode-toggle">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      <main className="content">
        <h2>Welcome to the Code Café</h2>
        <p>
        Switch to Light Mode for espresso-fueled mornings ☀️ or Dark Mode for cozy late-night coding ☕🌙.
        </p>

        <section className="cards">
        <div className="card">🍵 Frontend Latte</div>
        <div className="card">🍪 Backend Biscuit</div>
        <div className="card">🎧 Chill Dev Beats</div>

        </section>
      </main>
    </div>
  );
}

export default App;
