const ic_right_chivrone = new URL(
  "../assets/icons/right_chevron.png",
  import.meta.url
).href;
const ic_left_chivrone = new URL(
  "../assets/icons/left_chevron.png",
  import.meta.url
).href;

export const ImageSlider: React.FC<{
  images: Array<string>;
  currentImgIndex: number;
  setCurrentImgIndex: (index: number) => void;
}> = ({ images, currentImgIndex, setCurrentImgIndex }) => {
  return (
    <div>
      <img
        className="w-full object-contain max-h-96 mt-4"
        src={images[currentImgIndex]}
        alt="product-img"
      />
      <div className="flex justify-center items-center my-4">
        <img
          className="w-8 h-8"
          src={ic_left_chivrone}
          alt="product-img"
          onClick={() => {
            if (currentImgIndex - 1 >= 0)
              setCurrentImgIndex(currentImgIndex - 1);
            else setCurrentImgIndex(images.length - 1);
          }}
        />
        <span className="mx-2">
          {currentImgIndex + 1} / {images.length}
        </span>
        <img
          className="w-8 h-8"
          src={ic_right_chivrone}
          alt="product-img"
          onClick={() => {
            if (currentImgIndex + 1 < images.length)
              setCurrentImgIndex(currentImgIndex + 1);
            else setCurrentImgIndex(0);
          }}
        />
      </div>
    </div>
  );
};
