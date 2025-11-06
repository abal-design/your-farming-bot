import React from "react";

export default function Home() {
    const handleClick = () => {
        alert("Hello from Home");
    };

    return (
        <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
            <h1>Home</h1>
            <p>This is a simple basic Home component.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}