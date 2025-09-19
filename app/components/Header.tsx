import Link from "next/link";
import SwitchTheme from "@/app/components/SwitchTheme";

export default function Header() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experiences", label: "Experiences" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full h-[6rem] border-b border-border bg-background text-foreground p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary opacity-70 hover:opacity-100 duration-500 ease-in-out">
          <Link href="/">devBruno</Link>
        </h1>

        {/* Navegação */}
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}
                className="hover:underline hover:scale-110 underline-offset-4 duration-500 ease-in-out"
              >
                <Link
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botão de trocar tema */}
          <SwitchTheme />
        </nav>
      </div>
    </header>
  );
}
