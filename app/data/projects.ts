import { Project } from "@/app/types/projects";

export const projects: Project[] = [
  {
    id: 1,
    title: "IluminaCasa",
    description:
      "IluminaCasa is a Fullstack project, made with FastAPI and NextJS to simulate a large store that sells lighting products.",
    tags: ["FastAPI", "SQLite", "Python", "Swagger UI", "Uvicorn", "Typescript", "NextJS", "Tailwind CSS", "Framer Motion", "React"],
    image: "/iluminacasa.png", 
    website: "https://iluminacasa.vercel.app/",
    link: "https://github.com/Navarrasa/iluminacasa", 
  },
  {
    id: 2,
    title: "Caelum",
    description: "Caelum is a Frontend project for the 9th Edition of the E.M Dr. Leandro Franceschini Science Fair, and aims to promote digital accessibility services.",
    tags: ["Typescript", "Tailwind CSS", "Framer Motion", "NextJS", "React", "MUI"],
    image: "/caelum.png",
    website: "https://onecaelum.vercel.app/",
    link: "https://github.com/Navarrasa/caelum",
  },

];
