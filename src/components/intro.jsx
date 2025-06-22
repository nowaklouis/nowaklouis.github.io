import { Typography, Box } from "@mui/material/";
import Resume from "./resume";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Intro() {
  const titleRef = useRef();
  const onLoad = () => {
    gsap
      .timeline()
      .fromTo(
        ".letter",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.3,
        }
      )
      .to(".letter", {
        margin: "0 5px",
        delay: 5.0,
        duration: 0.5,
      });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <Box
      id="intro"
      sx={{ display: "flex", justifyContent: "center", paddingTop: "8rem" }}
    >
      <Box sx={{ width: "60%", textAlign: "start" }}>
        <Typography variant="h3" sx={{ color: "primary.light" }}>
          Enchanté, moi c’est
        </Typography>
        <Typography
          className="title"
          ref={titleRef}
          variant="h1"
          sx={{ color: "info.main" }}
        >
          <span className="letter">L</span>
          <span className="letter">o</span>
          <span className="letter">u</span>
          <span className="letter">i</span>
          <span className="letter">s</span>
          <span className="letter"> </span>
          <span className="letter">N</span>
          <span className="letter">o</span>
          <span className="letter">w</span>
          <span className="letter">a</span>
          <span className="letter">k</span>
        </Typography>
        <Typography variant="h3" sx={{ color: "primary.light" }}>
          Un développeur investi, prêt à relever vos défis
        </Typography>
        <Typography variant="h4" sx={{ color: "primary.light" }}>
          Développeur web passionné et polyvalent, je suis à la recherche d’une
          alternance pour mon Master afin de continuer à progresser au contact
          de projets concrets. Curieux et adaptable, j’aime explorer de
          nouvelles technologies et relever des défis variés.
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "primary.light", marginTop: "20px" }}
        >
          Le travail en équipe est au cœur de ma méthode : je m’investis
          pleinement, avec rigueur et persévérance, pour contribuer efficacement
          aux objectifs communs. Mon ambition ? Devenir un atout incontournable
          au sein de l’entreprise qui me fera confiance.
        </Typography>
        <Resume />
      </Box>
    </Box>
  );
}
