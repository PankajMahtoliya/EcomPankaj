// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router";
import { unslugifyName } from "./helper";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
// eslint-disable-next-line react/prop-types
function Header({ count }) {
  const navigate = useNavigate();
  const onHandleClick = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("user");
    navigate("/");
  };
  const user = localStorage.getItem("user");
  const me = JSON.parse(user);
  console.log(count);
  return (
    <div className="bg-[#002D62] py-5 flex items-center justify-between px-10 text-2xl text-white">
      <Link to={"/"}>
        <div className="text-2xl text-white">E-Commerce Web</div>{" "}
      </Link>
      <div className="flex items-center space-x-4">
        {" "}
        <Link to={"profile"} className="shadow-xl">
          <h1 className="text-xl text-white">{unslugifyName(me.full_name)}</h1>
        </Link>{" "}
        <Link to={"products/cart"}>
          {" "}
          <div className="flex">
            {" "}
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
            <h1 className="text-sm -mt-3">{count}</h1>{" "}
          </div>
        </Link>
        <button
          onClick={onHandleClick}
          className=" text-base px-2 py-2 border hover:bg-[#be2c34] bg-[#002D62] rounded-lg"
        >
          LogOut
        </button>
      </div>
    </div>
  );
}

export default Header;
