import React from "react";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Frontend & Backend" },
  { href: "#backend", label: "Experiencia Backend" },
  { href: "#projects", label: "Proyectos" },
  { href: "#certificates", label: "Certificados" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#top" className="text-xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400">
            Facu.dev
          </span>
        </a>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-100/80 hover:text-white hover:underline underline-offset-4 decoration-blue-400/80 transition-colors"
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
