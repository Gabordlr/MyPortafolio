import React from 'react';
import { timeLineData } from "../media/timeLinaData";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function TimeLineCard({ id, onClose }) {
  const timelineItem = timeLineData.find((item) => item.key === id);

  const [activeTab, setActiveTab] = React.useState("html");

  const handleTabClose = () => {
    onClose();
  };


  if (!timelineItem) {
    return null; // Render nothing if timelineItem is not found
  }

  return (
    <div>
      <div className='flex items-end justify-end'>
      <button onClick={handleTabClose} type="button" class="w-5 h-5 justify-center text-white hover:bg-violet-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-xs p-2.5 text-center inline-flex items-center ">
      X
      </button>
      </div>
        <p className="ml-2 text-violet-300 uppercase tracking-loose">
          {timelineItem.date}
        </p>        
      <p className="text-3xl md:text-3xl leading-normal md:leading-relaxed mb-2">
        {timelineItem.title}
      </p>

      <p className="text-sm md:text-base text-gray-50 mb-4">
        {timelineItem.description}
      </p>
      <Tabs title={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
          }}
        >
          {timelineItem?.activities.map(({ title }) => (
            <Tab
              key={title}
              title={title}
              onClick={() => setActiveTab(title)}
              className={activeTab === title ? "text-violet-800 text-center text-sm md:text-base mb-4 " : "text-sm text-center md:text-base text-gray-50 mb-4"}
            >
              {title}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {timelineItem?.activities.map(({ title, description }) => (
            <TabPanel 
            key={title} 
            title={title} 
            activeTab={activeTab}
            className= "text-sm md:text-base text-gray-50 mb-4">
              {activeTab === title && description}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}