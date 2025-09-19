import { CodeXml } from 'lucide-react';
import { tech_stack } from "@/app/data/data";
import Image from "next/image";

export default function About(){
    return (
        <section id="about" className="w-full flex justify-center items-center p-4 mb-16">
            <div className='flex w-full items-center flex-col gap-6 justify-center'>
                <div className='flex items-center gap-6 opacity-80 hover:opacity-100 transition duration-500 ease-in-out'>
                    <CodeXml size={64}
                    className='transition duration-500 ease-in-out hover:scale-110'
                    />
                    <h2 className="text-4xl">Welcome! I'm devBruno</h2>
                </div>
                <div className='w-[50%] items-center justify-center text-center text-xl gap-16 flex flex-col'>
                    <p>I'm 20 years old, a Fullstack Developer, but with preferences on backend development. I'm studying Computer Science at Dr. Leandro Franceschini. I love when it comes to achieve new methods to create a solution to some problem.</p>
                    <p className='p-4'>This is a little bit of my journey as a developer. have a look inside it!</p>
                </div>
                <div className='flex gap-6 p-4 opacity-80'>
                    {tech_stack.map((tech) => (
                        <div key={tech.label} className="flex items-center gap-2 ">
                            <Image src={tech.image} alt={tech.label} width={40} height={40} title={tech.label} className='transition ease-in-out hover:opacity-100 hover:scale-110 duration-700'/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}