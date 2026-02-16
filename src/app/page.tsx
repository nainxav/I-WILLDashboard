"use client"

import Link from "next/link";
import { PixelButton } from "@/components/pixel-button";
import { GridBackground } from "@/components/grid-background";
import { PixelTimeline } from "@/components/pixel-timeline";
import { ArcSelector } from "@/components/arc-selector";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedArc, setSelectedArc] = useState(0);
  return (
    <main className="min-h-[calc(100vh-80px)] bg-background text-foreground transition-colors duration-300 font-mono relative overflow-hidden flex flex-col items-center justify-center">
      <GridBackground />

      {/* Hero Section: Press Start */}
      <section className="w-full max-w-4xl text-center z-10 space-y-8 px-6">
          <motion.h2 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl md:text-7xl font-pixel leading-tight text-shadow-pixel pt-10"
          >
            <span className="text-primary animate-flicker block mt-2">I-WILL</span>
            <span className="text-secondary text-sm md:text-xl font-mono tracking-widest block mt-4 border-b-2 border-dashed border-primary/50 pb-4 mb-4">
              Innovative Workingspace Integrated Living Laboratory
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-md text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify md:text-center"
          >
            &quot;I-WILL is more than just a workspace; it is a passionate community of like-minded individuals committed to personal and professional growth. We believe that by bringing together diverse talents and perspectives, we can spark creativity and drive meaningful change. We are proud to support a community of hardworking and innovative individuals. At I-WILL, we recognize that our greatest asset is our people. We strive to provide the resources, support, and inspiration needed for each member to excel in their endeavors.&quot;
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto bg-black/5 dark:bg-white/5 p-6 border-2 border-dashed border-gray-400 dark:border-gray-600 min-h-[120px] flex items-center justify-center relative overflow-hidden"
          >
             <ArcSelector selectedArc={selectedArc} onSelectArc={setSelectedArc} />
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2, duration: 1 }}
             className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/codex">
              {/* <PixelButton className="text-lg" as="div">
                START GAME (ENTER CODEX)
              </PixelButton> */}
            </Link>
          </motion.div>
      </section>

      {/* History Timeline - Only visible in Arc 0 and potentially others */}
      <section id="history-timeline" className="relative w-full">
          <PixelTimeline selectedArc={selectedArc} />
      </section>
    </main>
  );
}
