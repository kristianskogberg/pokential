import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSinglePokemon } from "../../api/pokeapi";
import PokemonInfoCard from "../PokemonInfoCard";
import EvolutionCard from "../EvolutionCard";
import { handleEvolutionChain } from "../../utils/handleEvolutionChain";
import { formatPokedexNumber } from "../../utils/formatPokedexNumber";
import StatsCard from "../StatsCard";
import MovesLearntCard from "../MovesLearntCard";
import { getGenerationsForPokemon } from "../../utils/getGenerationsForPokemon";
import SpritesCard from "../SpritesCard";
import TypeEffectivenessCard from "../TypeEffectivenessCard";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { calculateTypeEffectivenesses } from "../../utils/calculateTypeEffectivenesses";
import LoadingSpinner from "../LoadingSpinner";

export default function Pokemon() {
  let params = useParams();

  const { data, error, isError, isLoading } = useQuery(
    ["pokemon", { params }],
    getSinglePokemon
  );

  if (isLoading) {
    return (
      <div className="bg-indigo-200 h-screen w-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-indigo-200 h-screen w-screen flex justify-center items-center">
        <p>{error.message}</p>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="bg-indigo-200 h-full px-4  first-letter:md:px-20 py-4 items-center justify-center ">
      <div className="max-w-[1200px] grid grid-cols-1 mx-auto">
        <PokemonInfoCard
          pokemon={data?.name}
          number={formatPokedexNumber(data?.pokedex_numbers[0].entry_number)}
          image={
            data?.["sprites"]["other"]["official-artwork"]["front_default"]
          }
          //image={`https://www.serebii.net/swordshield/pokemon/${formatPokedexNumber(  data?.pokedex_numbers[0].entry_number )}.png`}
          height={data?.height}
          weight={data?.weight}
          types={data?.types}
          abilities={data?.abilities}
          species={data?.genera[7].genus}
          description={data?.flavor_text_entries}
          forms={data?.varieties}
        />
        <EvolutionCard chain={handleEvolutionChain(data?.chain)} />
        <StatsCard
          hp={data?.stats[0].base_stat}
          attack={data?.stats[1].base_stat}
          defense={data?.stats[2].base_stat}
          specialAttack={data?.stats[3].base_stat}
          specialDefense={data?.stats[4].base_stat}
          speed={data?.stats[5].base_stat}
          stats={data?.stats}
        />
        <TypeEffectivenessCard
          typeEffectivenesses={calculateTypeEffectivenesses(data?.types)}
        />
        <MovesLearntCard
          pokemonName={data?.name}
          movesArray={data?.moves}
          generations={getGenerationsForPokemon(data?.generation?.name)}
        />
        <SpritesCard
          pokemon={data?.name}
          normal={`https://www.serebii.net/swordshield/pokemon/${formatPokedexNumber(
            data?.pokedex_numbers[0].entry_number
          )}.png`}
          shiny={`https://www.serebii.net/Shiny/SWSH/${formatPokedexNumber(
            data?.pokedex_numbers[0].entry_number
          )}.png`}
        />{" "}
      </div>
    </div>
  );
}
