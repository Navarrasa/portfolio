import { CodeXml } from 'lucide-react';

export default function About(){
    return (
        <section id="#about" className="w-full flex justify-center items-center p-4">
            <div>
                <div className='flex items-center gap-6 opacity-80 hover:opacity-100 transition duration-500 ease-in-out'>
                    <CodeXml size={64}
                    className='transition duration-500 ease-in-out hover:scale-110'
                    />
                    <h2 className="text-5xl">Welcome! I'm devBruno</h2>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </section>
    );
}