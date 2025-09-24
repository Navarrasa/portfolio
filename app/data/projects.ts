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
  {
    id: 3,
    title: "OnlineStore",
    description: "OnlineStore is a Frontend e-commerce application built with Next.js, Tailwind CSS and DummyJSON products API data.",
    tags: ["Tailwind CSS", "React", "Javascript", "Vite", "DummyJSON"],
    image: "/onlinestore.png",
    website: "https://oneonlinestore.vercel.app/",
    link: "https://github.com/Navarrasa/onlinestore",
  },
  {
    id: 4,
    title: "ParkIT",
    description: "ParkIT is a Fullstack IoT project that aims to facilitate parking management in residential condominiums, developed with Django and React.",
    tags: ["Python", "Django", "Typescript", "React", "NextJS", "SQLite", "IoT", "Tailwind CSS", "ThreeJS"],
    image: "/parkit.png",
    website: "",
    link: "",
  },
];
