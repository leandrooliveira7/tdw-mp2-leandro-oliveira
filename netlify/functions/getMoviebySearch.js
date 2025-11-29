export async function handler(event, context) {
  const query = event.queryStringParameters.query;
  const token = process.env.TMDB_TOKEN;

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Query não definida" }),
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
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&include_adult=false&include_video=false&language=en-US`,
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
