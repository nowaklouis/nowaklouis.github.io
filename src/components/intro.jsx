import { useRef } from "react";

export default function Intro() {
  const titleRef = useRef();

  return (
    <div
      id="intro"
      className="flex flex-col md:flex-row items-center justify-center pt-32 px-4 bg-[#013328] text-white gap-6"
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="max-w-xs md:max-w-sm">
          <img
            src="/ma-photo.png"
            alt="Louis Nowak"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* TEXTE EN DEUXIÈME */}
      <div className="text-center md:text-left max-w-xl">
        <h3 className="text-3xl mb-2">Enchanté, moi c’est</h3>
        <h1 className="text-5xl font-bold text-[#CC8B65] mb-4">Louis Nowak</h1>
        <h4 className="text-xl mb-4">
          Développeur investi, prêt à relever vos défis
        </h4>

        {/* BOUTONS */}
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/louis-nowak/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border-2 border-[#CC8B65] text-[#CC8B65] rounded-full hover:bg-[#CC8B65] hover:text-white transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.7v2.16h.05c.52-.98 1.8-2.01 3.7-2.01 3.96 0 4.7 2.61 4.7 6V24h-4v-8.32c0-1.98-.04-4.54-2.76-4.54-2.76 0-3.18 2.16-3.18 4.4V24h-4V8z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/nowaklouis"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border-2 border-[#CC8B65] text-[#CC8B65] rounded-full hover:bg-[#CC8B65] hover:text-white transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.112.793-.26.793-.577v-2.234c-3.338.724-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.084 1.837 1.235 1.837 1.235 1.07 1.835 2.807 1.305 3.492.997.107-.776.42-1.305.763-1.604-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.404 1.02.004 2.04.137 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
