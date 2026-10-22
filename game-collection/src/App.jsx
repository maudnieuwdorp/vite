import { useState } from "react";
import "./App.css";
import GameCard from "./components/GameCard"; 
import games from "./components/games.json";


function App() {
  // State voor het opslaan van de zoektekst
  const [search, setSearch] = useState("");

  // Array met games (Opdracht 4: inclusief minimaal 3 extra games)
  const [games] = useState([
    { id: 1, title: "Minecraft", platform: "PC / Consoles" },
    { id: 2, title: "Mario Kart 8 Deluxe", platform: "Nintendo Switch" },
    { id: 3, title: "Rocket League", platform: "PC / PlayStation / Xbox" },
    { id: 4, title: "Grand Theft Auto V", platform: "PlayStation 5" },
    { id: 5, title: "The Legend of Zelda", platform: "Nintendo Switch" },
    { id: 6, title: "Fortnite", platform: "PC" },
    { id: 7, title: "EA Sports FC 26", platform: "PlayStation 5" }
  ]);

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
            />
          ))}
      </div>
    </div>
  );
}


export default App;

