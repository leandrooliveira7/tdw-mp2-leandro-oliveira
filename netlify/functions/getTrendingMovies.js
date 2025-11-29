import fetch from "node-fetch";

export async function handler(event, context) {
  const query = event.queryStringParameters.query;
  const token = process.env.TMDB_TOKEN;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}&include_adult=false&include_video=false&language=en-US`,
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
