import React from "react";
import Placeholder from "./Placeholder.jpg";

const Card1 = () => {
  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-lg bg-[#CBE9DF] shadow-lg">
      <img
        className="h-48 w-full object-cover"
        src={Placeholder}
        alt="Card Image"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#F6403F]">Card Title</h2>
        <p className="mt-2 text-gray-600">
          This is a description of the card. Using Tailwind utility classes to make
          it easy to style the card and also to ensure that it looks great across different
          screen sizes.
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="rounded bg-[#F6403F] px-4 py-2 text-white hover:bg-[#D82C2F] focus:outline-none focus:ring-2 focus:ring-[#F6403F]">
          Action
        </button>
      </div>
    </div>
  );
};

export default Card1;
