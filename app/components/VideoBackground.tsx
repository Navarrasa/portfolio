"use client";

import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function VideoBackground() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section
      className="
        relative 
        mb-8 
        w-full 
        flex 
        flex-col 
      "
    >
      <div
        className=" 
          w-full 
          flex 
          flex-col 
          items-center 
          justify-end 
          text-center 
          pt-4
          z-10
        "
      >
        <div className="flex flex-col items-center gap-2 mb-1">
          <p className="text-xs md:text-sm xl:text-xl text-foreground">
            feel free to explore!
          </p>
          <Link href="#about" className="cursor-pointer">
            <ArrowDown className="animate-bounce" />
          </Link>
        </div>
      </div>
      {/* Vídeo responsivo */}
      <div className="w-full">
        <video
          className="w-full h-full object-cover rounded-md"
          src={
            currentTheme === "dark"
              ? "/video/stackDarkmode.mp4"
              : "/video/stackLightmode.mp4"
          }
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
       {/* Texto e seta */}
    </section>
  );
}