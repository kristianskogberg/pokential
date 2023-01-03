import React from "react";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { Link } from "react-router-dom";

export default function AllPokemonByTypeCard({ type, pokemonArray }) {
  function getPokemonId(url) {
    return url.substring(34, url.length - 1);
  }

  function getPokemonImageUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/a0e2c217b87f650a7ff258b437a028b5cd1aadf4/sprites/pokemon/${id}.png`;
  }

  /* function getPokemonImageUrl(pokemon) {
    return `https://img.pokemondb.net/sprites/sword-shield/icon/${pokemon}.png`;
  }*/

  return (
    <div className="bg-[white] rounded-2xl p-4 w-full grid grid-cols-1 mx-auto my-4 gap-4">
      <h1 className="text-2xl font-bold border-b pb-2">{type} Pokémon</h1>
      <div className="grid grid-cols-4">
        {pokemonArray.map((pokemon) => (
          <div className="flex items-center flex-row">
            <img src={getPokemonImageUrl(getPokemonId(pokemon.pokemon.url))} />
            <span>
              <Link to={`/pokemon/${pokemon.pokemon.name}`}>
                <p className="link-bold">
                  {capitalizeFirstLetter(pokemon.pokemon.name)}
                </p>
              </Link>
              {pokemon?.is_hidden == true ? (
                <p className="text-gray-500">(Hidden Ability)</p>
              ) : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
