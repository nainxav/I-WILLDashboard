"use client";

import { GridBackground } from "@/components/grid-background";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { teams } from "@/data/teams";

export default function ArsenalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono p-6 relative">
      <GridBackground />
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        <div className="text-center space-y-4">
            <h1 className="font-pixel text-4xl md:text-6xl text-primary text-shadow-pixel">TEAMS</h1>
            <p className="text-xl opacity-80">&gt; I-WILL LABORATORY PROJECTS &lt;</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teams.map((team, index) => (
                <motion.div
                    key={team.slug}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <Link href={`/arsenal/${team.slug}`} className="block h-full">
                        <div className="h-full bg-background border-4 border-black dark:border-white p-4 shadow-pixel hover:shadow-pixel-lg transition-all relative overflow-hidden group cursor-pointer">
                            <div className="absolute top-0 right-0 p-2 opacity-50 text-[10px] font-pixel border-b-2 border-l-2 border-black dark:border-white bg-gray-100 dark:bg-zinc-800">
                                {team.members.length > 0 ? `${team.members.length} MEMBERS` : 'COMING SOON'}
                            </div>
                            
                            {/* Team Logo */}
                            <div className="w-16 h-16 mx-auto mb-3 relative bg-gray-100 dark:bg-zinc-800 rounded-lg overflow-hidden border-2 border-black dark:border-white">
                                <Image 
                                    src={team.logo} 
                                    alt={`${team.name} logo`}
                                    fill
                                    className="object-contain p-1"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=random&size=64`;
                                    }}
                                />
                            </div>
                            
                            <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors text-center">{team.name}</h4>
                            <p className="text-xs text-muted-foreground uppercase mb-2 text-center">[{team.category}]</p>
                            <p className="text-sm opacity-80">{team.description}</p>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
      </div>
    </main>
  );
}
