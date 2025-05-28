import { ProductItem } from "./ProductItem";
import { ProductStockBackItem } from "./ProductStockBackItem";
const ic_product = new URL("../assets/images/product.png", import.meta.url)
  .href;
export const ProductStockBackLayout: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16">
      <h3 className="text-4xl font-normal text-gray-600 mb-8 mt-16">
        Back in stock!
      </h3>
      <div className="flex gap-4">
        {/* <ProductItem />
        <ProductItem />
        <ProductItem /> */}
      </div>
    </div>
  );
};
