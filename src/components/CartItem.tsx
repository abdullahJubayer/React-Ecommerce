import React from "react";
import { ProductModel } from "../hooks/useProducts";
import { useAppDispatch } from "../store/ReduxStore";
import { deleteCart, updateCart } from "../store/CartSlice";
const ic_product = new URL("../assets/images/product.png", import.meta.url)
  .href;
const ic_add = new URL("../assets/icons/plus.png", import.meta.url).href;
const ic_minus = new URL("../assets/icons/minus.png", import.meta.url).href;
const ic_detele = new URL("../assets/icons/delete.png", import.meta.url).href;

export const CartItem: React.FC<{ item: ProductModel }> = ({ item }) => {
  const dispatch = useAppDispatch();
  const updateCartItem = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    isAdd: boolean
  ) => {
    e.stopPropagation();
    const updatedCount = isAdd
      ? item?.purcheseCount + 1
      : item?.purcheseCount - 1;
    const updatedItem = {
      ...item,
      purcheseCount: isAdd ? updatedCount : Math.max(updatedCount, 1),
    };
    dispatch(updateCart(updatedItem));
  };
  const deleteCartItem = () => {
    dispatch(deleteCart(item));
  };

  return (
    <div className="flex items-center mx-8 my-4 md:mx-16 md:my-8">
      <img
        className="min-w-32 max-h-24 object-contain"
        src={item?.image}
        alt="product-img"
      />
      <div className="flex-1"></div>
      <div className="flex flex-col flex-1">
        <p className="text-md text-gray-500 line-clamp-1">{item?.title}</p>
        <p className="text-sm text-gray-500 my-2">Color: Cotton Candy</p>
        <div className="flex items-end">
          <div className="flex justify-between min-w-32 border border-red-100 px-4 py-2">
            <img
              className="w-6 h-6"
              src={ic_add}
              alt="product-img"
              onClick={(e) => updateCartItem(e, true)}
            />
            <p className="px-2">{item?.purcheseCount}</p>
            <img
              className="w-6 h-6"
              src={ic_minus}
              alt="product-img"
              onClick={(e) => updateCartItem(e, false)}
            />
          </div>
          <img
            className="w-6 h-6 ms-2"
            src={ic_detele}
            alt="product-img"
            onClick={deleteCartItem}
          />
        </div>
      </div>
      <div className="flex-1"></div>
      <p className="w-24 break-words text-end">
        ${item?.originalPrice + " CAD"}
      </p>
    </div>
  );
};
