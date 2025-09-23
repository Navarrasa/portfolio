import { BriefcaseBusiness } from 'lucide-react';
import { useMediaQuery } from "@react-hook/media-query";


export default function Experiences() {

    const isSmallScreen = useMediaQuery('only screen and (max-width: 639px)');

    return(
        <section id="#experiences" className="w-full flex justify-between items-center p-4">
            <div>
                <div className='flex items-center gap-6 opacity-80 hover:opacity-100 transition duration-500 ease-in-out'>
                    {isSmallScreen ?
                        <BriefcaseBusiness
                        size={40}
                        className="transition duration-500 ease-in-out hover:scale-110"
                        />
                        :
                        <BriefcaseBusiness
                        size={48}
                        className="transition duration-500 ease-in-out hover:scale-110"
                        />
                    }
                    <h2 className="text-2xl sm:text-5xl">Work Experiences</h2>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </section>
    );
}