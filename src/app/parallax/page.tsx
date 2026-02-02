"use client";

import Link from "next/link";
import { Layout, Fit, Alignment, useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";

export default function ParallaxPage() {
  const { RiveComponent, rive } = useRive({
    src: "/circuits_parallax_background.riv",
    artboard: "Scene_1",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  useEffect(() => {
    console.log("ParallaxPage mounted. rive instance?", Boolean(rive));
    console.log("rive:", rive);
    try {
      // Attempt to inspect state machine inputs (may not be exposed the same way in runtime)
      const inputs = (rive as any)?.stateMachineInputs || (rive as any)?.inputs || null;
      console.log("possible state machine inputs:", inputs);
      if (rive && typeof (rive as any).play === "function") {
        (rive as any).play();
        console.log("rive.play() called from ParallaxPage");
      }
    } catch (e) {
      console.warn("Error reading state machine inputs or playing", e);
    }
  }, [rive]);

  return (
    <main className="w-screen h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute top-4 left-4 z-50">
        <Link href="/" className="bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-md">← Home</Link>
      </div>

      <div className="w-full h-full">
        <div className="w-full h-full">
          <div className="absolute inset-0 -z-10">
            <RiveComponent className="w-full h-full" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-sm text-gray-200 bg-black/40 px-4 py-2 rounded">
        Parallax (State Machine 1) — If you don’t see movement, open DevTools Console and look for logs.
      </div>
    </main>
  );
}
