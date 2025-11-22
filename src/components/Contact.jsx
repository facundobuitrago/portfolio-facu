import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="section-title">Contacto</h2>

        <p className="text-lg text-slate-200/80 mb-10">
          Si querés trabajar conmigo o ver más de lo que hago, podés encontrarme acá:
        </p>

        <div className="flex justify-center gap-12 text-4xl ">
          <a
            href="https://www.linkedin.com/in/facundo-buitrago"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-transform duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:facundobuitrago@gmail.com"
            className="text-slate-300 hover:text-blue-400 transition-transform duration-300 hover:scale-125"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/facundobuitrago"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-transform duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>
        </div>

        {/* Formulario */}
        <div className="mt-16 bg-slate-900/50 p-8 rounded-xl border border-slate-700">
          <h3 className="text-xl font-semibold mb-4">Enviame un mensaje</h3>

          <form
            action="https://formsubmit.co/facundobuitrago@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="p-3 rounded bg-slate-800 text-slate-200 border border-slate-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Tu email"
              required
              className="p-3 rounded bg-slate-800 text-slate-200 border border-slate-700"
            />

            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows="4"
              required
              className="p-3 rounded bg-slate-800 text-slate-200 border border-slate-700"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded text-white font-semibold"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
