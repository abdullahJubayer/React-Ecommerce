import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../store/ReduxStore";
import { addCart, deleteCart, ProductModel } from "../store/CartSlice";
import { useNavigate } from "react-router";
const ic_product = new URL("../assets/images/product.png", import.meta.url)
  .href;
const ic_add = new URL("../assets/icons/plus.png", import.meta.url).href;
const ic_minus = new URL("../assets/icons/minus.png", import.meta.url).href;

export const ProductItem: React.FC = () => {
  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    const data: ProductModel = {
      id: Math.random().toString(),
      title: "Item",
      price: 0,
      originalPrice: 0,
      priceType: "USD",
      image: "",
    };
    if (isAlreadyAdded) {
      dispatch(addCart(data));
    } else {
      dispatch(deleteCart(data));
    }
  }, [isAlreadyAdded]);

  return (
    <div
      className="relative"
      onClick={() => {
        navigator("/product-details/1");
      }}
    >
      <img
        className="w-8 h-8 absolute right-1 m-2"
        src={isAlreadyAdded ? ic_minus : ic_add}
        alt="product-img"
        onClick={() => setIsAlreadyAdded(!isAlreadyAdded)}
      />
      <img src={ic_product} alt="product-img" />
      <p>Hobo Large</p>
      <p className="line-through">$545.00 CAD</p>
      <p>$195.00 CAD</p>
    </div>
  );
};
