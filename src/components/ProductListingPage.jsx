const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPokemonList, fetchPokemonDetails } from "../api";
import "./ProductListingPage.css";

function ProductListingPage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPokemonList();
      const pokemonWithDetails = await Promise.all(
        data.map(async (pokemon) => {
          const details = await fetchPokemonDetails(pokemon.name);
          return { ...pokemon, details };
        })
      );
      setPokemonList(pokemonWithDetails);
    }
    fetchData();
  }, []);

  return (
    <div className="pokemon-list-container">
      <h1>Pokémon List</h1>
      <div className="pokemon-card-grid">
        {pokemonList.map((pokemon) => (
          <Link
            key={pokemon.name}
            to={`/pokemon/${pokemon.name}`}
            className="pokemon-card"
          >
            <img
              src={`${IMAGE_URL}${String(pokemon.details.id).padStart(
                3,
                "0"
              )}.png`}
              alt={pokemon.name}
            />
            <p>{pokemon.name}</p>
            {/* <p>Height: {pokemon.details.height}</p>
            <p>Weight: {pokemon.details.weight}</p> */}
            <p>
              Type:{" "}
              {pokemon.details.types.map((type) => type.type.name).join(", ")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
