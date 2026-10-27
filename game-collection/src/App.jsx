import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import gamesData from "./components/data/games.json";

function App() {
  const [search, setSearch] = useState("");
  const [games] = useState(gamesData);
  const searchTerm = search.trim().toLowerCase();
  const filteredGames = games.filter((game) =>
    [game.titel, game.genre, game.platform, game.developer].some((value) =>
      String(value ?? "").toLowerCase().includes(searchTerm)
    )
  );

  return (
    <div className="app-container">
      <header className="site-header">
        <p className="eyebrow">JOUW GAMEBIBLIOTHEEK</p>
        <h1>🎮 My Game Collection</h1>
        <p className="site-tagline">
          Favoriete werelden, verzameld op één plek.
        </p>
      </header>

      <input
        className="search-input"
        type="text"
        aria-label="Zoek op titel, genre, platform of developer"
        placeholder="Zoek op titel, genre, platform of developer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p className="results-count" aria-live="polite">
        {filteredGames.length} {filteredGames.length === 1 ? "game" : "games"}
        {searchTerm && " gevonden"}
      </p>

      <div className="games-list">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GameCard
              key={game.id}
              title={game.titel}
              platform={game.platform}
              genre={game.genre}
              developer={game.developer}
              multiplayer={game.multiplayer}
              rating={game.rating}
              jaar={game.jaar}
              image={game.afbeelding}
            />
          ))
        ) : (
          <p className="empty-state">
            Geen games gevonden. Probeer een andere zoekterm.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
