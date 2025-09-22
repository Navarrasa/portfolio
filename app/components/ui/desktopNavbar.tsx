import Link from "next/link";
import SwitchTheme from "@/app/components/SwitchTheme";

export default function DesktopNavbar() {

    const links = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#experiences", label: "Experiences" },
        { href: "#contact", label: "Contact" },
    ];
    
    return(
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
    );


}