import React, { useState } from "react";

const categories = {
  front: [
    {
      id: "html",
      name: "HTML",
      description: "Langage de balisage",
      img: "/html.png",
    },
    {
      id: "css",
      name: "CSS",
      description: "Feuilles de style",
      img: "/css.png",
    },
    {
      id: "js",
      name: "JavaScript",
      description: "Langage de programmation",
      img: "/javascript.png",
    },
    {
      id: "react",
      name: "React",
      description: "Librairie JS",
      img: "/react.png",
    },
    {
      id: "tailwind",
      name: "Tailwind",
      description: "Framework CSS utilitaire",
      img: "/tailwind.png",
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      description: "Framework CSS utilitaire",
      img: "/bootstrap.png",
    },
    {
      id: "mui",
      name: "MUI",
      description: "Framework CSS utilitaire",
      img: "/mui.png",
    },
    {
      id: "twig",
      name: "Twig",
      description: "Framework CSS utilitaire",
      img: "/twig.png",
    },
  ],
  back: [
    {
      id: "node",
      name: "Node.js",
      description: "JS côté serveur",
      img: "/node.webp",
    },
    {
      id: "php",
      name: "PHP",
      description: "Langage côté serveur",
      img: "/php.png",
    },
    {
      id: "express",
      name: "Express",
      description: "Framework pour Node.js",
      img: "/express-js.png",
    },
    {
      id: "symfony",
      name: "Symfony",
      description: "frame work Php",
      img: "/symfony.png",
    },
  ],
  bdd: [
    {
      id: "mysql",
      name: "MySQL",
      description: "Base de données relationnelle",
      img: "/mysql.png",
    },
    {
      id: "sql",
      name: "SQL",
      description: "Base de données SQL",
      img: "/sql.png",
    },
    {
      id: "sqlite",
      name: "Sqlite",
      description: "Base de données SQL",
      img: "/sqlite.png",
    },
    {
      id: "postgresql",
      name: "PostgreSql",
      description: "Base de données SQL",
      img: "/postgresql.png",
    },
  ],
  autres: [
    {
      id: "git",
      name: "Git",
      description: "Gestion de version",
      img: "/git.png",
    },
    {
      id: "docker",
      name: "Docker",
      description: "Conteneurisation",
      img: "/docker.jpg",
    },
    {
      id: "vscode",
      name: "VScode",
      description: "Conteneurisation",
      img: "/vscode.avif",
    },
    {
      id: "phpstorm",
      name: "PhpStorm",
      description: "Conteneurisation",
      img: "/phpstorm.jpng",
    },
  ],
};

const tabs = Object.keys(categories);

export default function SkillsGrid() {
  const [activeTab, setActiveTab] = useState("front");
  const [selectedSkill, setSelectedSkill] = useState(categories["front"][0]);
  const currentSkills = categories[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSelectedSkill(categories[tab][0]);
            }}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              activeTab === tab
                ? "bg-[#CC8B65] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-[#CC8B65]/70"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="grid grid-cols-3 gap-6 flex-1">
          {currentSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className={`cursor-pointer flex flex-col items-center justify-center w-24 h-24 rounded-full p-2 border-2 transition ${
                selectedSkill?.id === skill.id
                  ? "border-[#CC8B65] bg-[#CC8B65]/10"
                  : "border-gray-300 hover:border-[#CC8B65]"
              }`}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-10 h-10 object-contain mb-1"
                draggable={false}
              />
              <span className="text-xs font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden md:flex w-1/2 min-h-[200px] p-6 border border-gray-300 rounded-xl bg-[#fefbf9]">
          {selectedSkill ? (
            <div>
              <h3 className="text-2xl font-bold text-[#CC8B65] mb-2">
                {selectedSkill.name}
              </h3>
              <p className="text-gray-700">{selectedSkill.description}</p>
            </div>
          ) : (
            <p className="text-gray-400 italic">Sélectionnez un skill</p>
          )}
        </div>
      </div>
    </div>
  );
}
