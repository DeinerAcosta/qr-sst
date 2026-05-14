/* ============================================================
   COFCA · SST — Datos de Productos Químicos
   ============================================================

   Este es el ÚNICO archivo que necesitas editar para:
   · Agregar un producto nuevo
   · Conectar el video de un producto
   · Escribir / actualizar el resumen de un producto

   --- Cómo agregar un producto nuevo ---
   1. Pon el PDF en  archivos/quimicos/  (nombre en minúsculas, sin espacios)
   2. Agrega un bloque { ... } al final del arreglo PRODUCTOS.

   --- Campo "video" — cómo conectarlo ---
   · YouTube:  video: "https://www.youtube.com/embed/CODIGO_DEL_VIDEO"
   · YouTube (solo el código):  video: "youtube:CODIGO_DEL_VIDEO"
   · Archivo MP4:  video: "archivos/quimicos/videos/nombre.mp4"
   · Sin video todavía:  video: ""   (mostrará "Video en preparación")

   --- Campo "resumen" — texto HTML ---
   · Puedes usar <h3>, <p>, <ul><li>, <strong>, etc.
   · Vacío ("") mostrará "Resumen en preparación".
   ============================================================ */

const CATEGORIA = {
  nombre: "Productos Químicos",
  icono: "🧪",
  carpeta: "quimicos",
};

const PRODUCTOS = [
  { id: "1-thinner",                      nombre: "Thinner",                       pdf: "1-thinner.pdf",                      video: "", resumen: "" },
  { id: "2-vasrsol",                      nombre: "Varsol",                        pdf: "2-vasrsol.pdf",                      video: "", resumen: "" },
  { id: "3-aerosol",                      nombre: "Aerosol",                       pdf: "3-aerosol.pdf",                      video: "", resumen: "" },
  { id: "4-esmalte",                      nombre: "Esmalte",                       pdf: "4-esmalte.pdf",                      video: "", resumen: "" },
  { id: "5-poliuretano",                  nombre: "Poliuretano",                   pdf: "5-poliuretano.pdf",                  video: "", resumen: "" },
  { id: "6-aceites-lubricantes",          nombre: "Aceites Lubricantes",           pdf: "6-aceites-lubricantes.pdf",          video: "", resumen: "" },
  { id: "7-boxer",                        nombre: "Boxer",                         pdf: "7-boxer.pdf",                        video: "", resumen: "" },
  { id: "8-pegante-tubos",                nombre: "Pegante para Tubos",            pdf: "8-pegante-tubos.pdf",                video: "", resumen: "" },
  { id: "9-hipoclorito",                  nombre: "Hipoclorito",                   pdf: "9-hipoclorito.pdf",                  video: "", resumen: "" },
  { id: "10-klaxinn",                     nombre: "Klaxinn",                       pdf: "10-klaxinn.pdf",                     video: "", resumen: "" },
  { id: "11-alka-dds",                    nombre: "Alka DDS",                      pdf: "11-alka-dds.pdf",                    video: "", resumen: "" },
  { id: "12-surfalkan",                   nombre: "Surfalkan",                     pdf: "12-surfalkan.pdf",                   video: "", resumen: "" },
  { id: "13-pegante-sika",                nombre: "Pegante Sika",                  pdf: "13-pegante-sika.pdf",                video: "", resumen: "" },
  { id: "14-hs-r410a-es",                 nombre: "Refrigerante R-410A",           pdf: "14-hs-r410a-es.pdf",                 video: "", resumen: "" },
  { id: "15-extintor-dioxido-de-carbono", nombre: "Extintor Dióxido de Carbono",   pdf: "15-extintor-dioxido-de-carbono.pdf", video: "", resumen: "" },
  { id: "16-acpm",                        nombre: "ACPM",                          pdf: "16-acpm.pdf",                        video: "", resumen: "" },
  { id: "17-masilla-super-mastick",       nombre: "Masilla Super Mastick",         pdf: "17-masilla-super-mastick.pdf",       video: "", resumen: "" },
  { id: "18-limpiador-desincrusante",     nombre: "Limpiador Desincrustante",      pdf: "18-limpiador-desincrusante.pdf",     video: "", resumen: "" },
  { id: "18-pegante-pvc",                 nombre: "Pegante PVC",                   pdf: "18-pegante-pvc.pdf",                 video: "", resumen: "" },
  { id: "19-evav-clean",                  nombre: "EVAV Clean",                    pdf: "19-evav-clean.pdf",                  video: "", resumen: "" },
  { id: "20-diablo-rojo",                 nombre: "Diablo Rojo",                   pdf: "20-diablo-rojo.pdf",                 video: "", resumen: "" },
  { id: "21-quita-oxidos",                nombre: "Quita Óxidos",                  pdf: "21-quita-oxidos.pdf",                video: "", resumen: "" },
  { id: "22-limpiador-desincrusante",     nombre: "Limpiador Desincrustante (2)",  pdf: "22-limpiador-desincrusante.pdf",     video: "", resumen: "" },
  { id: "23-alkazyme",                    nombre: "Alkazyme",                      pdf: "23-alkazyme.pdf",                    video: "", resumen: "" },
  { id: "24-barniz-acrilico-spray",       nombre: "Barniz Acrílico Spray",         pdf: "24-barniz-acrilico-spray.pdf",       video: "", resumen: "" },
  { id: "25-pintura-multiproposito",      nombre: "Pintura Multipropósito",        pdf: "25-pintura-multiproposito.pdf",      video: "", resumen: "" },
  { id: "26-limpiador-electrico",         nombre: "Limpiador Eléctrico",           pdf: "26-limpiador-electrico.pdf",         video: "", resumen: "" },
  { id: "27-sika-impermeabilizante",      nombre: "Sika Impermeabilizante",        pdf: "27-sika-impermeabilizante.pdf",      video: "", resumen: "" },
  { id: "28-butano",                      nombre: "Butano",                        pdf: "28-butano.pdf",                      video: "", resumen: "" },
  { id: "29-silicona-pegavidrios",        nombre: "Silicona Pega Vidrios",         pdf: "29-silicona-pegavidrios.pdf",        video: "", resumen: "" },
  { id: "30-soda-caustica",               nombre: "Soda Cáustica",                 pdf: "30-soda-caustica.pdf",               video: "", resumen: "" },
  { id: "31-hipoclorito-sodio",           nombre: "Hipoclorito de Sodio",          pdf: "31-hipoclorito-sodio.pdf",           video: "", resumen: "" },
  { id: "32-jabon-liquido",               nombre: "Jabón Líquido",                 pdf: "32-jabon-liquido.pdf",               video: "", resumen: "" },
  { id: "33-hipoclorito-13",              nombre: "Hipoclorito al 13%",            pdf: "33-hipoclorito-13.pdf",              video: "", resumen: "" },
  { id: "34-desinfectante",               nombre: "Desinfectante",                 pdf: "34-desinfectante.pdf",               video: "", resumen: "" },
];
