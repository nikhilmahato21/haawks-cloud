import React from "react";

interface StatisticCardProps {
  value: number; // The number to be displayed
}

const StatisticCard: React.FC<StatisticCardProps> = ({ value }) => {
  return (
    <div className="flex items-center justify-center w-fit px-4 py-3 rounded-xl border-2 border-[#4d229e] bg-black">
      <span className="text-5xl font-bold text-white">
        {value.toLocaleString()} {/* Formats the number with commas */}
      </span>
    </div>
  );
};

export default StatisticCard;
