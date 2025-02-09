import React from "react";
import Image1 from "../../assets/3.png";
import Image2 from "../../assets/4.png";
import Image3 from "../../assets/5.png";

const FoodData = [
  {
    image: Image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "$09.99",
    name: "Paneer Tikka ",
    desc: "A delicious Indian dish made with grilled or sautéed cottage cheese cubes tossed with colorful bell peppers, onions, and aromatic spices. A perfect mix of smoky, spicy, and savory flavors!",
  },
  {
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Veg Salad",
    desc: "A refreshing Garden Fresh Salad loaded with crisp lettuce, juicy tomatoes, cucumbers, bell peppers, and carrots, topped with a light dressing. A healthy and tasty choice for a fresh, crunchy bite!",
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$14.99",
    name: "Blackened Steak",
    desc: "A tender, juicy cut of beef, seasoned with bold spices and pan-seared to create a crispy black crust while keeping the inside perfectly pink and flavorful.",
  },
];

const TopList = () => {
  return (
    <div className="container py-14">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our top list</p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 "
          >
            <img
              src={item.image}
              alt=""
              className="w-60 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold ">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
