import { tech_stack } from "@/app/data/data";
import Image from "next/image";

export default function TheDeveloper() {
    return (
        <section className="w-full h-full flex flex-col items-center justify-center p-4">
            <div className="flex flex-col gap-4 max-w-7xl">
                <div className="w-full">
                    <h1 className='rubik text-[7rem]'>Backend Developer</h1>
                </div>
                <div className="flex gap-16">
                    <p className="w-5/12">I am a backend developer with a passion for building scalable APIs and working with databases.</p>
                    <p className="w-96">My tech stack includes Python, Django, and PostgreSQL.</p>
                </div>
                <div>
                    {tech_stack.map((tech) => (
                        <div key={tech.label} className="flex items-center gap-2">
                            <Image src={tech.image} alt={tech.label} width={40} height={40} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}