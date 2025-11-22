import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import backendCert from "./assets/backend.png";
import reactCert from "./assets/react.png";
import jsCert from "./assets/js.png";
import devWebCert from "./assets/desarrollo.png";
import WhatsAppButton from "./components/WhatsAppButton";


export default function App() {
  const projects = [
    {
      title: "Landing Page",
      description: "Página moderna construida con HTML, CSS y un enfoque mobile-first.",
      link: "#",
    },
    {
      title: "E-commerce Fake",
      description: "Catálogo de productos con filtros y carrito básico usando JavaScript.",
      link: "#",
    },
    {
      title: "To-do App",
      description: "Lista de tareas con persistencia en localStorage, simple y útil.",
      link: "#",
    },
  ];

  const certificates = [
    { src: backendCert, alt: "Certificado Backend Avanzado" },
    { src: reactCert, alt: "Certificado React JS" },
    { src: jsCert, alt: "Certificado JavaScript" },
    { src: devWebCert, alt: "Certificado Desarrollo Web" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Certificates images={certificates} />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
