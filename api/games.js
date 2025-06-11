export default async function handler(req, res) {
  const response = await fetch("https://www.freetogame.com/api/games");
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
