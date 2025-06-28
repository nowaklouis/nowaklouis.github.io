import Typing from "../components/typing";

export default function Resume() {
  return (
    <div className="max-w-3xl mx-auto my-12 p-6 bg-[rgb(11,72,59)] bg-opacity-10 rounded-3xl shadow-lg text-center text-white">
      <div className="my-3">
        <Typing />
      </div>

      <p className="text-lg leading-relaxed mb-4">
        Développeur web passionné et polyvalent, je suis à la recherche d’une
        alternance pour mon Master afin de continuer à progresser au contact de
        projets concrets. Curieux et adaptable, j’aime explorer de nouvelles
        technologies et relever des défis variés.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <a
          href="/Nowak Louis CV_.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#013328] border-2 border-[#CC8B65] text-[#CC8B65] font-semibold py-2 px-6 sm:px-6 sm:py-2 px-4 py-1 text-sm sm:text-base rounded-full transition hover:bg-[#CC8B65] hover:text-green-700"
        >
          Voici mon CV
        </a>

        <a
          href="/LR_Dumont.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#013328] border-2 border-[#CC8B65] text-[#CC8B65] font-semibold py-2 px-6 sm:px-6 sm:py-2 px-4 py-1 text-sm sm:text-base rounded-full transition hover:bg-[#CC8B65] hover:text-green-700"
        >
          Recommandation
        </a>
      </div>
    </div>
  );
}
