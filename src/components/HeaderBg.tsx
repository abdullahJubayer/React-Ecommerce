const ic_header_bg = new URL("../assets/images/header.png", import.meta.url)
  .href;

export function HeaderBg() {
  return (
    <div className="relative">
      <img
        src={ic_header_bg}
        alt="header-background"
        className="h-[40vh] sm:h-[60vh] w-full object-cover absolute"
      />
      <div className="absolute  text-white bg-black bg-opacity-25 text-center w-full h-[40vh] sm:h-[60vh]">
        <h1 className="text-5xl font-normal">
          Industrial design meets fashion
        </h1>
        <h4 className="my-2">Atypical leather goods</h4>
        <button className="bg-transparent px-4 py-2 border border-gray-200">
          Add to cart
        </button>
      </div>
    </div>
  );
}
