import fetch from "node-fetch";

export async function handler(event, context) {
  const token = process.env.TMDB_TOKEN;

  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`TMDB error: ${res.status}`);
    }

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
