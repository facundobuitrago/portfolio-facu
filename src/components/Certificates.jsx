import React, { useState } from "react";

export default function Certificates({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrent((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) return null;

  return (
    <section id="certificates" className="py-16 bg-slate-900/60">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">Certificados</h2>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-lg">
            <img
              src={images[current].src}
              alt={images[current].alt || "Certificado"}
              className="w-full h-auto object-contain bg-black"
            />
          </div>

          {/* Controles */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-800 text-slate-100 rounded-full w-9 h-9 flex items-center justify-center border border-slate-700 shadow"
          >
            <i className="fa-solid fa-chevron-left text-sm"></i>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-800 text-slate-100 rounded-full w-9 h-9 flex items-center justify-center border border-slate-700 shadow"
          >
            <i className="fa-solid fa-chevron-right text-sm"></i>
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((img, index) => (
              <button
                key={img.src}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full ${
                  index === current ? "bg-blue-400" : "bg-slate-600"
                }`}
                aria-label={`Ver certificado ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
