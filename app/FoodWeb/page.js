"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const menuItems = [
  {
    id: 1,
    name: "Chicago Pizza",
    image: "/food1.jpeg",
    cuisine: "Pizza, Beverages, Snacks, Pasta",
    price: "₹250",
    rating: "3.9 Rating",
  },
  {
    id: 2,
    name: "Bakingo",
    image: "/food1.jpeg",
    cuisine: "Bakery, Desserts, Beverages, Snacks",
    price: "₹180",
    rating: "4.3 Rating",
  },
  {
    id: 3,
    name: "Khadak Singh Da Dhaba",
    image: "/food1.jpeg",
    cuisine: "North Indian, Tandoor, Snacks",
    price: "₹200",
    rating: "3.8 Rating",
  },
  {
    id: 4,
    name: "Dhaba 99 Cafe & Kitchen",
    image: "/food1.jpeg",
    cuisine: "Indian, Chinese, Beverages",
    price: "₹250",
    rating: "3.8 Rating",
  },
  {
    id: 5,
    name: "Hotel Krishna Sagar",
    image: "/food1.jpeg",
    cuisine: "North Indian, South Indian",
    price: "₹250",
    rating: "4.6 Rating",
  },
  {
    id: 6,
    name: "Wendy's Burgers",
    image: "/food1.jpeg",
    cuisine: "Burgers, American, Snacks",
    price: "₹240",
    rating: "4.3 Rating",
  },
  {
    id: 7,
    name: "MOJO Pizza - 2X Toppings",
    image: "/food1.jpeg",
    cuisine: "Pizza, Pasta, Fast Food, Desserts",
    price: "₹250",
    rating: "4.4 Rating",
  },
  {
    id: 8,
    name: "BOX8 - Desi Meals",
    image: "/food1.jpeg",
    cuisine: "North Indian, Wraps, Biryani",
    price: "₹210",
    rating: "4.2 Rating",
  },
  {
    id: 9,
    name: "Bikanervala",
    image: "/food1.jpeg",
    cuisine: "Sweets, North Indian, Snacks",
    price: "₹200",
    rating: "4.5 Rating",
  },
  {
    id: 10,
    name: "Chinese Wok",
    image: "/food1.jpeg",
    cuisine: "Chinese, Asian, Tibetan",
    price: "₹230",
    rating: "4.1 Rating",
  },
  {
    id: 11,
    name: "White Hart Pizza",
    image: "/food1.jpeg",
    cuisine: "Italian, Pizza, Beverages",
    price: "₹260",
    rating: "4.0 Rating",
  },
  {
    id: 12,
    name: "Samosa Singh",
    image: "/food1.jpeg",
    cuisine: "Snacks, Street Food",
    price: "₹150",
    rating: "4.2 Rating",
  },
];

export default function MenuPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const itemsPerView = 5;
  const maxIndex = Math.max(0, menuItems.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <>
      <div>
        <div className="relative px-8 py-6">
          <h2 className="text-lg font-semibold text-black mb-4">
            Top restaurant chains in Noida
          </h2>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-3"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-[160px] rounded-lg bg-white"
                  onClick={(e) => {
                    setTitle(item.name);
                    const formattedTitle = item.name.replaceAll(" ", "-");
                    router.push(`/Singlepage/${encodeURIComponent(formattedTitle)}`);
                  }}
                >
                  <div className="h-[110px] w-full overflow-hidden rounded-md bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-black text-center truncate">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Buttons */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border shadow rounded-full p-2 hover:bg-gray-50 disabled:opacity-40"
          >
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border shadow rounded-full p-2 hover:bg-gray-50 disabled:opacity-40"
          >
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mx-[100px] my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {menuItems.map((item) => (
          <div
            onClick={(e) => {
              setTitle(item.name);
                    const formattedTitle = item.name.replaceAll(" ", "-");
                    router.push(`/Singlepage/${encodeURIComponent(formattedTitle)}`);
            }}
            key={item.id}
            className="my-4 h-[330px] w-[300px] rounded overflow-hidden shadow-lg mb-7 mx-auto"
          >
            <Image
              width={250}
              height={200}
              className="w-[300px] h-[180px]"
              src={item.image}
              alt={item.name}
            />
            <div className="px-6 py-2">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">{item.cuisine}</p>
            </div>
            <div className="mx-7">{item.price}</div>
            <div className="px-6 py-4 pb-5">
              <span className="inline-block bg-teal-300 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                ★ {item.rating}
              </span>
              <span className="inline-block text-black ml-[80px] py-1 text-sm font-semibold mr-2 mb-5">
                #travel
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
