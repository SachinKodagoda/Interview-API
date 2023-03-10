import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    products: [
      {
        id: "1",
        type: "electronic",
        name: "PlayStation 5 Console (Disc Version) With Controller",
        image:
          "https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=jpgf&width=800",
        price: [
          { currency: "aed", symbol: "AED", price: 3999.0 },
          { currency: "dollar", symbol: "$", price: 1079.73 },
        ],
        discountPercentage: 52,
        rating: 4.6,
        reviewCount: 1857,
        isABestSeller: true,
        isANewArrival: true,
        isExpress: true,
      },
      {
        id: "2",
        type: "electronic",
        name: "AirPods Pro (2nd generation) White",
        image:
          "https://f.nooncdn.com/p/v1662647998/N53348815A_1.jpg?format=jpgf&width=800",
        price: [
          { currency: "aed", symbol: "AED", price: 949.0 },
          { currency: "dollar", symbol: "$", price: 256.23 },
        ],
        discountPercentage: 16,
        rating: 3.9,
        reviewCount: 750,
        isABestSeller: true,
        isANewArrival: true,
        isExpress: true,
      },
      {
        id: "3",
        type: "electronic",
        name: "Watch Series 8 GPS 45mm Aluminium Case With Midnight Sport Band",
        image:
          "https://f.nooncdn.com/p/v1662647992/N53349205A_1.jpg?format=jpgf&width=800",
        price: [
          { currency: "aed", symbol: "AED", price: 1719.0 },
          { currency: "dollar", symbol: "$", price: 464.13 },
        ],
        discountPercentage: 11,
        rating: 4.7,
        reviewCount: 255,
        isABestSeller: true,
        isANewArrival: true,
        isExpress: true,
      },
      {
        id: "4",
        type: "electronic",
        name: "Airpods 2nd Gen With Charging Case White",
        image:
          "https://f.nooncdn.com/p/v1668531488/N22732308A_1.jpg?format=jpgf&width=800",
        price: [
          { currency: "aed", symbol: "AED", price: 679.0 },
          { currency: "dollar", symbol: "$", price: 183.33 },
        ],
        discountPercentage: 32,
        rating: 4.6,
        reviewCount: 5475,
        isABestSeller: true,
        isANewArrival: true,
        isExpress: true,
      },
      {
        id: "5",
        type: "electronic",
        name: "iPhone 14 Pro Max Physical Dual Sim 256GB Deep Purple 5G With FaceTime",
        image:
          "https://f.nooncdn.com/p/v1662964834/N53346828A_1.jpg?format=jpgf&width=800",
        price: [
          { currency: "aed", symbol: "AED", price: 5099.0 },
          { currency: "dollar", symbol: "$", price: 1376.73 },
        ],
        discountPercentage: 10,
        rating: 4.0,
        reviewCount: 155,
        isABestSeller: false,
        isANewArrival: false,
        isExpress: true,
      },
      {
        id: "6",
        type: "electronic",
        name: "PlayStation 4 Slim 500GB Console with Controller",
        image:
          "https://f.nooncdn.com/p/v1667828235/N11963549A_1.jpg?format=jpgf&width=800",
        price: [
          { currency: "aed", symbol: "AED", price: 1202.0 },
          { currency: "dollar", symbol: "$", price: 324.54 },
        ],
        discountPercentage: 10,
        rating: 4.7,
        reviewCount: 350,
        isABestSeller: false,
        isANewArrival: false,
        isExpress: true,
      },
      {
        id: "7",
        type: "clothing",
        name: "Logo Print T-Shirt White",
        image:
          "https://f.nooncdn.com/p/v1623226258/N47843275V_1.jpg?format=jpgf&width=800",
        price: [
          { currency: "aed", symbol: "AED", price: 149.0 },
          { currency: "dollar", symbol: "$", price: 40.23 },
        ],
        discountPercentage: 42,
        rating: 4.3,
        reviewCount: 38,
        isABestSeller: false,
        isANewArrival: false,
        isExpress: true,
      },
      {
        id: "8",
        type: "clothing",
        name: "Essentials Tapered Sweatpants Black/White",
        image:
          "https://f.nooncdn.com/p/v1669715182/N43231730V_1.jpg?format=jpgf&width=800",
        price: [
          { currency: "aed", symbol: "AED", price: 209.0 },
          { currency: "dollar", symbol: "$", price: 56.43 },
        ],
        discountPercentage: 42,
        rating: 4.1,
        reviewCount: 94,
        isABestSeller: false,
        isANewArrival: false,
        isExpress: true,
      },
      {
        id: "9",
        type: "clothing",
        name: "Kids Adicolor Skater Dress Black/White",
        image:
          "https://f.nooncdn.com/p/v1608965109/N39842013V_1.jpg?format=jpgf&width=800",
        price: [
          { currency: "aed", symbol: "AED", price: 189.0 },
          { currency: "dollar", symbol: "$", price: 51.03 },
        ],
        discountPercentage: 39,
        rating: 4.4,
        reviewCount: 9,
        isABestSeller: false,
        isANewArrival: false,
        isExpress: true,
      },
    ],
  });
}
