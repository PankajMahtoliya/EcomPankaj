import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

function App() {
  const AppPageLazy = React.lazy(() => import("./Ap"));
  const AuthPageLazy = React.lazy(() => import("./Auth"));
  const Token = localStorage.getItem("Token");

  return (
    <>
      <ToastContainer
        hideProgressBar
        pauseOnFocusLoss={false}
        className="my-toast-container"
      />
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={Token ? "/app" : "/auth"} />}
        />

        <Route path="app/*" element={<AppPageLazy />} />
        <Route path="auth/*" element={<AuthPageLazy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
