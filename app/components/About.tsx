import { CodeXml } from 'lucide-react';
import { tech_stack } from "@/app/data/tech_stack";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import { AnimatedSection } from '@/app/components/ui/FadeInWhenVisible';


export default function About() {

    const isSmallScreen = useMediaQuery('only screen and (max-width: 639px)');


    return (
        <AnimatedSection>
            <section
            id="about"
            className="w-full flex justify-center items-center p-4 mb-16"
            >
            <div className="flex max-w-7xl flex-col gap-6 items-center justify-center">
                {/* Título com ícone */}
                <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition duration-500 ease-in-out flex-wrap justify-center">
                {isSmallScreen ?
                    <CodeXml
                    size={40}
                    className="transition duration-500 ease-in-out hover:scale-110"
                    />
                    :
                    <CodeXml
                    size={48}
                    className="transition duration-500 ease-in-out hover:scale-110"
                    />
                }
                <h2 className="text-2xl sm:text-5xl font-semibold text-center">
                    Welcome! I&apos;m devBruno
                </h2>
                </div>

                {/* Texto com largura adaptativa */}
                <div className="p-4 flex flex-col items-center justify-center text-center text-base sm:text-lg md:text-xl gap-6">
                <p>
                    I&apos;m 20 years old, a Fullstack Developer, but with preferences
                    on backend development. I&apos;m studying Computer Science at Dr.
                    Leandro Franceschini. I love when it comes to achieve new methods
                    to create a solution to some problem.
                </p>
                <p className="w-full">
                    This is a little bit of my journey as a developer. Have a look
                    inside it!
                </p>
                </div>

                {/* Tech stack: grid fluido */}
                <div className="flex flex-wrap w-full p-4 gap-4 justify-center items-center">
                    {tech_stack.map((tech) => (
                        <div key={tech.label} className="relative w-10 h-8 sm:h-10">
                            <Image
                            src={tech.image}
                            alt={tech.label}
                            title={tech.label}
                            fill
                            className="object-contain transition ease-in-out hover:opacity-100 hover:scale-110 duration-700"
                            />
                        </div>
                    ))}
                </div>

            </div>
            </section>
        </AnimatedSection>
    );
}
