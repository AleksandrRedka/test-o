import React from "react";

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="flex flex-grow items-center justify-center min-h-12 text-lg text-btn shadow-btn bg-btnBg rounded-xl text-color:purple w-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
