import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails, fetchPokemonImage } from "../api";

const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

function ProductDescriptionPage() {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPokemonDetails(pokemonName);
      setPokemonDetails(data);
    }
    fetchData();
  }, [pokemonName]);

  return (
    <div>
      <h1>Pokémon Details</h1>
      {pokemonDetails && (
        <div>
          <h2>{pokemonDetails.name}</h2>
          <img
            src={`${IMAGE_URL}${String(pokemonDetails.id).padStart(
              3,
              "0"
            )}.png`}
            alt={pokemonDetails.name}
          />
          <p>{pokemonDetails.id}</p>
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
          <p>Abilities:</p>
          <ul>
            {pokemonDetails.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDescriptionPage;
