import React from "react";

const ProjectCard = ({ title, description, link }) => (
  <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/70 transition">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-slate-300/90 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300"
    >
      Ver proyecto
      <span className="ml-1">
        <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
      </span>
    </a>
  </div>
);

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
