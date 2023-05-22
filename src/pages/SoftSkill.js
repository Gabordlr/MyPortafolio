import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import DragComponent from "../components/bubbles.js";
import TypeAnimation from "../animation/TypingAnimation.js";

export default function SoftSkills() {
    const words = ['Team Work', 'Commitment', 'Cretivity', 'Resilience', 'Acountabilty'];
    const { ref, inView } = useInView(
        {
            threshold: 0.3,
        });
        
        const [showAnimation, setShowAnimation] = useState(false);
    
        useEffect(() => {
          if (inView) {
            setShowAnimation(true);
          }
        }, [inView]);

    return (
        <div ref={ref} className="h-screen w-screen bg-gradient-to-b from-neutral-800 to-neutral-600 border-t-2 border-neutral-800">
            <div className="w-full text-center mt-20 flex justify-center mb-14">
                {showAnimation && <TypeAnimation prompt="Soft Skills" size="text-8xl" color="text-white" />}
                <h2 className="text-8xl text-white font-serif font-bold"><span className="twinkle">|</span></h2>
            </div>
            <div className="w-full text-center flex justify-center">
            <button class="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white">
                <span class="relative pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-violet-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
                >Move them</span>
            </button>
            </div>
            <div className="flex h-4/6 w-full items-center justify-center "> 
                <DragComponent words={words}/>
            </div>
        </div>
    );
}