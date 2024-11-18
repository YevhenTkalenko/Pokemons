interface Props {
  offsetPokemons: number;
  setOffsetPokemons: React.Dispatch<React.SetStateAction<number>>;
}
const PaginationButtons = ({ offsetPokemons, setOffsetPokemons }: Props) => {
  return (
    <div>
      <button
        disabled={offsetPokemons === 1}
        onClick={() => setOffsetPokemons((p) => p - 1)}
      >
        Prev
      </button>
      <button onClick={() => setOffsetPokemons((p) => p + 1)}>Next</button>
    </div>
  );
};
export default PaginationButtons;
