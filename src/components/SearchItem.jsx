import React from "react";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

export default function SearchItem({ pokemon, url }) {
  function handleClick() {
    //console.log(pokemon, url);
  }
  return (
    <div
      className="flex cursor-pointer items-center p-4 bg-[white] hover:bg-gray-200 "
      onClick={handleClick}
    >
      {/*
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/9.png`}
        alt={`${pokemon} icon`}
      />
  */}
      <h2>{capitalizeFirstLetter(pokemon)}</h2>
    </div>
  );
}
