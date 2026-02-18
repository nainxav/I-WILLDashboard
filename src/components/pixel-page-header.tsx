import React from 'react';

interface PixelPageHeaderProps {
    title: string;
    subtitle: string;
}

export function PixelPageHeader({ title, subtitle }: PixelPageHeaderProps) {
    return (
        <div className="text-center space-y-4 pt-8">
            <h1 className="font-pixel text-4xl md:text-6xl text-primary text-shadow-pixel uppercase">
                {title}
            </h1>
            <p className="text-xl opacity-80 uppercase">
                &gt; {subtitle} &lt;
            </p>
        </div>
    );
}
