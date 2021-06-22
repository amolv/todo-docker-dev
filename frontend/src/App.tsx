import React from "react";

import "./App.scss";
import HeaderComp from "./components/header/header";

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!
        </a>
      </header>
    </div>
  );
}

export default App;
