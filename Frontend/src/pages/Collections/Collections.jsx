import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { Cards, Title } from "../../components";
import { ShopContext } from "../../context/ShopContext";

function Collections() {
  //Context Provider
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [category, setCategory] = useState([]);

  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState(["Relevent"]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prevCategory) =>
        prevCategory.filter((item) => item !== e.target.value)
      );
    } else {
      setCategory((prevCategory) => [...prevCategory, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prevCategory) =>
        prevCategory.filter((item) => item !== e.target.value)
      );
    } else {
      setSubCategory((prevCategory) => [...prevCategory, e.target.value]);
    }
  };

  const applyFilterToProducts = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilteredProducts(productsCopy);
  };

  const sortProducts = () => {
    let filterProductsCopy = filteredProducts.slice();

    switch (sortType) {
      case "Low-to-High":
        setFilteredProducts(
          filterProductsCopy.sort((a, b) => a.price - b.price)
        );
        break;

      case "High-to-Low":
        setFilteredProducts(
          filterProductsCopy.sort((a, b) => b.price - a.price)
        );
        break;

      default:
        applyFilterToProducts();
        break;
    }
  };

  useEffect(() => {
    applyFilterToProducts();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300">
      <div className="max-w-60 w-52">
        <p
          onClick={() => setShowFilter((prev) => !prev)}
          className="uppercase font-medium text-xl flex gap-2 items-center"
        >
          filters
          <img
            src={assets.dropdown_icon}
            className={`h-3  sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt="Dropdown Icon"
          />
        </p>
        <div
          className={`border-2 border-gray-300 p-4 mt-6 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          <h3>CATIGORIES</h3>
          <p className="flex gap-2 text-sm mt-2 items-center text-gray-500">
            <input type="checkbox" value={"Men"} onChange={toggleCategory} />{" "}
            Men
          </p>
          <p className="flex gap-2 text-sm mt-2 items-center text-gray-500">
            <input type="checkbox" value={"Women"} onChange={toggleCategory} />{" "}
            Women
          </p>
          <p className="flex gap-2 text-sm mt-2 items-center text-gray-500">
            <input type="checkbox" value={"Kids"} onChange={toggleCategory} />{" "}
            Kids
          </p>
        </div>
        <div
          className={`border-2 border-gray-300 p-4 mt-6 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          <h3>TYPES</h3>
          <p className="flex gap-2 text-sm mt-2 items-center text-gray-500">
            <input
              type="checkbox"
              value={"Winterwear"}
              onChange={toggleSubCategory}
            />{" "}
            Winter-Wear
          </p>
          <p className="flex gap-2 text-sm mt-2 items-center text-gray-500">
            <input
              type="checkbox"
              value={"Topwear"}
              onChange={toggleSubCategory}
            />{" "}
            Top-Wear
          </p>
          <p className="flex gap-2 text-sm mt-2 items-center text-gray-500">
            <input
              type="checkbox"
              value={"Bottomwear"}
              onChange={toggleSubCategory}
            />{" "}
            Bottom-Wear
          </p>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title textOne={"ALL"} textTwo={"CATEGORIES"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-none text-xs  sm:text-sm text-gray-600 outline-none"
          >
            <option className="" value="Relevent">
              Sort by: Relevent
            </option>
            <option className="" value="Low-to-High">
              Sort by: Low-to-High
            </option>
            <option className="" value="High-to-Low">
              Sort by: High-to-Low
            </option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts?.map((item, index) => (
            <Cards
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
