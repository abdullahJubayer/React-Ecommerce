import { ProductStockBackItem } from "./ProductStockBackItem";

export const ProductStockBackLayout: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16">
      <h3 className="text-4xl font-normal text-gray-600 mb-8 mt-16">
        Back in stock!
      </h3>
      <div className="flex">
        <ProductStockBackItem />
        <div className="flex-col">
          <ProductStockBackItem />
          <ProductStockBackItem />
        </div>
      </div>
    </div>
  );
};
