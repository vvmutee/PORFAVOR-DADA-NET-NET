export default async function handler(req, res) {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "city is required" });
  }

  try {
    const response = await fetch(
      `https://api.cdek.ru/v2/pvz?cityName=${encodeURIComponent(city)}`,
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Proxy error", details: error });
  }
}
