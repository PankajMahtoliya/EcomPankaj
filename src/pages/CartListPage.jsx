// eslint-disable-next-line no-unused-vars
import React from "react";
import CartList from "./CartList";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
function CartListPage({ XYZ, ABC }) {
  function handleOnClick() {
    toast.success("Purchased SuccessFull", {
      position: toast.POSITION.TOP_RIGHT,
    });
    localStorage.setItem("cart", "");
    ABC("");
  }
  //   console.log(, "dasfgg");
  return (
    <div className="px-8 py-4 mx-12 my-4 bg-white">
      {Object.entries(XYZ).length !== 0 ? (
        <>
          {" "}
          <Link to={"/"}>
            {" "}
            <FiArrowLeft className="text-3xl" />
          </Link>
          <div className="invisible px-6 py-4 border-2 rounded-lg  border-gray-300 md:visible">
            <div className="flex justify-between">
              <div className="px-5"></div>
              <div className="flex space-x-28">
                <h1 className="mr-16 text-xl font-bold text-gray-700">
                  Product{" "}
                </h1>
                <h1 className="text-xl font-bold text-gray-700 ">Price</h1>
                <h1 className="text-xl font-bold text-gray-700">Quantity</h1>
                <h1 className="text-xl font-bold text-gray-700">Subtotal</h1>
              </div>
            </div>
          </div>
          <CartList
            className="p-2"
            // handleOnClick={handleOnClick}
            cart={XYZ}
            updatecart={ABC}
          />
          <div className="flex justify-end">
            {" "}
            <button
              onClick={handleOnClick}
              className=" border mt-4 text-end rounded-lg px-6 py-4 bg-[#002D62] text-white hover:bg-[#be2c34]"
            >
              Buy Now
            </button>
          </div>
        </>
      ) : (
        <Link to={"/"} className="flex mt-52 justify-center w-full">
          <div className="text-[#002D62] text-3xl font-semibold">
            No Product in Cart Go back To shopping
          </div>
        </Link>
      )}
    </div>
  );
}

export default CartListPage;
