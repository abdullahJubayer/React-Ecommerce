import React, { use, useEffect, useState } from "react";
import { useAppDispatch } from "../store/ReduxStore";
import { addCart, deleteCart } from "../store/CartSlice";
import { useNavigate } from "react-router";
import { ProductModel } from "../hooks/useProducts";
const ic_product = new URL("../assets/images/product.png", import.meta.url)
  .href;
const ic_add = new URL("../assets/icons/plus.png", import.meta.url).href;
const ic_minus = new URL("../assets/icons/minus.png", import.meta.url).href;

export const ProductItem: React.FC<{ item: ProductModel }> = ({ item }) => {
  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    if (isAlreadyAdded) {
      dispatch(addCart(item));
    } else {
      dispatch(deleteCart(item));
    }
  }, [isAlreadyAdded]);

  return (
    <div
      className="relative shadow-sm rounded-md p-4 bg-white hover:shadow-lg hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer"
      onClick={() => {
        navigator("/product-details/1");
      }}
    >
      <img
        className="w-8 h-8 bg-gray-50 rounded-full absolute right-1 m-2"
        src={isAlreadyAdded ? ic_minus : ic_add}
        alt="product-img"
        onClick={(e) => {
          e.stopPropagation();
          setIsAlreadyAdded(!isAlreadyAdded);
        }}
      />
      <img className="h-32" src={item?.image} alt="product-img" />
      <p className="line-clamp-2">{item?.title}</p>
      <p className="line-through">${item?.price?.toFixed(2)} CAD</p>
      <p>${item?.originalPrice} CAD</p>
    </div>
  );
};
