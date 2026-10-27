import { useState } from "react";

function GameCard(props) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="game-card">
      {props.image && (
        <img
          src={`/images/${props.image}`}
          alt={`Afbeelding bij ${props.title}`}
          className="game-image"
        />
      )}
      <div className="game-card-content">
        <div className="game-card-heading">
          <h2>{props.title}</h2>
          <span className="rating">⭐ {props.rating}</span>
        </div>
        <p className="game-genre">{props.genre}</p>
        <dl className="game-details">
          <div>
            <dt>Platform</dt>
            <dd>{props.platform}</dd>
          </div>
          <div>
            <dt>Developer</dt>
            <dd>{props.developer}</dd>
          </div>
          <div>
            <dt>Multiplayer</dt>
            <dd>{props.multiplayer ? "Ja" : "Nee"}</dd>
          </div>
          <div>
            <dt>Jaar</dt>
            <dd>{props.jaar}</dd>
          </div>
        </dl>
        <button
          className="favorite-button"
          type="button"
          aria-pressed={favorite}
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? "❤️ Favoriet" : "🤍 Favoriet"}
        </button>
      </div>
    </article>
  );
}

export default GameCard;
