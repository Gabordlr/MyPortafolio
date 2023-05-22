import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function Arrow({ prompt }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const enterSceneArrow = useAnimation();

  useEffect(() => {
    if (inView) {
      enterSceneArrow.start({
        x: 0,
        transition: {
          duration: 2,
          type: "spring",
          bounce: 0.1,
        },
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: "-60vw" }}
      animate={enterSceneArrow}
    >
        <span className={`text-3xl ${prompt} font-bold`}> {"\u2192"} </span>
    </motion.div>
  );
}