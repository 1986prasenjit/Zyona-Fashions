import { createContext, useEffect, useState } from "react";

import { products } from "../assets/assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";

  const delieveryFee = 10;

  const [search, setSearch] = useState("");

  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState({});

  const navigate = useNavigate();

  //function to add the items into the cart
  const addToCart = async (itemId, size) => {
    //if no size is selected will not allow to move further
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    //create a deep copy of the cart data
    const cartData = structuredClone(cartItems);

    //check if cartData with the particular itemId is present or not
    if (cartData[itemId]) {
      //if present then increase the count by ONE
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      //check if with the same itemId but with different size
      else {
        cartData[itemId][size] = 1;
      }
    }
    //if not present then create one
    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    //at last cart data to the useState variable
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          toast.error("Failed to add items, please try after some time");
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartTotal = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.price * cartItems[items][item];
        }
      }
    }
    return totalAmount;
  };

  const value = {
    currency,
    delieveryFee,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
    updateQuantity,
    getCartTotal,
    navigate,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
