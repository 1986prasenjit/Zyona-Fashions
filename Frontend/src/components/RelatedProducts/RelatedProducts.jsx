import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title/Title";
import Cards from "../Cards/Cards";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);

      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);
  return (
    <>
      <div className="mt-20">
        <div className="text-center">
          <Title textOne={"RELATED"} textTwo={"PRODUCTS"} />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3 mt-4">
          {relatedProducts?.map((item, index) => (
            <Cards
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
