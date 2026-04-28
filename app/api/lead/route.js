export async function POST(req) {
  const data = await req.json();

  console.log("Lead:", data);

  return Response.json({ success: true });
}
