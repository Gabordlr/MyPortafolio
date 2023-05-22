import { useState, useRef} from "react";
import { motion} from "framer-motion";

export default function DragComponent({ words }) {
  const colors = [
    "text-purple-400",
    "text-purple-500",
    "text-purple-600",
    "text-purple-700",
    "text-purple-800",
    "text-purple-900",
  ];

  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="flex items-center justify-center w-full h-full"
      ref={containerRef}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
    >
      {words.map((word, index) => (
        <motion.div
          key={word}
          drag
          dragConstraints={containerRef}
          className={`shadow-xl shadow-black absolute flex w-52 h-52 rounded-full items-center opacity-50 justify-center hover:opacity-100 text-3xl font-extralight bg-neutral-800 ${colors[index % colors.length]}`}
          style={{
            cursor: isActive ? "grabbing" : "grab",
            translateX: `${(index-2) * 75}%`,
            translateY: `${(index-2) * 30}%`,
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
}