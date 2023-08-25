import React from "react";
import { Link } from "react-router-dom";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

function PokemonCard({ pokemon, pokemonList }) {
  if (!pokemon) {
    return <div>Loading...</div>;
  }
  return (
    <Link
      key={pokemon.name}
      state={{ data: pokemonList }}
      to={`/pokemon/${pokemon.name}`}
      className="pokemon-card"
    >
      <img
        src={`${IMAGE_URL}${String(pokemon.details.id).padStart(3, "0")}.png`}
        alt={pokemon.name}
      />
      <p>{pokemon.name}</p>
      <p>
        Type: {pokemon.details.types.map((type) => type.type.name).join(", ")}
      </p>
    </Link>
  );
}

export default PokemonCard;
