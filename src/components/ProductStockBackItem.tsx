const img_product = new URL("../assets/images/product.png", import.meta.url)
  .href;
const ic_right_arrow = new URL(
  "../assets/icons/right_arrow.png",
  import.meta.url
).href;

export const ProductStockBackItem: React.FC = () => {
  return (
    <div>
      <img src={img_product} alt="product-img" />
      <div className="flex items-center bg-gray-300 ">
        <button
          type="button"
          className="text-sm ps-5 py-2.5 text-center inline-flex items-center"
        >
          Choose
        </button>
        <img className="h-8" src={ic_right_arrow} alt="product-img" />
      </div>
    </div>
  );
};
