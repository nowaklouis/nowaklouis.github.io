import React, { useState } from "react";
import { motion } from "framer-motion";

const patterns = [
  {
    name: "Singleton",
    description:
      "Ce pattern garantit qu’une seule instance d’un objet est créée et utilisée partout dans l’application.",
    webExample:
      "Dans une application web, un Singleton peut être utilisé pour gérer une connexion unique à une base de données ou un WebSocket partagé dans toute l'application.",
  },
  {
    name: "Observer",
    description:
      "Le pattern Observer permet à plusieurs objets d'être automatiquement notifiés lorsqu'un changement se produit dans un autre objet.",
    webExample:
      "C’est souvent utilisé dans les frameworks réactifs comme React ou Vue, où les composants s’actualisent automatiquement quand les données changent.",
  },
  {
    name: "Factory",
    description:
      "La Factory fournit une interface pour créer des objets dans une classe mère, mais laisse les sous-classes décider quel type d’objet instancier.",
    webExample:
      "En développement web, cela peut servir à créer dynamiquement différents composants UI (ex: bouton, carte, modal) selon le type d'utilisateur connecté.",
  },
  {
    name: "Strategy",
    description:
      "Ce pattern permet d’interchanger facilement différentes méthodes d’exécution pour une même tâche, selon le contexte.",
    webExample:
      "Par exemple, dans un formulaire complexe, on pourrait appliquer une stratégie de validation différente pour chaque champ (email, téléphone, mot de passe).",
  },
  {
    name: "Decorator",
    description:
      "Le Decorator permet d'ajouter dynamiquement des responsabilités à un objet sans en modifier la structure.",
    webExample:
      "C’est très utile dans React avec les Higher Order Components ou les hooks personnalisés, pour ajouter des comportements comme l’authentification ou le suivi utilisateur.",
  },
];

export default function DesignPatterns() {
  const [selected, setSelected] = useState(0);
  const current = patterns[selected];

  return (
    <section
      id="design-patterns"
      className="pt-10 pb-10 mb-10 text-white px-4 sm:px-10 lg:px-20"
    >
      <h2 className="text-4xl font-bold text-[#CC8B65] mb-10 text-center">
        Design Patterns
      </h2>

      <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
        Les design patterns sont des solutions réutilisables à des problèmes
        classiques de développement. Voici quelques patterns clés que j'utilise,
        accompagnés d'exemples concrets pour mieux les comprendre.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Menu latéral */}
        <div className="md:w-1/4 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-visible">
          {patterns.map((pattern, index) => (
            <button
              key={pattern.name}
              onClick={() => setSelected(index)}
              className={`py-2 px-4 text-left rounded-lg transition font-semibold ${
                selected === index
                  ? "bg-[#CC8B65] text-[#0b483b]"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {pattern.name}
            </button>
          ))}
        </div>

        {/* Panneau d'affichage */}
        <motion.div
          key={current.name}
          className="md:w-3/4 bg-white/10 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          <h3 className="text-2xl font-bold text-[#CC8B65] mb-4">
            {current.name}
          </h3>
          <p className="mb-4">{current.description}</p>
          <p className="text-white/80 italic">
            Exemple web : {current.webExample}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
