import React, { useState } from "react";
import { useEffect } from "react";
import Pagination from "./Pagination";

const InfoProjet = [
  {
    id: 1,
    name: "Game Of Life",
    base: "HTML | CSS | JavaScript",
    date: "09/2022",
    description:
      "Le Jeu de la vie est un plan infini quadrillé, dont chaque case est, soit occupée par une cellule, soit vide. Chaque case possède huit voisines, placées tout autour d’elle...",
    link: `https://github.com/nowaklouis/Game-of-Life`,
    img: "/gameoflife.png",
  },
  {
    id: 2,
    name: "Wild Food Fact",
    base: "React | MUI",
    date: "11/2022",
    description:
      "Une application pour consulter les scores nutritionnels de produits alimentaires via l'API Open Food Fact. Recherche, scan, et bibliothèque de favoris.",
    link: `https://github.com/nowaklouis/Wild-Food-Facts`,
    img: "/Wild Food Fact.png",
  },
  {
    id: 3,
    name: "VTC Strasbourg",
    base: "Next.js | Express.js | Sequelize | MUI",
    date: "01/2023",
    description:
      "Un site vitrine avec paiement en ligne, carte interactive et espace admin, réalisé pour un vrai client.",
    link: `https://github.com/nowaklouis/VTC-Strasbourg`,
    img: "/VTC.png",
  },
  {
    id: 4,
    name: "Sherlockation",
    base: "Next.js | TypeScript | SWR | DynamoDB | MUI",
    date: "01/2023",
    description:
      "Projet réalisé lors d’un hackathon AWS : plateforme de location de véhicules avec NextAuth, TypeScript et DynamoDB.",
    link: `https://github.com/nowaklouis/Sherlockation`,
    img: "/Sherlockation.png",
  },
  {
    id: 5,
    name: "Wild Wood",
    base: "Next.js | Express.js | Sequelize | MUI",
    date: "05/2023",
    description:
      "Projet fullstack de vente de plantes en ligne réalisé dans le cadre du titre professionnel de développeur web.",
    link: `https://github.com/nowaklouis/WildWood`,
    img: "/WildWood.png",
  },
  {
    id: 6,
    name: "SkillSwap",
    base: "Symfony | Twig",
    date: "06/2024",
    description:
      "SkillSwap est une plateforme d’échange de compétences entre utilisateurs. Chacun peut proposer un savoir-faire, chercher un besoin et entrer en contact avec d'autres membres.",
    link: `https://github.com/nowaklouis/SkillSwap`,
    img: "/Wild Food Fact.png", // à changer plus tard
  },
];

export default function Projets() {
  const [projetR, setProjetR] = useState(1); // commence au projet 1

  const handleChange = (page) => {
    setProjetR(page); // met à jour le projet à afficher
  };

  return (
    <div id="Projet" className="pt-[60px] relative z-10 sect3">
      <h2 className="text-3xl font-bold text-[#CC8B65] text-center mb-6">
        Projets
      </h2>

      <div className="flex justify-center">
        <div className="flex flex-col gap-8 items-center">
          {InfoProjet.filter((result) => result.id === projetR).map(
            (projet) => (
              <div key={projet.id} className="flex justify-center w-full">
                <div className="bg-black/10 w-[95%] md:w-[60%] flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
                  <div className="flex-1 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">{projet.name}</h2>
                    <p className="mb-1">{projet.base}</p>
                    <p className="mb-3">Créer : {projet.date}</p>
                    <p className="pt-2">{projet.description}</p>
                    <div className="flex justify-center pt-8">
                      <a
                        href={projet.link}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Un Aperçu ?
                      </a>
                    </div>
                  </div>
                  <img
                    src={projet.img}
                    alt={projet.name}
                    className="w-[300px] p-2 object-cover"
                  />
                </div>
              </div>
            )
          )}

          <div className="flex justify-center mt-4">
            <Pagination
              count={InfoProjet.length}
              page={projetR}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
