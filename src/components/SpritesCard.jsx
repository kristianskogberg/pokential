import React from "react";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

export default function SpritesCard({ pokemon, normal, shiny }) {
  return (
    <div className="bg-[white] rounded-2xl p-4 w-full grid grid-cols-1 mx-auto my-4">
      <h1 className="text-2xl font-bold border-b pb-2">Sprites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-10 ">
        <div className="grid grid-cols-1 ">
          <img
            src={normal}
            alt={pokemon}
            loading="lazy"
            className="w-[250px] p-4"
          />
          <p className="mx-auto">Normal {capitalizeFirstLetter(pokemon)}</p>
        </div>
        <div className="grid grid-cols-1 ">
          <img
            src={shiny}
            alt={pokemon}
            loading="lazy"
            className="w-[250px] p-4"
          />
          <p className="mx-auto">Shiny {capitalizeFirstLetter(pokemon)}</p>
        </div>
      </div>
    </div>
  );
}
