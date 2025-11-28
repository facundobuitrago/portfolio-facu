import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">Sobre mí</h2>
        <p className="text-lg text-center text-slate-200/80 max-w-2xl mx-auto space-y-2">
          <span>
            Desarrollador web con foco en <strong>frontend</strong>, orientado a crear interfaces claras,
            modernas y fáciles de usar.
          </span>{" "}
          <span>
            Trabajo con <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> y <strong>React</strong> para construir
            experiencias responsivas y bien estructuradas.
          </span>{" "}
          <span>
            También tengo conocimientos en <strong>Node.js</strong>, <strong>Express</strong> y <strong>MongoDB</strong>, 
            desarrollando APIs básicas y entendiendo el flujo general de un backend para integrarlo con el frontend.
          </span>{" "}
          <span>
            Mi objetivo es seguir creciendo profesionalmente, mejorar mis habilidades de frontend y fortalecer
            mi backend para participar en proyectos reales dentro de un equipo.
          </span>
        </p>
      </div>
    </section>
  );
}
