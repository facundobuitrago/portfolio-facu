import React from "react";
import { FaServer, FaShoppingCart } from "react-icons/fa";
import { TbDatabaseCog } from "react-icons/tb";

const items = [
  {
    icon: <FaServer className="text-emerald-400 text-3xl" />,
    title: "APIs REST con Node y Express",
    desc: "Creación de rutas, controladores y middlewares básicos para aplicaciones web.",
  },
  {
    icon: <TbDatabaseCog className="text-sky-400 text-3xl" />,
    title: "MongoDB y Mongoose",
    desc: "Conexión a base de datos, esquemas simples, validaciones y operaciones CRUD.",
  },
  {
    icon: <FaShoppingCart className="text-yellow-400 text-3xl" />,
    title: "Lógica inicial para e-commerce",
    desc: "Gestión básica de productos y carrito, autenticación con JWT y estructura de API.",
  },
];

export default function BackendExperience() {
  return (
    <section id="backend" className="py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-4">
        <h2 className="section-title">Experiencia Backend</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 shadow-md hover:-translate-y-1 hover:shadow-2xl hover:border-emerald-400/70 transition-transform duration-300"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

