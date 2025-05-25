import React from "react";

type RefineryItemProps = {
  image: string;
  description: string;
};

export const RefineryItem: React.FC<RefineryItemProps> = ({
  image,
  description,
}) => {
  return (
    <div className="flex-col justify-items-center mx-4">
      <img className="my-8 w-2/4" src={image} alt="images" />
      <p className="text-center font-normal text-gray-600 text-xl my-4">
        {`\" ${description} \"`}
      </p>
    </div>
  );
};
