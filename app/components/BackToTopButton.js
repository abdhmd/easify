// components/BackToTopButton.js

"use client";
import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to show/hide the button
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  return (
    <div
      className={`cursor-pointer fixed bottom-4 right-4 bg-theme w-[50px] h-[50px] items-center justify-center   rounded-[15px]  z-50 ${
        isVisible ? "flex" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <span>
        <BiChevronUp className="text-3xl" />
      </span>
    </div>
  );
};

export default BackToTopButton;
