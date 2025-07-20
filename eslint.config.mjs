// Importiert die ESLint-Standardregeln ("eslint:recommended")
import js from "@eslint/js";

// Importiert das Next.js-Plugin, welches "next/core-web-vitals" enthält
import nextPlugin from "eslint-config-next";

// Typisierung für die Konfiguration (optional, aber gute Praxis)
/** @type {import('eslint').Linter.Config[]} */
export default [
  // Aktiviert die empfohlenen ESLint-Regeln
  js.configs.recommended,

  // Aktiviert die Regeln von Next.js
  nextPlugin,

  // Hier könntest du später deine eigenen, spezifischen Regeln hinzufügen
  // {
  //   rules: {
  //     "deine-regel": "error"
  //   }
  // }
];
