import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title/Title";

const CartTotal = () => {
  const { currency, delieveryFee, getCartTotal } = useContext(ShopContext);
  return (
    <>
      <div className="w-full">
        <div className="text-2xl">
          <Title textOne={"CART"} textTwo={"TOTAL"} />
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>
              {currency} {getCartTotal()}.00
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>
              {currency} {delieveryFee}.00
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <b>Grand Total</b>
            <b>
              {currency}{" "}
              {getCartTotal() === 0 ? 0 : getCartTotal() + delieveryFee}.00
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
