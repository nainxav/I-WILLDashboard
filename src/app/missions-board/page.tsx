"use client";

import { PixelCard } from "@/components/pixel-card";
import { PixelButton } from "@/components/pixel-button";
import { GridBackground } from "@/components/grid-background";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConstructsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono p-6 relative">
      <GridBackground />
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        <div className="text-center space-y-4">
            <h1 className="font-pixel text-4xl md:text-6xl text-primary text-shadow-pixel">Missions Board</h1>
            <p className="text-xl opacity-80">&gt; QUEST BOARD: ACTIVE MISSIONS &lt;</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Quest 1 */}
            <QuestCard 
                title="ARC-01 DASHBOARD"
                description="Develop a high-performance interactive interface for the ARC-01 unit using Rive animation technology."
                type="MAIN QUEST"
                status="ACTIVE"
                reward="5000 XP"
                difficulty="HARD"
                link="/arc-01"
                tags={["Next.js", "Rive", "Interactive"]}
            />

            {/* Quest 2 */}
             <QuestCard 
                title="R.O.V.E.R FIELD TEST"
                description="Deploy autonomous units for environmental reliability testing in harsh terrains."
                type="SIDE QUEST"
                status="ONGOING"
                reward="3000 XP + DATA"
                difficulty="EXTREME"
                link="#"
                tags={["Robotics", "ROS", "AI"]}
            />

            {/* Quest 3 */}
            <QuestCard 
                title="NEURAL LINK INTERFACE"
                description="Experimental brain-computer interface prototype for direct construct control."
                type="SECRET QUEST"
                status="LOCKED"
                reward="UNKNOWN"
                difficulty="LEGENDARY"
                link="#"
                locked={true}
                tags={["BCI", "Python", "Neuro"]}
            />
        </div>
      </div>
    </main>
  );
}

function QuestCard({ title, description, type, status, reward, difficulty, link, tags, locked = false }: any) {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full"
        >
            <PixelCard title={type} className={`h-full flex flex-col relative ${locked ? 'opacity-70 grayscale' : ''}`}>
                <div className="absolute top-4 right-4 animate-pulse">
                    <span className={`text-xs px-2 py-1 font-pixel border-2 border-black dark:border-white ${status === 'ACTIVE' ? 'bg-green-500 text-white' : status === 'LOCKED' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'}`}>
                        {status}
                    </span>
                </div>
                
                <h4 className="font-pixel text-xl mb-4 text-primary mt-6 min-h-[3rem]">{title}</h4>
                <p className="mb-6 text-sm md:text-base flex-grow">
                    {locked ? "Encryption Key Required..." : description}
                </p>

                <div className="mb-6 space-y-2 text-xs bg-gray-100 dark:bg-zinc-800 p-3 border-2 border-dashed border-gray-300 dark:border-gray-700">
                    <p>REWARD: {reward}</p>
                    <p>DIFFICULTY: {difficulty}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] px-2 py-1 bg-background border border-foreground/30">
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto">
                    {locked ? (
                         <PixelButton variant="secondary" className="w-full cursor-not-allowed opacity-50" disabled as="button">
                            ACCESS DENIED
                        </PixelButton>
                    ) : (
                        <Link href={link} className="block w-full">
                            <PixelButton className="w-full" as="div">
                                ACCEPT QUEST
                            </PixelButton>
                        </Link>
                    )}
                </div>
            </PixelCard>
        </motion.div>
    )
}
