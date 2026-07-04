
export default async function handler(req) {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type,Authorization"
      }
    })
  }
  const url = new URL(req.url);
  url.hostname = "api.openai.com";
  const res = await fetch(new Request(url, req));
  const newRes = new Response(res.body, res);
  newRes.headers.set("Access-Control-Allow-Origin", "*");
  return newRes;
}
export const config = { runtime: "edge" };
