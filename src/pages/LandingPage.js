import React from 'react';

export default function LandingPage() {
    return (
<div class="flex min-h-screen items-center justify-center bg-gradient-to-b from-neutral-950 to-neutral-800 font-bold text-white">
  <div class=" text-center space-y-12">
      <div class="text-center text-6xl font-light">
        Welcome to the portfolio of a
        <div class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
        <span class="text-violet-500 text-6xl font-light animate-word-delay-1 col-span-full row-span-full"> Web Designer?</span>
        <span class="text-violet-500 text-6xl font-light animate-word-delay-2 col-span-full row-span-full"> Tech Student?</span>
        <span class="text-violet-500 text-6xl font-light animate-word-delay-3 col-span-full row-span-full"> Fullstack Dev?</span>
        <span class="text-violet-500 text-6xl font-light animate-word-delay-4 col-span-full row-span-full"> Code Engineer?</span>
        <span class="text-violet-500 text-6xl font-light animate-word col-span-full row-span-full"> Backend Dev?</span>
        </div>
    </div>
    <p class="text-2xl text-violet-300 font-light">
        Scroll down to find out...
    </p>
  </div>
</div>

    )
}