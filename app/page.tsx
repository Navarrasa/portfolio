'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import VideoBackground from '@/app/components/VideoBackground';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Experiences from '@/app/components/Experiences';
import Contact from '@/app/components/Contact';

export default function Home() {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <Header />
            <main className="w-full flex flex-col h-full">
                <VideoBackground />
                <About />
                <Projects />
                <Experiences />
                <Contact />
            </main> 
            <Footer />
        </div>
    );
}
