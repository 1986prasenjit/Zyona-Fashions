import React, { useContext, useEffect, useState } from "react";
import Title from "../Title/Title";
import { ShopContext } from "../../context/ShopContext";
import Cards from "../Cards/Cards";

const BestSeller = () => {
  const { products } = useContext(ShopContext);

  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter(
      (product) => product.bestseller === true
    );
    setBestSeller(bestProducts.slice(0, 5));
  }, []);
  return (
    <>
      {/* Best Seller */}
      <div className="text-center py-8 text-3xl">
        <Title textOne={"BEST"} textTwo={"SELLERS"} />
        <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm">
          Discover our trending collection which will be the perfect pieces to
          elevate your wardrobe.
        </p>
      </div>

      {/*Rendering Products */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 cardResponsive">
        {bestSeller?.map((item, index) => (
          <Cards
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default BestSeller;
