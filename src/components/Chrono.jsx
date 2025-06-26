import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaRedoAlt,
  FaSchool,
  FaBriefcase,
  FaGraduationCap,
  FaUniversity,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Chrono() {
  return (
    <div className="bg-[#013328] py-16 px-4">
      <h2 className="text-center text-4xl font-bold text-[#CC8B65] mb-12">
        Mon Parcours
      </h2>
      <VerticalTimeline lineColor="#CC8B65">
        <VerticalTimelineElement
          date="01/2022"
          dateClassName="text-white"
          iconStyle={{
            background: "#CC8B65",
            color: "#013328",
            boxShadow: "none",
            border: "3px solid #CC8B65",
          }}
          contentStyle={{
            background: "rgb(11, 72, 59)",
            color: "#ffffff",
            boxShadow: "none",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(11, 72, 59)" }}
          icon={<FaRedoAlt />}
        >
          <h3 className="vertical-timeline-element-title text-[#CC8B65]">
            Reconversion
          </h3>
          <p>
            J’ai souhaité entreprendre une reconversion pour donner un nouveau
            sens à ma vie professionnelle et me rapprocher de ce qui me
            passionne réellement. Inspiré par des amis développeurs, j’ai décidé
            de découvrir cet univers par curiosité, et j’y ai rapidement trouvé
            un réel intérêt. Ce fut le point de départ d’un parcours engagé,
            guidé par l’envie d’apprendre et animé par une forte volonté de
            réussir.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="09/2022"
          dateClassName="text-white"
          iconStyle={{
            background: "#CC8B65",
            color: "#013328",
            boxShadow: "none",
            border: "3px solid #CC8B65",
          }}
          contentStyle={{
            background: "rgb(11, 72, 59)",
            color: "#ffffff",
            boxShadow: "none",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(11, 72, 59)" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title text-[#CC8B65]">
            Wild Code School
          </h3>
          <p>
            Une formation intensive et professionnalisante axée sur le
            développement web. Cette expérience m’a permis d’acquérir des
            compétences concrètes en HTML, CSS, JavaScript et React, à travers
            des projets en équipe. Au-delà des aspects techniques, cette
            formation m’a aussi appris à collaborer efficacement, à résoudre des
            problèmes en autonomie et à adopter une logique de développement
            orientée objet. Elle a renforcé ma motivation à évoluer dans ce
            métier et m’a donné les bases solides pour continuer à apprendre et
            progresser.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="05/2023"
          dateClassName="text-white"
          iconStyle={{
            background: "#CC8B65",
            color: "#013328",
            boxShadow: "none",
            border: "3px solid #CC8B65",
          }}
          contentStyle={{
            background: "rgb(11, 72, 59)",
            color: "#ffffff",
            boxShadow: "none",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(11, 72, 59)" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title text-[#CC8B65]">
            Roederer - Stage
          </h3>
          <p>
            Avant d’intégrer l’entreprise Roederer, j’ai entrepris une
            autoformation en PHP et Symfony afin de me préparer au mieux aux
            besoins du poste. Cette initiative m’a permis de poser des bases
            solides, que j’ai ensuite pu approfondir au sein de l’équipe en
            entreprise. Ce passage m’a non seulement permis de progresser
            techniquement, mais aussi de mieux comprendre les exigences du
            métier de développeur dans un cadre professionnel concret.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="10/2023"
          dateClassName="text-white"
          iconStyle={{
            background: "#CC8B65",
            color: "#013328",
            boxShadow: "none",
            border: "3px solid #CC8B65",
          }}
          contentStyle={{
            background: "rgb(11, 72, 59)",
            color: "#ffffff",
            boxShadow: "none",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(11, 72, 59)" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title text-[#CC8B65]">
            Développeur Web et Web Mobile
          </h3>
          <p>
            Obtention du diplôme, après avoir conçu et réalisé un projet complet
            de A à Z. Cette expérience m’a permis de mettre en pratique mes
            compétences techniques ainsi que mon sens de l’organisation et de la
            gestion de projet, confirmant ainsi ma motivation et ma capacité à
            mener à bien des réalisations concrètes.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="05/2024"
          dateClassName="text-white"
          iconStyle={{
            background: "#CC8B65",
            color: "#013328",
            boxShadow: "none",
            border: "3px solid #CC8B65",
          }}
          contentStyle={{
            background: "rgb(11, 72, 59)",
            color: "#ffffff",
            boxShadow: "none",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(11, 72, 59)" }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title text-[#CC8B65]">
            CESI
          </h3>
          <p>
            J’y ai suivi une formation complète axée sur le management de
            projet, couvrant toutes ses phases clés : de l’analyse des besoins à
            la conception, en passant par le développement et le déploiement.
            Cette expérience m’a permis de comprendre l’importance d’une gestion
            rigoureuse et structurée, essentielle pour garantir la réussite des
            projets informatiques en équipe.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="08/2024"
          dateClassName="text-white"
          iconStyle={{
            background: "#CC8B65",
            color: "#013328",
            boxShadow: "none",
            border: "3px solid #CC8B65",
          }}
          contentStyle={{
            background: "rgb(11, 72, 59)",
            color: "#ffffff",
            boxShadow: "none",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(11, 72, 59)" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title text-[#CC8B65]">
            Cirpé
          </h3>
          <p>
            Avec une année d’alternance, j’ai pu approfondir mes connaissances
            et consolider mes bases, notamment sur Symfony. Cette expérience en
            situation réelle d’entreprise m’a permis de mieux comprendre les
            exigences du métier, d’améliorer ma pratique technique, d’affiner
            mon analyse des demandes, ainsi que de développer mes compétences en
            communication et en gestion des priorités au sein d’une équipe
            travaillant selon la méthode agile.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="09/2025"
          dateClassName="text-white"
          iconStyle={{
            background: "#CC8B65",
            color: "#013328",
            boxShadow: "none",
            border: "3px solid #CC8B65",
          }}
          contentStyle={{
            background: "rgb(11, 72, 59)",
            color: "#ffffff",
            boxShadow: "none",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(11, 72, 59)" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title text-[#CC8B65]">
            Bachelor
          </h3>
          <p>
            Je prépare actuellement l’obtention de mon Bachelor, un titre RNCP
            de niveau Bac+3, dont la soutenance est prévue le 19 septembre 2025.
            Ce mémoire, qui porte principalement sur le développement complet
            d’un planning, constituera la base pour l’obtention de mon diplôme.
            Je prévois de publier prochainement la partie développement de ce
            mémoire sous forme de lien PDF.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="10/2025"
          dateClassName="text-white"
          iconStyle={{
            background: "#CC8B65",
            color: "#013328",
            boxShadow: "none",
            border: "3px solid #CC8B65",
          }}
          contentStyle={{
            background: "rgb(11, 72, 59)",
            color: "#ffffff",
            boxShadow: "none",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(11, 72, 59)" }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title text-[#CC8B65]">
            Epitech
          </h3>
          <p>
            Après avoir réussi les tests d’admission, je prépare ma rentrée
            prévue en octobre 2025 à Epitech. L’école propose plusieurs
            spécialisations, parmi lesquelles celle en intelligence artificielle
            retient tout particulièrement mon attention. Je suis très
            enthousiaste à l’idée de développer mes compétences dans ce domaine
            en pleine expansion et de relever les défis technologiques qu’il
            offre.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="10/2025"
          dateClassName="text-white"
          iconStyle={{
            background: "#CC8B65",
            color: "#013328",
            boxShadow: "none",
            border: "3px solid #CC8B65",
          }}
          contentStyle={{
            background: "rgb(11, 72, 59)",
            color: "#ffffff",
            boxShadow: "none",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(11, 72, 59)" }}
          icon={<FaQuestionCircle />}
        >
          <h3 className="vertical-timeline-element-title text-[#CC8B65]">
            Et maintenant ?
          </h3>
          <p>
            Dans le cadre de ma formation à Epitech, je suis actuellement à la
            recherche d’une entreprise pour effectuer mon alternance. Je suis
            motivé, curieux et prêt à m’investir pleinement pour contribuer à
            vos projets tout en développant mes compétences. Peut-être serai-je
            bientôt amené à rejoindre votre équipe et à participer activement à
            vos défis technologiques !
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
