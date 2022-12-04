import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleType } from "../../api/pokeapi";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

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

  return (
    <div>
      <h1 className="text-4xl font-bold">
        {capitalizeFirstLetter(data.name)} Type
      </h1>
      {data.moves.map((move) => {
        return <p>{move.name}</p>;
      })}
    </div>
  );
}
