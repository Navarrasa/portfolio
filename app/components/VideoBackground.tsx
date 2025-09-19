import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import lightImage from '@/app/assets/lightmode.svg';
import darkImage from '@/app/assets/darkmode.svg';
import Link from 'next/link';

export default function VideoBackground() {
    return(
        <section className="w-full h-full flex flex-col items-center justify-center relative mb-8">
            <div className="absolute w-full top-0 flex flex-col justify-end xl:p-8 md:p-6 items-end text-center">
                <div className='flex flex-col items-center z-10 md:mt-6 gap-2'>
                    <p className="xl:text-xl">feel free to explore!</p>
                    <Link href="#explore" className='cursor-pointer'>
                        <ArrowDown className="animate-bounce" />
                    </Link>
                </div>
            </div>
            <div className="w-full h-full flex mt-8">
                {/* <video
                src="/video/stacks.mp4"
                autoPlay
                muted
                loop
                className="h-[800px]"
                ></video> */}
                <Image src={lightImage} alt="Me" className="border-none outline-none" />
            </div>
        </section>
    );
}