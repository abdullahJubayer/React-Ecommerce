import { ProductStockBackItem } from "./ProductStockBackItem";

export const ProductStockBackLayout: React.FC = () => {
  return (
    <div className="flex mx-4">
      <div>
        <ProductStockBackItem />
      </div>
      <div className="flex-1">
        <ProductStockBackItem />
        <ProductStockBackItem />
      </div>
    </div>
  );
};
