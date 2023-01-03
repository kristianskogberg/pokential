import React, { useState, useEffect } from "react";
import { HiOutlineSearch as SearchIcon } from "react-icons/hi";
import allPokemon from "../api/pokemon.json";
import allAbilities from "../api/abilities.json";
import allMovesList from "../api/movesList.json";
import SearchItem from "./SearchItem";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const everything = allPokemon.results
    .concat(allAbilities.results)
    .concat(allMovesList.results);

  console.log(everything);

  useEffect(() => {
    if (search.length > 0) {
      setSuggestions(
        everything.filter((pokemon) => pokemon.name.includes(search))
      );
    } else {
      setSuggestions([]);
    }
  }, [search]);

  return (
    <div className="flex z-10 flex-col justify-between  ">
      <form action="" className="w-[300px]">
        <div className="relative flex items-center  h-10 rounded-lg text-gray-500 bg-gray-200 overflow-hidden">
          <input
            className="h-full pl-3 w-full outline-none text-sm placeholder-gray-500 text-black pr-2 bg-gray-200"
            type="text"
            name="search"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <SearchIcon size={20} color="gray" />
          </div>
        </div>
      </form>
      <div className="relative ">
        <div className="max-h-[500px] w-[300px] shadow-xl absolute overflow-auto rounded-lg text-[black] top-[0]">
          {suggestions?.map((item, i) => {
            return (
              <div
                onClick={() => {
                  navigate(`/${item.category}/` + item.name);
                  setSuggestions([]);
                }}
              >
                <SearchItem key={i} item={item} url={item.url} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
