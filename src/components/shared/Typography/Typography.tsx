"use client";
import React from "react";

function Typography({ text, className = "" }: { text: string; className?: string }) {
  return <div className={`${className}`}>{text}</div>;
}

export default Typography;
