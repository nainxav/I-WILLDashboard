"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

interface RiveDashboardProps {
  className?: string;
}

type ViewType = "dashboard" | "choose_hero" | "journey";

// Character mapping (Rive name -> Display name)
const CHARACTER_MAP: Record<string, string> = {
  "Archer": "Shafira",
  "Knight": "Zakhwa",
  "Thief": "Najwa",
};

// Character themes for journey pages
const CHARACTER_THEMES: Record<string, { gradient: string; accent: string }> = {
  "Archer": { 
    gradient: "from-gray-900 via-green-900 to-gray-900", 
    accent: "bg-green-600 hover:bg-green-700" 
  },
  "Knight": { 
    gradient: "from-gray-900 via-blue-900 to-gray-900", 
    accent: "bg-blue-600 hover:bg-blue-700" 
  },
  "Thief": { 
    gradient: "from-gray-900 via-purple-900 to-gray-900", 
    accent: "bg-purple-600 hover:bg-purple-700" 
  },
};

// Card positions as percentage of canvas width (left to right)
// Adjust these values to match your card positions
const CARD_ZONES = [
  { name: "AngklungineX", minX: 0, maxX: 0.25 },
  { name: "Drone", minX: 0.25, maxX: 0.50 },
  { name: "R.O.V.E.R", minX: 0.50, maxX: 0.75 },
  { name: "S.A.R.A.H CITRA", minX: 0.75, maxX: 1.0 },
];

// Dashboard View Component
function DashboardView({ 
  onCardClick,
}: { 
  onCardClick: (card: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onCardClickRef = useRef(onCardClick);
  
  useEffect(() => {
    onCardClickRef.current = onCardClick;
  });

  const { RiveComponent, rive } = useRive({
    src: "/dashboard.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  // Handle click on the container to detect which card was clicked
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 to 1
    const y = (e.clientY - rect.top) / rect.height; // 0 to 1
    
    // Only detect clicks in the card area (roughly middle of screen)
    // Adjust these Y values based on where your cards are vertically
    if (y < 0.2 || y > 0.85) return; // Ignore clicks outside card area
    
    // Find which card zone was clicked
    for (const zone of CARD_ZONES) {
      if (x >= zone.minX && x < zone.maxX) {
        console.log(`Clicked ${zone.name} at x=${x.toFixed(2)}, y=${y.toFixed(2)}`);
        
        // Small delay to let Rive animation start first
        setTimeout(() => {
          onCardClickRef.current(zone.name);
        }, 100);
        break;
      }
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full"
      onClick={handleClick}
    >
      <RiveComponent />
    </div>
  );
}

// Hero/Character zones in choose_your_hero.riv - adjust these based on your layout
// Assuming characters are arranged left to right: Archer, Knight, Thief
const HERO_ZONES = [
  { name: "Archer", minX: 0, maxX: 0.33, minY: 0, maxY: 0.65 },      // Left - Shafira
  { name: "Knight", minX: 0.33, maxX: 0.66, minY: 0, maxY: 0.65 },   // Center - Zakhwa
  { name: "Thief", minX: 0.66, maxX: 1.0, minY: 0, maxY: 0.65 },     // Right - Najwa
];

// START button zone - wider range to catch the button
// Adjust minY/maxY based on where START is vertically (0 = top, 1 = bottom)
const START_BUTTON_ZONE = { minX: 0.2, maxX: 0.8, minY: 0.65, maxY: 1.0 };

// Choose Hero View Component
function ChooseHeroView({ 
  onBack, 
  onStartJourney 
}: { 
  onBack: () => void;
  onStartJourney: (character: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedHero, setSelectedHero] = useState<string | null>(null); // No default - user must select
  const onStartJourneyRef = useRef(onStartJourney);

  useEffect(() => {
    onStartJourneyRef.current = onStartJourney;
  });

  const { RiveComponent } = useRive({
    src: "/choose_your_hero!.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    console.log(`Hero screen click at x=${x.toFixed(2)}, y=${y.toFixed(2)}`);

    // Check if START button was clicked (bottom portion of screen)
    if (y >= START_BUTTON_ZONE.minY && y <= START_BUTTON_ZONE.maxY &&
        x >= START_BUTTON_ZONE.minX && x <= START_BUTTON_ZONE.maxX) {
      if (selectedHero) {
        console.log(`START clicked! Starting journey with ${selectedHero}...`);
        setTimeout(() => {
          onStartJourneyRef.current(selectedHero);
        }, 300);
      } else {
        console.log("START clicked but no hero selected!");
      }
      return;
    }

    // Check if a hero was clicked (upper portion)
    for (const zone of HERO_ZONES) {
      if (x >= zone.minX && x <= zone.maxX && y >= zone.minY && y <= zone.maxY) {
        console.log(`Selected hero: ${zone.name}`);
        setSelectedHero(zone.name);
        break;
      }
    }
  }, [selectedHero]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full"
      onClick={handleClick}
    >
      <RiveComponent />
      <button
        onClick={onBack}
        className="absolute top-4 left-4 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-lg transition-colors z-50"
      >
        ← Back to Dashboard
      </button>
      {selectedHero && (
        <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg z-50">
          Selected: <span className="font-bold text-purple-400">
            {CHARACTER_MAP[selectedHero] || selectedHero}
          </span>
        </div>
      )}
    </div>
  );
}

// Character descriptions
const CHARACTER_DESCRIPTIONS: Record<string, string> = {
  "Archer": "Master of the bow, swift and precise...",
  "Knight": "Guardian of justice, strong and brave...",
  "Thief": "Shadow dancer, cunning and agile...",
};

// Journey View Component
function JourneyView({ 
  character, 
  onBack 
}: { 
  character: string;
  onBack: () => void;
}) {
  const displayName = CHARACTER_MAP[character] || character;
  const theme = CHARACTER_THEMES[character] || CHARACTER_THEMES["Archer"];
  const description = CHARACTER_DESCRIPTIONS[character] || "The adventure begins...";
  
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-b ${theme.gradient}`}>
      <div className="text-6xl mb-6">
        {character === "Archer" && "🏹"}
        {character === "Knight" && "⚔️"}
        {character === "Thief" && "🗡️"}
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center">
        {displayName}&apos;s Journey
      </h1>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-md">
        {description}
      </p>
      <button
        onClick={onBack}
        className={`${theme.accent} text-white px-8 py-3 rounded-lg text-lg transition-colors`}
      >
        ← Back to Character Select
      </button>
    </div>
  );
}

export default function RiveDashboard({ className = "" }: RiveDashboardProps) {
  const [currentView, setCurrentView] = useState<ViewType>("dashboard");
  const [clickedCard, setClickedCard] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const handleCardClick = (card: string) => {
    console.log("Card clicked:", card);
    setClickedCard(card);

    // Navigate to Choose Hero when Drone is clicked
    if (card.toLowerCase().includes("drone")) {
      setTimeout(() => {
        setCurrentView("choose_hero");
      }, 500);
    }
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setClickedCard(null);
    setSelectedCharacter(null);
  };

  const handleBackToHeroSelect = () => {
    setCurrentView("choose_hero");
    setSelectedCharacter(null);
  };

  const handleStartJourney = (character: string) => {
    console.log("Starting journey with:", character);
    setSelectedCharacter(character);
    setCurrentView("journey");
  };

  return (
    <div className={`w-full h-full relative ${className}`}>
      {currentView === "dashboard" && (
        <DashboardView onCardClick={handleCardClick} />
      )}
      {currentView === "choose_hero" && (
        <ChooseHeroView 
          onBack={handleBackToDashboard} 
          onStartJourney={handleStartJourney}
        />
      )}
      {currentView === "journey" && selectedCharacter && (
        <JourneyView 
          character={selectedCharacter} 
          onBack={handleBackToHeroSelect}
        />
      )}

      {clickedCard && currentView === "dashboard" && (
        <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg z-50">
          Clicked: <span className="font-bold text-green-400">{clickedCard}</span>
        </div>
      )}
    </div>
  );
}
