export async function handler(event, context) {
  const genreId = event.queryStringParameters.genreId;
  const token = process.env.TMDB_TOKEN;

  if (!genreId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "genreId não definido" }),
    };
  }

  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "TMDB_TOKEN não definido" }),
    };
  }

  try {
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
