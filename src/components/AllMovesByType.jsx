import React, { useEffect, useState } from "react";
import allMoves from "../api/moves.json";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import TypeIcon from "./TypeIcon";
import MoveCategoryIcon from "./MoveCategoryIcon";
import { Link } from "react-router-dom";

export default function AllMovesByType({ movesArray }) {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    setMoves([]);
    for (const move of movesArray) {
      setMoves((current) => [
        ...current,
        {
          name: move.name,
          type: allMoves[move.name].type,
          category: allMoves[move.name].damage_class,
          power: allMoves[move.name].power,
          accuracy: allMoves[move.name].accuracy,
          pp: allMoves[move.name].pp,
        },
      ]);
    }
  }, [movesArray]);

  return (
    <div>
      <>
        <table className="table-auto w-full text-left">
          <thead className="bg-indigo-100">
            <tr>
              <th scope="col" className="w-[120px] p-2">
                Move
              </th>
              <th scope="col" className="w-[120px] p-2">
                Type
              </th>
              <th scope="col" className="w-[40px] p-2 ">
                Cat.
              </th>

              <th scope="col" className="w-[50px] p-2">
                Power
              </th>
              <th scope="col" className="w-[60px] p-2">
                Acc.
              </th>
              <th scope="col" className="w-[40px] p-2">
                PP
              </th>
            </tr>
          </thead>
          <tbody>
            {moves
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((move) => {
                return (
                  <tr className="border-b even:bg-gray-100" key={move.name}>
                    {/*
                              <td scope="row" className="p-2 text-right">
                                {move.number}
                              </td>
                          */}
                    <td scope="row" className="pl-4 p-2 text-left">
                      <Link
                        to={`/move/${move.name}`}
                        alt={`${move.name} details`}
                        className="link-bold"
                      >
                        {capitalizeFirstLetter(move.name)}
                      </Link>
                    </td>
                    <td scope="row" className="px-2">
                      <TypeIcon type={move.type} />
                    </td>
                    <td scope="row" className="px-2">
                      <MoveCategoryIcon category={move.category} />
                    </td>
                    <td scope="row" className="p-2 text-right">
                      {move.power ? move.power : <p>{"\u2014"}</p>}
                    </td>
                    <td scope="row" className="p-2 text-right">
                      {move.accuracy ? move.accuracy + " %" : <p>{"\u2014"}</p>}
                    </td>
                    <td scope="row" className="px-2 text-right">
                      <p>{move.pp}</p>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    </div>
  );
}
