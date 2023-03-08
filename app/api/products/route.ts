import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    products: [
      {
        id: "1",
        name: "PlayStation 5 Console (Disc Version) With Controller",
        image:
          "https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=400",
        price: [
          { currency: "aed", symbol: "AED", price: 3999 },
          { currency: "dollar", symbol: "$", price: 2639.04 },
        ],
        discountPercentage: 49,
        rating: 4.5,
        reviewCount: 1847,
        isABestSeller: true,
      },
    ],
  });
}
