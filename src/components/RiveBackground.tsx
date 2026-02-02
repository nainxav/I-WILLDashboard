"use client";

import { useEffect } from "react";
import { Layout, Fit, Alignment, useRive } from "@rive-app/react-canvas";

interface Props {
  className?: string;
}

export default function RiveBackground({ className = "" }: Props) {
  const { RiveComponent, rive } = useRive({
    src: "/circuits_parallax_background.riv",
    artboard: "Scene_1",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  useEffect(() => {
    console.log("RiveBackground mounted: RiveComponent?", Boolean(RiveComponent));
    console.log("rive object:", rive);
    // Try to call play if available on the runtime wrapper
    if (rive && typeof (rive as any).play === "function") {
      try {
        (rive as any).play();
        console.log("rive.play() called");
      } catch (e) {
        console.warn("rive.play() failed", e);
      }
    }
  }, [RiveComponent, rive]);

  return (
    <div className={`absolute inset-0 -z-20 ${className}`} data-testid="rive-background">
      <div className="w-full h-full pointer-events-none select-none">
        <RiveComponent className="w-full h-full" />
      </div>
    </div>
  );
}
