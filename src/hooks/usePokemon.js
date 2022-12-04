import { useQuery } from "@tanstack/react-query";

export const usePokemon = () => useQuery(["pokemon"]);
