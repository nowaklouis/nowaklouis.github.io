import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Typing from "../components/typing";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutMe() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  const slideLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  useEffect(() => {
    slideLeft(".sect1");
  }, []);

  return (
    <Box
      id="Presentation"
      sx={{
        marginTop: { xs: "50px", md: "20rem" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        className="sect1"
        sx={{
          display: { md: "flex" },
          justifyContent: "center",
          width: { md: "60%", xs: "95%" },
          background: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography color="info.main" component="div" variant="h5">
              NOWAK Louis
            </Typography>
            <Typing />
            <Typography
              color="primary"
              component="div"
              variant="h5"
              sx={{ paddingTop: "1.5rem" }}
            >
              Le web, le code : j’en ai fait une vraie passion. C’est cette
              passion qui m’a poussé à me former à la Wild Code School, une
              expérience formatrice tant sur le plan technique que personnel.
              J’y ai découvert la programmation à travers JavaScript et ses
              frameworks, la gestion d’API avec Node.js, ainsi que le travail en
              équipe sur des projets React, le tout dans un workflow structuré
              avec GitHub.
            </Typography>
            <Typography
              color="primary"
              component="div"
              variant="h5"
              sx={{ paddingTop: "1.5rem" }}
            >
              J’ai ensuite poursuivi mon parcours en alternance au CESI de
              Strasbourg, où j’ai eu l’opportunité de travailler pendant un an
              chez Cirpé. Cette expérience en entreprise m’a permis de mettre en
              pratique mes compétences sur des projets concrets, de gagner en
              autonomie, et de renforcer ma rigueur professionnelle.
              Aujourd’hui, je suis à la recherche d’une nouvelle alternance dans
              le cadre de mon Master. Curieux, organisé et persévérant, je suis
              prêt à m’investir pleinement pour devenir un véritable atout au
              sein de votre équipe.
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 500, height: 500, p: "10px" }}
          image="/intro.png"
          alt="Live from Time"
        />
      </Card>
    </Box>
  );
}
