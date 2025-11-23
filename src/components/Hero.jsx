import React from "react";

export default function Hero() {
  return (
    <header
      id="top"
      className="pt-28 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-5xl mx-auto px=4 md:px-4 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-400/80 mb-4">
          Desarrollador Frontend & Backend
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hola, soy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400">
            Facundo Buitrago
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200/80 mb-8 max-w-2xl mx-auto">
          Construyo interfaces modernas y APIs sólidas usando{" "}
          <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
          <strong>React</strong>, <strong>Node.js</strong> y <strong>MongoDB</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition transform hover:-translate-y-0.5"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-600 text-slate-100 hover:border-emerald-400 hover:text-emerald-400 transition transform hover:-translate-y-0.5"
          >
            Contactarme
          </a>
        </div>
      </div>
    </header>
  );
}
