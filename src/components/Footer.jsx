import { motion } from "framer-motion";

export default function Footer() {
  const stats = [
    {
      name: "Codewars",
      emoji: "⚔️",
      stat1: "1436 pts",
      stat2: "96 katas",
    },
    {
      name: "CSSBattle",
      emoji: "🎨",
      stat1: "Rang 36",
      stat2: "66 défis",
    },
    {
      name: "FrontendMentor",
      emoji: "💻",
      stat1: "21 projets",
      stat2: "Intermédiaire",
    },
    {
      name: "HackerRank",
      emoji: "🧩",
      stat1: "1020 pts",
      stat2: "15 badges",
    },
  ];

  return (
    <footer className="text-white py-8 mt-12">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between text-center md:text-left gap-6">
        {/* Texte Contact */}
        <div className="max-w-md">
          <p className="text-sm md:text-base mb-4">
            © {new Date().getFullYear()} NOWAK Louis - Tous droits réservés.
          </p>

          <p className="mb-2 text-base font-semibold text-[#CC8B65]">
            Contactez-moi
          </p>
          <p className="text-xs md:text-sm max-w-sm leading-relaxed">
            Retrouvez-moi sur{" "}
            <a
              href="https://www.linkedin.com/in/louis-nowak/"
              rel="noopener noreferrer"
              className="underline hover:text-[#f2c38f]"
            >
              LinkedIn
            </a>
            , par mail (présent dans mon CV) ou lors d’un{" "}
            <a
              href="https://ati4group.com/apero-dev-strasbourg/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#f2c38f]"
            >
              Apero Dev
            </a>
            .
          </p>
        </div>

        {/* Stats en grille 2x2 non cliquables avec animation hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xs">
          {stats.map(({ name, emoji, stat1, stat2 }) => (
            <motion.div
              key={name}
              className="bg-white/10 rounded-md p-2 w-28 text-left cursor-default select-none"
              title={name}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 15px rgba(204,139,101,0.6)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-xl mb-1">{emoji}</div>
              <h4 className="font-semibold text-sm mb-0.5">{name}</h4>
              <p className="text-xs leading-tight">{stat1}</p>
              <p className="text-xs leading-tight">{stat2}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs mt-6 italic text-[#CC8B65]">
          Saurez-vous résoudre la petite énigme : 12.3.9.5.7 ?
        </p>
      </div>
    </footer>
  );
}
