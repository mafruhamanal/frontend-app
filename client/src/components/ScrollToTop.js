import React, { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

// Utility function to combine class names
const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 1900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-neutral-400 hover:bg-neutral-700 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none"
        )}
      >
        Scroll To Top
      </button>
    </div>
  );
};

export default ScrollToTop;
