import React from "react";
import { articles1, articles2 } from "../constants";
import { ArticleScroll } from "./ui/ArticleScroll";
import StatisticCard from "./StatisticsCard";

const Article = () => {
  return (
    <section className="flex flex-col justify-center items-center py-6   h-screen">
      <div className="container  flex flex-col  justify-center items-center ">
        <h2 className="font-bold capitalize  mb-4 md:mb-8 text-4xl bg-clip-text text-transparent text-center  px-6 drop-shadow-2xl  bg-gradient-to-b from-white/80 to-white/90 max-w-2xl">
          Global Data
          <span className="text-transparent ml-2 bg-clip-text bg-gradient-to-r from-blue-400 to-[#4d229e]">
            Leaks
          </span>
        </h2>
        <div className="flex items-center justify-center py-6">
          <StatisticCard value={17861069320} />
        </div>

        <div className="flex flex-col items-center gap-4 justify-center">
          <ArticleScroll items={articles1} direction="right" speed="normal" />
          <ArticleScroll items={articles2} direction="left" speed="slow" />
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </section>
  );
};

export default Article;
