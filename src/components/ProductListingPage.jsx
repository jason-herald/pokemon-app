import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { fetchPokemonList, fetchPokemonDetails } from "../api";
import "./ProductListingPage.css";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

function ProductListingPage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchPokemonList();
        const pokemonWithDetails = await Promise.all(
          data.map(async (pokemon) => {
            const details = await fetchPokemonDetails(pokemon.name);
            return { ...pokemon, details };
          })
        );
        setPokemonList(pokemonWithDetails);
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    fetchData();
  }, []);

  return (
    <div className="pokemon-list-container">
      <h1>Pokémon List</h1>
      <div className="pokemon-card-grid">
        {pokemonList ? (
          pokemonList?.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              pokemonList={pokemonList}
            />
          ))
        ) : (
          <p>Couldn't fetch Pokemon data</p>
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
