import Python from '@/app/assets/python.svg';
import Django from '@/app/assets/django.svg';
import Git from '@/app/assets/git.svg';
import Java from '@/app/assets/java.svg';
import Javascript from '@/app/assets/javascript.svg';
import Typescript from '@/app/assets/typescript.svg';
// import MySQL from '@/app/assets/mysql.svg';
import NextJS from '@/app/assets/nextjs.svg';
import React from '@/app/assets/react.svg';
import Tailwind from '@/app/assets/tailwindcss.svg';
import FastAPI from '@/app/assets/fastapi.svg';
import Vite from '@/app/assets/vitejs.svg';
// import SQLite from '@/app/assets/sqlite.svg';

export const tech_stack = [
    { id: 1, image: Python, label: 'Python' },
    { id: 2, image: Django, label: 'Django' },
    { id: 3, image: FastAPI, label: 'FastAPI' },
    { id: 4, image: Java, label: 'Java' },
    { id: 5, image: Javascript, label: 'Javascript' },
    { id: 6, image: Typescript, label: 'Typescript' },
    { id: 7, image: NextJS, label: 'NextJS' },
    { id: 8, image: React, label: 'React' },
    { id: 9, image: Tailwind, label: 'TailwindCSS' },
    { id: 10, image: Vite, label: 'ViteJS' },
    { id: 11, image: Git, label: 'Git' },
];

export const projects = [
    {
        id: 1,
        name: "Project One",
        description: "This is a brief description of Project One.",
        image: "/path/to/project-one-image.jpg",
        link: "https://github.com/user/project-one"
    },
    {
        id: 2,
        name: "Project Two",
        description: "This is a brief description of Project Two.",
        image: "/path/to/project-two-image.jpg",
        link: "https://github.com/user/project-two"
    },
    {
        id: 3,
        name: "Project Three",
        description: "This is a brief description of Project Three.",
        image: "/path/to/project-three-image.jpg",
        link: "https://github.com/user/project-three"
    },
    {
        id: 4,
        name: "Project Four",
        description: "This is a brief description of Project Four.",
        image: "/path/to/project-four-image.jpg",
        link: "https://github.com/user/project-four"
    }];

export const experiences = [
    {
        id: 1,
        role: "Intern Developer",
        company: "Tech Solutions Inc.",
        duration: "June 2022 - August 2022",
        description: "Worked on developing internal tools using Python and Django. Collaborated with the team to improve code quality and implement new features."
    },
    {
        id: 2,
        role: "Freelance Web Developer",
        company: "Self-Employed",
        duration: "September 2022 - Present",
        description: "Building responsive websites and web applications for small businesses using React, Next.js, and Tailwind CSS. Focused on delivering high-quality user experiences."
    }
];