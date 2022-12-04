import React from "react";

export default function Footer() {
  return (
    <div className="w-full py-20 bg-gray-600 text-white ">
      <div className="px-4 flex flex-col gap-2 justify-center items-center ">
        <p>
          Powered by{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokeAPI
          </a>
        </p>
        <p>Pokémon, images and names {"\u00a9"} Nintendo/Game Freak.</p>
      </div>
    </div>
  );
}
