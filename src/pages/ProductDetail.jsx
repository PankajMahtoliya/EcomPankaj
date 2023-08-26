// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiHome } from "react-icons/fi";

import Loading from "./Loading";
import { getProductData } from "../Api";
import NotFound from "../NotFound";

// eslint-disable-next-line react/prop-types
function ProductDetail({ setCount, count, handelAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  // const [count, setCount] = useState(1);
  // const [cartData, setcartData] = useState({});

  useEffect(
    function () {
      const p = getProductData(id);
      p.then(function (detail) {
        setProduct(detail);
        setLoading(false);
      });
    },
    [id]
  );

  function handelCountChange(event) {
    setCount(+event.target.value);
  }

  function handelButtonClick() {
    handelAddToCart(id, count);
  }

  function handelCartChange() {
    setCount(1);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <div className="px-6 py-12 bg-gray-300 min-h-screen">
        <div className="flex py-6 text-center ">
          {id > 1 ? (
            <Link
              to={"/app/product/" + (id - 1)}
              className="px-4 text-black md:px-14"
            >
              <FiArrowLeft className="text-3xl" onClick={handelCartChange} />
            </Link>
          ) : (
            <Link
              to={"/app/product/" + (id - 1)}
              className="invisible px-4 text-black md:px-14"
            >
              <FiArrowLeft className="text-3xl" onClick={handelCartChange} />
            </Link>
          )}
          <Link to="/" className="px-4 text-black md:px-14 ">
            <FiHome className="text-3xl" />
          </Link>
          <Link
            to={"/app/product/" + (id + 1)}
            className="px-4 text-black md:px-14"
          >
            <FiArrowRight className="text-3xl" onClick={handelCartChange} />
          </Link>
        </div>
        <div className="py-6 bg-white w-max rounded-xl ">
          <div className=" md:flex md:justify-start">
            <img
              className="mb-8 h-40 w-40 rp object-cover mx-8 md:mx-o md:w-auto md:h-auto"
              src={product.thumbnail}
            />
            <div className="px-6">
              <h1 className="mb-3 text-4xl lg:text-5xl lg:font-semibold">
                {product.title}
              </h1>
              <p className="text-xl ">{product.brand}</p>
              <h1 className="mb-4 text-xl font-medium lg:text-3xl">
                $. {product.price}
              </h1>
              <p className="text-xl ">{product.description}</p>
              <div className="mt-6">
                <input
                  className="w-10 p-2 mx-4 text-center md:w-14"
                  type="number"
                  value={count}
                  onChange={handelCountChange}
                ></input>
                <button
                  className="p-2 text-xl hover:bg-[#be2c34] bg-[#002D62] rounded-lg text-white px-9 font- semibold"
                  onClick={handelButtonClick}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
