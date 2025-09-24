import { CircleUser } from 'lucide-react';
import { useMediaQuery } from "@react-hook/media-query";
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {

    const isSmallScreen = useMediaQuery('only screen and (max-width: 639px)');

    return(
        <section
            id="#contact"
            className="w-full flex justify-center items-center p-4 mb-16"
        >
            <div className='flex max-w-7xl flex-col gap-6 items-center justify-center'>
                <div className='flex items-center gap-6 opacity-80 hover:opacity-100 transition duration-500 ease-in-out'>
                    {isSmallScreen ?
                        <CircleUser
                        size={40}
                        className="transition duration-500 ease-in-out hover:scale-110"
                        />
                        :
                        <CircleUser
                        size={64}
                        className="transition duration-500 ease-in-out hover:scale-110"
                        />
                    }
                    <h2 className="text-2xl sm:text-5xl">Contact me!</h2>
                </div>
                <p className="text-center text-xl">I would love to hear from you!</p>
                <div className='flex flex-row justify-center items-center mt-4'>
                    <Link
                        href="https://github.com/Navarrasa"
                        target="_blank"
                        rel="noopener noreferrer"
                        title='GitHub Profile'
                    >
                        <Github
                            size={54}
                            className="mx-4 opacity-80 hover:opacity-100 transition duration-500 ease-in-out cursor-pointer hover:scale-110"
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/gustavo-bruno-90344a272/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title='LinkedIn Profile'
                    >
                        <Linkedin
                            size={54}
                            className="mx-4 opacity-80 hover:opacity-100 transition duration-500 ease-in-out cursor-pointer hover:scale-110"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}