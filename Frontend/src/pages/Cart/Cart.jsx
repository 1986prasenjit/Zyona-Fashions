import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

import { Button, CartTotal, Title } from "../../components";
import { assets } from "../../assets/assets/frontend_assets/assets";

function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempCartData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item]) {
          tempCartData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempCartData);
  }, [cartItems]);

  return (
    <>
      <div className="border-t pt-14">
        <div className="text-2xl mb-3">
          <Title textOne={"YOUR"} textTwo={"CART"} />
        </div>
        <div>
          {cartData?.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div
                key={index}
                className="border-t border-b py-4 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    alt="product image which is added to the cart"
                    className="w-16 sm:w-20 lg:w-32"
                  />
                  <div>
                    <p className="text-sm sm:text-lg lg:text-xl font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency} {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 bg-slate-50">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                />

                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  alt="Delete Item Icon Image"
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end mt-4">
              <Button
                children={"PROCEED TO CHECKOUT"}
                buttonType="black"
                onClickHandler={() => navigate("/place-order")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
