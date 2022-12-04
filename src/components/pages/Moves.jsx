import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getMoves } from "../../api/pokeapi";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import TypeIcon from "../TypeIcon";
import MoveCard from "../MoveCard";
import { formatMoveEffect } from "../../utils/formatMoveEffect";
import { useNavigate } from "react-router-dom";

export default function Moves() {
  const navigate = useNavigate();
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(["moves"], ({ pageParam = 0 }) => getMoves(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className=" bg-background py-4">
      <table className="table text-left bg-[white]">
        <thead className="bg-gray-300">
          <tr>
            <th scope="col" className="pr-10 pl-4 py-2">
              Name
            </th>
            <th scope="col" className="pr-10">
              Type
            </th>
            <th scope="col" className="pr-10">
              Category
            </th>
            <th scope="col" className="pr-10">
              Power
            </th>
            <th scope="col" className="pr-10">
              Accuracy
            </th>
            <th scope="col" className="pr-10">
              PP
            </th>
            <th scope="col" className="pr-10">
              Effect
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.pages).map((key) => {
            return (
              <>
                {data.pages[key].map((move, i) => {
                  return (
                    <tr className="border-b even:bg-gray-100">
                      <td scope="row" className="pr-10 pl-4">
                        {capitalizeFirstLetter(move.name)}
                      </td>

                      <td scope="row" className="pr-10 py-1">
                        <TypeIcon type={move.type.name} />
                      </td>

                      <td scope="row" className="pr-10">
                        {move.damage_class.name}
                      </td>
                      <td scope="row" className="pr-10">
                        {move?.power ? move.power : <p>-</p>}
                      </td>
                      <td scope="row" className="pr-10">
                        {move?.accuracy ? move.accuracy : <p>-</p>}
                      </td>
                      <td scope="row" className="pr-10">
                        {move.pp}
                      </td>
                      <td scope="row" className="pr-10">
                        {formatMoveEffect(move)}
                      </td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>

      <div>
        {isFetching ? (
          <p>Loading more...</p>
        ) : (
          <button onClick={fetchNextPage}>Load More</button>
        )}
      </div>
    </div>
  );
}
