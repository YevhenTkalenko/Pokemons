import React, { useRef, useEffect } from "react";
import { Pokemon_Interface } from "../../types/Pokemon.interface";
import PokemonListItem from "./PokemonListItem";

interface Props {
  data:
    | {
        pages: {
          results: Pokemon_Interface[];
        }[];
      }
    | undefined;
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
}

const PokemonList = ({
  data,
  isLoading,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: Props) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (observerRef.current) {
      return observer.observe(observerRef.current);
    }
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {isLoading
          ? "Loading data. Please wait..."
          : data?.pages.flatMap((page) =>
              page.results.map(({ name, url }) => (
                <li
                  key={name}
                  className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow p-4 cursor-pointer"
                >
                  <PokemonListItem name={name} url={url} />
                </li>
              ))
            )}
      </ul>
      {isFetchingNextPage && (
        <p className="text-center text-gray-500 mt-4">
          Loading more pokemons...
        </p>
      )}
      <div ref={observerRef} className="h-1 bg-transparent"></div>
    </>
  );
};

export default PokemonList;
