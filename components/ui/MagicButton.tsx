import React from "react";

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right"; // restrict position values
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position = "left",
  handleClick,
  otherClasses = "",
}) => {
  return (
    <button
      onClick={handleClick}
      className={`p-[3px] relative ${otherClasses}`}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />

      {/* Button Content */}
      <div className="flex items-center gap-2 px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
        {position === "left" && icon}
        <span>{title}</span>
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default MagicButton;
