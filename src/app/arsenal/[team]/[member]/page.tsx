"use client";

import { GridBackground } from "@/components/grid-background";
import { PixelCard } from "@/components/pixel-card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { getTeamBySlug, getMemberBySlug } from "@/data/teams";
import { notFound } from "next/navigation";

export default function MemberPage({ params }: { params: Promise<{ team: string; member: string }> }) {
    const { team: teamSlug, member: memberSlug } = use(params);
    const team = getTeamBySlug(teamSlug);
    const member = getMemberBySlug(teamSlug, memberSlug);

    if (!team || !member) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground font-mono p-6 relative">
            <GridBackground />
            
            <div className="max-w-5xl mx-auto relative z-10 space-y-8">
                {/* Back button */}
                <div>
                    <Link href={`/arsenal/${teamSlug}`} className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors">
                        <span>←</span> Back to {team.name} Team
                    </Link>
                </div>

                {/* Header Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-background border-4 border-black dark:border-white p-6 shadow-pixel"
                >
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        {/* Profile Photo */}
                        <div className="w-32 h-32 relative rounded-lg overflow-hidden border-4 border-black dark:border-white bg-gray-200 dark:bg-zinc-700 flex-shrink-0">
                            <Image 
                                src={member.photo}
                                alt={member.name}
                                fill
                                className="object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=128`;
                                }}
                            />
                        </div>

                        {/* Basic Info */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-2 flex-wrap">
                                <h1 className="font-pixel text-2xl md:text-3xl text-primary">{member.name}</h1>
                                <span className={`text-xs px-2 py-1 font-pixel border-2 border-black dark:border-white ${
                                    member.status === 'ACTIVE' ? 'bg-green-500 text-white' : 
                                    member.status === 'ALUMNI' ? 'bg-blue-500 text-white' : 
                                    'bg-yellow-500 text-black'
                                }`}>
                                    {member.status}
                                </span>
                            </div>
                            <p className="text-lg opacity-80 mb-1">{member.role} • {team.name} Team</p>
                            <p className="text-sm opacity-60 mb-4">{member.location}</p>
                            
                            <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-start">
                                <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">📧 {member.email}</a>
                                <span>📱 {member.phone}</span>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 mt-4 justify-center md:justify-start">
                                {member.social.github && (
                                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-800 text-white text-xs rounded hover:bg-gray-700 transition-colors">GitHub</a>
                                )}
                                {member.social.linkedin && (
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-500 transition-colors">LinkedIn</a>
                                )}
                                {member.social.instagram && (
                                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-pink-600 text-white text-xs rounded hover:bg-pink-500 transition-colors">Instagram</a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-6 pt-6 border-t-2 border-dashed border-gray-300 dark:border-gray-700">
                        <h3 className="font-pixel text-sm text-primary mb-2">ABOUT</h3>
                        <p className="text-sm leading-relaxed opacity-80">{member.bio}</p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Skills */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <PixelCard title="SKILLS" className="h-full">
                            <div className="space-y-3 mt-4">
                                {member.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>{skill.name}</span>
                                            <span className="opacity-60">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-zinc-700 border border-black dark:border-white">
                                            <motion.div 
                                                className="h-full bg-primary"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PixelCard>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                    >
                        <PixelCard title="ACHIEVEMENTS" className="h-full">
                            <ul className="space-y-2 mt-4">
                                {member.achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                        <span className="text-primary">🏆</span>
                                        <span className="opacity-80">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </PixelCard>
                    </motion.div>
                </div>

                {/* Education */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <PixelCard title="EDUCATION">
                        <div className="space-y-4 mt-4">
                            {member.education.map((edu, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-gray-100 dark:bg-zinc-800 border-l-4 border-primary">
                                    <div>
                                        <h4 className="font-bold">{edu.degree}</h4>
                                        <p className="text-sm opacity-70">{edu.institution}</p>
                                    </div>
                                    <div className="text-sm mt-2 md:mt-0 md:text-right">
                                        <p className="opacity-60">{edu.year}</p>
                                        <p className="text-primary font-bold">GPA: {edu.gpa}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </PixelCard>
                </motion.div>

                {/* Experience */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    <PixelCard title="EXPERIENCE">
                        <div className="space-y-4 mt-4">
                            {member.experience.map((exp, idx) => (
                                <div key={idx} className="p-3 bg-gray-100 dark:bg-zinc-800 border-l-4 border-green-500">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h4 className="font-bold">{exp.title}</h4>
                                        <span className="text-xs opacity-60">{exp.period}</span>
                                    </div>
                                    <p className="text-sm text-primary mb-1">{exp.company}</p>
                                    <p className="text-sm opacity-70">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </PixelCard>
                </motion.div>

                {/* Projects */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <PixelCard title="PROJECTS">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {member.projects.map((project, idx) => (
                                <div key={idx} className="p-4 bg-gray-100 dark:bg-zinc-800 border-2 border-black dark:border-white hover:shadow-pixel transition-all">
                                    <h4 className="font-bold text-primary mb-2">{project.name}</h4>
                                    <p className="text-sm opacity-70 mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[10px] px-2 py-0.5 bg-background border border-foreground/30">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </PixelCard>
                </motion.div>

                {/* Footer */}
                <div className="text-center py-8 opacity-50 text-sm">
                    <p>Last updated: January 2026</p>
                </div>
            </div>
        </main>
    );
}
