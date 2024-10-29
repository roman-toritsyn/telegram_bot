"use client";

import { SparklesCore } from "@/app/components/ui/sparkles";
import { PlaceholdersAndVanishInput } from "@/app/components/ui/placeholders-and-vanish-input";

export default function Home() {

  return (
    <main className="w-screen h-screen overflow-auto bg-black flex items-center flex-col">
      <div className="h-[20rem] w-full flex justify-center overflow-hidden rounded-md">
        <div className="w-[80rem] h-40 relative">
          <div
            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"/>
          <div
            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"/>
          <div
            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"/>
          <div
            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"/>

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div
            className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center  items-center px-4 w-full">
        <h2 className="mb-10 text-xl text-center sm:text-2xl dark:text-white text-black">
          Залиште свій запит
        </h2>
        <PlaceholdersAndVanishInput
        />
      </div>

    </main>
  );
}
