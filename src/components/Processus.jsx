import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Analyse",
    description: "Comprendre le besoin, les contraintes et les utilisateurs.",
    code: 12,
  },
  {
    title: "Conception",
    description:
      "Élaborer une architecture claire, UI/UX, et une logique solide.",
    code: 3,
  },
  {
    title: "Développ.",
    description: "Coder efficacement, proprement, avec maintenabilité en tête.",
    code: 5,
  },
  {
    title: "Tests",
    description:
      "Valider le bon fonctionnement avec des tests unitaires et fonctionnels.",
    code: 7,
  },
  {
    title: "Déploiement",
    description: "Mise en production et surveillance des performances.",
    code: 9,
  },
];

const correctSequence = [12, 3, 9, 5, 7];

export default function MonProcessusCircle({ setIsMatrix }) {
  const [inputSequence, setInputSequence] = useState([]);

  function handleClick(code) {
    const newSequence = [...inputSequence, code];
    setInputSequence(newSequence);

    // Check sequence matches prefix of correctSequence
    for (let i = 0; i < newSequence.length; i++) {
      if (newSequence[i] !== correctSequence[i]) {
        // Wrong sequence, reset input
        setInputSequence([]);
        return;
      }
    }

    // Full correct sequence matched
    if (newSequence.length === correctSequence.length) {
      setIsMatrix(true);
      setInputSequence([]);
      alert("Bravo ! Mode Matrix activé.");
    }
  }

  return (
    <section
      id="processus"
      className="py-10 px-6 flex flex-col items-center justify-center relative overflow-hidden rounded-3xl"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#CC8B65] mb-12 text-center">
        Mon Processus de Développement
      </h2>

      <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-2 border-[#CC8B65] flex items-center justify-center">
        {steps.map((step, index) => {
          const angle = (360 / steps.length) * index - 90; // démarre en haut
          const radius = 150; // rayon réduit
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="absolute text-center group"
              style={{
                top: `calc(50% + ${y}px - 25px)`,
                left: `calc(50% + ${x}px - 55px)`,
                width: "110px",
                cursor: "pointer",
              }}
              onClick={() => handleClick(step.code)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleClick(step.code);
              }}
            >
              <div
                className="relative px-4 py-2 rounded-full text-sm font-semibold shadow-md bg-white/10 text-[#CC8B65] border border-[#CC8B65] backdrop-blur-md select-none"
                style={{ width: "110px" }}
              >
                {step.title}
                {/* Tooltip / Popover */}
                <div className="absolute z-10 left-1/2 -translate-x-1/2 mt-2 w-48 text-xs bg-white/10 text-white backdrop-blur-md p-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
                  {step.description}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Méthode Agile au centre-dessous */}
      <motion.div
        className="mt-12 max-w-lg text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p className="leading-relaxed text-sm md:text-base">
          À ce cercle, j’ajoute la{" "}
          <strong className="text-[#CC8B65]">méthode Agile</strong>, pour une
          communication constante, une adaptabilité permanente et une vision
          produit.
        </p>
        <div className="mt-4 bg-[#CC8B65] text-[#0b483b] px-4 py-2 rounded-full text-xs font-semibold inline-block opacity-90">
          Bientôt mon mémoire pour vous le démontrer.
        </div>
      </motion.div>
    </section>
  );
}
