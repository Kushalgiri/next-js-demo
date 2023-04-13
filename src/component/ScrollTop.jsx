import { useState, useEffect } from "react";
import styles from "@/styles/ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={styles.button}
      style={{ display: isVisible ? "block" : "none" }}
      onClick={handleClick}
    >
      Scroll to Top
    </button>
  );
};

export default ScrollToTopButton;
