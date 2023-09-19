import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Barra from "./components/Navbar/Barra";

import "./css/App.css";
import "./css/general.css";
import "./css/index.css";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { CartProvider } from "./contexts/CartContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { LoginContext } from "./contexts/LoginContext";
import { ProductProvider } from "./contexts/ProductContext";
import { ProductsProvider } from "./contexts/ProductsContexts";
import SpinnerCentrado from "./components/SpinnerCentrado";

const Login = lazy(() => import("./pages/Login"));
const Categories = lazy(() => import("./pages/Categories"));
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const ProductInfo = lazy(() => import("./pages/ProductInfo"));
const Cart = lazy(() => import("./pages/Cart"));
const MyProfile = lazy(() => import("./pages/MyProfile.jsx"));

function App() {
  const { user } = useContext(LoginContext);

  return (
    <>
      <Barra />
      <div>
        <Suspense fallback={<SpinnerCentrado />}>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/categories"
              element={
                <CategoriesProvider>
                  <Categories />
                </CategoriesProvider>
              }
            />
            <Route
              path="/categories/:id"
              element={
                <ProductsProvider>
                  <Products />
                </ProductsProvider>
              }
            />
            <Route
              path="/producto/:id"
              element={
                <ProductProvider>
                  <ProductInfo />
                </ProductProvider>
              }
            />
            <Route element={<ProtectedRoute isAllowed={!!user} />}>
              <Route
                path="/cart"
                element={
                  <CartProvider>
                    <Cart />
                  </CartProvider>
                }
              />
              <Route path="/my-profile" element={<MyProfile />} />
            </Route>

            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;

