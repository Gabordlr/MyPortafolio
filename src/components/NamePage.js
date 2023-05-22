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
                <h2 className="text-5xl text-white font-sans mb-8 font-bold">Gabriel Rodriguez</h2>
            </motion.div>
            <motion.div className="flex flex-col h-screen w-1/2 bg-neutral-800 justify-center items-center"
            initial={{x: '200vw'}}
            animate={slideRight}>
                <img src="https://avatars.githubusercontent.com/u/78704009?v=4" alt="Gabriel Rodriguez" className="rounded-full h-64 w-64 mb-10" />
                <p className="text-white font-light w-2/3 text-center">
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                </p>
            </motion.div>           
        </div>
    )
}