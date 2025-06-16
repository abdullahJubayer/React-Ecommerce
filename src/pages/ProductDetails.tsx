import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { useProductDetails } from "../hooks/useProductDetails";
import { useParams } from "react-router";
import { ImageSlider } from "../components/ImageSlider";
const ic_add = new URL("../assets/icons/plus.png", import.meta.url).href;
const ic_minus = new URL("../assets/icons/minus.png", import.meta.url).href;

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { productDetails, loading, error } = useProductDetails(Number(id));
  const [images, setImages] = useState<Array<string>>([]);
  const [currentImgIndex, setcurrentImgIndex] = useState(0);
  useEffect(() => {
    if (productDetails?.images) setImages(productDetails.images);
  }, [productDetails]);
  const options = ["S", "M", "L", "XL", "XXL"];
  const [selected, setSelected] = useState<string>("");

  return (
    <div>
      <p className="text-sm text-center text-gray-500 my-2">
        Free shipping available on all orders!
      </p>
      <hr className="h-px border-0 bg-gray-200" />
      <NavBar />
      <hr className="h-px border-0 bg-gray-200" />
      <div className="flex flex-col md:flex-row justify-between gap-8 mx-4 md:mx-16 my-4 md:my-8">
        <div className="md:hidden">
          <ImageSlider
            images={images}
            currentImgIndex={currentImgIndex}
            setCurrentImgIndex={setcurrentImgIndex}
          />
        </div>
        <div className="hidden md:block md:w-2/3">
          <div className="grid">
            <div className="w-full">
              <img
                className="w-full h-[70vh] object-cover rounded-lg"
                src={productDetails?.images[0]}
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-4 mt-4">
              {productDetails?.images.map((image) => (
                <div key={image}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <h1 className="text-2xl">{productDetails?.title}</h1>
          <p className="text-gray-700 text-xl mt-6">Details</p>
          <p className="text-sm text-gray-500 mt-1 mb-6">
            {productDetails?.description}
          </p>
          <p className="text-gray-500 text-sm my-3">
            ${productDetails?.price.toFixed(2) || 0} CAD
          </p>
          <p className="text-gray-700 text-xs my-2">Size</p>
          <div className="flex overflow-x-scroll">
            <div className="flex gap-2 flex-wrap">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`px-4 py-2 rounded-md border 
            ${
              selected === option
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }
          `}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-xs mt-4 mb-2">Quantity</p>
          <div className="flex justify-between border border-red-100 px-4 py-2 w-1/3">
            <img className="w-6 h-6" src={ic_add} alt="product-img" />
            <p className="px-2">1</p>
            <img className="w-6 h-6" src={ic_minus} alt="product-img" />
          </div>
          <button className="w-full border border-gray-700 py-3 my-4">
            Add to cart
          </button>
          <button className="w-full bg-black text-white py-3">
            Buy it now
          </button>
          <p className="text-sm text-gray-500 my-6">
            Inspired by the structural boxy form and shape of a brick, which
            lends its name, the bag is perfectly sized for your everyday
            essentials, from a large phone to your wallet and lipstick.
          </p>
          <hr className="h-px border-0 bg-gray-200" />
        </div>
      </div>
    </div>
  );
};
