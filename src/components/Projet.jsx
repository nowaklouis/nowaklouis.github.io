import React, { useRef } from "react";
import { motion } from "framer-motion";

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
    img: "/Wild Food fact.png",
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
    img: "/skillswap.png",
  },
];

export default function Projets() {
  const scrollRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    if (!slider) return;

    isDragging.current = true;
    startX.current = e.pageX - slider.offsetLeft;
    scrollLeft.current = slider.scrollLeft;

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const slider = scrollRef.current;
    if (!slider) return;

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    slider.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
  };

  return (
    <section id="Projet" className="pt-20 pb-20 rounded-3xl">
      <h2 className="text-3xl font-bold text-[#CC8B65] text-center mb-12">
        Projets
      </h2>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        className="flex gap-6 px-6 cursor-grab active:cursor-grabbing overflow-x-auto no-scrollbar"
        style={{
          WebkitOverflowScrolling: "touch",
          // empêcher scroll vertical
          overflowY: "hidden",
          // hauteur auto pour ne pas couper les cartes
          height: "auto",
        }}
      >
        {InfoProjet.map((projet, index) => (
          <motion.div
            key={projet.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            viewport={{ once: true }}
            className="min-w-[280px] max-w-[280px] bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all shrink-0"
          >
            <img
              src={projet.img}
              alt={projet.name}
              className="w-full h-[160px] object-cover"
            />
            <div className="p-4 text-white">
              <h3 className="text-lg font-bold text-[#CC8B65]">
                {projet.name}
              </h3>
              <p className="text-sm italic">{projet.base}</p>
              <p className="text-xs mb-2">📅 {projet.date}</p>
              <p className="text-sm mb-4 line-clamp-4">{projet.description}</p>
              <a
                href={projet.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs border-2 border-[#CC8B65] text-[#CC8B65] px-3 py-1 rounded-full hover:bg-[#CC8B65] hover:text-green-950 transition"
              >
                Voir GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CSS custom scrollbar */}
      <style jsx>{`
        .no-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cc8b65 transparent;
        }
        .no-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .no-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .no-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cc8b65;
          border-radius: 4px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        /* Masquer scrollbar verticale */
        .no-scrollbar::-webkit-scrollbar:vertical {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
        /* Mais on remet la scrollbar horizontale visible */
        @media (hover: hover) {
          .no-scrollbar {
            scrollbar-width: thin;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: block;
            height: 8px;
          }
          .no-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cc8b65;
          }
        }
      `}</style>
    </section>
  );
}
