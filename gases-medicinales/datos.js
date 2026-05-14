/* ============================================================
   COFCA · SST — Datos de Gases Medicinales
   ============================================================

   Este es el ÚNICO archivo que necesitas editar para:
   · Agregar un gas nuevo
   · Conectar el video de un gas
   · Escribir / actualizar el resumen de un gas

   --- Cómo agregar un gas nuevo ---
   1. Pon el PDF en  archivos/gases-medicinales/  (minúsculas, sin espacios)
   2. Agrega un bloque { ... } al final del arreglo PRODUCTOS.

   --- Campo "video" — cómo conectarlo ---
   · YouTube:  video: "https://www.youtube.com/embed/CODIGO_DEL_VIDEO"
   · YouTube (solo el código):  video: "youtube:CODIGO_DEL_VIDEO"
   · Archivo MP4:  video: "archivos/gases-medicinales/videos/nombre.mp4"
   · Sin video todavía:  video: ""   (mostrará "Video en preparación")

   --- Campo "resumen" — texto HTML ---
   · Puedes usar <h3>, <p>, <ul><li>, <strong>, etc.
   · Vacío ("") mostrará "Resumen en preparación".
   ============================================================ */

const CATEGORIA = {
  nombre: "Gases Medicinales",
  icono: "🫁",
  carpeta: "gases-medicinales",
};

const PRODUCTOS = [
  { id: "aire-medicinal",     nombre: "Aire Medicinal (Comprimido y Sintético)", pdf: "aire-medicinal.pdf",     video: "", resumen: "" },
  { id: "dioxido-de-carbono", nombre: "Dióxido de Carbono (Dioxicarbomed)",      pdf: "dioxido-de-carbono.pdf", video: "", resumen: "" },
  { id: "oxido-nitroso",      nombre: "Óxido Nitroso",                           pdf: "oxido-nitroso.pdf",      video: "", resumen: "" },
  { id: "oxigeno-liquido",    nombre: "Oxígeno Líquido (LOX)",                   pdf: "oxigeno-liquido.pdf",    video: "", resumen: "" },
  { id: "oxigeno-medicinal",  nombre: "Oxígeno Medicinal",                       pdf: "oxigeno-medicinal.pdf",  video: "", resumen: "" },
];
