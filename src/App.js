import React, { useRef } from 'react'
import Advert from "./components/Advert";
import "./App.css";
import ItemsList from "./components/ItemsList";

//  offsetTop returns the distance of the outer border of the current element 
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   



function App() {

  // store a value that does not cause a re-render when updated
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
