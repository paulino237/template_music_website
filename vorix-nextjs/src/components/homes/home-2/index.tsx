  
"use client"
import { useEffect } from "react";
import MotionFlipReveal from "@/common/MotionReveal";
import HeroArea from "./HeroArea";
import VideoArea from "./VideoArea";
import MissionArea from "./MissionArea";
import ServiceArea from "./ServiceArea";
import ProjectArea from "./ProjectArea";
import CategoryArea from "./CategoryArea";
import ProcessArea from "./ProcessArea";
import TeamArea from "./TeamArea";
import PriceArea from "./PriceArea";
import FaqArea from "./FaqArea";
import TestimonialArea from "./TestimonialArea";
import BlogArea from "./BlogArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

const HomeTwo = () => {
	useEffect(() => {
		const container = document.getElementById("home2-wrap");
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

	return (
		<>
			<HeaderOne style_2={true} />
	      <div id="home2-wrap" style={{ perspective: 1200 }}>
        <MotionFlipReveal><HeroArea /></MotionFlipReveal>
        <MotionFlipReveal delay={0.05}><VideoArea /></MotionFlipReveal>
        <MotionFlipReveal delay={0.1}><MissionArea /></MotionFlipReveal>
        <MotionFlipReveal delay={0.15}><ServiceArea /></MotionFlipReveal>
        <MotionFlipReveal delay={0.2}><ProjectArea /></MotionFlipReveal>
        <MotionFlipReveal delay={0.25}><CategoryArea /></MotionFlipReveal>
        <MotionFlipReveal delay={0.3}><ProcessArea /></MotionFlipReveal>
        <MotionFlipReveal delay={0.35}><TeamArea /></MotionFlipReveal>
        <MotionFlipReveal delay={0.4}><PriceArea /></MotionFlipReveal>
        <MotionFlipReveal delay={0.45}><FaqArea /></MotionFlipReveal>
        <MotionFlipReveal delay={0.5}><TestimonialArea /></MotionFlipReveal>
        <MotionFlipReveal delay={0.55}><BlogArea /></MotionFlipReveal>
      </div>
	      <FooterOne style_2={true} />
		</>
	);
};

export default HomeTwo;
