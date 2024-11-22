import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

import Article from "./components/Article";

export default function Home() {
  return (
    <main className="">
      <div>
        {" "}
        <Header />
        <Hero />
        <About />
        <Article />
      </div>
    </main>
  );
}
