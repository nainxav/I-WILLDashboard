import React from 'react';
import { Search, Filter } from 'lucide-react';

interface PixelControlBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    searchPlaceholder?: string;
    
    filterValue: string;
    setFilterValue: (value: string) => void;
    filterOptions: (string | { label: string; value: string })[];
    
    children?: React.ReactNode; // For sort buttons or extra controls
}

export function PixelControlBar({
    searchQuery,
    setSearchQuery,
    searchPlaceholder = "SEARCH...",
    filterValue,
    setFilterValue,
    filterOptions,
    children
}: PixelControlBarProps) {
    return (
        <div className="bg-background/80 backdrop-blur-md border-y-4 border-black dark:border-white py-6 sticky top-20 z-20">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between max-w-5xl mx-auto px-4 md:px-0">
                
                {/* Search */}
                <div className="relative w-full md:w-1/2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input 
                        type="text" 
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent border-b-2 border-gray-400 dark:border-gray-600 pl-10 pr-4 py-2 font-pixel text-sm focus:border-primary focus:outline-none transition-colors"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-6 justify-center md:justify-end w-full md:w-auto">
                    {/* Filter Dropdown */}
                    <div className="flex items-center gap-2">
                        <Filter size={18} className="text-primary hidden md:block" />
                        <select 
                            value={filterValue}
                            onChange={(e) => setFilterValue(e.target.value)}
                            className="bg-transparent border-b-2 border-gray-400 dark:border-gray-600 px-4 py-2 font-pixel text-xs md:text-sm focus:border-primary focus:outline-none cursor-pointer w-full md:w-auto min-w-[150px]"
                        >
                            {filterOptions.map((opt) => {
                                const value = typeof opt === 'string' ? opt : opt.value;
                                const label = typeof opt === 'string' ? opt : opt.label;
                                return (
                                    <option key={value} value={value} className="bg-background text-foreground">
                                        {label}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    {/* Extra Controls (Sort, etc.) */}
                    {children}
                </div>
            </div>
        </div>
    );
}
