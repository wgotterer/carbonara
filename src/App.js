import React, { useRef } from 'react'
import Advert from "./components/Advert";
import "./App.css";
import ItemsList from "./components/ItemsList";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
// General scroll to element function


function App() {

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <div className="app-container">
       <div className="banner-container">
        Carbonara
      <Advert executeScroll={executeScroll} />
      <ItemsList myRef={myRef}/>
      </div>
    </div>
  );
}

export default App;
