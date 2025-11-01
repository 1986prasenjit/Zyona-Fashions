import React, { useContext } from "react";
import { Button, Title } from "../../components";
import { ShopContext } from "../../context/ShopContext";

export default function Orders() {
  const { products = [], currency = "$" } = useContext(ShopContext) || {};

  return (
    <>
      <div className="border-t pt-20 border-b">
        <Title textOne={"MY"} textTwo={"ORDERS"} />
      </div>

      <div className="flex flex-col gap-4 px-4 py-6 w-full mx-auto">
        {products?.slice(1, 4).map((item, index) => (
          <article
            key={index}
            className="flex flex-col md:flex-row items-start gap-4 p-4 bg-white shadow-sm hover:shadow-md rounded-md transition-shadow duration-200"
          >
            {/* Image */}
            <img
              src={item?.image?.[0]}
              alt={`${item?.name} thumbnail`}
              className="w-24 h-24 md:w-28 md:h-28 object-cover rounded"
            />

            <div className="flex-1 flex flex-col justify-between gap-3 w-full">
              <div>
                <h3 className="font-medium text-base">{item?.name}</h3>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-2 w-full">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                    <span>
                      {currency} {item?.price}
                    </span>
                    <span>Quantity: 1</span>
                    <span>Size: M</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span
                      className="inline-block w-2 h-2 rounded-full bg-green-500"
                      aria-hidden="true"
                    />
                    <span>Ready to Ship</span>
                  </div>

                  {/* Button: full width on small screens, auto width on md+ */}
                  <div className="w-full md:w-auto shrink-0">
                    <Button children="Track Order" buttonType="success" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Date: 25th July, 2025
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
