import Header from "./components/Header";

import GameCard from "./components/GameCard";

import "./App.css";
 
function App() {

  return (
<div className="container">
<Header title="🎮 Game Collection" />
<p>Welkom bij mijn eerste React-applicatie!</p>
 
      <div className="game-list">
<GameCard

          title="Minecraft"

          platform="PC"

        />
<GameCard

          title="Mario Kart"

          platform="Nintendo Switch"

        />
<GameCard

          title="Rocket League"

          platform="PlayStation 5"

        />
</div>
 
      <div style={{ marginTop: "30px", color: "#333", fontSize: "14px", lineHeight: "1.6" }}>
<p>Naam: maud </p>
<p>Studentnummer: 2212288</p>
<p>Klas: 25B</p>
</div>
 
      <footer>
<p>© 2026 maud Game Collection</p>
</footer>
</div>

  );

}
 
export default App;
 