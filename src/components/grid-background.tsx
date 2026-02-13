export function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Retro Grid Moving */}
        <div className="absolute inset-0 bg-grid-animate opacity-[0.15] dark:opacity-[0.2]" 
             style={{ transform: 'perspective(500px) rotateX(20deg) scale(2)' }}
        />
        
        {/* Fading Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80" />
    </div>
  );
}
