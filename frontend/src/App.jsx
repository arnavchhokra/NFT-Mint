import { useState } from "react";
import bg from "./assets/giphy.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-Main">
        <span id="Main-Title">
          BrewedNFT
          <br />
        </span>
        <span id="Main-Sub">Buy Me a coffee</span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
            alignItems: "center",
          }}
          id="App-Adder"
        >
          <button style={{ fontSize: "30px", width: "40px" }}>-</button>
          <span style={{ fontSize: "30px", color: "black" }}>2</span>
          <button style={{ fontSize: "30px", width: "40px" }}>+</button>
        </div>
        <div>
          <button id="Mint-Button">Mint</button>
        </div>
      </div>
    </div>
  );
}

export default App;
