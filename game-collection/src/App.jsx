import { useState } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import games from "./components/data/games.json";

function App() {
  // State voor het opslaan van de zoektekst
  const [search, setSearch] = useState("");

  return (
    <div className="app-container">
      <h1>🎮 My Game Collection</h1>

      {/* Opdracht 2 & 5: Zoekveld met onChange en className */}
      <input
        className="search-input"
        type="text"
        placeholder="Zoek een game..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Opdracht 3: Gefilterde lijst tonen met filter() en map() */}
      <div className="games-list">
        {games
          .filter((game) =>
            game.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
              genre={game.genre}
              rating={game.rating}
              year={game.year}
              image={game.image}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
