"use client"
import React, { useState } from "react";

const DragDropWithNestedComponents = () => {
  const [components, setComponents] = useState([]);

  // Helper function to generate a unique ID
  const generateUniqueId = () => Math.floor(Math.random() * 1000000);

  // Handle drag start
  const handleDragStart = (event, component) => {
    event.dataTransfer.setData("componentData", JSON.stringify(component));
  };

  // Handle drop
  const handleDrop = (event) => {
    event.preventDefault();
    const componentData = JSON.parse(event.dataTransfer.getData("componentData"));
    const newComponent = { ...componentData, id: generateUniqueId() }; // Assign a new unique ID
    setComponents((prev) => [...prev, newComponent]);
  };

  // Allow drag over
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Render the dynamic component
  const renderComponent = (component) => {
    if (component.type === "nested") {
      return (
        <div
          id={component.id}
          style={{ border: "1px solid black", padding: "10px" }}
        >
          Parent Div (ID: {component.id})
          <div
            id={generateUniqueId()}
            style={{ marginTop: "5px", padding: "5px" }}
          >
            Child Div (New ID)
          </div>
        </div>
      );
    }
    if (component.type === "simple") {
      return (
        <div
          id={component.id}
          style={{ border: "1px solid blue", padding: "10px" }}
        >
          Simple Div (ID: {component.id})
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {/* Draggable Components */}
      <div>
        <h3>Drag Items</h3>
        <div
          draggable
          onDragStart={(event) => handleDragStart(event, { type: "nested", id: 123, childId: 1 })}
          style={{
            padding: "10px",
            margin: "5px",
            background: "#ccc",
            cursor: "grab",
          }}
        >
          <div
            id="123"
            style={{ border: "1px solid black", padding: "10px" }}
          >
            Parent Div (ID: 123)
            <div
              id="001"
              style={{ marginTop: "5px", padding: "5px" }}
            >
              Child Div (ID: 001)
            </div>
          </div>
        </div>
        <div
          draggable
          onDragStart={(event) => handleDragStart(event, { type: "simple", id: 456 })}
          style={{
            padding: "10px",
            margin: "5px",
            background: "#ccc",
            cursor: "grab",
          }}
        >
          <div
            id="456"
            style={{ border: "1px solid blue", padding: "10px" }}
          >
            Simple Div (ID: 456)
          </div>
        </div>
      </div>

      {/* Droppable Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "2px dashed #000",
          minHeight: "100px",
        }}
      >
        <h3>Drop Here</h3>
        {components.map((component) => (
          <div
            key={component.id}
            style={{ margin: "10px 0" }}
          >
            {renderComponent(component)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDropWithNestedComponents;
