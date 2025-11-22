import React from "react";

export default function Hero() {
  return (
    <header
      id="top"
      className="pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-400/80 mb-4">
          Frontend Developer
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hola, soy <span className="text-blue-400">Facundo Buitrago</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200/80 mb-8">
          HTML • CSS • JavaScript • React — construyo interfaces modernas y
          cuidadas, con foco en la experiencia del usuario.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-600 text-slate-100 hover:border-blue-400 hover:text-blue-400 transition"
          >
            Contactarme
          </a>
        </div>
      </div>
    </header>
  );
}
