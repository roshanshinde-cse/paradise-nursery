import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "/plants";
  };

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>
            Bring nature into your home with beautiful and healthy houseplants.
            Explore our collection and find the perfect plant for your space.
          </p>

          <button
            className="get-started-btn"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
