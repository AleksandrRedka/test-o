import React from "react";

export default function Button({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      className="flex flex-grow items-center justify-center min-h-12 text-lg text-btn shadow-btn bg-btnBg rounded-xl text-color:purple w-full"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
