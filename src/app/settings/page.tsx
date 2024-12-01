'use client'
import React, { useState } from "react";

const App = () => {
  const [activeContainer, setActiveContainer] = useState(null);
  const [styles, setStyles] = useState({
    container1: { opacity: 1, borderRadius: 0 },
    container2: { opacity: 1, borderRadius: 0 },
    container3: { opacity: 1, borderRadius: 0 },
  });

  const handleContainerClick = (index) => {
    setActiveContainer(index);
  };

  const handleSliderChange = (index, property, value) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [`container${index}`]: {
        ...prevStyles[`container${index}`],
        [property]: value,
      },
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            onClick={() => handleContainerClick(index)}
            onMouseEnter={() => setActiveContainer(index)}
            onMouseLeave={() => setActiveContainer(null)}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "lightblue",
              opacity: styles[`container${index}`].opacity,
              borderRadius: `${styles[`container${index}`].borderRadius}px`,
              position: "relative",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            {/* Outline effect */}
            {activeContainer === index && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  border: "2px solid blue", // Rectangular outline
                  opacity: 0.7, // Outline opacity
                  pointerEvents: "none", // Make sure the outline doesn't block interactions
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          style={{ marginTop: "20px" }}
        >
          <h4>Container {index} Controls</h4>
          <label>
            Opacity:
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={styles[`container${index}`].opacity}
              onChange={(e) => handleSliderChange(index, "opacity", parseFloat(e.target.value))}
            />
          </label>
          <br />
          <label>
            Border Radius:
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={styles[`container${index}`].borderRadius}
              onChange={(e) => handleSliderChange(index, "borderRadius", parseInt(e.target.value, 10))}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default App;
