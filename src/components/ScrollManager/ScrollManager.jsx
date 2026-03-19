import { useEffect, useRef } from "react";

function ScrollManager(props) {
  let prevScrollY = useRef(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     // console.log("Previous: ", prevScrollY.current)
  //     // console.log("Current: ", currentScrollY)

  //     const scrollDeltaAbs = Math.abs(prevScrollY.current - currentScrollY);
  //     prevScrollY.current = currentScrollY;

  //     if (isNaN(scrollDeltaAbs)) return;
      
  //     if (scrollDeltaAbs == 0) return;

      
  //     props.setScrollDelta(scrollDeltaAbs);
      
  //   };

    // window.addEventListener("scroll", handleScroll);

    // return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return null;
}

export default ScrollManager;
