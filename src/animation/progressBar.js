import React from "react";

export default function Progress(props){
    const colors = [
        "bg-purple-100",
        "bg-purple-200",
        "bg-purple-300",
        "bg-purple-400",
        "bg-purple-500",
        "bg-purple-600",
        "bg-purple-700",
        "bg-purple-800",
        "bg-purple-900",
        "bg-pink-200"
    ];

    const numBars = props.prompt;
    const total = 10 - numBars;
    const bars = [];

    for (let i = 0; i < numBars; i++) {
        bars.push(<span key={i} className={`mb-2 h-[15px] flex-1 rounded-xl ${colors[i]}`}></span>);
    }
    for (let i = 0; i < total; i++) {
        bars.push(<span key={i} className="mb-2 h-[15px] flex-1 rounded-xl bg-gray-700"></span>);
    }

    return (
        <div className="absolute w-8/12 mb-2 bottom-0 flex gap-2 align-end">
            {bars}
        </div>
    );
}
