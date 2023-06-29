import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function NamePage() {

    const { ref, inView } = useInView(
        {
            threshold: 0.5,
        }
    );
    const slideRight = useAnimation();

    useEffect(() => {
        if (inView) {
            slideRight.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.1
                }
            })
        }
    }, [inView]);


    return (
    <div ref={ref} className="flex justify-center bg-neutral-800">
        <motion.div className="flex flex-col justify-center items-center h-screen w-1/2 bg-neutral-950"
        initial={{x: '-100vw'}}
        animate={slideRight}>
            <h1 className="text-4xl text-white font-light mb-4">I am,</h1>
            <h2 className="text-5xl text-white font-abc font-normal mb-8 ">Gabriel Rodriguez</h2>
        </motion.div>
        <motion.div className="flex flex-col h-screen w-1/2 bg-neutral-800 justify-center items-center"
        initial={{x: '200vw'}}
        animate={slideRight}>
            <img src="https://media.licdn.com/dms/image/D4D03AQHyWSdPY_DvSw/profile-displayphoto-shrink_800_800/0/1673884992727?e=1692835200&v=beta&t=sh-JzShHTNgwkNmaPDTXTrrW91c5D2uq0BFpbaOMF-Y" alt="Gabriel Rodriguez" className="shadow-xl shadow-black rounded-full h-80 w-80 mb-10" />
            <p className="text-white font-light w-2/3 text-center font-abc text-md">
             a passionate software engineering student specializing in fullstack development. 
            With a strong appetite for learning new technologies, I am dedicated to creating innovative 
            and seamless applications, driven by my commitment to continuous growth and development in 
            the field of software engineering
            </p>
        </motion.div>           
    </div>
    )
}