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
      "Le Jeu de la vie est un plan infini quadrillé, dont chaque case est, soit occupée par une cellule, soit vide. Chaque case possède huit voisines, placées tout autour d’elle, une cellule « naît » lorsque trois de ses huit voisines sont vivantes, et reste en vie aussi longtemps qu'elle possède deux ou trois voisines vivantes ; dans le cas contraire elle meurt (par isolement ou surpopulation).",
    link: `https://github.com/nowaklouis/Game-of-Life`,
    img: "/gameoflife.png",
  },
  {
    id: 2,
    name: "Wild Food Fact",
    base: "React | Mui",
    date: "11/2022",
    description:
      "Une application créer pour s'informer des scores alimentaires de plusieurs produits issues de l'API Open Food Fact. Vous avez la possibilité de scanner, recherché directement via une searchbar pour retrouver les infos produits, Eco-score, Nova-score ou encore d'autres infos complémentaires.  Permet aussi d'enregistrer vos produits sélectionner dans votre bibliothèque de favori.",
    link: `https://github.com/nowaklouis/Wild-Food-Facts`,
    img: "/Wild Food Fact.png",
  },
  {
    id: 3,
    name: "VTC Strasbourg",
    base: "Next.js | Express.js | Sequelize | MUI",
    date: "01/2023",
    description:
      "Un site pour un client réel, son besoin? Une interface intuitive, un meilleur SEO, un payement en ligne ainsi qu'un back-office, pour son site de VTC. Nous avons repondu à ça demande en utilisant Next.js pour le style intuitive et le SEO, Express.js pour son back-office, MapBox pour pouvoir créer des trajets de transport et Stripe pour le paiement en ligne.",
    link: `https://github.com/nowaklouis/VTC-Strasbourg`,
    img: "VTC.png",
  },
  {
    id: 4,
    name: "Sherlockation",
    base: "Next.js | TypeScript | SWR | DynamoDB | Mui",
    date: "01/2023",
    description:
      "Une application issue d'un hackatton de 48 heures avec en partenariat amazon(AWS), le but était de réaliser un site de location de véhicules avec leurs outils (DynamoDB ,  SWR pour fetch les données). Nous nous sommes alors scinder en équipes pour réaliser ce projet et avons decider d'utiliser TypeScript et NextAuth pour encore plus de challenge.",
    link: `https://github.com/nowaklouis/Sherlockation`,
    img: "/Sherlockation.png",
  },
  {
    id: 5,
    name: "Wild Wood",
    base: "Next.js | Express.js | Sequelize | MUI",
    date: "05/2023",
    description:
      "Un Projet en cours pour mon passage du titre professionnel de développeur web et web mobile. c'est une application complète front-end / back-end de recherche et vente de plantes.",
    link: `https://github.com/nowaklouis/WildWood`,
    img: "/WildWood.png",
  },
];

export default function Projets() {
  const [projetR, setProjetR] = useState(1);
  const [projetP, setProjetP] = useState(1);

  const handleChange = (a, p) => {
    setProjetR(p);
  };

  return (
    <div id="Projet" className="pt-[60px] relative z-10 sect3">
      <h1 className="text-4xl text-cyan-400 text-center mb-16">
        Projet JavaScript
      </h1>

      <div className="flex justify-center">
        <div className="flex flex-col gap-8 items-center">
          {InfoProjet.filter((result) => result.id === projetR).map(
            (projet, id) => (
              <div key={id} className="flex justify-center w-full">
                <div className="bg-black/10 w-[95%] md:w-[60%] flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
                  <div className="flex-1 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">{projet?.name}</h2>
                    <p className="mb-1">{projet?.base}</p>
                    <p className="mb-3">Créer: {projet?.date}</p>
                    <p className="pt-2">{projet?.description}</p>
                    <div className="flex justify-center pt-8">
                      <a
                        href={projet?.link}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded transition"
                      >
                        Un Aperçu ?
                      </a>
                    </div>
                  </div>
                  <img
                    src={projet?.img}
                    alt="projets"
                    className="w-[300px] p-2 object-cover"
                  />
                </div>
              </div>
            )
          )}

          <div className="flex justify-center mt-4">
            {/* Si tu utilises une pagination custom */}
            <Pagination count={5} onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
