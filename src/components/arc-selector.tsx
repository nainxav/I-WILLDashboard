"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

interface ArcSelectorProps {
  selectedArc: number;
  onSelectArc: (arc: number) => void;
}

const arcs = [
  { id: 0, title: "ARC-0: FOUNDING ARC", status: "UNLOCKED", desc: "The Origin Story" },
  { id: 1, title: "ARC-1: AWAKENING", status: "UNLOCKED", desc: "The Expansion" },
  { id: 2, title: "ARC-2: ASCENSION", status: "LOCKED", desc: "Future Content" },
];

export function ArcSelector({ selectedArc, onSelectArc }: ArcSelectorProps) {
  return (
    <div className="w-full text-left font-mono space-y-4">
      <div className="border-b-2 border-dashed border-gray-500 pb-2 mb-4">
        <p className="text-sm md:text-base text-primary animate-pulse">
          &gt; SELECT DATA ARCHIVE...
        </p>
      </div>

      <div className="space-y-2">
        {arcs.map((arc) => {
          const isSelected = selectedArc === arc.id;
          return (
            <motion.button
              key={arc.id}
              onClick={() => {
                onSelectArc(arc.id);
                // Optional: Smooth scroll to timeline if selecting active arc
                if (isSelected) {
                   document.getElementById("history-timeline")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              whileHover={{ x: 10 }}
              className={clsx(
                "w-full text-left p-2 md:p-3 border-2 transition-all flex items-center gap-4 relative overflow-hidden group",
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-transparent hover:border-gray-600 hover:bg-white/5"
              )}
            >
              {/* Selection Indicator */}
              <div className={clsx(
                  "w-4 h-4 md:w-6 md:h-6 flex items-center justify-center border-2",
                  isSelected ? "border-primary bg-primary" : "border-gray-500"
              )}>
                  {isSelected && <div className="w-2 h-2 md:w-3 md:h-3 bg-white" />}
              </div>

              <div className="flex-1">
                  <h4 className={clsx(
                      "font-pixel text-sm md:text-lg",
                      isSelected ? "text-primary text-shadow-sm" : "text-gray-400 group-hover:text-white"
                  )}>
                      {arc.title}
                  </h4>
                  {isSelected && (
                      <p className="text-xs md:text-sm text-primary/80 font-mono">
                          &gt; {arc.desc}
                      </p>
                  )}
              </div>

              {/* Status Badge */}
              <span className={clsx(
                  "text-[10px] md:text-xs font-pixel px-2 py-1 border",
                  arc.status === "UNLOCKED" 
                    ? "border-green-500 text-green-500" 
                    : "border-gray-600 text-gray-600"
              )}>
                  {arc.status}
              </span>

              {/* Scanline Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
