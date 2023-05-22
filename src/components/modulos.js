import React from "react";
import Progress from "../animation/progressBar";
import "../index.css"


export default function Modulos(data) {
    return (
        <div class="flex items-center justify-center m-5">
        <card class="relative h-[20rem] sm:h-72 w-[25rem] rounded-lg">
          <img src={data.imagebg} className="h-full rounded-lg"/>
          <div class="absolute w-full h-full bottom-0 bg-gradient-to-r from-slate-800/30 to-slate-900 rounded-lg flex flex-col items-center justify-center text-center">
          <h2 class="text-3xl font-extralight text-white">{data.name}</h2>
            <img src={data.image} class="h-16 w-16 rounded-full border-2 mt-8" />
            <p class="text-base px-14 text-gray-300 mt-3">
              {data.description}
            </p>
            <p class="text-sm font-light px-14 text-gray-300 ">
              {data.proficiency}/10
            </p>
            <Progress prompt={data.proficiency}/>
          </div>
        </card>
      </div>
    );
}