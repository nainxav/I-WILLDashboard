"use client";

import { PixelCard } from "@/components/pixel-card";
import { PixelButton } from "@/components/pixel-button";
import { GridBackground } from "@/components/grid-background";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { getTeamBySlug, type MemberCV } from "@/data/teams";
import { notFound } from "next/navigation";

export default function TeamPage({ params }: { params: Promise<{ team: string }> }) {
    const { team: teamSlug } = use(params);
    const team = getTeamBySlug(teamSlug);

    if (!team) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground font-mono p-6 relative">
            <GridBackground />
            
            <div className="max-w-6xl mx-auto relative z-10 space-y-12">
                {/* Back button */}
                <div>
                    <Link href="/arsenal" className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors">
                        <span>←</span> Back to Teams
                    </Link>
                </div>

                <div className="text-center space-y-4">
                    <h1 className="font-pixel text-4xl md:text-6xl text-primary text-shadow-pixel">{team.name}</h1>
                    <p className="text-xl opacity-80">&gt; {team.fullName.toUpperCase()} &lt;</p>
                </div>

                {/* Team Description */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-background border-4 border-black dark:border-white p-6 shadow-pixel"
                >
                    <div className="flex items-start gap-4">
                        {/* Team Logo */}
                        <div className="w-16 h-16 relative flex-shrink-0 bg-gray-100 dark:bg-zinc-800 rounded-lg overflow-hidden border-2 border-black dark:border-white">
                            <Image 
                                src={team.logo}
                                alt={`${team.name} logo`}
                                fill
                                className="object-contain p-2"
                                onError={(e) => {
                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=random&size=64`;
                                }}
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-pixel text-lg text-primary">ABOUT THE TEAM</h3>
                                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-800 border border-black dark:border-white">
                                    {team.category}
                                </span>
                            </div>
                            <p className="text-sm opacity-80 leading-relaxed">
                                {team.longDescription}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Members Section */}
                {team.members.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {team.members.map((member, index) => (
                            <MemberCard 
                                key={member.slug}
                                member={member}
                                teamSlug={teamSlug}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-center py-16 bg-background border-4 border-dashed border-gray-300 dark:border-gray-700"
                    >
                        <p className="font-pixel text-xl text-primary mb-2">NO MEMBERS YET</p>
                        <p className="text-sm opacity-60">Team member profiles coming soon...</p>
                    </motion.div>
                )}
            </div>
        </main>
    );
}

interface MemberCardProps {
    member: MemberCV;
    teamSlug: string;
    index: number;
}

function MemberCard({ member, teamSlug, index }: MemberCardProps) {
    const profileLink = `/arsenal/${teamSlug}/${member.slug}`;
    
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="h-full"
        >
            <Link href={profileLink} className="block h-full">
                <PixelCard title={member.role} className="h-full flex flex-col relative cursor-pointer">
                    <div className="absolute top-4 right-4 animate-pulse">
                        <span className={`text-xs px-2 py-1 font-pixel border-2 border-black dark:border-white ${
                            member.status === 'ACTIVE' ? 'bg-green-500 text-white' : 
                            member.status === 'ALUMNI' ? 'bg-blue-500 text-white' : 
                            'bg-yellow-500 text-black'
                        }`}>
                            {member.status}
                        </span>
                    </div>
                    
                    <h4 className="font-pixel text-xl mb-4 text-primary mt-6 min-h-[3rem]">{member.name}</h4>
                    <p className="mb-6 text-sm md:text-base flex-grow opacity-80">
                        {member.shortDesc}
                    </p>

                    {/* Member Photo Section */}
                    <div className="mb-6 bg-gray-100 dark:bg-zinc-800 p-3 border-2 border-dashed border-gray-300 dark:border-gray-700">
                        <p className="text-xs mb-2 opacity-70">MEMBER PHOTO</p>
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-20 h-20 relative rounded-lg overflow-hidden border-2 border-black dark:border-white bg-gray-200 dark:bg-zinc-700">
                                    <Image 
                                        src={member.photo}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=80`;
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {member.tags.map((tag) => (
                            <span key={tag} className="text-[10px] px-2 py-1 bg-background border border-foreground/30">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <PixelButton className="w-full" as="div">
                            VIEW PROFILE
                        </PixelButton>
                    </div>
                </PixelCard>
            </Link>
        </motion.div>
    );
}
