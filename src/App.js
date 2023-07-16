import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/Login";
import Footer from "./components/Footer/Footer";
import Categories from "./pages/Categories";
import Barra from "./components/Navbar/Barra";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductInfo from "./pages/ProductInfo";
/* const Categories = lazy(() => import("./pages/Categories"));
const Barra = lazy(() => import("./components/Navbar/Barra"));
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const ProductInfo = lazy(() => import("./pages/ProductInfo")); */

import "./css/App.css";
import "./css/index.css";
import "./css/general.css";

import { CategoriesProvider } from "./contexts/CategoriesContext";
import { ProductsProvider } from "./contexts/ProductsContexts";
import { LoginProvider } from "./contexts/LoginContext";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <>
      <Barra />
      <Routes>
        <Route path="/" element={<Index />} />
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

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

