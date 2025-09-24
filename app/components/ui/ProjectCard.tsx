import React from "react";
import { Project } from "@/app/types/projects";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
    className="flex flex-col justify-between bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-md hover:shadow-lg transition duration-300">
      {/* Título */}
      <div
      className="p-6 text-2xl"
      >
        <h3 className="font-semibold">{project.title}</h3>
      </div>
      {/* Imagem */}
      <div className="flex flex-col flex-grow p-6 pt-0 space-y-4">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className="rounded-md w-full h-40 object-cover"
        />
        <p className="text-sm text-muted-foreground h-20">{project.description}</p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4 pb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[var(--popover)] text-xs rounded whitespace-nowrap p-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Ações */}
        <div className="flex gap-3 p-6">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              title="Github Repository"
              className="flex items-center gap-2 text-sm bg-[var(--popover)] rounded-md hover:bg-[var(--ring)] transition p-2"
            >
              <Github size={16} />
              Code
            </Link>
          )}
          {project.website && (
            <Link
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              title="Project Website"
              className="flex items-center gap-2 text-sm bg-[var(--popover)] rounded-md hover:bg-[var(--ring)] transition p-2"
            >
              <ExternalLink size={16} />
              Website
            </Link>
          )}
        </div>
    </div>
  );
};

export default ProjectCard;




