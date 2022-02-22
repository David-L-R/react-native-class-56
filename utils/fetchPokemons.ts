import axios from "axios";
import { config } from "../config";
import { Pokemon } from "../types/pokemon";

type setFunc = (value: Pokemon[]) => void;

export const fetchPokemons = async (setPokemons: setFunc): Promise<void> => {
  // 1. random number 1-10 (number of pokemons) [1... 2... 3...]

  const numPokemons = Math.floor(Math.random() * 9 + 1);

  // 2. for loop
  const pokemons: Pokemon[] = [];
  for (let i = 0; i < numPokemons; i++) {
    // random number 1-800 and fetch a pokemon (base_url/pokemon/random-number)
    const pokemonId = Math.floor(Math.random() * 150 + 1);

    const result = await axios.get(`${config.pokemon_base_url}${pokemonId}`);

    const { name, stats, height, weight, sprites } = result.data;

    const image = sprites.front_default;
    const hp = stats[0].base_stat;
    const attack = stats[1].base_stat;
    const defense = stats[2].base_stat;

    pokemons.push({
      image,
      name,
      height,
      weight,
      hp,
      attack,
      defense,
    });
  }
  setPokemons(pokemons);
};
