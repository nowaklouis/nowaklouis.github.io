import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const words = ["DEV", "WEB", "JAVASCRIPT", "PHP"];

export default function Typing() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <span
      style={{
        whiteSpace: "pre",
        color: "#CC8B65",
        fontSize: "2rem",
        fontWeight: "bold",
      }}
      ref={el}
    />
  );
}
