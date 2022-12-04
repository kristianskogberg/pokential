import React, { Fragment } from "react";
import { formatPokedexNumber } from "../utils/formatPokedexNumber";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { Link } from "react-router-dom";

export default function EvolutionPokemon({ pokemon }) {
  //console.log(pokemon);
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-end">
      {pokemon.method != null ? (
        <div className="grid grid-cols-1 mx-auto mb-auto md:mb-0 p-4 w-[135px] md:w-auto text-center gap-2 md:gap-0">
          <HiOutlineArrowNarrowRight
            size={30}
            className="w-full hidden md:flex"
          />
          <HiOutlineArrowNarrowDown
            size={30}
            className="w-full flex md:hidden"
          />
          <p className="max-w-[150px]">{pokemon.method}</p>
        </div>
      ) : null}

      <div className="flex flex-col items-center px-8 ">
        <Link to={`/pokemon/${pokemon.name}`} alt={`${pokemon.name} details`}>
          <img
            //src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}

            src={`https://www.serebii.net/swordshield/pokemon/${formatPokedexNumber(
              pokemon.id
            )}.png`}
            alt={pokemon.name}
            className="w-[100px] h-[100px]"
          />
        </Link>
        <p className="text-gray-400 mt-2">#{formatPokedexNumber(pokemon.id)}</p>
        <p>{capitalizeFirstLetter(pokemon.name)}</p>
      </div>

      {pokemon.evolutions != null ? (
        <div className="relative flex flex-row md:flex-col gap-10">
          {pokemon.evolutions.map((evo) => {
            return <EvolutionPokemon pokemon={evo} />;
          })}
        </div>
      ) : null}
    </div>
  );
}
