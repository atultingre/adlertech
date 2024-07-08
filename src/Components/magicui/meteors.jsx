"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export const Meteors = ({ number = 50 }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          className={clsx(
            "pointer-events-none absolute  left-1/2 top-1/2 h-1 w-1 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[70px] -translate-y-1/2 bg-gradient-to-r from-slate-700 to-transparent" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
