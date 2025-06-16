const ic_right_arrow = new URL(
  "../assets/icons/arrow_right.png",
  import.meta.url
).href;

export const ProductStockBackItem: React.FC<{ image: string }> = ({
  image,
}) => {
  return (
    <div className="flex flex-col items-center h-full">
      <img
        className="w-full h-full object-cover"
        src={image}
        alt="product-img"
      />
      <div className="flex items-center w-full bg-gray-300">
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
