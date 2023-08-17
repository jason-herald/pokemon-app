import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

function ProductDescriptionPage() {
  const location = useLocation();
  console.log(location.state.data, "Uselocation: ");
  const data = location.state.data;
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    function fetchData() {
      const targetPokemon = data.find(
        (pokemon) => pokemon.name === pokemonName
      );
      setPokemonDetails(targetPokemon.details);
    }
    fetchData();
  }, [pokemonName]);
  console.log(pokemonDetails);

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
