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

    // Initialise Typed.js
    typed.current = new Typed(el.current, options);

    // Cleanup à la destruction du composant
    return () => {
      typed.current.destroy();
    };
  }, []);

  return <span style={{ whiteSpace: "pre", color: "#CC8B65" }} ref={el} />;
}
