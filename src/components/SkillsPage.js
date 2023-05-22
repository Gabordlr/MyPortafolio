import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { data } from '../media/LanguageData.js';
import ModulosPage from "./modulos.js";
import TypeAnimation from "../animation/TypingAnimation.js";
import CollapseCard from "./collapseCard.js";

export default function SkillPage() {
  const { ref, inView } = useInView(
    {
        threshold: 0.1,
    });
    
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
      if (inView) {
        setShowAnimation(true);
      }
    }, [inView]);

  const sliderRef = useRef(null);

  useEffect(() => {
    if (inView) {
    const slider = sliderRef.current;
    let scroll = null;

    const startScroll = () => {
      scroll = setInterval(() => {
        slider.scrollLeft += 1;
      }, 10);
    };

    const stopScroll = () => {
      clearInterval(scroll);
    };

    slider.addEventListener("mouseenter", stopScroll);
    slider.addEventListener("mouseleave", startScroll);

    startScroll();

    return () => {
      slider.removeEventListener("mouseenter", stopScroll);
      slider.removeEventListener("mouseleave", startScroll);
      clearInterval(scroll);
    };
  }
  }, [inView]);

  return (
    <div ref={ref} className="bg-neutral-800 flex-col items-center border-2 border-neutral-800">
      <div className="w-full text-center mt-20 flex justify-center mb-14">
        {showAnimation && <TypeAnimation prompt="Skills" size="text-8xl" color="text-white" />}
        <h2 className="text-8xl text-white font-serif font-bold"><span className="twinkle">|</span></h2>
      </div>
      <div id="slider" ref={sliderRef} className="relative flex items-center overflow-x-scroll scroll no-scrollbar">
        {data.map((lang) => (
          <ModulosPage
            name={lang.name}
            image={lang.image}
            imagebg={lang.imagebg}
            proficiency={lang.proficiency}
            description={lang.description}
            key={lang.id}
          />
        ))}
      </div>
      <div className="flex justify-center mb-36">
      <CollapseCard />
    </div>
    </div>

  );
}

