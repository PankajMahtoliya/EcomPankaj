/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProductListPage from "./pages/ProductListPage";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./NotFound";
import Profile from "./Profile";
import CartListPage from "./pages/CartListPage";

function App() {
  const navigate = useNavigate();
  const Token = localStorage.getItem("Token");
  const User = localStorage.getItem("user");

  const savedDataString = localStorage.getItem("cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cartData, setcartData] = useState(savedData);
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (!Token && !User) {
      navigate("/auth/sign-in");
    }
  }, [Token, User, navigate]);

  // const cartDatas = JSON.stringify(savedData);

  function handelAddToCart(productID, count) {
    const oldCount = cartData[productID] || 0;
    const newCart = { ...cartData, [productID]: oldCount + count };
    updatecart(newCart);
  }

  function updatecart(newCart) {
    setcartData(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("cart", cartString);
  }
  const totalCount = Object.keys(cartData).reduce(function (output, current) {
    return output + cartData[current];
  }, 0);

  return (
    <>
      <Header count={totalCount} />
      <Routes>
        <Route path="/" element={<Navigate to="/app/ProductList" />} />
        <Route path="ProductList" element={<ProductListPage />} />
        <Route
          path="product/:id"
          element={
            <ProductDetail
              setCount={setCount}
              setcartData={setcartData}
              count={count}
              handelAddToCart={handelAddToCart}
              // cartData={cartData}
            />
          }
        />
        <Route
          path="/products/cart"
          element={<CartListPage XYZ={cartData} ABC={updatecart} />}
        />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
