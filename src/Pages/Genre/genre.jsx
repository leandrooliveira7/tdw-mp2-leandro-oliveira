import { useSelector } from "react-redux";

const Genre = () => {
  //TODO: aqui faz o novo pedido à api com o género selecionado

  const selectedGenre = useSelector((state) => state.genre.selectedGenre);

  console.log(selectedGenre);
  return <div>Olá</div>;
};

export { Genre };
