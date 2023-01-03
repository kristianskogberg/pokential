import React from "react";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

const formatCategory = {
  ability: "Ability",
  pokemon: "Pokémon",
  move: "Move",
  item: "Item",
};

export default function SearchItem({ item, url }) {
  function handleClick() {
    //console.log(pokemon, url);
  }
  return (
    <div
      className="flex cursor-pointer items-center p-4 bg-[white] hover:bg-gray-200 justify-between"
      onClick={handleClick}
    >
      {/*
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/9.png`}
        alt={`${pokemon} icon`}
      />
  */}
      <p className="font-bold">{capitalizeFirstLetter(item.name)}</p>
      <p className="text-gray-500">{formatCategory[item.category]}</p>
    </div>
  );
}
