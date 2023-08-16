const BASE_URL = "https://pokeapi.co/api/v2";
const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

export async function fetchPokemonList() {
  const response = await fetch(`${BASE_URL}/pokemon`);
  const data = await response.json();
  return data.results;
}

export async function fetchPokemonDetails(pokemonName) {
  const response = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);
  const data = await response.json();
  return data;
}

export function fetchPokemonImage(url) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}
