import { BriefcaseBusiness } from "lucide-react";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import { experiences } from "@/app/data/experiences";
import { AnimatedSection } from '@/app/components/ui/FadeInWhenVisible';

export default function Experiences() {
  const isSmallScreen = useMediaQuery("only screen and (max-width: 639px)");

  return (
    <AnimatedSection>
      <section
        id="experiences"
        className="w-full flex justify-center items-center p-4 mb-16"
      >
        <div className="flex max-w-7xl flex-col gap-6 items-center justify-center">
          {/* Título */}
          <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition duration-500 ease-in-out flex-wrap justify-center">
            <BriefcaseBusiness
              size={isSmallScreen ? 40 : 48}
              className="transition duration-500 ease-in-out hover:scale-110 text-[var(--foreground)]"
            />
            <h2 className="text-2xl sm:text-5xl font-semibold text-center text-[var(--foreground)]">
              Work Experiences
            </h2>
          </div>

          <p className="text-xl p-2 text-center text-[var(--muted-foreground)]">
            A list of my work experiences and internships.
          </p>

          {/* Timeline */}
          <div className="relative border-l border-[var(--border)] pl-6 w-full">
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-12 relative">
                {/* Bullet */}
                <div className="absolute -left-3 w-4 h-4 rounded-full bg-[var(--primary)] border-2 border-[var(--background)]"></div>

                {/* Conteúdo */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Logo da empresa */}
                  {exp.company_logo && (
                    <Image
                      src={exp.company_logo}
                      alt={exp.company}
                      width={50}
                      height={50}
                      className="rounded-lg shadow-md object-contain bg-[var(--card)] p-1"
                    />
                  )}

                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {exp.date}
                    </p>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {exp.role}
                    </h3>
                    <p>
                      {exp.company}
                    </p>
                    <p className="mt-2 text-[var(--foreground)]">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
