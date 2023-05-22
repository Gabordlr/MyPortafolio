import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Tag from './tag';

export default function TimeLineSection(props) {    
    const {ref, inView } = useInView({
        threshold: 0.7,
      });

    const growIn = useAnimation();

    const side = props.side === "left" ? "text-left" : "text-right";
    const side2 = props.side === "left" ? "left-timeline" : "right-timeline";
    const side3 = props.side === "left" ? "" : "flex-row-reverse";
    const side4 = props.side === "left" ? "" : "justify-end";

    useEffect(() => {
        if (inView) {
            growIn.start({
                scale: 1,
                transition: { duration: 1 },
            });
        }
    }, [inView]);

    const tags = props.tags || [];

    const handleButtonClick = () => {
        props.onClick(props.key);
      };

    return (
        <div>
        <motion.div
        ref = {ref}
        initial={{scale: 0}}
        animate={growIn} class={`mb-8 flex justify-between ${side3} items-center w-full ${side2}`}>
              <div class="order-1 w-5/12"></div>
              <div class={`order-1  w-5/12 px-1 py-4 ${side}`}>
                <p class="mb-3 text-xl text-violet-300">{props.date}</p>
                <h4 class={`mb-3 font-bold  text-lg md:text-2xl ${side}`}>{props.title}</h4>
                <h4 class={`mb-3 font-bold  text-lg md:text-xl ${side}`}>{props.subtitle}</h4>
                <div className={`flex ${side4}`}>
                    {tags.map((tag) => (
                        <Tag tag={tag} />
                    ))}
                </div>
                <p class="mt-3 text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                {props.description} 
                </p>
                <button 
                className='mt-3 text-sm md:text-base leading-snug text-gray-50 text-opacity-100 hover:text-violet-800'
                onClick={handleButtonClick}>
                    more...
                </button>
                </div>
            </motion.div>

        </div>
    )
}
