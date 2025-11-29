import fetch from "node-fetch";

export async function handler(event, context) {
  const movieId = event.queryStringParameters.movieId;
  const token = process.env.TMDB_TOKEN;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${encodeURIComponent(
      movieId
    )}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
