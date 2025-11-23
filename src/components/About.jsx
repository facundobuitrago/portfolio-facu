import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">Sobre mí</h2>
        <p className="text-lg text-center text-slate-200/80 max-w-2xl mx-auto space-y-2">
          <span>
            Soy un desarrollador <strong>frontend</strong> y <strong>backend</strong> autodidacta con muchas ganas de crecer,
            aprender y participar en proyectos reales.
          </span>{" "}
          <span>
            En el frontend trabajo con <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> y <strong>React</strong> para crear interfaces modernas,
            limpias y fáciles de usar.
          </span>{" "}
          <span>
            En el backend tengo experiencia con <strong>Node.js</strong>, <strong>Express</strong> y <strong>MongoDB</strong>, creando APIs REST,
            autenticación con <strong>JWT</strong> y lógica de negocio para aplicaciones completas.
          </span>
        </p>
      </div>
    </section>
  );
}
