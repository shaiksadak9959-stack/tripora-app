export async function GET() {
  return Response.json({
    ok: true,
    service: "Tripora API",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
}