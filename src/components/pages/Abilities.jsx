import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleAbility } from "../../api/pokeapi";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import AllPokemonByTypeCard from "../AllPokemonByTypeCard";

export default function Abilities() {
  let params = useParams();

  const { data, error, isError, isLoading } = useQuery(
    ["ability", { params }],
    getSingleAbility
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  function getEnglishEffect(effectArray) {
    let effect = "";
    for (let i = 0; i < effectArray.length; i++) {
      if (effectArray[i].language.name == "en") {
        effect = effectArray[i].effect;
        break;
      }
    }
    return effect;
  }

  console.log(data);
  const ABILITY = capitalizeFirstLetter(data.name);

  return (
    <div className="bg-indigo-200 min-h-screen px-4   py-4 items-center justify-center ">
      <div className="max-w-[1200px] grid grid-cols-1 mx-auto">
        <div className="bg-[white] rounded-2xl p-4 w-full grid grid-cols-1 mx-auto my-4 gap-4 ">
          <div className="flex flex-row items-start gap-4 border-b pb-1">
            <h1 className="text-2xl font-bold">{ABILITY} (ability)</h1>
          </div>

          <p>{getEnglishEffect(data.effect_entries)}</p>
        </div>
        <AllPokemonByTypeCard type={ABILITY} pokemonArray={data.pokemon} />
      </div>
    </div>
  );
}
