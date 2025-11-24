import { useGetTrailerQuery } from "../../Services/youtube.js";

const Trailer = ({ movieTitle }) => {
  const { data, error, isLoading } = useGetTrailerQuery(movieTitle);

  console.log("Trailer response:", data);

  if (isLoading) return <p>Carregando trailer...</p>;
  if (error) return <p>Erro ao carregar trailer</p>;

  const trailer = data.items[0];

  if (!trailer) return <p>Trailer não disponível</p>;

  return (
    <div className="p-4 m-5 justify-between">
      <div>
        <iframe rounded-lg
          width="560"
          height="315"
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
