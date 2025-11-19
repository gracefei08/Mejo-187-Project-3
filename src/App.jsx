import React from "react";
import Book from "./components/Book.jsx";
import Particles from "./Particles.jsx";
import he from "./components/images/he.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div
        style={{
          width: "100%",
          height: "800px",
          position: "absolute",
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={[
            "#2c4750",
            "#708497",
            "#ADD8E6",
            "#efd5c0",
            "#5d6766",
          ]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={75}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Book />
    </div>
  );
}

export default App;
