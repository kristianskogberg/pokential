import React from "react";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import TypeIcon from "./TypeIcon";
import AbilityCard from "./AbilityCard";
import { Link } from "react-router-dom";

import { formatPokedexNumber } from "../utils/formatPokedexNumber";
import { getEnglishDescription } from "../utils/getEnglishDescription";
import DropdownPokemonForm from "./DropdownPokemonForm";

export default function PokemonInfoCard({
  pokemon,
  image,
  height,
  weight,
  abilities,
  types,
  number,
  species,
  description,
  forms,
}) {
  return (
    <div className="bg-[white] rounded-2xl p-4 w-full grid grid-cols-1 mx-auto my-4">
      <div className="flex flex-row items-start gap-4 border-b pb-1">
        <h1 className="text-2xl font-bold ">Details</h1>
        {forms.length > 1 ? (
          <DropdownPokemonForm
            forms={forms}
            selectedForm={forms[0].pokemon.name}
          />
        ) : null}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
        <div className="m-auto col-span-1 p-6 max-w-[450px]">
          <img src={image} alt={pokemon} loading="lazy" />
        </div>
        <div className="col-span-1 pr-4">
          <div className="grid grid-cols-3 border-b">
            <p className="p-2  col-span-1">Name</p>
            <p className="p-2 col-span-2 bg-[white]">
              {capitalizeFirstLetter(pokemon)}
            </p>
          </div>

          <div className="grid grid-cols-3 border-b">
            <p className="p-2  col-span-1">National No.</p>
            <p className="p-2 col-span-2 bg-[white]">{number}</p>
          </div>

          <div className="grid grid-cols-3 border-b ">
            <div className="p-2  col-span-1">Type</div>
            <div className="p-2 col-span-2 bg-[white]">
              <div className="flex flex-row flex-wrap gap-2">
                {types.map((type) => {
                  return (
                    <Link to={`/type/${type.type.name}`} key={type.type.name}>
                      <TypeIcon type={type.type.name} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b">
            <p className="p-2  col-span-1">Species</p>
            <p className="p-2 col-span-2 bg-[white]">{species}</p>
          </div>

          <div className="grid grid-cols-3 border-b">
            <h2 className="col-span-1  p-2">Abilities</h2>
            <div className="p-2 col-span-2 bg-[white]">
              {abilities.map((ability) => {
                return (
                  <AbilityCard
                    key={ability?.ability?.name}
                    ability={ability?.ability?.name}
                    isHidden={ability?.is_hidden}
                  />
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 border-b">
            <p className="p-2  col-span-1">Height</p>
            <p className="p-2 col-span-2 bg-[white]">
              {(Number(height) / 10).toFixed(1)} m
            </p>
          </div>

          <div className="grid grid-cols-3 border-b">
            <p className="p-2  col-span-1">Weight</p>
            <p className="p-2 col-span-2 bg-[white]">
              {(Number(weight) / 10).toFixed(1)} kg
            </p>
          </div>

          <div className="grid grid-cols-3">
            <p className="p-2  col-span-1">Description</p>
            <p className="m-2 col-span-2 bg-[white]">
              {getEnglishDescription(description)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
