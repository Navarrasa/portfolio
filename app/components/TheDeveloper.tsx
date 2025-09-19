export default function TheDeveloper() {
    return (
        <section className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4 max-w-7xl">
                <div className="w-full flex gap-16 justify-around">
                    <p className='rubik xl:text-[7rem] md:text-[6rem]'>Backend</p>
                    <p className='rubik xl:text-[7rem] md:text-[6rem]'>Developer</p>
                </div>
                <div className="w-full flex gap-14">
                    <p className="w-[450px]"> I am a backend developer with a passion for building scalable APIs and working with databases.</p>
                    <p className="w-96">My tech stack includes Python, Django, and PostgreSQL.</p>
                </div>
            </div>
        </section>
    );
}