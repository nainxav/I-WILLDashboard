"use client"

import Link from "next/link";
import { PixelButton } from "@/components/pixel-button";
import { GridBackground } from "@/components/grid-background";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-background text-foreground transition-colors duration-300 font-mono relative overflow-hidden flex flex-col items-center justify-center">
      <GridBackground />

      {/* Hero Section: Press Start */}
      <section className="w-full max-w-4xl text-center z-10 space-y-8 px-6">
          <p className="font-pixel text-primary animate-pulse text-sm md:text-base">INSERT COIN TO CONTINUE...</p>
          
          <motion.h2 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl md:text-7xl font-pixel leading-tight text-shadow-pixel"
          >
            PLAYER 1:<br/>
            <span className="text-primary animate-flicker block mt-2">I-WILL LAB</span>
          </motion.h2>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto bg-black/5 dark:bg-white/5 p-6 border-2 border-dashed border-gray-400 dark:border-gray-600 min-h-[120px] flex items-center justify-center"
          >
             <div className="text-lg md:text-2xl leading-relaxed text-left w-full">
               <Typewriter
                 options={{
                   strings: [
                     "> SYSTEM_INIT: Researching the Future of Interaction...",
                     "> STATUS: ONLINE...",
                     "> MISSION: Build the interfaces of tomorrow."
                   ],
                   autoStart: true,
                   loop: true,
                   delay: 50,
                   deleteSpeed: 30,
                   cursor: "█"
                 }}
               />
             </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2, duration: 1 }}
             className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/codex">
              <PixelButton className="text-lg" as="div">
                START GAME (ENTER CODEX)
              </PixelButton>
            </Link>
          </motion.div>
      </section>
    </main>
  );
}
