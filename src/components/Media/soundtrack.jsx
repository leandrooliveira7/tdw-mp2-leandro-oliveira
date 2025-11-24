import { useGetTracklistQuery } from "../../Services/spotify.js";

const Tracklist = ({ movie }) => {
  const { data, isLoading, error } = useGetTracklistQuery(movie?.title || "", {
    skip: !movie?.title,
  });

  if (isLoading) return <p>Carregando soundtrack...</p>;
  if (error) return <p>Erro ao carregar soundtrack.</p>;

  const album = data?.albums?.items?.[0];
  if (!album) return <p>Nenhuma soundtrack encontrada.</p>;

  const tracklist = {
    albumCover: album.images?.[0]?.url || "",
    albumTitle: album.name,
    artistName: album.artists?.[0]?.name || "",
    spotifyUrl: album.external_urls?.spotify || "#",
  };
  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-shrink-0">
          <img
            className="h-24 w-24 sm:h-32 sm:w-32 object-cover rounded-md"
            src={tracklist.albumCover}
            alt={tracklist.albumTitle}
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {tracklist.albumTitle}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            {tracklist.artistName}
          </p>

          <div className="mt-2">
            <a
              href={tracklist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
              aria-label="Open album on Spotify"
            >
              Open in Spotify →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Tracklist };
