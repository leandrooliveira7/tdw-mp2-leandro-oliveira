import { useGetTrailerQuery } from "../../Services/youtube.js";

const Trailer = ({ movieTitle }) => {
  const { data, error, isLoading } = useGetTrailerQuery(movieTitle);

  console.log("Trailer response:", data);

  if (isLoading) return <p className="p-3 rounded-lg dark:bg-zinc-800 bg-slate-200">Carregando trailer...</p>;
  if (error) return <p className="p-3 rounded-lg dark:bg-zinc-800 bg-slate-200">Erro ao carregar trailer</p>;

  const trailer = data.items[0];

  if (!trailer) return <p className="p-3 rounded-lg dark:bg-zinc-800 bg-slate-200">Trailer não disponível</p>;

  return (
    <div className="m-5 p-4 rounded-lg dark:bg-zinc-800 bg-slate-200">
      <div className="w-full h-full">
        <iframe
          className="w-full h-64 sm:h-80 md:h-96 rounded-lg"
          src={`https://www.youtube.com/embed/${trailer.id.videoId}`}
          title={trailer.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export { Trailer };
