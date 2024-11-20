import React from "react";

const MagicButton = ({
  title,
  icon,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]  ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={` capitalize inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-7  text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
        >
          {title} {icon}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
