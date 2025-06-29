import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const veilleData = [
  {
    id: 1,
    title: "Journal du Hacker",
    description:
      "Plateforme francophone de veille et d’actualités tech & open-source.",
    link: "https://www.journalduhacker.net/",
    image: "/veille-1.png",
  },
  {
    id: 2,
    title: "Statistiques clés de l'IA",
    description:
      "Découvrez 39 statistiques essentielles sur l'usage de l'intelligence artificielle par les développeurs.",
    link: "https://blog.humancoders.com/les-39-statistiques-cles-sur-lusage-de-lia-par-les-developpeurs-3772/",
    image: "/veille-2.webp",
  },
  {
    id: 3,
    title: "Enjeux éthiques de l’IA",
    description:
      "Explorez les défis éthiques et les responsabilités liées à l’intelligence artificielle dans le numérique.",
    link: "https://groupe-isia.com/actualites/ia-ethique-numerique-responsable-quels-enjeux-pour-demain/?gad_source=1&gad_campaignid=13570501378&gbraid=0AAAAACwcgi2X7yr2YBmp0k_VwVfz0Vyb-&gclid=Cj0KCQjwyIPDBhDBARIsAHJyyVjxA8Ms3xNxyyGJIXWDqT8NmhxPuTQK46lUQDmkQ1nnMhTq1ESh0MYaAn6eEALw_wcB",
    image: "/veille-3.jpg",
  },
  {
    id: 4,
    title: "Langage Ecologique",
    description:
      "Le langage C serait le plus Eco-logique et est l'un des meilleurs au monde, pourquoi ?",
    link: "https://www.free-work.com/fr/tech-it/blog/actualites-informatiques/quels-sont-les-langages-de-programmation-les-plus-ecologiques",
    image: "/veille-4.jpeg",
  },
  {
    id: 5,
    title: "Tendances UX/UI",
    description:
      "Plongez dans les dernières tendances UX/UI et les meilleures pratiques pour un design accessible et performant.",
    link: "https://sourcegroup.marketing/blog/tendances-ux-ui-design/#:~:text=Les%20tendances%20en%20UX%2FUI,IA%20et%20le%20machine%20learning.",
    image: "/veille-5.avif",
  },
];
export default function VeilleTechno() {
  const [index, setIndex] = useState(0);
  const [showFloating, setShowFloating] = useState(false);
  const [closedFloating, setClosedFloating] = useState(false);

  const delay = 5000;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      if (scrollPercent > 40 && !closedFloating) {
        setShowFloating(true);
      } else if (scrollPercent <= 40) {
        setShowFloating(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [closedFloating]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % veilleData.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  const floatingBox = (
    <div className="hidden md:block fixed bottom-6 right-6 w-[350px] backdrop-blur-md bg-white/10 shadow-lg rounded-xl overflow-hidden border border-[#CC8B65] z-50">
      <div className="relative h-[360px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={veilleData[index].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full p-4 text-white"
          >
            <img
              src={veilleData[index].image}
              alt={veilleData[index].title}
              className="w-full h-[180px] object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold text-[#CC8B65]">
              {veilleData[index].title}
            </h3>
            <p className="text-sm mb-2">{veilleData[index].description}</p>
            <a
              href={veilleData[index].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#CC8B65] border border-[#CC8B65] px-3 py-1 rounded-full hover:bg-[#CC8B65] hover:text-green-950 transition"
            >
              Lire l’article
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-between items-center px-4 py-2">
        <span className="text-xs text-[#CC8B65] font-semibold">
          Dernières veilles technos
        </span>
        <button
          onClick={() => {
            setClosedFloating(true);
            setShowFloating(false);
          }}
          className="text-xs text-white/60 hover:text-white"
        >
          Fermer ✕
        </button>
      </div>
      <div className="flex justify-center gap-1 pb-2">
        {veilleData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-[#CC8B65]" : "bg-white/30"
            } transition`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="veille" className="text-white py-16 px-4">
      {!showFloating && (
        <h2 className="text-3xl font-bold text-[#CC8B65] text-center mb-10">
          Veille Technologique
        </h2>
      )}

      {/* Desktop fallback version if closed */}
      {!showFloating && closedFloating && (
        <div className="hidden md:flex flex-col items-center">
          <div className="relative w-[400px] h-[350px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={veilleData[index].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-xl p-4 text-center"
              >
                <img
                  src={veilleData[index].image}
                  alt={veilleData[index].title}
                  className="w-full h-[180px] object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-[#CC8B65]">
                  {veilleData[index].title}
                </h3>
                <p className="text-sm mb-4">{veilleData[index].description}</p>
                <a
                  href={veilleData[index].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#CC8B65] border-2 border-[#CC8B65] px-4 py-1 rounded-full hover:bg-[#CC8B65] hover:text-green-950 transition"
                >
                  Lire l’article
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {veilleData.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-[#CC8B65]" : "bg-white/30"
                } transition`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Mobile version */}
      <div className="md:hidden flex flex-col items-center">
        <div className="relative w-full max-w-md h-[350px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={veilleData[index].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-md rounded-xl p-4"
            >
              <img
                src={veilleData[index].image}
                alt={veilleData[index].title}
                className="w-full h-[180px] object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-bold text-[#CC8B65]">
                {veilleData[index].title}
              </h3>
              <p className="text-sm mb-2">{veilleData[index].description}</p>
              <a
                href={veilleData[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#CC8B65] border-2 border-[#CC8B65] px-4 py-1 rounded-full hover:bg-[#CC8B65] hover:text-green-950 transition"
              >
                Voir le lien
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {veilleData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-[#CC8B65]" : "bg-white/30"
              } transition`}
            />
          ))}
        </div>
      </div>

      {showFloating && !closedFloating && floatingBox}
    </section>
  );
}
