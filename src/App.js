import Header from "./components/Header/header";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "./cards";
import Details from "./pages/detailed";
import Home from "./pages/home";
import Random from "./pages/random";
import Bookmark from "./pages/bookmark";

function App() {
  const [rickAndMorty, setRickAndMorty] = useState([]);
  const [fetchUrl, setFetchUrl] = useState([]);

  const [newCards, setNewCards] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("bookmarked"));

    return localData ?? rickAndMorty;
  });

  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify(newCards));
  }, [newCards]);

  const toggleBookmark = (ID) => {
    setNewCards(
      newCards.map((card) => {
        if (ID === card.id) {
          return {
            ...card,
            isBookmarked: !card.isBookmarked,
          };
        } else {
          return card;
        }
      })
    );
  };
  console.log(newCards);

  useEffect(() => {
    setFetchUrl("https://rickandmortyapi.com/api/character");
    loadDataFromMorty();
  }, []);

  async function loadDataFromMorty() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setRickAndMorty(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/detailed"
          element={
            <Details
              rickAndMorty={rickAndMorty}
              newCards={newCards}
              onToggleBookmark={toggleBookmark}
            />
          }
        />
        <Route path="/bookmark" element={<Bookmark newCards={newCards} />} />
        <Route path="/" element={<Home rickAndMorty={rickAndMorty} />} />
        <Route path="/random" element={<Random />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
