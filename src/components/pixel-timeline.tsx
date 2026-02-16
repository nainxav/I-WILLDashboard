"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { PixelCard } from "./pixel-card";
import { FoundersSection } from "./founders-section";
import { DepartmentsSection } from "./departments-section";

// Data events matching the files
const events = [
  {
    id: 1,
    arc: 0,
    year: "2023",
    title: "EDUCATION DAY EXHIBITION",
    desc: "Showcasing our first prototype at the National Education Day event.",
    image: "/images/1_pameran_hardiknas.jpg",
  },
  {
    id: 2,
    arc: 0,
    year: "2023",
    title: "IoT SHOWCASE",
    desc: "Demonstrating smart home integration and IoT capabilities.",
    image: "/images/2_pameran_IoT.JPG",
  },
  {
    id: 3,
    arc: 0,
    year: "2023",
    title: "INTERNATIONAL DELEGATION",
    desc: "Hosting a visit from the Pakistan delegation for research collaboration.",
    image: "/images/3_kunjungan_pakistan.png",
  },
  {
    id: 4,
    arc: 0,
    year: "2024",
    title: "ORMAWA COMPETITION",
    desc: "Winning the prestigious Student Organization competition.",
    image: "/images/4_lomba_ormawa.JPG",
  },
  {
    id: 5,
    arc: 0,
    year: "2024",
    title: "TEAM CELEBRATION",
    desc: "Celebrating our milestones in Malang. Moral boosted!",
    image: "/images/5_syukuran_malang.JPG",
  },
  {
    id: 6,
    arc: 1,
    year: "2024",
    title: "OPEN HOUSE",
    desc: "Opening our lab doors to new recruits and curious minds.",
    image: "/images/6_open_house.JPG",
  },
];

export function PixelTimeline({ selectedArc }: { selectedArc: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // CONTENT LOGIC
  const arcEvents = events.filter((event) => event.arc === selectedArc);
  
  if (arcEvents.length === 0) {
      return (
          <div className="h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
               <div className="text-center space-y-6 relative z-10 px-6">
                   <div className="w-20 h-20 mx-auto border-4 border-red-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="font-pixel text-4xl text-red-500">!</span>
                   </div>
                   <h2 className="font-pixel text-4xl md:text-6xl text-red-500 text-shadow-pixel glitch-text">
                       ACCESS DENIED
                   </h2>
                   <p className="font-mono text-xl text-gray-400">
                       &gt; ARC {selectedArc} DATA ENCRYPTED.<br/>
                       &gt; PLEASE RETURN LATER.
                   </p>
                   <div className="pt-8">
                       <span className="font-pixel text-xs bg-red-900/20 text-red-400 px-4 py-2 border border-red-500/50">
                           STATUS: LOCKED
                       </span>
                   </div>
               </div>
               
               {/* Background Noise */}
               <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] opacity-5 mix-blend-overlay pointer-events-none" />
          </div>
      )
  }

  // RENDER SELECTED ARC CONTENT
  return (
    <div ref={containerRef} className="relative">
      {/* Intro Section: DYNAMIC TITLE */}
      <IntroSection title={`ARC-${selectedArc}`} />

      {/* ARC-0 SPECIFIC SECTIONS */}
      {selectedArc === 0 && (
        <>
            <FoundersSection />
            {/* <DepartmentsSection /> */}
        </>
      )}

      {arcEvents.map((event, index) => (
        <TimelineSection 
            key={event.id} 
            event={event} 
            index={index} 
            total={arcEvents.length} 
            progress={scrollYProgress} 
        />
      ))}
    </div>
  );
}

function IntroSection({ title }: { title: string }) {
    return (
        <div className="h-screen sticky top-0 flex items-center justify-center overflow-hidden bg-background/90 z-10">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/images/logo-lightMode.png')] bg-cover bg-center opacity-20 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

            <div className="relative z-10 text-center space-y-6 max-w-4xl px-6">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="font-pixel text-5xl md:text-8xl text-primary text-shadow-pixel blink"
                >
                    {title}
                </motion.h2>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="space-y-4"
                >
                    <p className="font-pixel text-2xl md:text-4xl text-foreground/90 leading-relaxed drop-shadow-md">
                        &quot;Year 2023...&quot;
                    </p>
                     
                    <p className="font-mono text-xl md:text-2xl text-muted-foreground italic">
                        In a small laboratory room, a vision was born.
                    </p>
                    
                    <p className="font-mono text-sm text-primary/80 mt-8">
                        SCROLL TO INITIALIZE HISTORY REWIND &gt;&gt;&gt;
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

function TimelineSection({ event, index, total, progress }: any) {
  // Opaicty logic: Fade in when this section is active, fade out when scrolling past
  // Map progress (0 to 1 over the whole container) to this specific section
  // Adjusted for Intro taking up space? Actually sticking ensures checks are relative to view.
  // Using simple sticky stacking is often easier than complex scroll mapping for this effect.
  
  return (
    <div className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
         className="absolute inset-0 z-0"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 1 }}
      >
          <div className="relative w-full h-full">
            <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                priority={index === 0}
            />
            {/* Theme-aware Overlay: Darker in dark mode, lighter in light mode but ensuring text contrast */}
            <div className="absolute inset-0 bg-background/30 dark:bg-black/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-background/60 dark:bg-black/60" />
            
            {/* Retro Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-50" />
          </div>
      </motion.div>

      {/* Content Card */}
      <motion.div 
        className="relative z-30 p-6 max-w-2xl w-full mx-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <PixelCard className="bg-background/80 dark:bg-black/80 backdrop-blur-md border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)]">
           <div className="flex items-center gap-4 mb-4 border-b-2 border-dashed border-primary/50 pb-2">
               <span className="font-pixel text-primary text-xl text-shadow-sm">LOG_0{index + 1}</span>
               <span className="font-mono text-sm opacity-50 ml-auto text-foreground">{event.year}</span>
           </div>
           
           <h3 className="font-pixel text-2xl md:text-4xl mb-4 leading-tight text-foreground">
               {event.title}
           </h3>
           
           <p className="font-mono text-lg md:text-xl text-muted-foreground">
               {event.desc}
           </p>

           <div className="mt-4 flex gap-2 items-center">
               <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
               <span className="text-xs font-pixel text-primary opacity-80">READING DATA...</span>
           </div>
        </PixelCard>
      </motion.div>
    </div>
  );
}
