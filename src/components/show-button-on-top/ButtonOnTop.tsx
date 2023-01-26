import React from "react";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./showButton.css";
const ButtonOnTop = () => {
  const [showButtonOnTop, setShowButtonOnTop] = useState(false);
  useEffect(() => {
    const handleEvenScroll = () => {
      if (window.scrollY >= 100) {
        setShowButtonOnTop(true);
      } else {
        setShowButtonOnTop(false);
      }
    };
    window.addEventListener("scroll", handleEvenScroll);
    // return window.removeEventListener("scroll", handleEvenScroll);
  });
  return (
    <>
      {showButtonOnTop && (
        <a href="#">
          {" "}
          <button className="button-scroll-top">
            <ArrowUpwardIcon />
          </button>
        </a>
      )}
    </>
  );
};

export default ButtonOnTop;
