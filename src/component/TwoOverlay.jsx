import { useEffect, useState } from "react";

const TwoOverlay = () => {
    
const [overlayWidth, setOverlayWidth] = useState("45%");

useEffect(() => {
  function handleScroll() {
    // const scrollTop = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage = Math.min(scrollTop / maxScroll, 1);
    const maxOverlayWidth = 100; // Set the maximum width of the overlay here
    const newWidth =
      Math.min(50 + percentage * maxOverlayWidth, maxOverlayWidth) + "%";
    setOverlayWidth(newWidth);

    if (scrollTop === 0) {
      setOverlayWidth("45%");
    }
  }



  // window.addEventListener("scroll", handleScroll);
  // return () => {
  //   window.removeEventListener("scroll", handleScroll);
  // };
}, []);
  return (
    <div className="section">
      <div className="wrapper">
        <div className="left">Left div</div>
        <div className="right">Right Div</div>
        <div className="overlay" style={{ width: overlayWidth }}></div>
      </div>
    </div>
  );
};

export default TwoOverlay;
