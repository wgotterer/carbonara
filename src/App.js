import React from "react";
import Advert from "./components/Advert";
import "./App.css";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <div className="app-container">
       <div className="banner-container">
        Carbonara
      <Advert />
      <ItemsList />
      </div>
    </div>
  );
}

export default App;
