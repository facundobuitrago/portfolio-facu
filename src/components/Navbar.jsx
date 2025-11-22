import React from "react";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#certificates", label: "Certificados" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#top" className="text-xl font-bold tracking-tight">
          <span className="text-blue-400">Facu</span>.dev
        </a>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-100/80 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
