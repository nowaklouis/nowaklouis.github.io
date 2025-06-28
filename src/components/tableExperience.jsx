import React, { useState } from "react";

const categories = {
  front: [
    {
      id: "html",
      name: "HTML",
      description:
        "HTML (HyperText Markup Language) est le langage standard utilisé pour structurer et organiser le contenu sur le web. Il définit les éléments de base des pages web, comme les titres, paragraphes, images, liens, etc., permettant aux navigateurs d’afficher correctement les informations.",
      img: "/html.png",
      zoom: 1.2,
    },
    {
      id: "css",
      name: "CSS",
      description:
        "CSS (Cascading Style Sheets) est un langage qui permet de styliser les pages web en définissant les couleurs, polices, mises en page, animations et bien plus. Il travaille en complément de HTML pour rendre les sites attrayants et adaptés à tous types d’écrans.",
      img: "/css.png",
      zoom: 1,
    },
    {
      id: "js",
      name: "JavaScript",
      description:
        "JavaScript est un langage de programmation orienté client qui permet de rendre les pages web interactives et dynamiques. Il est utilisé pour manipuler le DOM, gérer les événements, effectuer des appels réseaux, et bien plus encore, offrant une expérience utilisateur riche.",
      img: "/javascript.png",
      zoom: 1.1,
    },
    {
      id: "react",
      name: "React",
      description:
        "React est une bibliothèque JavaScript développée par Facebook, permettant de construire des interfaces utilisateur composées de composants réutilisables. Elle facilite la gestion de l’état, la mise à jour efficace du DOM et la création d’applications web performantes.",
      img: "/react.png",
      zoom: 1,
    },
    {
      id: "tailwind",
      name: "Tailwind",
      description:
        "Tailwind CSS est un framework CSS utilitaire qui fournit une vaste collection de classes prédéfinies. Il permet de construire rapidement des interfaces modernes et responsives sans écrire beaucoup de CSS personnalisé, en se concentrant sur la composition de styles.",
      img: "/tailwind.png",
      zoom: 1,
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      description:
        "Bootstrap est un framework CSS populaire pour créer des sites web responsives. Il offre un ensemble de composants UI, de grilles flexibles et d’utilitaires pour accélérer le développement et assurer une cohérence visuelle sur différents appareils.",
      img: "/bootstrap.png",
      zoom: 1,
    },
    {
      id: "mui",
      name: "MUI",
      description:
        "MUI (Material-UI) est une bibliothèque de composants React qui implémente les principes du design Material de Google. Elle fournit des composants préfabriqués, personnalisables et accessibles pour accélérer la création d’interfaces utilisateur modernes.",
      img: "/mui.jpg",
      zoom: 1,
    },
    {
      id: "twig",
      name: "Twig",
      description:
        "Twig est un moteur de templates pour PHP qui permet de séparer la logique métier du rendu HTML. Il facilite la création de vues dynamiques en offrant une syntaxe simple, sécurisée et extensible, largement utilisé dans les projets Symfony.",
      img: "/twig.png",
      zoom: 1.3,
    },
  ],
  back: [
    {
      id: "node",
      name: "Node.js",
      description:
        "Node.js est un environnement d’exécution JavaScript côté serveur qui permet de créer des applications backend rapides et scalables. Basé sur le moteur V8 de Google Chrome, il permet l’utilisation de JavaScript hors navigateur.",
      img: "/node.webp",
      zoom: 1,
    },
    {
      id: "php",
      name: "PHP",
      description:
        "PHP est un langage de script côté serveur largement utilisé pour le développement web. Il permet de générer du contenu dynamique, gérer les sessions, interagir avec les bases de données et construire des applications web robustes.",
      img: "/php.png",
      zoom: 1,
    },
    {
      id: "express",
      name: "Express",
      description:
        "Express est un framework minimaliste pour Node.js qui facilite la création d’API et de serveurs web. Il offre des fonctionnalités essentielles comme le routage, la gestion des requêtes et des middlewares, permettant un développement backend rapide et modulaire.",
      img: "/express-js.png",
      zoom: 1,
    },
    {
      id: "symfony",
      name: "Symfony",
      description:
        "Symfony est un framework PHP puissant et modulaire pour construire des applications web complexes. Il fournit une architecture robuste, un ensemble de composants réutilisables et une communauté active pour faciliter le développement.",
      img: "/symfony.png",
      zoom: 1,
    },
  ],
  bdd: [
    {
      id: "mysql",
      name: "MySQL",
      description:
        "MySQL est un système de gestion de base de données relationnelle open source, très utilisé dans les applications web. Il permet le stockage, la manipulation et la requête efficace de données structurées.",
      img: "/mysql.png",
      zoom: 1,
    },
    {
      id: "sql",
      name: "SQL",
      description:
        "SQL (Structured Query Language) est le langage standard pour interroger et gérer les bases de données relationnelles. Il permet de créer, lire, mettre à jour et supprimer des données avec des commandes puissantes et flexibles.",
      img: "/sql.png",
      zoom: 1,
    },
    {
      id: "sqlite",
      name: "Sqlite",
      description:
        "SQLite est une base de données relationnelle légère, embarquée et sans serveur. Elle est idéale pour des applications mobiles ou des projets nécessitant une base de données simple et rapide à déployer.",
      img: "/SQLite.png",
      zoom: 1.3,
    },
    {
      id: "postgresql",
      name: "PostgreSql",
      description:
        "PostgreSQL est un système de gestion de base de données relationnelle avancé, open source et extensible. Il supporte de nombreuses fonctionnalités avancées telles que les transactions complexes, les vues matérialisées et la gestion JSON.",
      img: "/postgresql.png",
      zoom: 1.2,
    },
  ],
  autres: [
    {
      id: "git",
      name: "Git",
      description:
        "Git est un système de contrôle de version distribué permettant de suivre les modifications du code source et de collaborer efficacement en équipe.",
      img: "/git.png",
      zoom: 1,
    },
    {
      id: "github",
      name: "GitHub",
      description:
        "GitHub est une plateforme en ligne qui héberge des dépôts Git, facilitant la collaboration, la gestion des versions et l’intégration continue.",
      img: "/github.png",
      zoom: 1,
    },
    {
      id: "docker",
      name: "Docker",
      description:
        "Docker est une plateforme de conteneurisation qui permet de créer, déployer et exécuter des applications isolées dans des conteneurs légers et portables.",
      img: "/docker.jpg",
      zoom: 1.8,
    },
    {
      id: "vscode",
      name: "VScode",
      description:
        "Visual Studio Code est un éditeur de code source gratuit et extensible, très populaire auprès des développeurs pour sa flexibilité et ses nombreuses extensions.",
      img: "/vscode.avif",
      zoom: 1.3,
    },
    {
      id: "phpstorm",
      name: "PhpStorm",
      description:
        "PhpStorm est un environnement de développement intégré (IDE) puissant dédié au développement PHP, offrant des outils avancés pour la productivité et le débogage.",
      img: "/phpstorm.png",
      zoom: 1.8,
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
      <h2 className="text-3xl font-bold text-[#CC8B65] text-center mb-6">
        Compétences techniques
      </h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSelectedSkill(categories[tab][0]);
            }}
            className={`px-4 py-2 rounded-full font-semibold transition cursor-pointer 
              ${
                activeTab === tab
                  ? "bg-[#CC8B65] text-white"
                  : "bg-[rgb(11,72,59)] text-[#CC8B65] hover:bg-[#CC8B65]/70 hover:text-white"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex flex-wrap gap-4 w-full max-w-xl">
          {currentSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className={`cursor-pointer w-22 h-22 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 transition flex items-center justify-center ${
                selectedSkill?.id === skill.id
                  ? "border-[#CC8B65] bg-[#CC8B65]/10"
                  : "border-gray-300 hover:border-[#CC8B65]"
              }`}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-full h-full object-contain"
                draggable={false}
                style={{ transform: `scale(${skill.zoom || 1})` }}
              />
            </div>
          ))}
        </div>

        <div className="hidden md:flex w-1/2 min-h-[200px] p-6 border border-[#CC8B65] rounded-3xl bg-[rgb(11,72,59)]">
          {selectedSkill ? (
            <div>
              <h3 className="text-2xl font-bold text-[#CC8B65] mb-2">
                {selectedSkill.name}
              </h3>
              <p className="text-white">{selectedSkill.description}</p>
            </div>
          ) : (
            <p className="text-gray-300 italic">Sélectionnez un skill</p>
          )}
        </div>
      </div>
    </div>
  );
}
