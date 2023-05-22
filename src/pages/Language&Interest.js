import React from "react";
import Arrow from "../icons/Arrow";
import { motion } from "framer-motion";

export default function LangInter() {
    
    const moveBall1 = {
        scale: 1.4,
        transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
        },
    }
    
    const moveBall2 = {
            scale: 1.4,
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
            },
    }
    
    const moveBall3 = {
        scale: 1.4,
        transition: {
            duration: 2.25,
            repeat: Infinity,
            repeatType: "reverse",
        },
    }

    return (
        <div className="relative h-screen w-screen bg-gradient-to-b from-neutral-400 to-neutral-300 grid grid-cols-2">
            <motion.div 
            className="absolute left-[50%] top-[43%] w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            style={{ zIndex: 1 }}
            animate = {moveBall1}
            ></motion.div>
            <motion.div 
            className="absolute left-[40%] top-[20%] w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            style={{ zIndex: 1 }}
            animate = {moveBall2}
            ></motion.div>
            <motion.div 
            className="absolute left-[30%] top-[43%] w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            style={{ zIndex: 1 }}
            animate = {moveBall3}
            ></motion.div>
            <div className="col-span-1 flex items-center flex-col" style={{ zIndex: 2 }}>
            <div class="mb-10 btn group flex items-center bg-transparent p-2 px-6 text-6xl font-thin tracking-widest text-white">
                <span class="relative pb-2 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-violet-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
                >Language</span>
            </div>
                <div className="perspective flex justify-center items-center h-56 w-56 m-5 rounded-full cursor-pointer group">
                    <div
                    className="relative backface-hidden h-full w-full preserve-3d group-hover:my-rotate-y-180 duration-1000 rounded-full" > 
                        <img src="https://cdn.shopify.com/s/files/1/0690/6812/8571/products/spain-flag__67306.1639690376.1280.1280_grande.jpg?v=1673391427" 
                        alt="Spanish"
                        className="absolute backface-hidden h-full w-full rounded-full" />
                        <p className="text-xl font-sans absolute my-rotate-y-180 backface-hidden rounded-full w-full h-full bg-neutral-800 text-white flex items-center justify-center">
                            Native (C2)
                        </p>
                    </div>
                </div>
                <div className="perspective flex justify-center items-center h-56 w-56 m-5 rounded-full cursor-pointer group">
                    <div
                    className="relative backface-hidden h-full w-full preserve-3d group-hover:my-rotate-y-180 duration-1000 rounded-full" > 
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US_flag_51_stars.svg/2560px-US_flag_51_stars.svg.png" 
                        alt="Spanish"
                        className="absolute backface-hidden h-full w-full rounded-full" />
                        <div className="absolute my-rotate-y-180 backface-hidden rounded-full w-full h-full bg-neutral-800 flex flex-col items-center justify-center">
                            <p className="text-xl font-sans text-white">Advanced (C1)</p>
                            <p className="text-lg font-sans font-extralight text-white">IB Bilingual Diploma</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="col-start-2 flex items-center flex-col" 
            style={{ zIndex: 2}}>
            <div class="mb-32 btn group flex items-center bg-transparent p-2 px-6 text-6xl font-thin tracking-widest text-white">
                <span class="relative pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-violet-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
                >Interest</span>
            </div>
                <section className="h-full w-full flex justify-center">
                <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
                    <li class="flex items-center space-x-3">
                        <Arrow prompt="text-violet-800" />
                        <span className="text-3xl text-neutral-900 font-sans font-extralight">Automoviles <span class="font-semibold text-white">&</span> motor sports </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Arrow prompt="text-violet-800" />
                        <span className="text-3xl text-neutral-900 font-sans font-extralight">Learning <span class="font-semibold text-white">&</span> developing <span class="font-semibold text-white">new</span> skills </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Arrow prompt="text-violet-800" />
                        <span className="text-3xl text-neutral-900 font-sans font-extralight"><span class="font-semibold text-white">Team </span> sports <span class="font-semibold text-white">&</span> competition </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Arrow prompt="text-violet-800" />
                        <span className="text-3xl text-neutral-900 font-sans font-extralight">Coding <span class="font-semibold text-white">&</span> Technology</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Arrow prompt="text-violet-800" />
                        <span className="text-3xl text-neutral-900 font-sans font-extralight"> <span class="font-semibold text-white">Cutting-Edge</span> Innovation</span>
                    </li>
                </ul>
                </section>
            </div>

        </div>
    )}
 