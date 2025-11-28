import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import BackendExperience from "./components/BackendExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import backendCert from "./assets/backend.png";
import reactCert from "./assets/react.png";
import jsCert from "./assets/js.png";
import devWebCert from "./assets/desarrollo.png";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const projects = [
    {
      title: "Landing Page",
      description:
        "Página moderna construida con HTML, CSS y un enfoque mobile-first.",
      link: "https://cerrajeria-9dejulio.vercel.app/",
    },
    {
      title: "E-commerce Fake (Frontend)",
      description:
        "E-commerce estático – Maquetación completa en HTML + SCSS, con diseño responsivo y uso de SweetAlert para alertas visuales. Catálogo de productos sin backend.",
      link: "https://web-ecommerce-q6hvm288r-facundo-buitragos-projects.vercel.app/",
    },
    {
      title: "API de Productos",
      description:
        "API REST en Node.js + Express conectada a MongoDB, con endpoints CRUD y validaciones básicas.",
      link: "https://api-productos-m6sy.onrender.com/",
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
      <BackendExperience />
      <Projects projects={projects} />
      <Certificates images={certificates} />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
