import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleMove } from "../../api/pokeapi";

export default function Move() {
  let params = useParams();

  const { data, error, isError, isLoading } = useQuery(
    ["move", { params }],
    getSingleMove
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
      <p>{data.name}</p>
    </div>
  );
}
