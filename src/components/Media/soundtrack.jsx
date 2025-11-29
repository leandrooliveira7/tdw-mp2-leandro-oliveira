import { useGetTracklistQuery } from "../../Services/spotify.js";

const Tracklist = ({ movie }) => {
  const { data, isLoading, error } = useGetTracklistQuery(movie?.title || "", {
    skip: !movie?.title,
  });

  if (isLoading) return (
    <p className="p-3 rounded-lg dark:bg-zinc-800 bg-slate-200">Carregando soundtrack...</p>
  );
  if (error) return (
    <p className="p-3 rounded-lg dark:bg-zinc-800 bg-slate-200">
      Erro ao carregar soundtrack.
    </p>
  );

  const album = data?.albums?.items?.[0];
  if (!album) return (
    <p className="p-3 rounded-lgdark:bg-zinc-800 bg-slate-200">
      Nenhuma soundtrack encontrada.
    </p>
  );

  const tracklist = {
    albumCover: album.images?.[0]?.url || "",
    albumTitle: album.name,
    artistName: album.artists?.[0]?.name || "",
    spotifyUrl: album.external_urls?.spotify || "#",
  };
  return (
    <div className="p-4">
      <div className="flex items-center gap-4 dark:bg-zinc-800 bg-slate-200 p-4 rounded-lg justify-between content-center">
        <div className="flex-shrink-0">
          <img
            className="w-70 object-cover rounded-md"
            src={tracklist.albumCover}
            alt={tracklist.albumTitle}
          />
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {tracklist.albumTitle}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {tracklist.artistName}
            </p>
          </div>

          <div className="mt-4">
            <a
              href={tracklist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
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
