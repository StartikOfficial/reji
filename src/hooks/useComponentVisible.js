import { useEffect } from "react";

export default function useComponentVisible(ref, handler) {
  
    useEffect(() => {
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          handler(event);
        }
      };
    
      const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
          handler(event);
        }
      };
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
      // document.addEventListener("touchstart", handleClickOutside)
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("click", handleClickOutside);
        // document.removeEventListener("touchstart", handleClickOutside)
    };
    }, []);
  
  }