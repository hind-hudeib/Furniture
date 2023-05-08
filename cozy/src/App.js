import Footer from "./pages/layout/Footer";
import Navbar from "./pages/layout/Navbar";
import "./pages/styles files/App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about-us/About";
import Products from "./pages/Products/Products";
import ContactUs from "./pages/contact-us/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
import Prodect from "./pages/product/Prodect";
import Checkout from "./pages/check-out/checkout";
import Sidebar from "./pages/cart/Sidebar";
import SignUp from "./pages/login & singin/SingnUp";
import Login from "./pages/login & singin/Login";
import DataCardProvider from "./pages/Products/Context";

function App() {
  return (
    <>
      <Navbar />

      <DataCardProvider>
        <Routes>
          <Route path="/Home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<ContactUs />} />
         <Route path="/prodect" element={<Prodect />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Sidebar />
      </DataCardProvider>


      <Footer />
    </>
  );
}

export default App;