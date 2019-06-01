import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProductPage from "./pages/SingleProductPage";
import Default from "./pages/Default";
import Cart from "./pages/CartPage";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import SideBar from "./components/SideBar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products/:id" exact component={SingleProductPage} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
