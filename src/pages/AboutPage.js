import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";

export default function AboutPage() {
  return (
    <div>
      <Hero img={aboutBcg} />
      <Info />
    </div>
  );
}
