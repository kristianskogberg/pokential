import React from "react";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { formatPokedexNumber } from "../utils/formatPokedexNumber";
import EvolutionPokemon from "./EvolutionPokemon";

export default function EvolutionCard({ chain }) {
  // console.log(chain);
  return (
    <div className="bg-[white] rounded-2xl p-4 w-full grid grid-cols-1 mx-auto my-4">
      <h1 className="text-2xl font-bold border-b pb-2">Evolutions</h1>
      {chain[0].evolutions == null ? (
        <p className="pt-4">
          {capitalizeFirstLetter(chain[0].name)} does not evolve.
        </p>
      ) : (
        <div className="flex flex-wrap flex-col md:flex-row justify-center pt-4">
          <EvolutionPokemon pokemon={chain[0]} />
          {/*
          {chain?.map((pokemon, index, arr) => {
            return (
              <div
                className="flex flex-col md:flex-row justify-between items-center"
                key={pokemon.name}
              >
                <div
                  className="flex flex-col items-center cursor-pointer "
                  key={pokemon.name}
                  onClick={() => {
                    navigate("/pokemon/" + pokemon.name);
                  }}
                >
                  <img
                    //src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    src={`https://www.serebii.net/swordshield/pokemon/${formatPokedexNumber(
                      pokemon.id
                    )}.png`}
                    alt={pokemon.name}
                    className="w-[100px] m-1"
                  />
                  <p className="text-gray-400">
                    #{formatPokedexNumber(pokemon.id)}
                  </p>
                  <p>{capitalizeFirstLetter(pokemon.name)}</p>
                </div>

                {arr[index + 1]?.method ? (
                  <div className="flex flex-col justify-center items-center p-8">
                    <div className="hidden md:flex w-full md:items-center md:justify-center">
                      <HiOutlineArrowNarrowRight size={25} />
                    </div>
                    <div className="flex md:hidden w-full items-center justify-center">
                      <HiOutlineArrowNarrowDown size={25} />
                    </div>

                    <p>{arr[index + 1].method}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        */}
        </div>
      )}
    </div>
  );
}
