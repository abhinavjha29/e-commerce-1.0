import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import ErrorPage from "./pages/ErrorPage";
import Header from "./Components/Header";
import AppProvider from "./Store/AppProvider";
import ProductProvider from "./Store/ProductProvider";
import { useState } from "react";
import Cart from "./Components/overlay/Cart";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <AppProvider>
      <ProductProvider>
        <BrowserRouter>
          <Header setSelectedTab={setSelectedTab}></Header>
          {selectedTab === "cart" && <Cart setSelectedTab={setSelectedTab} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </AppProvider>
  );
}

export default App;
