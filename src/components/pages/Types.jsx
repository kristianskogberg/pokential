import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleType } from "../../api/pokeapi";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { calculateTypeEffectivenesses } from "../../utils/calculateTypeEffectivenesses";
import TypeEffectivenessCard from "../TypeEffectivenessCard";
import AllPokemonByTypeCard from "../AllPokemonByTypeCard";
import AllMovesByType from "../AllMovesByType";

const formatGenerationNumber = {
  "generation-i": "Generation 1",
  "generation-ii": "Generation 2",
  "generation-iii": "Generation 3",
  "generation-iv": "Generation 4",
  "generation-v": "Generation 5",
  "generation-vi": "Generation 6",
  "generation-vii": "Generation 7",
  "generation-viii": "Generation 8",
};

export default function Types() {
  let params = useParams();

  const { data, error, isError, isLoading } = useQuery(
    ["type", { params }],
    getSingleType
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  console.log(data);
  const TYPE = capitalizeFirstLetter(data.name);

  return (
    <div className="bg-indigo-200 min-h-screen px-4 py-4 items-center justify-center ">
      <div className="max-w-[1200px] grid grid-cols-1 mx-auto">
        <div className="bg-[white] rounded-2xl p-4 w-full grid grid-cols-1 mx-auto my-4 gap-4 ">
          <div className="flex flex-row items-start gap-4 border-b pb-1">
            <h1 className="text-2xl font-bold">{TYPE} (type)</h1>
          </div>

          <p>
            The {TYPE}-type was first introduced in{" "}
            {formatGenerationNumber[data.generation.name]}. Currently, there are{" "}
            {data.pokemon.length} different {TYPE}-type Pokémon and{" "}
            {data.moves.length} different {TYPE}-type moves.
          </p>
        </div>
        <TypeEffectivenessCard
          typeEffectivenesses={calculateTypeEffectivenesses([
            { type: { name: data.name } },
          ])}
        />
        <AllPokemonByTypeCard type={TYPE} pokemonArray={data.pokemon} />

        <div className="bg-[white] rounded-2xl p-4 w-full grid grid-cols-1 mx-auto my-4 gap-4 ">
          <div className="flex flex-row items-start gap-4 border-b pb-1">
            <h1 className="text-2xl font-bold">{TYPE} Moves</h1>
          </div>
          <AllMovesByType movesArray={data.moves} />
        </div>
      </div>
    </div>
  );
}
