import { Route, Routes } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import {
  About,
  Cart,
  Collections,
  Contact,
  Home,
  Login,
  Orders,
  PlaceOrder,
  Product,
} from "./pages";
import Layout from "./Layout";

function App() {
  return (
    <>
      <div className="w-full max-w-[1480px] mx-auto p-2">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
