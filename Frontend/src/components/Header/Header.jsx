import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { useContext, useState } from "react";
import { SearchBar } from "../../components";
import { ShopContext } from "../../context/ShopContext";
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);
  return (
    <>
      <nav className="flex items-center justify-between py-4">
        {/*LEFT SIDE OF THE NAV */}
        <Link to="/" className="flex items-center">
          <img src={assets.webLogo2} className="w-20" alt="Company Logo" />
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-black uppercase tracking-widest">
            Zyona
          </h1>
        </Link>

        {/*MIDDLE OF THE NAV */}
        <ul className="hidden sm:flex gap-5 items-center">
          <NavLink to="/">
            <p className="sm:text-xs lg:text-[15px] text-gray-700 uppercase font-semibold">
              Home
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
          <NavLink to="/collections">
            <p className="sm:text-xs lg:text-[15px] text-gray-700 uppercase font-semibold">
              Collections
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
          <NavLink to="/about">
            <p className="sm:text-xs lg:text-[15px] text-gray-700 uppercase font-semibold">
              About
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
          <NavLink to="/contact">
            <p className="sm:text-xs lg:text-[15px] text-gray-700 uppercase font-semibold">
              Contact
            </p>
            <hr className="hidden w-full border-none h-[2px] bg-red-500" />
          </NavLink>
        </ul>

        {/*RIGHT SIDE OF THE NAV */}
        <div className="flex items-center gap-6">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-3 sm:w-5 cursor-pointer"
            alt=""
          />

          <div className="group relative">
            <Link to="/login">
              <img
                className="w-3 sm:w-5 cursor-pointer"
                src={assets.profile_icon}
                alt=""
              />
            </Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">Logout</p>
                <p className="cursor-pointer hover:text-black">Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              className="w-3 sm:w-5 cursor-pointer"
              alt=""
            />
            <p className="absolute -bottom-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1 rounded">
              {getCartCount()}
            </p>
          </Link>
          <img
            onClick={() => setIsVisible(true)}
            src={assets.menu_icon}
            className="w-3 cursor-pointer sm:hidden"
            alt="Mobile Menu Icon Image"
          />
        </div>

        {/*MOBILE MENU FOR SMALL SCREEN*/}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            isVisible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setIsVisible(false)}
              className="flex items-center gap-4 p-3"
            >
              <img
                src={assets.dropdown_icon}
                alt="Mobile menu closing button"
                className="cursor-pointer h-4 rotate-180"
              />
              <p>BACK</p>
            </div>
            <NavLink
              onClick={() => setIsVisible(false)}
              className="py-2 pl-6 border border-gray-400 text-md font-bold uppercase"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setIsVisible(false)}
              className="py-2 pl-6 border border-gray-400 text-md font-bold uppercase"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setIsVisible(false)}
              className="py-2 pl-6 border border-gray-400 text-md font-bold uppercase"
              to="/collections"
            >
              Collection
            </NavLink>
            <NavLink
              onClick={() => setIsVisible(false)}
              className="py-2 pl-6 border border-gray-400 text-md font-bold uppercase"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
      <SearchBar />
    </>
  );
};

export default Header;
