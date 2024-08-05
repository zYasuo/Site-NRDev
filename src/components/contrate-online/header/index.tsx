"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function HeaderContrateOnline() {
  const currentPath = usePathname();

  return (
    <header className="sticky top-0 flex  z-50 w-full border-b border-primary/15 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <span className="mr-6 font-bold text-lg">NR</span>
        <nav className="flex space-x-4">
          <NavItem 
            href="https://api.whatsapp.com/send?phone=558002001273&text=Eu%20vim%20do%20Site%20da%20NR%20e%20Gostaria%20de%20Contratar" 
            label="(19) 3535-9840" 
            icon={FaWhatsapp} 
          />
          <NavItem 
            href="/" 
            label="0800 200 1273" 
            icon={Phone} 
          />
        </nav>
      </div>
    </header>
  );
}

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function NavItem({ href, label, icon: Icon }: NavItemProps) {

  return (
    <Link href={href}>
      <li
        className={`flex items-center md:text-lg text-xs rounded-md font-medium font-sans hover:text-primary/80
        }`}
      >
        <Icon className="w-4 h-4 mr-2" />
        <span className="ml-2">{label}</span>
      </li>
    </Link>
  );
}