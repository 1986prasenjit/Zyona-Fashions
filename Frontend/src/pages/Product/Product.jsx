import { useContext, useEffect, useState } from "react";

import { ShopContext } from "../../context/ShopContext";

import { useParams } from "react-router-dom";

import { assets } from "../../assets/assets/frontend_assets/assets";

import { Cards, RelatedProducts, Title } from "../../components";

function Product() {
  const { products, currency, addToCart } = useContext(ShopContext);

  const { productId } = useParams();

  const [productData, setProductData] = useState([]);

  const [image, setImage] = useState("");

  const [size, setSize] = useState("");

  const fetchProduct = async () => {
    products?.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-2 transition-opacity ease-in duration-500 opacity-100 border-gray-200">
      <div className="flex flex-col gap-12 sm:flex-row ">
        <div className="flex-1 flex-col-reverse flex gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto overflow-y-hidden justify-between sm:justify-normal w-full sm:w-[18.7%]">
            {productData?.image?.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt="Image of the Product for different angel"
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            {image && (
              <img
                src={image}
                alt="Image of the Product"
                className="w-full object-cover h-auto"
              />
            )}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-medium mt-2 text-2xl">{productData.name}</h3>
          <div className="flex items-center gap-1 mt-4">
            <img
              src={assets.star_icon}
              className="w-3.5"
              alt="star icon image where review is shown"
            />
            <img
              src={assets.star_icon}
              className="w-3.5"
              alt="star icon image where review is shown"
            />
            <img
              src={assets.star_icon}
              className="w-3.5"
              alt="star icon image where review is shown"
            />
            <img
              src={assets.star_icon}
              className="w-3.5"
              alt="star icon image where review is shown"
            />
            <img
              src={assets.star_dull_icon}
              className="w-3.5"
              alt="star icon image where review is shown"
            />
            <p className="ml-2">(122)</p>
          </div>
          <p className="mt-4 text-4xl font-semibold">
            {currency} {productData.price}
          </p>
          <p className="mt-4 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="mt-8 text-xl">
            <p className="text-[18px]">Select size</p>
            <div className="flex items-center gap-2 mt-4">
              {productData?.sizes?.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`p-2 w-10 h-10 text-sm rounded border transition ${
                    size === item
                      ? "border-red-500 bg-red-100 text-red-600"
                      : "border-gray-300 hover:border-red-400"
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() => addToCart(productData._id, size)}
              className="bg-red-500 active:bg-red-800 px-4 py-2 sm:px-8 sm:py-3 rounded text-white mt-6 text-sm"
            >
              ADD TO CART
            </button>
            <hr className="w-full border border-gray-200 mt-8" />
            <div className="mt-8">
              <p className="text-sm text-gray-500">100% Original product.</p>

              <p className="text-sm text-gray-500">
                Cash on delivery is available on this product.
              </p>

              <p className="text-sm text-gray-500">
                Easy return and exchange policy within 7 days.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-2 border-gray-300 text-sm ">
            Description
          </b>
          <p className="border px-5 py-2 border-gray-300 text-sm ">
            Review (122)
          </p>
        </div>
        <div className="flex flex-col p-6 gap-4 text-sm border border-gray-300 text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="text-center">
      <h1 className="text-6xl uppercase mt-10 font-bold text-red-600">
        No Product Found
      </h1>
    </div>
  );
}

export default Product;
