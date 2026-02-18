"use client";

import { useState, useMemo } from "react";
import { PixelCard } from "@/components/pixel-card";
import { GridBackground } from "@/components/grid-background";
import { motion, AnimatePresence } from "framer-motion";
import { documents, Document } from "@/data/documents";
import { teams } from "@/data/teams";
import { Search, Filter, SortAsc, SortDesc, Download, FileText, File, FileSpreadsheet, FileBox } from "lucide-react";
import { clsx } from "clsx";

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string>("ALL");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Document; direction: "asc" | "desc" }>({
    key: "date",
    direction: "desc",
  });

  // Filter and Sort Logic
  const filteredDocs = useMemo(() => {
    let docs = [...documents];

    // 1. Filter by Team
    if (selectedTeam !== "ALL") {
      docs = docs.filter((doc) => doc.teamSlug === selectedTeam);
    }

    // 2. Filter by Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      docs = docs.filter((doc) => 
        doc.title.toLowerCase().includes(query) || 
        doc.id.toLowerCase().includes(query)
      );
    }

    // 3. Sort
    docs.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    return docs;
  }, [searchQuery, selectedTeam, sortConfig]);

  // Toggle Sort Direction
  const handleSort = (key: keyof Document) => {
    setSortConfig((current) => ({
      key,
      direction: current.key === key && current.direction === "desc" ? "asc" : "desc",
    }));
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-mono p-6 relative">
      <GridBackground />
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
            <h1 className="font-pixel text-4xl md:text-6xl text-primary text-shadow-pixel">ARCHIVES</h1>
            <p className="text-xl opacity-80">&gt; SECURE DOCUMENT REPOSITORY &lt;</p>
        </div>

        {/* Control Bar */}
        <div className="bg-background/80 backdrop-blur-md border-4 border-black dark:border-white p-4 md:p-6 shadow-pixel sticky top-24 z-20">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Search */}
                <div className="relative w-full md:w-1/3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input 
                        type="text" 
                        placeholder="SEARCH DOCUMENTS..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent border-2 border-gray-400 dark:border-gray-600 pl-10 pr-4 py-2 font-pixel text-sm focus:border-primary focus:outline-none transition-colors"
                    />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 w-full md:w-auto items-center">
                    {/* Team Filter */}
                    <div className="flex items-center gap-2">
                        <Filter size={18} className="text-primary" />
                        <select 
                            value={selectedTeam}
                            onChange={(e) => setSelectedTeam(e.target.value)}
                            className="bg-transparent border-2 border-gray-400 dark:border-gray-600 px-4 py-2 font-pixel text-xs md:text-sm focus:border-primary focus:outline-none cursor-pointer"
                        >
                            <option value="ALL">ALL TEAMS</option>
                            {teams.map(team => (
                                <option key={team.slug} value={team.slug}>{team.name.toUpperCase()}</option>
                            ))}
                            <option value="general">GENERAL</option>
                        </select>
                    </div>

                    {/* Sort Buttons */}
                    <div className="flex items-center gap-2 border-l-2 border-dashed border-gray-400 pl-4">
                        <span className="font-pixel text-xs hidden md:inline">SORT:</span>
                        <button 
                            onClick={() => handleSort("date")}
                            className={clsx("px-3 py-1 border-2 text-xs font-pixel transition-colors flex items-center gap-2", sortConfig.key === "date" ? "bg-primary text-primary-foreground border-primary" : "border-gray-400 hover:border-primary")}
                        >
                            DATE
                            {sortConfig.key === "date" && (sortConfig.direction === "asc" ? <SortAsc size={14}/> : <SortDesc size={14}/>)}
                        </button>
                        <button 
                            onClick={() => handleSort("title")}
                            className={clsx("px-3 py-1 border-2 text-xs font-pixel transition-colors flex items-center gap-2", sortConfig.key === "title" ? "bg-primary text-primary-foreground border-primary" : "border-gray-400 hover:border-primary")}
                        >
                            NAME
                            {sortConfig.key === "title" && (sortConfig.direction === "asc" ? <SortAsc size={14}/> : <SortDesc size={14}/>)}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
                {filteredDocs.map((doc) => (
                    <motion.div
                        key={doc.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <DocumentCard doc={doc} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredDocs.length === 0 && (
            <div className="text-center py-20 opacity-50">
                <FileBox size={64} className="mx-auto mb-4" />
                <p className="font-pixel text-xl">NO DOCUMENTS FOUND</p>
                <p className="font-mono text-sm">TRY ADJUSTING YOUR FILTERS</p>
            </div>
        )}
      </div>
    </main>
  );
}

function DocumentCard({ doc }: { doc: Document }) {
    // Helper to get team name safely
    const teamName = doc.teamSlug === "general" ? "Laboratory" : teams.find(t => t.slug === doc.teamSlug)?.name || doc.teamSlug;

    // Icon based on category
    const DocIcon = {
        "PROPOSAL": FileText,
        "REPORT": FileSpreadsheet,
        "MANUAL": File,
        "RESEARCH": FileBox
    }[doc.category] || File;

    return (
        <PixelCard className="h-full flex flex-col hover:border-primary transition-colors group relative overflow-hidden">
            {/* Status Badge */}
            <div className={clsx(
                "absolute top-0 right-0 px-3 py-1 text-[10px] font-pixel border-l-2 border-b-2",
                doc.status === "CONFIDENTIAL" ? "bg-red-500 text-white border-red-700" :
                doc.status === "RESTRICTED" ? "bg-yellow-500 text-black border-yellow-700" :
                "bg-green-500 text-white border-green-700"
            )}>
                {doc.status}
            </div>

            <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent border-2 border-black dark:border-white group-hover:scale-110 transition-transform">
                    <DocIcon size={24} className="text-primary" />
                </div>
                <div>
                    <span className="font-pixel text-[10px] text-muted-foreground uppercase tracking-wider block mb-1">
                        ID: {doc.id}
                    </span>
                    <h3 className="font-bold font-mono leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {doc.title}
                    </h3>
                </div>
            </div>

            <div className="mt-auto space-y-3 pt-4 border-t-2 border-dashed border-gray-400/50">
                <div className="flex justify-between text-xs font-mono opacity-80">
                    <span>TEAM:</span>
                    <span className="font-bold text-end">{teamName}</span>
                </div>
                <div className="flex justify-between text-xs font-mono opacity-80">
                    <span>DATE:</span>
                    <span>{doc.date}</span>
                </div>
                <div className="flex justify-between text-xs font-mono opacity-80">
                    <span>SIZE:</span>
                    <span>{doc.size}</span>
                </div>

                <a 
                    href={doc.downloadUrl}
                    className="flex items-center justify-center gap-2 w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border-2 border-primary py-2 font-pixel text-xs transition-all mt-2"
                >
                    <Download size={14} />
                    DOWNLOAD
                </a>
            </div>
        </PixelCard>
    )
}
