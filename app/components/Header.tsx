"use client";
import Link from "next/link";
import DesktopNavbar from '@/app/components/ui/desktopNavbar';
import MobileNavbar from '@/app/components/ui/mobileNavbar';
import { motion, useScroll } from 'framer-motion'
import { useMediaQuery } from "@react-hook/media-query";

export default function Header() {
  const isSmallScreen = useMediaQuery('only screen and (max-width: 600px)');
  const { scrollYProgress } = useScroll()

  return (

    <header className="sticky top-0 z-50 w-full h-[6rem] border-b border-border bg-background text-foreground p-4">
      {/* Scroll progress bar dentro do header */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
        className="absolute top-0 left-0 h-1 w-full bg-[var(--foreground)]"
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Logo */}
        <h1 className="sm:text-2xl font-bold text-primary opacity-70 hover:opacity-100 duration-500 ease-in-out">
          <Link href="/">devBruno</Link>
        </h1>

        {/* Renderiza navbar baseada no tamanho da tela */}
        {isSmallScreen ? <MobileNavbar /> : <DesktopNavbar />}
      </div>
    </header>
    
  );
}
