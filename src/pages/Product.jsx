// eslint-disable-next-line no-unused-vars
import React, { memo } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function Product({ thumbnail, category, title, price, id }) {
  return (
    <div className="flex-1 mx-4 my-2 shadow-xl rounded-xl  duration:1000">
      {/* <Link to={"/products/" + id}> */}
      <img className="w-full object-cover h-52 rounded-t-lg" src={thumbnail} />
      {/* </Link> */}
      <div className="p-4 font-[Popins] flex items-end justify-between">
        <div>
          <div className="text-2xl">{category}</div>
          <div>{title}</div>
          <div>$. {price}</div>
        </div>
        <div>
          {" "}
          <Link
            to={"/app/product/" + id}
            className="hover:bg-[#be2c34] bg-[#002D62] mt-6 rounded-xl px-5 py-2 text-white"
          >
            View detail
          </Link>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Product);
