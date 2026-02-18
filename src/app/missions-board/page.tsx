"use client";

import { useState, useMemo } from "react";
import { PixelCard } from "@/components/pixel-card";
import { PixelButton } from "@/components/pixel-button";
import { GridBackground } from "@/components/grid-background";
import { motion, AnimatePresence } from "framer-motion";
import { chronicles, Chronicle } from "@/data/missions";
import Image from "next/image";
import { Search, Filter, Calendar, User, Tag, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

import { PixelPageHeader } from "@/components/pixel-page-header";
import { PixelControlBar } from "@/components/pixel-control-bar";

export default function ChroniclesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterCategory, setFilterCategory] = useState<string>("ALL");

    // Filter Logic
    const filteredChronicles = useMemo(() => {
        // ... existing logic ...
        let result = [...chronicles];

        if (filterCategory !== "ALL") {
            result = result.filter((c) => c.category === filterCategory);
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter((c) =>
                c.title.toLowerCase().includes(query) ||
                c.excerpt.toLowerCase().includes(query) ||
                c.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        return result;
    }, [searchQuery, filterCategory]);

    return (
        <main className="min-h-screen bg-background text-foreground font-mono p-6 relative">
            <GridBackground />

            <div className="max-w-7xl mx-auto relative z-10 space-y-8">

                <PixelPageHeader
                    title="ARTICLES"
                    subtitle="NEWS FEED: LABORATORY ACTIVITIES"
                />

                <PixelControlBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    searchPlaceholder="SEARCH ARCHIVES..."
                    filterValue={filterCategory}
                    setFilterValue={setFilterCategory}
                    filterOptions={["ALL", "PKM", "COMPETITION", "EXHIBITION", "WORKSHOP", "GRANT"]}
                />

                {/* Articles Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {filteredChronicles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <ArticleCard article={article} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredChronicles.length === 0 && (
                    <div className="text-center py-20 opacity-50">
                        <BookOpen size={64} className="mx-auto mb-4" />
                        <p className="font-pixel text-xl">NO RECORDS FOUND</p>
                        <p className="font-mono text-sm">THE ARCHIVES ARE SILENT.</p>
                    </div>
                )}

            </div>
        </main>
    );
}

// ... imports moved to top of file

function ArticleCard({ article }: { article: Chronicle }) {
    // Determine category color
    const categoryColor = {
        "PKM": "bg-blue-500",
        "COMPETITION": "bg-orange-500",
        "EXHIBITION": "bg-purple-500",
        "WORKSHOP": "bg-green-500",
        "GRANT": "bg-yellow-500"
    }[article.category] || "bg-gray-500";

    const href = article.slug ? `/missions-board/${article.slug}` : article.link;

    return (
        <article className="h-full flex flex-col group relative">
            <Link href={href} className="absolute inset-0 z-20 focus:outline-none">
                <span className="sr-only">Read {article.title}</span>
            </Link>

            {/* Image Placeholder / Frame */}
            <div className="relative aspect-video mb-4 overflow-hidden border-4 border-black dark:border-white bg-gray-200 dark:bg-zinc-800 transition-transform group-hover:-translate-y-1">
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <span className="font-pixel text-white text-lg bg-black/50 px-4 py-2 border-2 border-white">READ MORE</span>
                </div>

                {/* Placeholder Image (Since we don't have real ones yet) */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-pixel text-4xl bg-pattern">
                    {article.image ? (
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        /* Placeholder for real image */
                        <div className="w-full h-full flex items-center justify-center bg-pattern opacity-50">
                            <span className="font-pixel text-6xl text-muted-foreground select-none">
                                {article.category[0]}
                            </span>
                        </div>
                    )}
                </div>

                {/* Category Badge */}
                <div className={`absolute top-0 right-0 px-3 py-1 text-white font-pixel text-xs ${categoryColor} border-l-2 border-b-2 border-black/50`}>
                    {article.category}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow space-y-3 pointer-events-none">
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                        <Calendar size={12} /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <User size={12} /> {article.author}
                    </span>
                </div>

                <h2 className="font-pixel text-xl leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                </h2>

                <p className="text-sm opacity-80 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {article.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-accent px-2 py-1 rounded-full flex items-center gap-1 opacity-70">
                            <Tag size={8} /> {tag}
                        </span>
                    ))}
                </div>

                <div className="pt-4 mt-auto">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-primary transition-colors uppercase tracking-widest border-b-2 border-transparent group-hover:border-primary pb-1">
                        READ FULL ARTICLE <ArrowRight size={14} />
                    </span>
                </div>
            </div>
        </article>
    )
}
