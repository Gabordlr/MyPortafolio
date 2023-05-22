import React from 'react';
import { useState, useEffect } from 'react';
import TimeLineSection from '../components/timeSection';
import { timeLineData } from '../media/timeLinaData';
import TimeLineCard from '../components/timeLineCard';
import { motion, useAnimation } from 'framer-motion';

export default function TimeLine() {
  const [activeTab, setActiveTab] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
const handleTabClick = (key) => {
  if (isOpen){
    setIsOpen(false)
    setTimeout(()=> {
      setActiveTab(key);
      setIsOpen(true);
   }
   ,500);
  }
  else{
    setActiveTab(key);
    setIsOpen(true);
  }
};

  const handleTabClose = () => {
    setIsOpen(false);
  };

  const enterScene = useAnimation();
  const zoomOut = useAnimation();

  useEffect(() => {
    if (isOpen) {
      enterScene.start({
        x: 0,
        y: (activeTab * 300) -300,
        transition: {
          x: {duration: 3}, y: {duration:0.1},
          type: 'spring', bounce: 0.1
        }
      });
      zoomOut.start({
        scale: 0,
        transition: {
          type: 'spring', duration: 1.5, bounce: 0.1
        }
      })
    } else {
      enterScene.start({
        x: '-100vw',
        transition: {
          type: 'spring', duration: 2, bounce: 0.1
        }
      });
      zoomOut.start({
        scale: 1,
        transition: {
          type: 'spring', duration: 3, bounce: 0.1, delay:1
        }
      })
    }
  }, [isOpen]);

  return (
    <section>
      <div className="bg-gradient-to-b from-neutral-600 to-neutral-400 text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <motion.div
            className='absolute left-0 w-1/3 m-7'
            initial={{ x: '-100vw' }}
            animate={enterScene}
            style={{ zIndex: 2 }}
          >
            <TimeLineCard id={activeTab} onClose={handleTabClose} />
          </motion.div>
          <motion.div
            className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 z-10"
            animate={zoomOut}
            style={{ zIndex: 1 }}
          >
            <p className="ml-2 text-violet-300 uppercase tracking-loose">
              MY LIFE
            </p>
            <p className="text-3xl md:text-3xl leading-normal md:leading-relaxed mb-2">
              Academic Journey & Co Curricular Experiences
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Here's your guide to the tech fest 2021 process. Go through all the
              steps to know the exact process of the fest.
            </p>
          </motion.div>

          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-violet-555 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #831aa1",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-violet-555 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #831aa1",
                    borderRadius: "1%",
                  }}
                ></div>
                {timeLineData.map((data, idx) => (
                  <TimeLineSection
                    key={idx}
                    title={data.title}
                    subtitle={data.subtitle}
                    date={data.date}
                    description={data.shortDescription}
                    side={data.side}
                    tags={data.tags}
                    onClick={() => handleTabClick(data.key)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}