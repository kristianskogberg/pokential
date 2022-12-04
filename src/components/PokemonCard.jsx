import React from "react";
import TypeIcon from "./TypeIcon";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { colors } from "../utils/colors";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({ image, name, id, types }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/pokemon/" + name);
  }
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer relative h-full w-[200px] 2xl:w-[400px] bg-[white] overflow-auto rounded-xl grid grid-cols-1 2xl:grid-cols-2"
    >
      <p className="font-display absolute top-[140px] 2xl:top-[125px] right-5 z-2 text-white 2xl:text-gray-200 text-6xl">
        #{id}
      </p>
      <div className="w-[200px]">
        <img
          src={image}
          alt={name}
          className={` bg-${types[0].type.name} `}
          style={{
            backgroundColor: colors[`${types[0].type.name}`],
          }}
        />
      </div>

      <div className="w-full flex flex-col justify-start items-start p-4">
        <h1 className="text-gray-900 font-bold text-2xl pb-2">
          {capitalizeFirstLetter(name)}
        </h1>

        <div className="flex flex-row gap-2">
          <TypeIcon type={types[0]?.type.name} />

          <TypeIcon type={types[1]?.type.name} />
        </div>
      </div>
    </div>
  );
}
