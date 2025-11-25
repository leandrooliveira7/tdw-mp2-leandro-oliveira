export async function handler(event) {
  const movieTitle = event.queryStringParameters.title;

  if (!movieTitle) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing 'title' parameter" }),
    };
  }

  const key = process.env.GOOGLE_API_KEY; // variável segura do Netlify
  const query = encodeURIComponent(movieTitle + " trailer");
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}&type=video&maxResults=1`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
}
