import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuCards from "./components/MenuCards";
import Food from "./components/Food";
import Category from "./components/Category";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <MenuCards/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
