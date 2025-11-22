import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 mt-8">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Facundo Buitrago — Portfolio
      </div>
    </footer>
  );
}
