import { FolderOpenDot } from 'lucide-react';
import { useMediaQuery } from "@react-hook/media-query";
import { projects } from '@/app/data/projects';
import ProjectCard from '@/app/components/ui/ProjectCard';

export default function Projects() {

    const isSmallScreen = useMediaQuery('only screen and (max-width: 639px)');

    return(
        <section 
        id="#projects" 
        className="w-full flex justify-center items-center p-4 mb-16">
            <div className="flex w-full max-w-3xl flex-col gap-6 items-center justify-center">
                {/* Título com ícone */}
                <div className='flex items-center gap-4 opacity-80 hover:opacity-100 transition duration-500 ease-in-out flex-wrap justify-center'>
                    {isSmallScreen ?
                        <FolderOpenDot
                            size={40}
                            className="transition duration-500 ease-in-out hover:scale-110"
                        />
                        :
                        <FolderOpenDot
                            size={48}
                            className="transition duration-500 ease-in-out hover:scale-110"
                        />
                    }
                    <h2 className="text-2xl sm:text-5xl font-semibold text-center">Favorite Projects</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}