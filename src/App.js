import Header from "./components/Header/header";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Card from "./components/Card/card";
import { useState, useEffect } from "react";

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
      <button onClick={loadDataFromMorty}>Load Rick and Morty</button>
      <ul>
        {rickAndMorty.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <Card />

      <Navigation />
    </div>
  );
}

export default App;
