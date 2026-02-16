"use client";

import { Layout, Fit, Alignment, useRive } from "@rive-app/react-canvas";

interface Props {
  className?: string;
}

export default function RiveBackground({ className = "" }: Props) {
  const { RiveComponent } = useRive({
    src: "/circuits_parallax_background.riv",
    artboard: "Scene_1",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div 
      className={`fixed inset-0 w-full h-full ${className}`} 
      style={{ zIndex: 0 }}
      data-testid="rive-background"
    >
      <RiveComponent className="w-full h-full" />
    </div>
  );
}
