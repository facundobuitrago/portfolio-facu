import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiJsonwebtokens } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const frontendSkills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
];

const backendSkills = [
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress className="text-slate-200" />, name: "Express" },
  { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
  { icon: <TbApi className="text-purple-400" />, name: "APIs REST" },
  { icon: <SiJsonwebtokens className="text-pink-400" />, name: "JWT / Seguridad" },
  { icon: <FaDatabase className="text-indigo-400" />, name: "Modelado de datos" },
];

const SkillGrid = ({ title, items }) => (
  <div className="flex-1">
    <h3 className="text-xl font-semibold mb-4 text-left md:text-center">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {items.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/70 transition-transform transition-colors duration-300"
        >
          <div className="text-4xl mb-1 drop-shadow">{skill.icon}</div>
          <span className="font-semibold text-slate-100 text-sm md:text-base text-center">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-900/60">
      <div className="max-w-5xl mx-auto px=4 md:px-4">
        <h2 className="section-title">Skills técnicos</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <SkillGrid title="Frontend" items={frontendSkills} />
          <SkillGrid title="Backend" items={backendSkills} />
        </div>
      </div>
    </section>
  );
}
