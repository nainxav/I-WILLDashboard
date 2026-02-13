"use client";

import { PixelButton } from "@/components/pixel-button";
import { GridBackground } from "@/components/grid-background";
import { motion } from "framer-motion";

export default function TransmissionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono p-6 relative flex flex-col items-center justify-center">
      <GridBackground />
      
      <div className="max-w-3xl w-full relative z-10 space-y-12 text-center">
         <motion.div 
             className="inline-block p-4 border-4 border-black/20 bg-black/10 backdrop-blur-sm mb-8"
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
          >
             <h1 className="font-pixel text-2xl md:text-4xl mb-2">SEND TRANSMISSION</h1>
             <p className="font-mono text-lg opacity-80 animate-pulse">Frequency: OPEN</p>
          </motion.div>
          
          <motion.div 
             className="bg-background text-foreground p-8 md:p-12 border-4 border-black dark:border-white shadow-pixel-lg mx-auto"
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
          >
             <div className="font-mono text-lg mb-8 text-left space-y-4">
                <p>&gt; ESTABLISHING CONNECTION...</p>
                <p>&gt; ENCRYPTION: SECURE</p>
                <p className="text-primary">&gt; MESSAGE:</p>
                <p>
                    &quot;We are recruiting new party members and seeking alliance with other guilds. If you have a quest or a collaborative mission, transmit your data packet below.&quot;
                </p>
             </div>

             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="mailto:hello@iwill.example" className="w-full sm:w-auto">
                    <PixelButton className="w-full px-8 py-4 text-lg" as="div">
                        COMMS LINK (EMAIL)
                    </PixelButton>
                </a>
                <a href="#" className="w-full sm:w-auto">
                    <PixelButton variant="secondary" className="w-full px-8 py-4 text-lg" as="div">
                        SUBSCRIBE (NEWSLETTER)
                    </PixelButton>
                </a>
             </div>
          </motion.div>
      </div>
    </main>
  );
}
