import Header from "./components/Header/header";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

import { useState, useEffect } from "react";
import Cards from "./cards";

function App() {
  const [rickAndMorty, setRickAndMorty] = useState([]);
  const [fetchUrl, setFetchUrl] = useState([]);

  useEffect(() => {
    setFetchUrl("https://rickandmortyapi.com/api/character");
    loadDataFromMorty();
  }, []);

  async function loadDataFromMorty() {
    try {
      const response = await fetch(fetchUrl);
      const data = await response.json();
      setRickAndMorty(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(rickAndMorty);

  return (
    <div className="App">
      <Header />
      <Cards rickAndMorty={rickAndMorty} />
      <Navigation />
    </div>
  );
}

export default App;
