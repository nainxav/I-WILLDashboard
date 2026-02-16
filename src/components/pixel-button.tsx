"use client"

import clsx from "clsx";
import { ButtonHTMLAttributes, useState } from "react";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  as?: React.ElementType;
}

export function PixelButton({
  children,
  className,
  variant = "primary",
  as: Component = "button",
  ...props
}: PixelButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Component
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={clsx(
        "relative inline-flex items-center justify-center font-pixel text-xs md:text-sm uppercase tracking-wider px-6 py-3 transition-transform active:translate-y-1 active:translate-x-1 active:shadow-none border-4 select-none",
        variant === "primary"
          ? "bg-primary text-primary-foreground border-black dark:border-white shadow-pixel hover:bg-primary/90"
          : "bg-white dark:bg-zinc-900 text-black dark:text-white border-black dark:border-white shadow-pixel hover:bg-gray-100 dark:hover:bg-zinc-800",
        className
      )}
      style={{
        boxShadow: isPressed ? "none" : undefined,
        transform: isPressed ? "translate(4px, 4px)" : undefined,
      }}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}
