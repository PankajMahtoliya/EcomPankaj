/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Header from "./Header";
import ProductListPage from "./pages/ProductListPage";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./NotFound";
import Profile from "./Profile";

function App() {
  const navigate = useNavigate();
  const Token = localStorage.getItem("Token");
  const User = localStorage.getItem("user");
  useEffect(() => {
    if (!Token && !User) {
      navigate("/auth/sign-in");
    }
  }, [Token, User, navigate]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/app/ProductList" />} />
        <Route path="ProductList" element={<ProductListPage />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
