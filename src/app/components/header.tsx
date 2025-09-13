import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 flex w-full justify-center items-center sticky">
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">
                <Link href="/">devBruno</Link>
            </h1>
            <nav>
                <ul className="flex gap-8 p-4">
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="#experiences">Experiences</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}