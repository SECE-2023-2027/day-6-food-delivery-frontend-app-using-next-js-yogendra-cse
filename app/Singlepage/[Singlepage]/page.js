import Image from "next/image";
import Navbar from "@/app/Components/Navbar";
const restaurantDetails = {
  name: "Bikanervala",
  status: "Closed & not delivering",
  alert:
    "Uh-oh! Outlet is not accepting orders at the moment. They should be back by 11:00 AM tomorrow",
  rating: "3.6",
  reviews: "100+ ratings",
  priceForTwo: "₹99 for two",
  cuisines: "South Indian, Chinese",
  outlet: "Crossing Republic",
  menu: [
    {
      id: 1,
      name: "La Mushroom Pizza",
      price: "₹175",
      description:
        "Farm Mushroom freshly baked Pizza with sweet red capsicum, spicy & creamy jalapeno cheese sauce...",
      image: "/pizza1.jpeg",
    },
    {
      id: 2,
      name: "La Capsicum Pizza",
      price: "₹125",
      description:
        "Roasted capsicum freshly baked Pizza with exotic cheese blend...",
      image: "/pizza2.jpeg",
    },
  ],
};

export default function MenuDetailPage({ params }) {
  return (<>
    <Navbar />
    <div className="px-10 py-6">
      {/* Show the dynamic param */}
      <div className="mb-4 text-xs text-gray-500">
        <span className="font-extrabold text-5xl text-black">{params.Singlepage}</span>
      </div>

      <div className="flex gap-10">
        <h1 className="text-2xl font-bold">{restaurantDetails.name}</h1>
        <div className="flex gap-6 border-b border-gray-200 text-sm font-medium">
          <button className="border-b-2 border-orange-500 pb-1">Order Online</button>
          <button className="pb-1">Dineout</button>
        </div>
      </div>

      <div className="bg-orange-100 text-sm text-orange-700 px-4 py-2 my-4 rounded-md w-fit">
        {restaurantDetails.alert}
      </div>

      <div className="text-sm text-gray-800 mb-6">
        <p>
          <strong>{restaurantDetails.rating}</strong> ({restaurantDetails.reviews}) ·{" "}
          {restaurantDetails.priceForTwo}
        </p>
        <p className="text-orange-700 underline">{restaurantDetails.cuisines}</p>
        <p className="text-gray-700">Outlet: {restaurantDetails.outlet}</p>
        <p className="font-semibold text-black">{restaurantDetails.status}</p>
      </div>

      <h2 className="text-md font-semibold mb-2">
        Recommended ({restaurantDetails.menu.length})
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {restaurantDetails.menu.map((item) => (
          <div key={item.id} className="flex items-start gap-4 border-b pb-4">
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm">{item.price}</p>
              <p className="text-gray-500 text-xs mt-1">{item.description}</p>
            </div>
            <div className="relative h-[100px] w-[130px] rounded overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={130}
                height={100}
                className="w-[200px] h-full rounded-md mb-[100px]"
              />
              <button className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-white border rounded text-sm px-3 py-0.5 shadow-sm hover:bg-gray-50">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
