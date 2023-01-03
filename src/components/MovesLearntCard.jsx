import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import allMoves from "../api/moves.json";
import TypeIcon from "./TypeIcon";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import DropdownList from "./DropdownList";
import MoveCategoryIcon from "./MoveCategoryIcon";
import { Link } from "react-router-dom";

export default function MovesLearntCard({
  pokemonName,
  movesArray,
  generations,
}) {
  const [levelUpMoves, setLevelUpMoves] = useState([]);
  const [eggMoves, setEggMoves] = useState([]);
  const [machineMoves, setMachineMoves] = useState([]);
  const [tutorMoves, setTutorMoves] = useState([]);
  const [game, setGame] = useState({
    name: generations[0]?.games[0]?.name,
    id: generations[0]?.games[0]?.id,
  });

  useEffect(() => {
    setLevelUpMoves([]);
    setEggMoves([]);
    setMachineMoves([]);
    setTutorMoves([]);

    for (const move of movesArray) {
      for (let i = 0; i < move.version_group_details.length; i++) {
        if (move.version_group_details[i].version_group.name == game.id) {
          if (
            move.version_group_details[i].move_learn_method.name ==
              "level-up" &&
            move.version_group_details[i].level_learned_at != 0
          ) {
            //Level Up move

            setLevelUpMoves((current) => [
              ...current,
              {
                level: move.version_group_details[i].level_learned_at,
                name: move.move.name,
                type: allMoves[move.move.name].type,
                category: allMoves[move.move.name].damage_class,
                power: allMoves[move.move.name].power,
                accuracy: allMoves[move.move.name].accuracy,
                pp: allMoves[move.move.name].pp,
                //effect: allMoves[move.move.name].effect_entries[0].short_effect,
              },
            ]);
          } else if (
            move.version_group_details[i].move_learn_method.name == "egg"
          ) {
            //Egg move
            setEggMoves((current) => [
              ...current,
              {
                name: move.move.name,
                type: allMoves[move.move.name].type,
                category: allMoves[move.move.name].damage_class,
                power: allMoves[move.move.name].power,
                accuracy: allMoves[move.move.name].accuracy,
                pp: allMoves[move.move.name].pp,
              },
            ]);
          } else if (
            move.version_group_details[i].move_learn_method.name == "machine"
          ) {
            //TM or HM move
            //console.log(allMoves[move.move.name].machines);
            setMachineMoves((current) => [
              ...current,
              {
                name: move.move.name,
                type: allMoves[move.move.name].type,
                category: allMoves[move.move.name].damage_class,
                power: allMoves[move.move.name].power,
                accuracy: allMoves[move.move.name].accuracy,
                pp: allMoves[move.move.name].pp,
              },
            ]);
          } else if (
            move.version_group_details[i].move_learn_method.name == "tutor"
          ) {
            //TM or HM move
            setTutorMoves((current) => [
              ...current,
              {
                name: move.move.name,
                type: allMoves[move.move.name].type,
                category: allMoves[move.move.name].damage_class,
                power: allMoves[move.move.name].power,
                accuracy: allMoves[move.move.name].accuracy,
                pp: allMoves[move.move.name].pp,
              },
            ]);
          }
        }
      }
    }
  }, [game, pokemonName]);

  function selectGame({ name, id }) {
    setGame({ name: name, id: id });
  }

  return (
    <div className="bg-[white] rounded-2xl p-4 w-full grid grid-cols-1 mx-auto my-4">
      <div className="flex flex-row items-start gap-4 border-b pb-1">
        <h1 className="text-2xl font-bold ">Moves</h1>
        <DropdownList
          data={generations}
          selectGame={selectGame}
          selectedGame={game.name}
        />
      </div>

      {levelUpMoves.length ? (
        <>
          <p className="py-4">
            This section contains information about all of the moves that{" "}
            {capitalizeFirstLetter(pokemonName)} can learn in Pokémon{" "}
            {game.name}.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="py-4">
              <h1 className="text-2xl font-bold py-2 border-b">
                Level Up Moves
              </h1>
              <p className="py-4">
                {capitalizeFirstLetter(pokemonName)} will learn the following
                moves at the levels specified in Pokémon {game.name}.
              </p>
              <table className="table-auto text-left w-full">
                <thead className="bg-indigo-100">
                  <tr>
                    <th scope="col" className="w-[40px] pl-2 py-2">
                      Lv.
                    </th>
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
                  {levelUpMoves
                    .sort((a, b) => (a.name < b.name ? 1 : -1))
                    .sort((a, b) => (a.level > b.level ? 1 : -1))
                    .map((move) => {
                      return (
                        <tr
                          className="border-b even:bg-gray-100"
                          key={move.name}
                        >
                          <td scope="row" className=" pl-4 p-2 text-right">
                            {move.level}
                          </td>
                          <td scope="row" className="p-2">
                            <Link
                              to={`/move/${move.name}`}
                              alt={`${move.name} details`}
                              className="link-bold"
                            >
                              {capitalizeFirstLetter(move.name)}
                            </Link>
                          </td>
                          <td scope="row" className="px-2 min-w-[120px]">
                            <TypeIcon type={move.type} />
                          </td>
                          <td scope="row" className="px-2 max-w-[50px]">
                            <MoveCategoryIcon category={move.category} />
                          </td>
                          <td scope="row" className="p-2 text-right">
                            {move.power ? move.power : <p>{"\u2014"}</p>}
                          </td>
                          <td scope="row" className="p-2 text-right">
                            {move.accuracy ? (
                              move.accuracy + " %"
                            ) : (
                              <p>{"\u2014"}</p>
                            )}
                          </td>
                          <td scope="row" className="p-2 text-right">
                            {move.pp}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <div className="pt-8">
                <h1 className="text-2xl font-bold py-2 border-b">Egg Moves</h1>
                {eggMoves.length ? (
                  <>
                    <p className="py-4">
                      {capitalizeFirstLetter(pokemonName)} can learn the
                      following moves via breeding with other Pokémon in Pokémon{" "}
                      {game.name}.
                    </p>
                    <table className="table-auto w-full text-left">
                      <thead className="bg-indigo-100">
                        <tr>
                          <th scope="col" className="w-[170px] pl-2 py-2">
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
                        {eggMoves
                          .sort((a, b) => (a.name > b.name ? 1 : -1))
                          .map((move) => {
                            return (
                              <tr
                                className="border-b even:bg-gray-100"
                                key={move.name}
                              >
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
                                  {move.accuracy ? (
                                    move.accuracy + " %"
                                  ) : (
                                    <p>{"\u2014"}</p>
                                  )}
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
                ) : (
                  <p className="py-4">
                    {capitalizeFirstLetter(pokemonName)} does not learn any
                    moves via breeding in Pokémon {game.name}.
                  </p>
                )}
              </div>
              <div className="pt-8">
                {tutorMoves.length ? (
                  <div>
                    <h1 className="text-2xl font-bold py-2 border-b">
                      Move Tutor Moves
                    </h1>
                    <p className="py-4">
                      {capitalizeFirstLetter(pokemonName)} can be taught the
                      following tutor moves in Pokémon {game.name}.
                    </p>
                    <table className="table-auto w-full text-left">
                      <thead className="bg-indigo-100">
                        <tr>
                          <th scope="col" className="w-[170px] pl-2 py-2">
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
                        {tutorMoves
                          .sort((a, b) => (a.name > b.name ? 1 : -1))
                          .map((move) => {
                            return (
                              <tr
                                className="border-b even:bg-gray-100"
                                key={move.name}
                              >
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
                                  {move.accuracy ? (
                                    move.accuracy + " %"
                                  ) : (
                                    <p>{"\u2014"}</p>
                                  )}
                                </td>
                                <td scope="row" className="px-2 text-right">
                                  <p>{move.pp}</p>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl font-bold py-2 border-b">TM/HM Moves</h1>

              {machineMoves.length ? (
                <>
                  <p className="py-4">
                    {capitalizeFirstLetter(pokemonName)} can be taught the
                    following TM and HM moves in Pokémon {game.name}.
                  </p>
                  <table className="table-auto w-full text-left">
                    <thead className="bg-indigo-100">
                      <tr>
                        {/*
                        TODO: Add TM/HM Numbers
                        <th scope="col" className="w-[40px] pl-2 py-2">
                          No.
                        </th>
                        */}
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
                      {machineMoves
                        .sort((a, b) => (a.name > b.name ? 1 : -1))
                        .map((move) => {
                          return (
                            <tr
                              className="border-b even:bg-gray-100"
                              key={move.name}
                            >
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
                                {move.accuracy ? (
                                  move.accuracy + " %"
                                ) : (
                                  <p>{"\u2014"}</p>
                                )}
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
              ) : (
                <p className="py-4">
                  {capitalizeFirstLetter(pokemonName)} cannot be taught any
                  TM/HM moves in Pokémon {game.name}.
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p className="py-2">
          {capitalizeFirstLetter(pokemonName)} is not available in Pokémon{" "}
          {game.name}.
        </p>
      )}
    </div>
  );
}
