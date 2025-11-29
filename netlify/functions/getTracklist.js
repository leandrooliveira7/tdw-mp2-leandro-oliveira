export async function handler(event) {
  const movieTitle = event.queryStringParameters.title;

  if (!movieTitle) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing 'title' parameter" }),
    };
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!tokenResponse.ok) {
    const text = await tokenResponse.text();
    return { statusCode: tokenResponse.status, body: text };
  }

  const { access_token } = await tokenResponse.json();

  // Faz pedido da tracklist
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    movieTitle + " Soundtrack"
  )}&type=album&limit=1`;

  const searchResponse = await fetch(searchUrl, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const data = await searchResponse.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
}
