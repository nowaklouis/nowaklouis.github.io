import React from "react";
import { motion } from "framer-motion";

export default function MesMotivations() {
  return (
    <section
      id="motivations"
      className="mt-20 mb-20 pt-5 pb-10 bg-gradient-to-r from-[#0b483b] to-[#134e4a] text-white px-6 max-w-4xl mx-auto rounded-3xl shadow-lg"
    >
      <motion.h2
        className="text-4xl font-bold text-[#CC8B65] mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mes Motivations
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        La volonté a toujours été mon moteur. Aujourd’hui, je peux enfin
        exploiter cette force avec passion et détermination. J’ai hâte
        d’apprendre sans cesse, car c’est ainsi que l’on s’améliore et progresse
        réellement. C’est grâce au métier de développeur que j’ai découvert ma
        vraie force : transformer chaque défi en opportunité d’évolution. Mon
        objectif est clair : devenir un véritable atout pour toute équipe.
        <br />
        <br />
        Mon master orienté vers l’intelligence artificielle témoigne de mon
        envie de surfer sur la vague technologique et de rester à la pointe. Je
        réalise régulièrement une veille technologique que je partage ici, car
        se maintenir informé est essentiel dans ce métier.
        <br />
        <br />
        Actuellement, je développe une application avec React Native pour le
        frontend, et j’expérimente côté backend avec Python. Je réfléchis
        également à apprendre le langage C prochainement, un choix évident pour
        sa puissance, sa popularité, sa rapidité, et son empreinte écologique
        remarquable.
      </motion.p>
    </section>
  );
}
