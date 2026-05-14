/* ============================================================
   COFCA · SST — Datos de Productos Químicos
   ============================================================

   Este es el ÚNICO archivo que necesitas editar para:
   · Agregar un producto nuevo
   · Conectar el video de un producto
   · Editar el resumen de un producto

   --- Cómo agregar un producto nuevo ---
   1. Pon el PDF en  archivos/quimicos/  (nombre en minúsculas, sin espacios)
   2. Agrega un bloque { ... } al final del arreglo PRODUCTOS.

   --- Campo "video" — cómo conectarlo ---
   · YouTube:  video: "youtube:CODIGO_DEL_VIDEO"
   · URL de YouTube:  video: "https://www.youtube.com/watch?v=CODIGO"
   · Archivo MP4:  video: "archivos/quimicos/videos/nombre.mp4"
   · Sin video todavía:  video: ""   (mostrará "Video en preparación")

   --- Campo "resumen" — texto HTML (entre acentos graves ``) ---
   · Los resúmenes fueron redactados a partir del contenido de cada
     Hoja de Seguridad. Son un APOYO RÁPIDO; ante cualquier duda
     siempre debe consultarse la SDS completa en PDF.
   · DEBEN SER REVISADOS Y APROBADOS por el área de SST de COFCA.

   --- NOTAS PARA SST (revisar) ---
   · 13 y 27 son el MISMO PDF ("Sika Imper Mur") -> eliminar uno.
   · 18 y 22 ("Limpiador Desincrustante") son documentos de Studocu,
     NO son fichas de seguridad oficiales -> reemplazar por la SDS real.
   · 25 ("pintura-multiproposito") -> el PDF es de un ACARICIDA/
     INSECTICIDA ("Ivenol Masso"), no de una pintura. Verificar archivo.
   · 32, 33 y 34 son PDF escaneados. 33 y 34 no tienen resumen porque
     no se pudo leer su texto -> requieren transcripción manual o OCR.
   · 9, 31 y 33 son todos "hipoclorito": confirmar si se solapan.
   ============================================================ */

const CATEGORIA = {
  nombre: "Productos Químicos",
  icono: "🧪",
  carpeta: "quimicos",
};

const PRODUCTOS = [
  {
    id: "1-thinner",
    nombre: "Thinner Corriente",
    pdf: "1-thinner.pdf",
    video: "",
    resumen: `
      <h2>Thinner Corriente</h2>
      <p><strong>Uso:</strong> Disolvente. Mezcla de xileno, acetato de etilo, etanol y otros solventes.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Líquido y vapores muy inflamables. Provoca
        irritación cutánea y ocular. Nocivo en contacto con la piel y si se inhala.
        Puede ser mortal en caso de ingestión y de penetración en las vías respiratorias.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes y ropa de protección resistentes a solventes</li>
        <li>Gafas de seguridad / protección para la cara</li>
        <li>Trabajar en área bien ventilada — no fumar</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ojos:</strong> enjuagar con agua varios minutos, retirar lentes de contacto.</li>
        <li><strong>Piel:</strong> lavar con abundante agua y jabón.</li>
        <li><strong>Inhalación:</strong> trasladar al aire fresco y mantener en reposo.</li>
        <li><strong>Ingestión:</strong> NO provocar el vómito. Buscar atención médica.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Mantener alejado del calor, chispas y llamas. En caso de incendio usar extintor de polvo ABC.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "2-vasrsol",
    nombre: "Varsol (Disolvente)",
    pdf: "2-vasrsol.pdf",
    video: "",
    resumen: `
      <h2>Varsol (Disolvente)</h2>
      <p><strong>Uso:</strong> Disolvente / espíritu mineral (disolvente Stoddard).
      Mezcla de hidrocarburos del petróleo.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Líquido combustible — puede formar mezclas
        explosivas a temperaturas iguales o superiores a su punto de inflamación.
        Sus vapores pueden desplazarse a ras del suelo hasta una fuente de ignición.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes resistentes a solventes</li>
        <li>Gafas de seguridad</li>
        <li>Área ventilada, lejos de fuentes de ignición</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ojos:</strong> lavar con abundante agua al menos 15 minutos.</li>
        <li><strong>Piel:</strong> lavar con agua tibia y jabón al menos 15 minutos.</li>
        <li><strong>Inhalación:</strong> trasladar al aire fresco.</li>
        <li><strong>Ingestión:</strong> NO inducir el vómito. Atención médica inmediata.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Eliminar toda fuente de ignición. No verter a desagües (riesgo de fuego o explosión).</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "3-aerosol",
    nombre: "Pintura en Aerosol Sapolin",
    pdf: "3-aerosol.pdf",
    video: "",
    resumen: `
      <h2>Pintura en Aerosol Sapolin</h2>
      <p><strong>Uso:</strong> Pintura en aerosol.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Aerosol extremadamente inflamable. Recipiente
        a presión: puede reventar si se calienta. <strong>Puede provocar cáncer.</strong>
        Provoca irritación cutánea leve e irritación ocular grave. Puede provocar somnolencia o vértigo.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes y ropa de protección</li>
        <li>Protección para los ojos / la cara</li>
        <li>Usar únicamente en lugar bien ventilado — no fumar</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ojos:</strong> enjuagar con agua cuidadosamente varios minutos.</li>
        <li><strong>Inhalación:</strong> trasladar al aire libre.</li>
        <li>Si se necesita consejo médico, tener a mano el envase o la etiqueta.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>No vaporizar sobre llamas. No perforar ni quemar, incluso después de su uso.
      Proteger del sol, no exponer a más de 50 °C.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "4-esmalte",
    nombre: "Esmalte Top Quality",
    pdf: "4-esmalte.pdf",
    video: "",
    resumen: `
      <h2>Esmalte Top Quality</h2>
      <p><strong>Uso:</strong> Pintura (esmalte).</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Líquido y vapores inflamables. Provoca
        irritación cutánea. Puede provocar una reacción cutánea alérgica. Puede provocar
        somnolencia o vértigo. Puede ser mortal en caso de ingestión y de penetración en las vías respiratorias.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes y ropa de protección</li>
        <li>Protección para los ojos / la cara</li>
        <li>Área ventilada — no fumar</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> trasladar al aire libre y mantener en reposo.</li>
        <li><strong>Ojos / piel:</strong> enjuagar con abundante agua.</li>
        <li><strong>Ingestión:</strong> NO provocar el vómito. Atención médica.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Mantener alejado del calor y de fuentes de ignición. En caso de incendio usar extintor de polvo ABC.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "5-poliuretano",
    nombre: "Esmalte Poliuretano",
    pdf: "5-poliuretano.pdf",
    video: "",
    resumen: `
      <h2>Esmalte Poliuretano</h2>
      <p><strong>Uso:</strong> Pintura (esmalte poliuretano). Uso exclusivo industrial.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Líquido y vapores inflamables.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes y ropa de protección</li>
        <li>Protección para los ojos / la cara</li>
        <li>Mantener el recipiente herméticamente cerrado</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> trasladar al aire limpio y mantener en reposo.</li>
        <li><strong>Piel:</strong> quitar la ropa contaminada y lavar con agua y jabón neutro.</li>
        <li><strong>Ojos:</strong> enjuagar con abundante agua al menos 15 minutos.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Mantener alejado del calor y fuentes de ignición. Almacenar en lugar fresco y ventilado.
      En caso de incendio usar extintor de polvo ABC.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "6-aceites-lubricantes",
    nombre: "Aceites Lubricantes",
    pdf: "6-aceites-lubricantes.pdf",
    video: "",
    resumen: `
      <h2>Aceites Lubricantes</h2>
      <p><strong>Uso:</strong> Aceites lubricantes minerales y/o sintéticos para motores y equipos.</p>
      <div class="callout">
        <strong>Peligros principales:</strong> Producto de bajo riesgo en condiciones normales
        de uso. Es combustible (puede arder a temperaturas altas). El contacto repetido o
        prolongado con la piel puede causar irritación leve (resequedad, dermatitis).
        El aceite usado puede contener impurezas nocivas.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes de protección</li>
        <li>Evitar el contacto prolongado con la piel</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Piel:</strong> retirar la ropa contaminada y lavar con agua y jabón.</li>
        <li><strong>Ojos:</strong> enjuagar con agua; puede causar irritación leve transitoria.</li>
        <li>Si la sintomatología persiste, obtener atención médica.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Producto combustible, no explosivo. Almacenar lejos de fuentes de calor intenso.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "7-boxer",
    nombre: "Boxer",
    pdf: "7-boxer.pdf",
    video: "",
    resumen: `
      <h2>Boxer</h2>
      <p><strong>Uso:</strong> Fungicida agrícola (a base de hidróxido cúprico).</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> <strong>Mortal en caso de inhalación.</strong>
        Nocivo en caso de ingestión. Provoca lesiones oculares graves. Muy tóxico para los
        organismos acuáticos, con efectos nocivos duraderos.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes, prendas, gafas o máscara de protección</li>
        <li>NO respirar el polvo, humo, niebla ni los vapores</li>
        <li>No contaminar fuentes de agua con el producto ni su envase</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> trasladar al aire libre; administrar oxígeno si respira con dificultad.</li>
        <li><strong>Piel:</strong> lavar con abundante agua y jabón, quitar la ropa contaminada.</li>
        <li><strong>Ojos:</strong> lavar con abundante agua al menos 15 minutos.</li>
        <li>Llamar inmediatamente a un Centro de Toxicología o a un médico.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Mantener fuera del alcance de los niños. Eliminar el contenido y el recipiente conforme a la normativa.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "8-pegante-tubos",
    nombre: "Soldamax Pavco (Pegante PVC)",
    pdf: "8-pegante-tubos.pdf",
    video: "",
    resumen: `
      <h2>Soldamax Pavco (Pegante PVC)</h2>
      <p><strong>Uso:</strong> Soldadura líquida para uniones de tubería de PVC / CPVC.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Líquidos y vapores muy inflamables. Nocivo
        en caso de ingestión. Provoca irritación ocular grave. Puede irritar las vías
        respiratorias y provocar somnolencia o vértigo. <strong>Susceptible de provocar cáncer.</strong>
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes y protección para los ojos / la cara</li>
        <li>Usar al aire libre o en lugar bien ventilado</li>
        <li>No comer, beber ni fumar mientras se manipula</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> trasladar al aire libre.</li>
        <li><strong>Ojos / piel:</strong> enjuagar con abundante agua.</li>
        <li>En caso de exposición demostrada o supuesta: consultar a un médico.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Mantener alejado del calor y fuentes de ignición, recipiente cerrado. No usar herramientas que produzcan chispas.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "9-hipoclorito",
    nombre: "Hipoclorito",
    pdf: "9-hipoclorito.pdf",
    video: "",
    resumen: `
      <h2>Hipoclorito (de Sodio)</h2>
      <p><strong>Uso:</strong> Solución de hipoclorito de sodio — blanqueador y desinfectante (agente oxidante).</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Líquido corrosivo. No es inflamable, pero se
        descompone a partir de 40 °C o en contacto con ácidos fuertes generando
        <strong>gas cloro tóxico</strong>. Nunca mezclar con ácidos ni con otros productos.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Traje, botas y guantes de hule</li>
        <li>Gogles y careta facial contra salpicaduras</li>
        <li>Ventilación adecuada</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ojos:</strong> enjuagar con abundante agua al menos 15 minutos. Atención médica.</li>
        <li><strong>Piel:</strong> lavar con abundante agua, retirar la ropa contaminada.</li>
        <li><strong>Inhalación (de cloro):</strong> trasladar al aire fresco de inmediato.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Evitar la contaminación con metales pesados o ácidos. Almacenar en lugar fresco, alejado de la luz y del calor.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "10-klaxinn",
    nombre: "Klaxinn Tabs Detclork 500",
    pdf: "10-klaxinn.pdf",
    video: "",
    resumen: `
      <h2>Klaxinn Tabs Detclork 500</h2>
      <p><strong>Uso:</strong> Limpiador y desinfectante en tabletas efervescentes
      (a base de dicloroisocianurato de sodio). Dilución: 1 tableta por litro de agua.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Provoca irritación cutánea e irritación ocular grave.
        En diluciones concentradas puede agravar un incendio (comburente) e irritar las vías respiratorias.
        Puede ser nocivo en caso de ingestión.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes, prendas, gafas o máscara de protección</li>
        <li>Usar en áreas bien ventiladas</li>
        <li>No comer, beber ni fumar durante su uso</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ojos:</strong> aclarar cuidadosamente con agua varios minutos, retirar lentes de contacto.</li>
        <li><strong>Piel:</strong> aclarar con agua o ducharse.</li>
        <li><strong>Inhalación:</strong> trasladar al aire libre.</li>
        <li><strong>Ingestión:</strong> enjuagar la boca, NO provocar el vómito.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Mantener los envases bien cerrados. Fuera del alcance de los niños.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "11-alka-dds",
    nombre: "Alka DDS",
    pdf: "11-alka-dds.pdf",
    video: "",
    resumen: `
      <h2>Alka DDS</h2>
      <p><strong>Uso:</strong> Detergente desinfectante para todas las superficies lavables.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Provoca irritación cutánea y
        <strong>lesiones oculares graves</strong>. Puede provocar una reacción alérgica en la piel.
        Nocivo para los organismos acuáticos con efectos duraderos.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes, prendas, gafas o máscara de protección</li>
        <li>Evitar su liberación al medio ambiente</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Piel:</strong> lavar con abundante agua y jabón.</li>
        <li><strong>Ojos:</strong> enjuagar con agua cuidadosamente varios minutos, retirar lentes de contacto.</li>
        <li>En caso de irritación o erupción cutánea, consultar a un médico.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Mantener fuera del alcance de los niños. Eliminar el recipiente como residuo peligroso.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "12-surfalkan",
    nombre: "Surfalkan SH",
    pdf: "12-surfalkan.pdf",
    video: "",
    resumen: `
      <h2>Surfalkan SH</h2>
      <p><strong>Uso:</strong> Detergente desinfectante listo para uso, para la limpieza y
      desinfección de superficies en hospitales, consultorios médicos y dentales.
      Bactericida, levuricida, virucida y esporicida.</p>
      <div class="callout info">
        <strong>Nota:</strong> El documento cargado es el manual técnico del producto.
        Para los datos de peligros, EPP y primeros auxilios completos, consultar la
        Ficha de Datos de Seguridad oficial del fabricante (SODEL / Alkapharm).
      </div>
      <h2>Recomendaciones generales</h2>
      <ul>
        <li>Usar guantes de protección durante la manipulación</li>
        <li>Respetar las diluciones e instrucciones de empleo indicadas</li>
        <li>Mantener los envases cerrados y bien almacenados</li>
        <li>Evitar el contacto con los ojos</li>
      </ul>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "13-pegante-sika",
    nombre: "Sika Imper Mur",
    pdf: "13-pegante-sika.pdf",
    video: "",
    resumen: `
      <h2>Sika Imper Mur</h2>
      <p><strong>Uso:</strong> Aditivo impermeabilizante para muros (dispersión acuosa de polímero acrílico).</p>
      <div class="callout">
        <strong>Peligros principales:</strong> Según su Hoja de Seguridad,
        <strong>no está clasificado como sustancia o mezcla peligrosa.</strong>
        Aun así, se recomienda manipularlo con las precauciones generales de higiene industrial.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes de protección</li>
        <li>Gafas de seguridad para evitar salpicaduras</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ojos:</strong> enjuagar inmediatamente con abundante agua al menos 10 minutos.</li>
        <li><strong>Piel:</strong> lavar con abundante agua, quitar la ropa contaminada.</li>
        <li><strong>Ingestión:</strong> no inducir el vómito; buscar ayuda médica.</li>
      </ul>
      <div class="callout danger">
        <strong>Aviso para SST:</strong> este archivo es idéntico al del producto
        "Sika Imper Mur" (n.º 27). Conviene conservar solo uno.
      </div>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "14-hs-r410a-es",
    nombre: "Refrigerante R-410A",
    pdf: "14-hs-r410a-es.pdf",
    video: "",
    resumen: `
      <h2>Refrigerante R-410A</h2>
      <p><strong>Uso:</strong> Gas refrigerante para sistemas de aire acondicionado.
      Uso exclusivo de personal profesional.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Contiene gas a presión: puede explotar si se
        calienta. Los vapores son más pesados que el aire y pueden producir
        <strong>asfixia</strong> al desplazar el oxígeno. La evaporación rápida del líquido
        puede causar congelación. Puede causar arritmia cardiaca.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes aislantes contra el frío</li>
        <li>Protección para los ojos / la cara</li>
        <li>Trabajar en lugar bien ventilado</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> trasladar al aire libre; administrar oxígeno si es necesario. Atención médica.</li>
        <li><strong>Piel (congelación):</strong> limpiar con agua tibia, NO caliente; atención médica.</li>
        <li><strong>Ojos:</strong> enjuagar con abundante agua al menos 15 minutos.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Proteger de la luz solar. Almacenar en lugar bien ventilado, lejos de fuentes de calor.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "15-extintor-dioxido-de-carbono",
    nombre: "Extintor de Dióxido de Carbono (CO₂)",
    pdf: "15-extintor-dioxido-de-carbono.pdf",
    video: "",
    resumen: `
      <h2>Extintor de Dióxido de Carbono (CO₂)</h2>
      <p><strong>Uso:</strong> Extintor para fuegos clase B (líquidos y gases inflamables)
      y clase C (equipos eléctricos). Contiene CO₂ licuado a presión.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> El peligro principal es la <strong>asfixia
        por desplazamiento del oxígeno</strong>. Los cilindros expuestos a calor intenso o
        llamas pueden explotar violentamente.
      </div>
      <h2>Instrucciones de uso</h2>
      <ul>
        <li>Ubique el extintor y verifique que tenga presión</li>
        <li>Rompa el sello de seguridad o el pasador</li>
        <li>Acérquese a unos 3 metros del conato de incendio</li>
        <li>Dirija el chorro a la base de las llamas con movimiento de abanico</li>
        <li>Nunca dé la espalda al fuego al retirarse</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> trasladar a la víctima al aire fresco lo más pronto posible. Solo personal entrenado debe dar RCP u oxígeno.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Mantener los cilindros asegurados, alejados de fuentes de calor. Revisar la presión periódicamente.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "16-acpm",
    nombre: "ACPM (Diésel)",
    pdf: "16-acpm.pdf",
    video: "",
    resumen: `
      <h2>ACPM (Diésel)</h2>
      <p><strong>Uso:</strong> Combustible diésel / aceite combustible para motores.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Líquido combustible — puede formar mezclas
        explosivas a temperaturas iguales o superiores a su punto de inflamación. Los vapores
        se desplazan a ras del suelo hasta una fuente de ignición. Produce gases tóxicos por combustión.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes y ropa de protección</li>
        <li>Gafas de seguridad</li>
        <li>Eliminar toda fuente de ignición en el área</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> retirar al aire fresco; oxígeno si respira con dificultad. Atención médica.</li>
        <li><strong>Piel:</strong> lavar con abundante agua y jabón al menos 15 minutos.</li>
        <li><strong>Ojos:</strong> lavar con abundante agua tibia al menos 15 minutos.</li>
        <li><strong>Ingestión:</strong> NO inducir el vómito. Atención médica inmediata.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>No verter a desagües (riesgo de fuego o explosión). Almacenar lejos de fuentes de ignición.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "17-masilla-super-mastick",
    nombre: "Masilla Supermastick PR",
    pdf: "17-masilla-super-mastick.pdf",
    video: "",
    resumen: `
      <h2>Masilla Supermastick PR</h2>
      <p><strong>Uso:</strong> Compuesto en pasta para el tratamiento de juntas de paneles de yeso.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> <strong>Puede causar cáncer (por inhalación).</strong>
        Puede provocar daños en los órganos (pulmón, hígado, tiroides) tras exposiciones prolongadas
        o repetidas. El polvo generado al lijar irrita las vías respiratorias, los ojos y la piel.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li><strong>Protección respiratoria</strong> — NO respirar el polvo</li>
        <li>Guantes y ropa de protección</li>
        <li>Protección para los ojos</li>
        <li>No comer, beber ni fumar durante su manipulación</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li>En caso de preocupación por exposición, consultar a un profesional de la salud.</li>
        <li>Mantener buena ventilación del área de trabajo, especialmente al lijar.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Obtener instrucciones especiales antes de usar. Disponer el producto y su empaque según la normativa ambiental.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "18-limpiador-desincrusante",
    nombre: "Limpiador Desincrustante",
    pdf: "18-limpiador-desincrusante.pdf",
    video: "",
    resumen: `
      <h2>Limpiador Desincrustante</h2>
      <div class="callout danger">
        <strong>Aviso para SST:</strong> el documento cargado para este producto
        <strong>no es una Hoja de Seguridad oficial</strong> (es un apunte descargado de Studocu).
        Debe reemplazarse por la SDS real del proveedor antes de considerar este resumen válido.
      </div>
      <h2>Recomendaciones generales</h2>
      <p>Los limpiadores desincrustantes suelen ser productos <strong>ácidos y corrosivos</strong>.
      Mientras se obtiene la ficha oficial, manipular con máxima precaución:</p>
      <ul>
        <li>Guantes resistentes a químicos, gafas y protección facial</li>
        <li>Trabajar en área ventilada, no respirar nieblas ni vapores</li>
        <li>No mezclar con otros productos químicos</li>
        <li>En caso de contacto: lavar con abundante agua y buscar atención médica</li>
      </ul>
      <div class="callout info">Pendiente: cargar la Hoja de Seguridad oficial del producto.</div>`
  },
  {
    id: "18-pegante-pvc",
    nombre: "Pegante Pisos de PVC",
    pdf: "18-pegante-pvc.pdf",
    video: "",
    resumen: `
      <h2>Pegante Pisos de PVC</h2>
      <p><strong>Uso:</strong> Pegante para pisos de PVC.</p>
      <div class="callout">
        <strong>Peligros principales:</strong> El producto no representa un riesgo extremo
        para la salud. Puede causar irritación moderada del tracto respiratorio, la piel y los
        ojos. Se debe evitar el contacto prolongado y la inhalación de sus vapores.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes de nitrilo o neopreno</li>
        <li>Gafas protectoras contra salpicaduras</li>
        <li>Manipular en lugar ventilado</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Piel:</strong> lavar con agua y jabón.</li>
        <li><strong>Ojos:</strong> lavar inmediatamente con abundante agua 15 minutos y acudir al médico.</li>
        <li><strong>Inhalación:</strong> trasladar al aire libre y mantener en reposo.</li>
        <li><strong>Ingestión:</strong> enjuagar la boca y beber abundante agua. Atención médica.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Almacenar protegido de heladas y a temperatura inferior a 35 °C, en recipientes cerrados herméticamente.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "19-evav-clean",
    nombre: "Evaporator Cleaner",
    pdf: "19-evav-clean.pdf",
    video: "",
    resumen: `
      <h2>Evaporator Cleaner</h2>
      <p><strong>Uso:</strong> Limpiador no espumoso para sistemas de aire acondicionado.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Aerosol extremadamente inflamable. Recipiente
        a presión: puede reventar si se calienta. Provoca irritación ocular grave. Contiene
        propano, butano e isobutano.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes de protección</li>
        <li>Protección para los ojos</li>
        <li>Usar en área ventilada — no fumar</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Piel:</strong> lavar de inmediato con abundante agua y jabón.</li>
        <li><strong>Ojos:</strong> enjuagar con agua manteniendo los párpados abiertos; consultar a un oftalmólogo.</li>
        <li><strong>Inhalación:</strong> llevar al aire libre y mantener en reposo y abrigado.</li>
        <li><strong>Ingestión:</strong> NO provocar el vómito. Consultar inmediatamente al médico.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Mantener alejado del calor y de fuentes de ignición. No perforar ni quemar. Proteger del sol, no exponer a más de 50 °C.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "20-diablo-rojo",
    nombre: "Diablo Rojo",
    pdf: "20-diablo-rojo.pdf",
    video: "",
    resumen: `
      <h2>Diablo Rojo</h2>
      <p><strong>Uso:</strong> Destapador de cañerías (potente agente químico).</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Puede ser corrosivo para los metales.
        Nocivo en caso de ingestión. <strong>Provoca graves quemaduras en la piel y
        lesiones oculares.</strong>
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes y ropa de protección</li>
        <li>Protección para los ojos / la cara</li>
        <li>No respirar polvos ni nieblas; no comer, beber ni fumar al usarlo</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Piel:</strong> quitar inmediatamente la ropa contaminada; enjuagar la piel con agua o ducharse.</li>
        <li><strong>Ojos:</strong> enjuagar con agua cuidadosamente varios minutos.</li>
        <li><strong>Ingestión:</strong> enjuagar la boca, NO provocar el vómito.</li>
        <li>Llamar inmediatamente a un Centro de Toxicología o a un médico.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Conservar únicamente en el embalaje original. Guardar bajo llave, en recipiente resistente a la corrosión.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "21-quita-oxidos",
    nombre: "Pintóxido Incoloro",
    pdf: "21-quita-oxidos.pdf",
    video: "",
    resumen: `
      <h2>Pintóxido Incoloro</h2>
      <p><strong>Uso:</strong> Producto a base de ácido fosfórico (uso profesional).</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> <strong>Provoca graves quemaduras en la piel
        y lesiones oculares.</strong> Tóxico para los organismos acuáticos, con efectos nocivos duraderos.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes y ropa de protección</li>
        <li>Protección para los ojos / la cara</li>
        <li>Lavarse cuidadosamente después de la manipulación</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Piel:</strong> quitar la ropa y zapatos contaminados; aclarar con abundante agua fría y jabón neutro.</li>
        <li><strong>Ojos:</strong> enjuagar con abundante agua.</li>
        <li><strong>Ingestión:</strong> enjuagar la boca, NO provocar el vómito.</li>
        <li>Llamar inmediatamente a un Centro de Toxicología o a un médico.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Eliminar el contenido y el recipiente conforme a la normativa de residuos peligrosos.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "22-limpiador-desincrusante",
    nombre: "Limpiador Desincrustante (2)",
    pdf: "22-limpiador-desincrusante.pdf",
    video: "",
    resumen: `
      <h2>Limpiador Desincrustante (2)</h2>
      <div class="callout danger">
        <strong>Aviso para SST:</strong> al igual que el producto n.º 18, el documento cargado
        <strong>no es una Hoja de Seguridad oficial</strong> (es un apunte de Studocu). Debe
        reemplazarse por la SDS real del proveedor. Es probable que sea un duplicado del producto n.º 18.
      </div>
      <h2>Recomendaciones generales</h2>
      <p>Los limpiadores desincrustantes suelen ser productos <strong>ácidos y corrosivos</strong>.
      Mientras se obtiene la ficha oficial, manipular con máxima precaución:</p>
      <ul>
        <li>Guantes resistentes a químicos, gafas y protección facial</li>
        <li>Trabajar en área ventilada, no respirar nieblas ni vapores</li>
        <li>No mezclar con otros productos químicos</li>
        <li>En caso de contacto: lavar con abundante agua y buscar atención médica</li>
      </ul>
      <div class="callout info">Pendiente: cargar la Hoja de Seguridad oficial del producto.</div>`
  },
  {
    id: "23-alkazyme",
    nombre: "Alkazyme",
    pdf: "23-alkazyme.pdf",
    video: "",
    resumen: `
      <h2>Alkazyme</h2>
      <p><strong>Uso:</strong> Detergente desinfectante enzimático alcalino para la limpieza
      y desinfección por inmersión de dispositivos médicos. Dilución 0,5%.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Provoca irritación cutánea y
        <strong>lesiones oculares graves</strong>. Nocivo para los organismos acuáticos con
        efectos duraderos. Durante el uso es posible la formación de mezcla polvo-aire.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes, prendas, gafas o máscara de protección</li>
        <li>Evitar su liberación al medio ambiente</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Piel:</strong> lavar con abundante agua.</li>
        <li><strong>Ojos:</strong> enjuagar con agua cuidadosamente varios minutos, retirar lentes de contacto.</li>
        <li>Llamar inmediatamente a un Centro de Toxicología o a un médico.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Mantener fuera del alcance de los niños. Eliminar el recipiente como residuo peligroso.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "24-barniz-acrilico-spray",
    nombre: "MTN Pro Barniz Acrílico",
    pdf: "24-barniz-acrilico-spray.pdf",
    video: "",
    resumen: `
      <h2>MTN Pro Barniz Acrílico</h2>
      <p><strong>Uso:</strong> Barniz acrílico en aerosol.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Aerosol extremadamente inflamable. Recipiente
        a presión: puede reventar si se calienta. Provoca irritación ocular grave. Puede
        provocar somnolencia o vértigo. Nocivo para los organismos acuáticos.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>No respirar el aerosol</li>
        <li>Guantes de protección</li>
        <li>Utilizar únicamente en exteriores o en lugar bien ventilado — no fumar</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ojos:</strong> enjuagar con abundante agua.</li>
        <li><strong>Inhalación:</strong> trasladar al aire libre.</li>
        <li>Si se necesita consejo médico, tener a mano el envase o la etiqueta.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>No pulverizar sobre llamas. No perforar ni quemar, incluso después de su uso.
      Proteger del sol, no exponer a más de 50 °C.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "25-pintura-multiproposito",
    nombre: "Ivenol (Pintura Multipropósito)",
    pdf: "25-pintura-multiproposito.pdf",
    video: "",
    resumen: `
      <h2>Ivenol</h2>
      <div class="callout danger">
        <strong>Aviso para SST:</strong> el archivo está nombrado como "pintura multipropósito",
        pero la Hoja de Seguridad corresponde a <strong>"Ivenol Masso", un acaricida / insecticida</strong>.
        Verificar si el archivo es el correcto.
      </div>
      <p><strong>Uso (según la SDS):</strong> Acaricida / insecticida concentrado emulsionable. Uso profesional e industrial.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> <strong>Puede ser mortal en caso de ingestión
        y de penetración en las vías respiratorias.</strong>
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes de protección</li>
        <li>Evitar respirar los vapores y la niebla</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ingestión:</strong> enjuagar la boca, NO provocar el vómito. Atención médica.</li>
        <li><strong>Inhalación:</strong> llevar al aire fresco y mantener en reposo.</li>
        <li>No administrar nada por vía oral a una persona inconsciente.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Seguir las instrucciones de uso. No contaminar el agua con el producto ni con su envase.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "26-limpiador-electrico",
    nombre: "Limpiador de Contactos 3 en Uno",
    pdf: "26-limpiador-electrico.pdf",
    video: "",
    resumen: `
      <h2>Limpiador de Contactos 3 en Uno</h2>
      <p><strong>Uso:</strong> Limpiador y lubricante de contactos eléctricos (WD-40).</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Aerosol extremadamente inflamable. Contiene gas
        a presión: puede reventar si se calienta. <strong>Puede ser mortal en caso de ingestión
        y de penetración en las vías respiratorias.</strong> Provoca irritación cutánea y puede
        provocar somnolencia o vértigo. Muy tóxico para los organismos acuáticos.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes protectores</li>
        <li>Evitar respirar los vapores o neblinas</li>
        <li>Utilizar solo al aire libre o en lugar bien ventilado — no fumar</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ingestión:</strong> NO provocar el vómito. Llamar inmediatamente a un médico o centro de envenenamientos.</li>
        <li><strong>Piel:</strong> lavar con abundante agua y jabón.</li>
        <li><strong>Inhalación:</strong> trasladar al aire libre.</li>
        <li><strong>Ojos:</strong> enjuagar abundantemente con agua.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>No perforar ni quemar. Guardar bajo llave, proteger del sol, no exponer a más de 50 °C.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "27-sika-impermeabilizante",
    nombre: "Sika Imper Mur",
    pdf: "27-sika-impermeabilizante.pdf",
    video: "",
    resumen: `
      <h2>Sika Imper Mur</h2>
      <p><strong>Uso:</strong> Aditivo impermeabilizante para muros (dispersión acuosa de polímero acrílico).</p>
      <div class="callout">
        <strong>Peligros principales:</strong> Según su Hoja de Seguridad,
        <strong>no está clasificado como sustancia o mezcla peligrosa.</strong>
        Aun así, se recomienda manipularlo con las precauciones generales de higiene industrial.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes de protección</li>
        <li>Gafas de seguridad para evitar salpicaduras</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ojos:</strong> enjuagar inmediatamente con abundante agua al menos 10 minutos.</li>
        <li><strong>Piel:</strong> lavar con abundante agua, quitar la ropa contaminada.</li>
        <li><strong>Ingestión:</strong> no inducir el vómito; buscar ayuda médica.</li>
      </ul>
      <div class="callout danger">
        <strong>Aviso para SST:</strong> este archivo es idéntico al del producto
        "Sika Imper Mur" (n.º 13). Conviene conservar solo uno.
      </div>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "28-butano",
    nombre: "Butano",
    pdf: "28-butano.pdf",
    video: "",
    resumen: `
      <h2>Butano</h2>
      <p><strong>Uso:</strong> Gas combustible doméstico e industrial.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Gas extremadamente inflamable. Contiene gas a
        presión: puede explotar si se calienta. Puede provocar somnolencia o vértigo. Riesgo de
        <strong>asfixia</strong> por desplazamiento del oxígeno. Forma mezclas explosivas con el aire.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Utilizar solo al aire libre o en lugar bien ventilado</li>
        <li>Evitar respirar el gas</li>
        <li>Eliminar toda fuente de ignición</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> trasladar a un área no contaminada para que inhale aire fresco; mantener caliente y en reposo. Atención médica inmediata.</li>
        <li>A personas inconscientes: trasladar a área ventilada y administrar oxígeno o respiración artificial.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Mantener alejado del calor, chispas y llamas. Almacenar en lugar bien ventilado, recipiente cerrado, bajo llave.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "29-silicona-pegavidrios",
    nombre: "Sikasil E (Silicona Pega Vidrios)",
    pdf: "29-silicona-pegavidrios.pdf",
    video: "",
    resumen: `
      <h2>Sikasil E (Silicona Pega Vidrios)</h2>
      <p><strong>Uso:</strong> Silicona acética antihongos para el sello de juntas o uniones
      de vidrio con metales no oxidables.</p>
      <div class="callout">
        <strong>Peligros principales:</strong> Según su Hoja de Seguridad,
        <strong>no está clasificada como sustancia o mezcla peligrosa.</strong>
        Aun así, se recomienda manipularla con las precauciones generales de higiene industrial.
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes de protección</li>
        <li>Disponer de extracción / ventilación adecuada al aplicar</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Inhalación:</strong> trasladarse a un espacio abierto.</li>
        <li><strong>Piel:</strong> retirar la ropa contaminada y lavar con jabón y mucha agua.</li>
        <li><strong>Ojos:</strong> retirar las lentillas y lavar con el ojo bien abierto; si persiste la irritación, consultar a un especialista.</li>
        <li><strong>Ingestión:</strong> lavar la boca y beber agua abundante; no dar leche ni alcohol.</li>
      </ul>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "30-soda-caustica",
    nombre: "Soda Cáustica Líquida 50%",
    pdf: "30-soda-caustica.pdf",
    video: "",
    resumen: `
      <h2>Soda Cáustica Líquida 50%</h2>
      <p><strong>Uso:</strong> Hidróxido de sodio líquido al 50%. Tratamiento de aguas
      (ajuste de pH), acondicionamiento de superficies metálicas, industria química.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> Puede ser corrosiva para los metales. Nociva en
        caso de ingestión. <strong>Provoca graves quemaduras en la piel y lesiones oculares.</strong>
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes y ropa de protección</li>
        <li>Protección para los ojos / la cara</li>
        <li>No respirar polvos ni nieblas</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Piel:</strong> quitar inmediatamente la ropa contaminada; enjuagar con agua al menos 15 minutos.</li>
        <li><strong>Ojos:</strong> enjuagar inmediatamente con agua varios minutos, retirar lentes de contacto.</li>
        <li><strong>Ingestión:</strong> NO inducir el vómito; administrar agua. Atención médica inmediata.</li>
        <li><strong>Inhalación:</strong> trasladar al aire libre. Buscar ayuda médica de urgencia.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Conservar en el recipiente original. Guardar bajo llave, en recipiente resistente a la corrosión.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "31-hipoclorito-sodio",
    nombre: "Hipoclorito de Sodio al 13%",
    pdf: "31-hipoclorito-sodio.pdf",
    video: "",
    resumen: `
      <h2>Hipoclorito de Sodio al 13%</h2>
      <p><strong>Uso:</strong> Desinfectante de superficies, pisos, equipos y calzado
      (marca Tayco). Se emplea diluido según la superficie a desinfectar.</p>
      <div class="callout danger">
        <strong>Peligros principales:</strong> <strong>Provoca graves quemaduras en la piel y
        lesiones oculares.</strong> Muy tóxico para los organismos acuáticos.
        <strong>Mezclarlo con ácido o amoniaco libera gas cloro.</strong>
      </div>
      <h2>Equipo de Protección Personal</h2>
      <ul>
        <li>Guantes y ropa de protección</li>
        <li>Protección para los ojos / la cara</li>
        <li>Lavarse la piel cuidadosamente después de la manipulación</li>
      </ul>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ojos:</strong> enjuagar con abundante agua al menos 15 minutos. Consultar al médico de inmediato.</li>
        <li><strong>Piel:</strong> lavar con mucha agua al menos 15 minutos, usar jabón suave.</li>
        <li><strong>Ingestión:</strong> enjuagar la boca, NO provocar el vómito. Consultar al médico.</li>
        <li><strong>Inhalación:</strong> desplazar al aire libre.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>No dispersar en el medio ambiente. No mezclar nunca con ácidos ni amoniaco. Recoger los vertidos.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "32-jabon-liquido",
    nombre: "Jabón Líquido",
    pdf: "32-jabon-liquido.pdf",
    video: "",
    resumen: `
      <h2>Jabón Líquido</h2>
      <p><strong>Uso:</strong> Jabón líquido antibacterial para la higiene de manos, con pH
      balanceado, apto para uso continuo (Berhlan de Colombia).</p>
      <div class="callout info">
        <strong>Nota:</strong> el documento de este producto es un PDF escaneado. Este resumen
        se basa en la información visible; SST debe validarlo contra la ficha completa.
      </div>
      <div class="callout">
        <strong>Precauciones:</strong> Producto de bajo riesgo. Evitar el contacto con las
        mucosas, los ojos y la boca. Suspender su uso si se observa alguna reacción desfavorable.
      </div>
      <h2>Primeros auxilios</h2>
      <ul>
        <li><strong>Ingestión:</strong> en caso de ingestión, acudir al médico.</li>
        <li><strong>Ojos:</strong> en caso de contacto, enjuagar con abundante agua.</li>
      </ul>
      <h2>Manejo y almacenamiento</h2>
      <p>Conservar bien tapado. Mantener fuera del alcance de los niños.</p>
      <div class="callout info">Resumen de apoyo. Consulta siempre la Hoja de Seguridad completa.</div>`
  },
  {
    id: "33-hipoclorito-13",
    nombre: "Hipoclorito al 13%",
    pdf: "33-hipoclorito-13.pdf",
    video: "",
    resumen: ""
  },
  {
    id: "34-desinfectante",
    nombre: "Desinfectante",
    pdf: "34-desinfectante.pdf",
    video: "",
    resumen: ""
  },
];
