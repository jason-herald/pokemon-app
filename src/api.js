const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchPokemonList() {
  try {
    const response = await fetch(`${BASE_URL}/pokemon`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchPokemonDetails(pokemonName) {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
