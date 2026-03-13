import { nftListings } from "@/lib/data";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") || "6");
  const page = parseInt(searchParams.get("page") || "1");

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = nftListings.slice(start, end);

  return Response.json({
    success: true,
    data: paginated,
    total: nftListings.length,
    page,
    limit,
  });
}
