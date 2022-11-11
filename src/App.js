import Header from "./components/Header/header";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Card from "./components/Card/card";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Navigation />
    </div>
  );
}

export default App;
