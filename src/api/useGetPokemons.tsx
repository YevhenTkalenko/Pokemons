import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL: string = "https://pokeapi.co/api/v2/pokemon/";

export const useGetPokemons = () => {
  const limitPokemons = 20;

  const getAllPokemons = async ({ pageParam = 0 }: { pageParam?: number }) => {
    const response = await axios.get(
      `${BASE_URL}?limit=${limitPokemons}&offset=${pageParam}`
    );
    return response.data;
  };

  const {
    data,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["pokemons_list"],
    queryFn: getAllPokemons,
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const urlParams = new URLSearchParams(lastPage.next.split("?")[1]);
        const nextOffset = parseInt(urlParams.get("offset") || "0", 10);
        return nextOffset;
      }
    },
  });

  return {
    data,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
