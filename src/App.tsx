import React from "react";
import { useGetPokemons } from "./api/useGetPokemons";
import PokemonList from "./components/PokemonList/PokemonList";

function App() {
  const {
    data,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetPokemons();

  if (isError) {
    return <div>Sorry, something went wrong</div>;
  }

  return (
    <div>
      <h1 className="text: text-center text-[25px] font-bold mt-2.5 mb-2.5">
        Pokémon List
      </h1>
      <PokemonList
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
}

export default App;
