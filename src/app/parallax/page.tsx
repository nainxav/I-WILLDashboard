"use client";

import Link from "next/link";
import { Layout, Fit, Alignment, useRive } from "@rive-app/react-canvas";

export default function ParallaxPage() {
  const { RiveComponent } = useRive({
    src: "/circuits_parallax_background.riv",
    artboard: "Scene_1",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  return (
    <main className="w-screen h-screen bg-black text-white overflow-hidden relative">
      {/* Rive Background - full screen */}
      <div className="absolute inset-0 w-full h-full">
        <RiveComponent className="w-full h-full" />
      </div>

      {/* UI Overlay */}
      <div className="absolute top-4 left-4 z-50">
        <Link href="/" className="bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-md">← Home</Link>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-sm text-gray-200 bg-black/40 px-4 py-2 rounded">
        Parallax Background Demo
      </div>
    </main>
  );
}
