import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./style.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Order from "./Pages/Order";
import sewing from"./assets/sewing.jpg"

function App() {
  return (
    <div className="app-container">
      {/* Background image */}
      <img src={sewing} alt="Machine" className="background-image" />

      {/* Overlay content */}
      <div className="overlay">
        {/* Navbar */}
        <nav style={{ background: "#00000099", padding: "1rem" }}>
          <ul>
            <li className="nav-home">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-products">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav-order">
              <Link to="/order">Order</Link>
            </li>
            <li className="nav-about">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-contact">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
       
        </Routes>
      </div>
    </div>
  );
}

export default App;
