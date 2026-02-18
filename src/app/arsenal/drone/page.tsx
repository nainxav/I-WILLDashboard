"use client";

import { PixelCard } from "@/components/pixel-card";
import { PixelButton } from "@/components/pixel-button";
import { GridBackground } from "@/components/grid-background";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Member photos - place images in public/members/ folder
const members = {
    shafira: { name: "Shafira Kurnia Fasya", photo: "/members/shafira.png", slug: "shafira" },
    zakhwa: { name: "Zakhwa", photo: "/members/zakhwa.png", slug: "zakhwa" },
    najwa: { name: "Najwa", photo: "/members/najwa.png", slug: "najwa" },
    member1: { name: "Member 1", photo: "/members/member1.png", slug: "member1" },
    member2: { name: "Member 2", photo: "/members/member2.png", slug: "member2" },
    member3: { name: "Member 3", photo: "/members/member3.png", slug: "member3" },
};

export default function DronePage() {
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
            <h1 className="font-pixel text-4xl md:text-6xl text-primary text-shadow-pixel">DRONE</h1>
            <p className="text-xl opacity-80">&gt; DRONE BOARD: ACTIVE MEMBERS &lt;</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Member 1 */}
            <MemberCard 
                title="Shafira Kurnia Fasya"
                description="High Interest in Robotics and AI Implementation through Robotics. Drone Team Leader for a year."
                role="Leader"
                status="ACTIVE"
                member={members.shafira}
                tags={["Robotics", "AI", "Front End Developer"]}
            />

            {/* Member 2 */}
             <MemberCard 
                title="Zakhwa"
                description="Deploy autonomous units for environmental reliability testing in harsh terrains."
                role="Member"
                status="ACTIVE"
                member={members.zakhwa}
                tags={["Robotics", "ROS", "AI"]}
            />

            {/* Member 3 */}
            <MemberCard 
                title="Najwa"
                description="Experimental brain-computer interface prototype for direct construct control."
                role="Member"
                status="ACTIVE"
                member={members.najwa}
                tags={["BCI", "Python", "Neuro"]}
            />
        </div>
      </div>
    </main>
  );
}

interface MemberInfo {
    name: string;
    photo: string;
    slug: string;
}

interface MemberCardProps {
    title: string;
    description: string;
    role: string;
    status: string;
    member: MemberInfo;
    tags: string[];
    locked?: boolean;
}

function MemberCard({ title, description, role, status, member, tags, locked = false }: MemberCardProps) {
    const profileLink = `/arsenal/drone/${member.slug}`;
    
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full"
        >
            <Link href={profileLink} className="block h-full">
                <PixelCard title={role} className={`h-full flex flex-col relative cursor-pointer ${locked ? 'opacity-70 grayscale' : ''}`}>
                    <div className="absolute top-4 right-4 animate-pulse">
                        <span className={`text-xs px-2 py-1 font-pixel border-2 border-black dark:border-white ${status === 'ACTIVE' ? 'bg-green-500 text-white' : status === 'LOCKED' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'}`}>
                            {status}
                        </span>
                    </div>
                    
                    <h4 className="font-pixel text-xl mb-4 text-primary mt-6 min-h-[3rem]">{title}</h4>
                    <p className="mb-6 text-sm md:text-base flex-grow">
                        {locked ? "Encryption Key Required..." : description}
                    </p>

                    {/* Member Photo Section */}
                    <div className="mb-6 bg-gray-100 dark:bg-zinc-800 p-3 border-2 border-dashed border-gray-300 dark:border-gray-700">
                        <p className="text-xs mb-2 opacity-70">MEMBER PHOTO</p>
                        <div className="flex justify-center">
                            <div className="relative group">
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
                        {tags.map((tag: string) => (
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
    )
}
