import React from "react";

export default function SkillComp(props) {
  const numBars = props.prompt;
  const bars = [];

  for (let i = 0; i < numBars; i++) {

    const lang = props.data[i % props.data.length];

    bars.push(
        <div>
      <img
        key={`img-${i}`}
        src={lang.image}
        alt={lang.name}
        className="w-20 h-20 m-2 rounded-full border-2 border-white-600 bg-neutral-600"/>
        <p className="flex justify-center text-white font-thin">{lang.name}</p>
        </div>
    );
  }

  return (
    <div className="h-1/4 w-4/12 rounded-lg  m-5 flex flex-wrap justify-center items-center">
      {bars}
    </div>
  );
}