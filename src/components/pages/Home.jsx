import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { getPokemon } from "../../api/pokeapi";
import PokemonCard from "../PokemonCard";
import SearchBar from "../SearchBar";

export default function Home() {
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["multiplepokemon"],
    ({ pageParam = 0 }) => getPokemon(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage;
      },
    }
  );

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-indigo-200 py-4 gap-2 text-gray-900">
      <h1 className="font-bold text-4xl ">National Pokédex</h1>
      <p className="px-4">
        Search for any kind of Pokémon or browse the entire Pokédex one Pokémon
        at a time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.keys(data.pages).map((key) => {
          return (
            <>
              {data.pages[key].map((pokemon, i) => {
                return (
                  <PokemonCard
                    key={i}
                    name={pokemon.name}
                    image={
                      pokemon["sprites"]["other"]["official-artwork"][
                        "front_default"
                      ]
                    }
                    id={pokemon.id}
                    types={pokemon.types}
                  />
                );
              })}
            </>
          );
        })}
      </div>

      <div>
        {isFetching ? (
          <>
            <button
              ref={ref}
              disabled
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              <svg
                role="status"
                class="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </button>
          </>
        ) : (
          <button ref={ref} onClick={fetchNextPage}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
