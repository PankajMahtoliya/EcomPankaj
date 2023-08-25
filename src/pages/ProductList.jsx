/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { memo } from "react";
import Product from "./Product";
// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function ProductList({ data }) {
  return (
    <div className="py-8 my-4 bg-white rounded-xl md:grid md:grid-cols-3 md:px-8 md:mx-20">
      {data.map(function (items) {
        return <Product key={items.title} {...items} />;
      })}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ProductList);
