import { ProductItem } from "./ProductItem";
import { ProductStockBackItem } from "./ProductStockBackItem";

const img_product = new URL("../assets/images/back_item1.png", import.meta.url)
  .href;
const img_product2 = new URL("../assets/images/back_item2.png", import.meta.url)
  .href;

export const ProductStockBackLayout: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16">
      <h3 className="text-4xl font-normal text-gray-600 mb-8 mt-16">
        Back in stock!
      </h3>
      <div className="flex gap-4 bg-[#F0F0F0]">
        <div className="w-2/3">
          <ProductStockBackItem image={img_product} />
        </div>
        <div className="flex flex-col w-1/3 gap-4">
          <ProductStockBackItem image={img_product2} />
          <ProductStockBackItem image={img_product2} />
        </div>
      </div>
    </div>
  );
};
