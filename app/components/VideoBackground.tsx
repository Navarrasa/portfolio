"use client";

import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function VideoBackground() {
  const { theme, systemTheme } = useTheme();

  // resolve o tema atual (se "system", usa o do SO)
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section className="
      relative 
      mb-8 
      flex 
      h-full 
      w-full 
      flex-col 
      items-center 
      justify-center
    ">
      {/* Texto e seta */}
      <div className="
        absolute 
        top-0 
        flex 
        w-full 
        flex-col 
        items-end 
        justify-end 
        text-center 

        md:p-2 
        xl:p-8
      ">
        <div className="
          z-10 
          flex 
          flex-col 
          items-center 
          gap-2
        ">
          <p className="
            md:text-[14px] 
            xl:text-xl
          ">
            feel free to explore!
          </p>
          <Link href="#explore" className="cursor-pointer">
            <ArrowDown className="animate-bounce" />
          </Link>
        </div>
      </div>

      {/* Vídeo */}
      <div>
        {currentTheme === "dark" ? (
          <video
            src="/video/stackDarkmode.mp4"
            autoPlay
            muted
            loop
          />
        ) : (
          <video
            src="/video/stackLightmode.mp4"
            autoPlay
            muted
            loop
          />
        )}
      </div>
    </section>
  );
}
