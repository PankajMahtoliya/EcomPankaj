// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, memo } from "react";
import ProductList from "./ProductList";
// import NoProduct from "./NoProduct";

import Loading from "./Loading";
import { getProductList } from "../Api";

// eslint-disable-next-line react-refresh/only-export-components
function ProductListPage() {
  const [sort, setSort] = useState("default");
  const [query, setQuery] = useState("");
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    getProductList().then(function (products) {
      setProductList(products);
      setLoading(false);
      return products[0];
    });
  }, []);

  let data = productList.filter(function (item) {
    return item.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });

  if (sort == "priceHigh") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "priceLow") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "title") {
    data.sort(function (x, y) {
      return x.title < y.title ? 1 : -1;
    });
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handelSortChange(e) {
    setSort(e.target.value);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-4 py-2 bg-gray-200 md:px-12">
      <div className="flex-1 my-2 space-y-4 md:flex md:justify-between md:space-y-0 md:mx-20 focus:outline-red-400 ">
        <input
          type="text"
          value={query}
          className="px-4 py-1 bg-gray-100 rounded-none md:drop-shadow-sm md:w-80 focus:outline-red-500"
          placeholder="Search...!"
          onChange={handleChange}
        />

        <select
          className="p-2 bg-gray-100 rounded-lg"
          onChange={handelSortChange}
          value={sort}
        >
          <option value="default">Default</option>
          <option value="priceHigh">Sort by price : high to low</option>
          <option value="priceLow">Sort by price : low to high</option>
          <option value="title">Sort by title</option>
        </select>
      </div>

      {data.length > 0 && <ProductList data={data} />}
      {/* {data.length == 0 && <NoProduct />} */}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ProductListPage);
