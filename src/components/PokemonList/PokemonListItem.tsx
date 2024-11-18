interface Props {
  name: string;
  url: string;
}

const PokemonListItem = ({ name, url }: Props) => {
  return (
    <>
      <h4 className="capitalize mb-2 text: text-center font-bold">{name}</h4>
      <hr />
      <p>
        <a href={url} className="text-blue-500 hover:text-blue-700">
          Veiw more about pokemon <span className="capitalize">{name}</span>
        </a>
      </p>
    </>
  );
};
export default PokemonListItem;
