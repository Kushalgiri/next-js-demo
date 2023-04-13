import { useEffect, useRef } from "react";
import fullpage from "fullpage.js";

const FullPage = ({ children }) => {
  const fullPageRef = useRef(null);

  useEffect(() => {
    if (!fullPageRef.current) return;

    new fullpage(fullPageRef.current, {
      // fullpage.js options
    });
  }, []);

  return <div ref={fullPageRef}>{children}</div>;
};

export default FullPage;
