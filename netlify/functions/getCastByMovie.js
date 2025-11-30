export async function handler(event, context) {
  const movieId = event.queryStringParameters.movieId;
  const token = process.env.TMDB_TOKEN;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${encodeURIComponent(
        movieId
      )}?language=en-US&append_to_response=credits`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: "Failed to fetch movie data" }),
      };
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
