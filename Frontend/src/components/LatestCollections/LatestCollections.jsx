import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Cards, Title } from "../../components";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <>
      {/*LATEST COLLECTION */}
      <div className="text-center py-8 text-3xl">
        <Title textOne={"LATEST"} textTwo={"COLLECTIONS"} />
        <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm">
          Discover the newest additions to our collection. From trendy apparel
          to stylish accessories, find the perfect pieces to elevate your
          wardrobe.
        </p>
      </div>

      {/*Rendering Products */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 cardResponsive">
        {latestProducts?.map((item, index) => (
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

export default LatestCollections;
