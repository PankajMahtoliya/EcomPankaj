/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { memo } from "react";
import { useEffect } from "react";
import { FiXCircle } from "react-icons/fi";
import Loading from "./Loading";

// eslint-disable-next-line react-refresh/only-export-components
function Cart({
  thumbnail,
  title,
  price,
  // eslint-disable-next-line react/prop-types
  cart,
  id,
  updatecart,
  loading,
  setloading,
  localcart,
  setLocalcart,
  //   handleOnClick,
}) {
  useEffect(
    function () {
      setLocalcart(cart);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cart]
  );

  function handleChange(e) {
    const newVlaue = +e.target.value;
    const productid = e.target.getAttribute("productis");
    const newLocalcart = { ...localcart, [productid]: newVlaue };
    console.log("number change", localcart);
    setLocalcart(newLocalcart);
    console.log(newLocalcart);
  }

  let changecart = +price;
  let changeid = +localcart[id];

  function handleRemove() {
    // const removed = e.currentTarget.getAttribute("productid");
    const newCart = { ...cart };
    console.log("before", cart);
    delete newCart[id];
    updatecart(newCart);
    setloading(true);
    // console.log("new cart", newCart);
  }

  if (loading) {
    return <Loading />;
  }

  //   function handleOnClick() {
  //     toast.success("Purchased SuccessFull", {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //     localStorage.setItem("cart", "");

  //     updatecart(undefined);
  //   }

  return (
    <div className="border-2 border-gray-300 mt-2 rounded-lg bg-gray-50">
      <div className="md:hidden">
        <div>
          <div className="border border-gray-300 text-end">
            <button onClick={handleRemove} productid={id}>
              {" "}
              <FiXCircle className="flex justify-start px-2 py-3 m-auto text-5xl " />
            </button>
          </div>
          <div className="px-2 py-3 border-b border-gray-300 text-end">
            <img className="h-48 w-48 object-cover mx-auto" src={thumbnail} />
          </div>
          <div className="flex justify-between px-2 py-3 border-b border-gray-300 text-end">
            <h1 className="text-xl font-bold text-gray-700">Product: </h1>
            <h1 className="text-xl font-bold text-[#be2c34] ">{title}</h1>
          </div>

          <div className="flex justify-between px-2 py-3 border-b border-gray-300 text-end">
            <h1 className="text-xl font-bold text-gray-700">Price:</h1>
            <h1 className="text-xl font-bold text-gray-700">$: {price}</h1>
          </div>

          <div className="flex justify-between px-2 py-3 border-b border-gray-300 text-end">
            <h1 className="text-xl font-bold text-gray-700">Quantity:</h1>
            <input
              value={localcart[id]}
              productis={id}
              onChange={handleChange}
              type="number"
              className="w-10 px-1 rounded-md"
            />
          </div>
          <div className="flex justify-between h-10 px-2 py-3">
            <h1 className="text-xl font-bold text-gray-700">Subtotal:</h1>
            <h1 className="text-xl font-bold text-gray-700 ">
              $. {changecart * changeid}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between invisible px-4 border-gray-300 border-y-2 md:visible">
        <div className="flex space-x-8">
          <button onClick={handleRemove} productid={id}>
            {" "}
            <FiXCircle className="flex hover:text-[#be2c34] justify-end px-2 py-3 my-auto text-5xl " />
          </button>
          <img className="h-32 w-32 p-2 object-cover mx-auto" src={thumbnail} />
        </div>

        <div className="flex space-x-32">
          <div className="px-2 py-3 text-end">
            <h1 className="text-xl font-bold text-red-500 ">{title}</h1>
          </div>

          <div className="px-2 py-3 text-end">
            <h1 className="text-xl font-bold text-gray-700"> $. {price}</h1>
          </div>

          <div className="w-10 px-2 py-3 text-end">
            <input
              value={localcart[id]}
              // eslint-disable-next-line react/no-unknown-property
              productis={id}
              onChange={handleChange}
              className="w-12 px-2 border-2 rounded-md"
              type="number"
            />
          </div>

          <div className="px-2 py-3 ">
            <h1 className="text-xl font-bold text-gray-700 ">
              {" "}
              $. {changecart * changeid}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Cart);
