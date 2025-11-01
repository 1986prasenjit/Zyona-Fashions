import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { ShopContext } from "../../context/ShopContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { showSearch, setShowSearch, search, setSearch } =
    useContext(ShopContext);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collections")) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [location]);

  return showSearch && isVisible ? (
    <>
      <div className="border-t border-b bg-gray-50 text-center p-2">
        <div className="inline-flex justify-center items-center border border-gray-400 px-2 py-1 sm:px-4 sm:py-3 w-2/3 sm:w-1/2 rounded-2xl mr-2">
          <input
            type="text"
            className="flex-1 outline-none"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-3 sm:w-5 font-bold cursor-pointer"
            alt="Searh Icon for search"
          />
        </div>
        <img
          onClick={() => setShowSearch(false)}
          src={assets.cross_icon}
          className="inline  w-3 sm:w-5 font-bold cursor-pointer"
          alt="Cross Icon to close the search bar"
        />
      </div>
    </>
  ) : null;
};

export default SearchBar;
