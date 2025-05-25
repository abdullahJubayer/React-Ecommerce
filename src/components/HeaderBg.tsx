const ic_header_bg = new URL("../assets/images/header.png", import.meta.url)
  .href;

export function HeaderBg() {
  return (
    <div className="relative">
      <img
        src={ic_header_bg}
        alt="header-background"
        className="h-[40vh] sm:h-[60vh] w-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-[40vh] sm:h-[60vh] flex flex-col justify-center items-center text-white bg-black bg-opacity-25 text-center">
        <h1 className="text-5xl font-normal">
          Industrial design meets fashion
        </h1>
        <h4 className="my-2">Atypical leather goods</h4>
        <button className="bg-transparent px-4 py-2 border border-gray-200">
          Add to cart
        </button>
      </div>
      <div className="flex-col justify-items-center mx-4 text-center">
        <div className="font-normal text-gray-600 md:flex m-6">
          <h2 className="text-2xl">Obsessive Attention.</h2>
          <h2 className="text-2xl md:ms-2">Intelligent Effort.</h2>
        </div>
        <h3>
          Functional handbags made of luxurious and honest materials to improve
          people's lives in small but mighty ways.
        </h3>
      </div>
    </div>
  );
}
