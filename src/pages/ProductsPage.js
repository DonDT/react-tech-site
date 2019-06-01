import React from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import productsBcg from "../images/productsBcg.jpeg";

export default function ProductsPage() {
  return (
    <div>
      <Hero img={productsBcg} />
      <Products />
    </div>
  );
}
