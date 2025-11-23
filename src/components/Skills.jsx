import React from "react";

const skills = [
  // Frontend
  { icon: "fa-html5", name: "HTML" },
  { icon: "fa-css3-alt", name: "CSS" },
  { icon: "fa-js", name: "JavaScript" },
  { icon: "fa-react", name: "React" },

  // Backend
  { icon: "fa-node-js", name: "Node.js" },
  { icon: "fa-database", name: "MongoDB" },
  { icon: "fa-network-wired", name: "APIs REST" },
  { icon: "fa-lock", name: "JWT / Seguridad" },
];


export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-900/60">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">Skills técnicos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm"
            >
              <i
                className={`fa-brands ${skill.icon} text-4xl text-blue-400 mb-1`}
              ></i>
              <span className="font-semibold text-slate-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
