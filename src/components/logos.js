import React from "react";

export default function Logo(prompt) {
    return (
        <a class="relative hover-trigger" href={`${prompt.link}`}>
        <img src={`${prompt.img}`} alt="" className="h-10 w-10 m-10" />
        </a>
    )
}