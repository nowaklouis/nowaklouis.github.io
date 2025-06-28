// import React from "react";

import React, { useState } from "react";

const softSkills = [
  {
    id: "communication",
    name: "Communication",
    description:
      "J’accorde une grande importance à une communication claire, respectueuse et constructive. J’aime transmettre mes idées simplement et écouter activement pour créer un environnement collaboratif et efficace.",
  },
  {
    id: "autonomie",
    name: "Autonomie",
    description:
      "Je suis naturellement autonome : j’aime me fixer des objectifs, avancer de manière proactive et trouver des solutions par moi-même tout en sachant demander de l’aide si nécessaire.",
  },
  {
    id: "flexibilite",
    name: "Flexibilité",
    description:
      "Je m’adapte facilement aux changements de contexte, de priorités ou de méthodes de travail. Cette souplesse m’aide à rester efficace même dans des environnements en constante évolution.",
  },
  {
    id: "respect",
    name: "Respect",
    description:
      "Je place le respect au cœur des relations professionnelles. Respecter les personnes, les délais, les idées différentes est pour moi une condition essentielle au travail d’équipe.",
  },
  {
    id: "organisation",
    name: "Organisation",
    description:
      "Je prends soin de planifier et structurer mon travail. J’utilise des outils adaptés et des routines efficaces pour rester concentré et livrer mes tâches dans les temps.",
  },
  {
    id: "collaboration",
    name: "Collaboration",
    description:
      "Travailler avec d'autres est pour moi une vraie richesse. J’aime partager les responsabilités, apprendre des autres et construire ensemble des solutions meilleures.",
  },
  {
    id: "formation",
    name: "Formation continue",
    description:
      "J’ai toujours eu le réflexe d’apprendre en continu, que ce soit via des formations, des lectures ou des projets personnels. Cette curiosité me permet d’évoluer constamment.",
  },
  {
    id: "adaptabilite",
    name: "Adaptabilité",
    description:
      "Je suis capable de faire face rapidement aux imprévus ou aux contextes nouveaux. J’aime relever des défis qui me poussent à sortir de ma zone de confort.",
  },
  {
    id: "perseverance",
    name: "Persévérance",
    description:
      "Quand je commence quelque chose, je vais au bout. Même face aux difficultés, je garde le cap et je cherche des solutions jusqu’à atteindre mes objectifs.",
  },
];

export default function SoftSkills() {
  const [selectedSkill, setSelectedSkill] = useState(softSkills[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-[#CC8B65] text-center mb-6">
        Mon approche du travail
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="hidden md:flex w-1/2 min-h-[200px] p-6 border border-[#CC8B65] rounded-3xl bg-[rgb(11,72,59)]">
          {selectedSkill ? (
            <div>
              <h3 className="text-2xl font-bold text-[#CC8B65] mb-2">
                {selectedSkill.name}
              </h3>
              <p className="text-white">{selectedSkill.description}</p>
            </div>
          ) : (
            <p className="text-gray-300 italic">Sélectionnez un soft skill</p>
          )}
        </div>

        <div className="flex flex-wrap gap-4 w-full max-w-xl">
          {softSkills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className={`cursor-pointer px-4 py-2 rounded-full border-2 font-semibold transition 
                ${
                  selectedSkill.id === skill.id
                    ? "border-[#CC8B65] bg-[#CC8B65]/20 text-[#CC8B65]"
                    : "border-gray-300 text-white hover:border-[#CC8B65] hover:text-[#CC8B65]"
                }`}
            >
              {skill.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
