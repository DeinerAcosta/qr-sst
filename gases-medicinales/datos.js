/* ============================================================
   COFCA · SST — Datos de Gases Medicinales
   ============================================================

   Este es el ÚNICO archivo que necesitas editar para:
   · Agregar un gas nuevo
   · Conectar el video de un gas
   · Editar el resumen de un gas

   --- Cómo agregar un gas nuevo ---
   1. Pon el PDF en  archivos/gases-medicinales/  (minúsculas, sin espacios)
   2. Agrega un bloque { ... } al final del arreglo PRODUCTOS.

   --- Campo "video" — cómo conectarlo ---
   · YouTube:  video: "youtube:CODIGO_DEL_VIDEO"
   · URL de YouTube:  video: "https://www.youtube.com/watch?v=CODIGO"
   · Archivo MP4:  video: "archivos/gases-medicinales/videos/nombre.mp4"
   · Sin video todavía:  video: ""   (mostrará "Video en preparación")

   --- Campo "resumen" — texto HTML (entre acentos graves ``) ---
   · Los resúmenes fueron redactados a partir del contenido de cada
     Ficha de Datos de Seguridad. Son un APOYO RÁPIDO; ante cualquier
     duda siempre debe consultarse la SDS completa en PDF.
   · DEBEN SER REVISADOS Y APROBADOS por el área de SST de COFCA.
   ============================================================ */

const CATEGORIA = {
  nombre: "Gases Medicinales",
  icono: "🫁",
  carpeta: "gases-medicinales",
};

const PRODUCTOS = [
  {
    id: "aire-medicinal",
    nombre: "Aire Medicinal (Comprimido y Sintético)",
    pdf: "aire-medicinal.pdf",
    video: "",
    resumen: `
      <h2>Aire Medicinal (Comprimido y Sintético)</h2>
      <p><strong>Uso:</strong> Mezcla de nitrógeno y oxígeno, incolora e inodora, a alta presión.
      Soporte respiratorio en pacientes, terapia ventilatoria, anestesia y gas de arrastre para nebulización.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Contiene gas a presión: puede explotar si se calienta.
        Los cilindros expuestos a calor intenso o llamas pueden explotar violentamente. El aire
        comprimido a alta presión puede acelerar la combustión de otros materiales.
      </div>
      <h2>Manejo seguro</h2>
      <ul>
        <li>Mantener las válvulas y conexiones <strong>libres de aceite y grasa</strong></li>
        <li>Mantener alejado de la ropa y otros materiales combustibles</li>
        <li>Asegurar los cilindros con cadena o soporte, en posición vertical</li>
        <li>En caso de incendio: detener la fuga si puede hacerse sin riesgo</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> el aire a presión atmosférica no causa daños. Tras exposición a alta presión pueden aparecer hormigueo en los dedos, descoordinación o desorientación — trasladar al afectado y buscar atención médica.</li>
      </ul>
      <h2>Almacenamiento</h2>
      <p>Almacenar en lugar ventilado, proteger de la luz solar.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Ficha de Datos de Seguridad completa.</div>`
  },
  {
    id: "dioxido-de-carbono",
    nombre: "Dióxido de Carbono (Dioxicarbomed)",
    pdf: "dioxido-de-carbono.pdf",
    video: "",
    resumen: `
      <h2>Dióxido de Carbono (Dioxicarbomed)</h2>
      <p><strong>Uso:</strong> Gas licuado a alta presión. Cirugía laparoscópica, endoscopia,
      colonoscopia, angiografía y otros procedimientos clínicos.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Contiene gas a presión: puede explotar si se calienta.
        Puede provocar somnolencia o vértigo. El peligro principal es la <strong>asfixia por
        desplazamiento del oxígeno</strong>: a concentraciones del 10% o más causa sofocación en
        minutos. Es 1.5 veces más pesado que el aire — se acumula en zonas bajas.
      </div>
      <h2>Manejo seguro</h2>
      <ul>
        <li>Utilizar solo al aire libre o en lugar bien ventilado</li>
        <li>Evitar respirar el gas</li>
        <li>Asegurar los cilindros en posición vertical</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> trasladar a la víctima al aire fresco lo más pronto posible. Solo personal entrenado debe dar RCP u oxígeno suplementario.</li>
        <li>Síntomas de alerta: aumento de la frecuencia respiratoria y dolor de cabeza.</li>
      </ul>
      <h2>Almacenamiento</h2>
      <p>Almacenar en lugar ventilado, recipiente herméticamente cerrado, proteger de la luz solar.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Ficha de Datos de Seguridad completa.</div>`
  },
  {
    id: "oxido-nitroso",
    nombre: "Óxido Nitroso",
    pdf: "oxido-nitroso.pdf",
    video: "",
    resumen: `
      <h2>Óxido Nitroso</h2>
      <p><strong>Uso:</strong> Gas licuado de olor y sabor ligeramente dulce. Analgésico y
      componente de la anestesia general.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Gas comburente — puede provocar o agravar un
        incendio. Contiene gas a presión: puede explotar si se calienta. Puede provocar
        somnolencia o vértigo. <strong>Puede perjudicar la fertilidad o dañar al feto.</strong>
        Provoca daños en los órganos tras exposiciones prolongadas o repetidas. Asfixiante a
        altas concentraciones; el contacto con el líquido puede causar quemaduras por frío.
      </div>
      <h2>Manejo seguro</h2>
      <ul>
        <li>Mantener las válvulas y conexiones <strong>libres de aceite y grasa</strong></li>
        <li>Mantener alejado de la ropa y otros materiales combustibles</li>
        <li>Utilizar solo al aire libre o en lugar bien ventilado</li>
        <li>Es 1.5 veces más pesado que el aire — se acumula en zonas bajas</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> trasladar a la persona al aire libre y mantenerla en posición que le facilite la respiración. Llamar a un Centro de Toxicología o médico.</li>
      </ul>
      <h2>Almacenamiento</h2>
      <p>Almacenar en lugar ventilado, recipiente herméticamente cerrado.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Ficha de Datos de Seguridad completa.</div>`
  },
  {
    id: "oxigeno-liquido",
    nombre: "Oxígeno Líquido (LOX)",
    pdf: "oxigeno-liquido.pdf",
    video: "",
    resumen: `
      <h2>Oxígeno Líquido (LOX)</h2>
      <p><strong>Uso:</strong> Líquido oxidante a temperatura criogénica. Usos medicinales e industriales.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Gas comburente — puede provocar o agravar un incendio.
        Gas refrigerado: puede provocar quemaduras o lesiones criogénicas. Puede irritar las vías
        respiratorias. <strong>Acelera la combustión violentamente</strong>: los materiales combustibles
        en contacto con oxígeno líquido pueden estallar.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li><strong>Guantes aislantes contra el frío</strong></li>
        <li>Protección para la cara o los ojos</li>
        <li>Mantener las válvulas y conexiones libres de aceite y grasa</li>
        <li>Mantener alejado de la ropa y materiales combustibles</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Contacto / congelación:</strong> descongelar las partes afectadas con agua tibia, NO frotar. Atención médica inmediata.</li>
        <li><strong>Inhalación:</strong> trasladar a la persona al aire libre.</li>
        <li><strong>Ojos:</strong> enrojecimiento y quemaduras criogénicas — enjuagar y buscar atención médica.</li>
      </ul>
      <h2>Almacenamiento</h2>
      <p>Almacenar en lugar bien ventilado, recipiente herméticamente cerrado.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Ficha de Datos de Seguridad completa.</div>`
  },
  {
    id: "oxigeno-medicinal",
    nombre: "Oxígeno Medicinal",
    pdf: "oxigeno-medicinal.pdf",
    video: "",
    resumen: `
      <h2>Oxígeno Medicinal</h2>
      <p><strong>Uso:</strong> Gas comprimido incoloro e inodoro. Oxigenoterapia, resucitaciones,
      terapias hiperbáricas y atmósferas artificiales en pacientes.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Gas comburente — puede provocar o agravar un incendio.
        Contiene gas a presión: puede explotar si se calienta. No es inflamable por sí solo, pero
        <strong>alimenta la combustión</strong>: reacciona violentamente con materiales combustibles,
        grasa o hidrocarburos y puede causar fuego o explosión.
      </div>
      <h2>Manejo seguro</h2>
      <ul>
        <li>Mantener las válvulas y conexiones <strong>libres de aceite y grasa</strong></li>
        <li>Mantener alejado de la ropa y otros materiales combustibles</li>
        <li>Asegurar los cilindros en posición vertical</li>
        <li>En caso de incendio: detener la fuga si puede hacerse sin riesgo</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> trasladar a la víctima al aire fresco. Personal entrenado debe dar RCP si es necesario. Avisar al médico de la exposición a altas concentraciones.</li>
        <li><strong>Piel (congelación):</strong> enjuagar con agua; la ropa congelada a la piel debe descongelarse antes de retirarla.</li>
      </ul>
      <h2>Almacenamiento</h2>
      <p>Almacenar en lugar ventilado, proteger de la luz solar.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Ficha de Datos de Seguridad completa.</div>`
  },
];
