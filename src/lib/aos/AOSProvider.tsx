"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
      anchorPlacement: "center-center",
    });
  }, []);
  return <div>{children}</div>;
};

export default AOSProvider;
