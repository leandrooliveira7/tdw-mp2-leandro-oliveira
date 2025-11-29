import fetch from "node-fetch";

export async function handler(event, context) {
  const genreId = event.queryStringParameters.genreId;
  const token = process.env.TMDB_TOKEN;

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&with_genres=${encodeURIComponent(
      genreId
    )}`,
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
