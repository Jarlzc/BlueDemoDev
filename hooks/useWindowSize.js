import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: null, height: null });
  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height:window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  },[]);
  return windowSize;
};

export default useWindowSize;
