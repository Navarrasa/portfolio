import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function VideoBackground() {
    return(
        <section className="w-full h-full flex flex-col items-center justify-center relative mb-8">
            <div className="absolute w-full top-0 flex flex-col justify-end p-8 items-end text-center">
                <div className='flex flex-col items-center z-10'>
                    <p className="p-4">feel free to explore!</p>
                    <Link href="#explore" className='cursor-pointer'>
                        <ArrowDown className="animate-bounce" />
                    </Link>
                </div>
            </div>
            <div className="w-full h-full flex">
                <video
                src="/video/stacks.mp4"
                autoPlay
                muted
                loop
                className="w-auto h-6/12 object-cover"
                ></video>
            </div>
        </section>
    );
}