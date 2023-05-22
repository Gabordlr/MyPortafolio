import React from "react";

export default function LogoInfo(prompt) {
    return(
    <div class="relative hover-trigger m-10">
        <div class="absolute bg-neutral-600 right-5 bottom-10 rounded-lg text-white px-6 py-2 hover-target">
            {prompt.description}
        </div>
        <svg className="h-10 w-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d={prompt.img}></path>
        </svg>
    </div>
    )
}