"use client";

import { PixelCard } from "@/components/pixel-card";
import { GridBackground } from "@/components/grid-background";
import { motion } from "framer-motion";

export default function CodexPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono p-6 relative">
      <GridBackground />
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        <div className="text-center space-y-4">
            <h1 className="font-pixel text-4xl md:text-6xl text-primary text-shadow-pixel">LIBRARY</h1>
            <p className="text-xl opacity-80">&gt; DATABASE: UNCLASSIFIED &lt;</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Avatar & Class */}
            <motion.div
               initial={{ x: -50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.5 }}
            >
                <PixelCard className="text-center space-y-6">
                    <div className="w-48 h-48 mx-auto bg-gray-200 dark:bg-zinc-800 border-4 border-black dark:border-white flex items-center justify-center animate-float">
                        <span className="font-pixel text-6xl text-gray-400">?</span>
                    </div>
                    <div>
                        <h4 className="font-pixel text-xl mb-2">GUILD: I-WILL</h4>
                        <p className="text-xl">CLASS: <span className="text-primary font-bold">TECH WIZARDS</span></p>
                        <p className="text-sm text-muted-foreground mt-2">&quot;We craft magic from code and circuits.&quot;</p>
                    </div>
                    <div className="text-left text-sm space-y-2 border-t-2 border-dashed border-gray-400 pt-4 mt-4">
                        <p>&gt; ORIGIN: Unknown Sector</p>
                        <p>&gt; ALIGNMENT: Chaotic Good</p>
                        <p>&gt; LEVEL: Max</p>
                    </div>
                </PixelCard>
            </motion.div>
            
            {/* Stats Board */}
            <motion.div
               className="space-y-6"
               initial={{ x: 50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
            >
               <PixelCard title="ATTRIBUTES">
                  <div className="space-y-4 font-mono text-lg">
                    <StatBar label="STR (Hardware)" value={85} />
                    <StatBar label="INT (Research)" value={95} />
                    <StatBar label="MP (Innovation)" value={100} />
                    <StatBar label="DEX (Prototyping)" value={90} />
                    <StatBar label="LUK (Debugging)" value={50} />
                  </div>
               </PixelCard>

               <PixelCard title="SKILL TREE">
                   <div className="grid grid-cols-2 gap-4 text-sm">
                       <div>
                           <h5 className="font-bold mb-2 underline decoration-primary">ACTIVE SKILLS</h5>
                           <ul className="list-disc list-inside opacity-80">
                               <li>Rapid Prototyping</li>
                               <li>System Architecture</li>
                               <li>Full-Stack Casting</li>
                           </ul>
                       </div>
                       <div>
                           <h5 className="font-bold mb-2 underline decoration-primary">PASSIVE SKILLS</h5>
                           <ul className="list-disc list-inside opacity-80">
                               <li>Coffee Synthesis</li>
                               <li>Bug Tremorsense</li>
                               <li>Dark Mode Vision</li>
                           </ul>
                       </div>
                   </div>
               </PixelCard>
            </motion.div>
          </div>
      </div>
    </main>
  );
}

function StatBar({ label, value }: { label: string; value: number }) {
    return (
        <div className="flex items-center gap-4">
            <span className="w-32 text-sm md:text-base font-bold dark:text-gray-300">{label}</span>
            <div className="flex-1 h-4 bg-gray-200 dark:bg-zinc-800 border-2 border-black dark:border-white relative overflow-hidden">
                <motion.div 
                    className="h-full bg-primary" 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>
            <span className="font-pixel text-xs">{value}</span>
        </div>
    )
}
