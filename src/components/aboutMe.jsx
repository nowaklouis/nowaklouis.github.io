import Typing from "../components/typing";

export default function AboutMe() {
  return (
    <div
      id="Presentation"
      className="mt-[50px] md:mt-[20rem] flex justify-center"
    >
      <div className="sect1 bg-black/10 w-[95%] md:w-[60%] flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg text-white">
        <div className="flex flex-col justify-between">
          <div className="p-6 flex-1">
            <h2 className="text-cyan-400 text-2xl font-semibold mb-2">
              NOWAK Louis
            </h2>

            <Typing />

            <p className="text-white text-lg pt-6">
              Le web, le code : j’en ai fait une vraie passion. C’est cette
              passion qui m’a poussé à me former à la Wild Code School, une
              expérience formatrice tant sur le plan technique que personnel.
              J’y ai découvert la programmation à travers JavaScript et ses
              frameworks, la gestion d’API avec Node.js, ainsi que le travail en
              équipe sur des projets React, le tout dans un workflow structuré
              avec GitHub.
            </p>

            <p className="text-white text-lg pt-6">
              J’ai ensuite poursuivi mon parcours en alternance au CESI de
              Strasbourg, où j’ai eu l’opportunité de travailler pendant un an
              chez Cirpé. Cette expérience en entreprise m’a permis de mettre en
              pratique mes compétences sur des projets concrets, de gagner en
              autonomie, et de renforcer ma rigueur professionnelle.
              Aujourd’hui, je suis à la recherche d’une nouvelle alternance dans
              le cadre de mon Master. Curieux, organisé et persévérant, je suis
              prêt à m’investir pleinement pour devenir un véritable atout au
              sein de votre équipe.
            </p>
          </div>

          {/* Optional footer */}
          <div className="flex items-center pl-2 pb-2"></div>
        </div>

        <img
          src="/intro.png"
          alt="Live from Time"
          className="w-[500px] h-[500px] p-2 object-cover"
        />
      </div>
    </div>
  );
}
