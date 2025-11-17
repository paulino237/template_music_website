 
"use client"
import CtaArea from "./CtaArea";
import HeroArea from "./HeroArea";
import Cta2Area from "./Cta2Area";
import BlogArea from "./BlogArea";
import AboutArea from "./AboutArea"; 
import AwardsArea from "./AwardsArea";
import ServiceArea from "./ServiceArea";
import ProjectsArea from "./ProjectsArea";
import WorkprocessArea from "./WorkprocessArea";
import TestimonialArea from "./TestimonialArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import MusicPlayerArea from "./MusicPlayerArea";
import { useEffect, useState } from "react";
import MissionArea2 from "../home-2/MissionArea";
import ProjectArea2 from "../home-2/ProjectArea";
import { useRouter } from "next/navigation";
import MotionFlipReveal from "@/common/MotionReveal";
import { motion } from "framer-motion";

const HomeOne = () => {
  const [immersionDone, setImmersionDone] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [turnPage, setTurnPage] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (immersionDone) return;
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      setShowNext(bottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [immersionDone]);
  useEffect(() => {
    const container = document.getElementById("home1-wrap");
    if (!container) return;
    const targets = Array.from(container.querySelectorAll<HTMLElement>(".reveal-3d"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.2 }
    );
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const router = useRouter();
  return (
    <>
      <div id="home1-wrap" className={showNext && !immersionDone ? "home-freeze" : ""}>
        <HeaderOne />
        <div className="reveal-3d"><HeroArea /></div>
        <div className="reveal-3d"><CtaArea /></div>
        <div className="reveal-3d"><ServiceArea /></div>
        <div className="reveal-3d"><AboutArea /></div>
        <div className="reveal-3d"><ProjectsArea /></div>
        <div className="reveal-3d"><WorkprocessArea /></div>
        <div className="reveal-3d"><MusicPlayerArea /></div>
        <div className="reveal-3d"><AwardsArea /></div>
        <div className="reveal-3d"><TestimonialArea /></div>
        <div className="reveal-3d"><BlogArea /></div>
      </div>
      <div id="home1-end" style={{ height: 1 }} />
      <div id="home2-start" />
      {showNext && !immersionDone && (
        <div className="immersion-next">
          <button
            className="btn btn-primary immersion-next-btn"
            onClick={() => {
              setTurnPage(true);
              setImmersionDone(true);
              setShowNext(false);
              setTimeout(() => router.push("/home-2"), 900);
            }}
          >
            <span>Next</span><span>Next</span>
          </button>
        </div>
      )}
      {turnPage && (
        <motion.div
          className="page-turn"
          initial={{ rotateY: 0, opacity: 1 }}
          animate={{ rotateY: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
      <MotionFlipReveal><MissionArea2 /></MotionFlipReveal>
      <MotionFlipReveal delay={0.08}><ProjectArea2 /></MotionFlipReveal>
      <Cta2Area />
    </>
  );
};

export default HomeOne;


