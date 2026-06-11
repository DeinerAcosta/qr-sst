/* ============================================================
   COFCA · SST — Pictogramas SGA / GHS oficiales
   ============================================================
   Cada pictograma es un rombo rojo (diamante) con el símbolo
   en el centro. Los 9 códigos estándar del Sistema Globalmente
   Armonizado.
   ============================================================ */

const PICTOGRAMAS = {
  GHS01: {
    nombre: "Explosivo",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill="white" stroke="#dc2626" stroke-width="6" stroke-linejoin="round"/>
      <g fill="#1a1a1a">
        <path d="M50 28 L54 44 L70 38 L58 50 L72 58 L54 56 L56 72 L48 60 L36 70 L42 56 L26 54 L40 48 L30 34 L46 42 Z"/>
        <circle cx="50" cy="74" r="6"/>
      </g>
    </svg>`,
  },
  GHS02: {
    nombre: "Inflamable",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill="white" stroke="#dc2626" stroke-width="6" stroke-linejoin="round"/>
      <g fill="#1a1a1a">
        <path d="M50 22 C40 36 36 44 42 56 C44 62 48 66 52 68 C49 60 53 56 56 60 C60 64 60 70 55 74 C61 73 67 68 68 60 C69 51 61 47 60 38 C58 44 56 47 53 47 C56 38 55 30 50 22 Z"/>
        <line x1="22" y1="80" x2="78" y2="80" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
      </g>
    </svg>`,
  },
  GHS03: {
    nombre: "Comburente",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill="white" stroke="#dc2626" stroke-width="6" stroke-linejoin="round"/>
      <g fill="#1a1a1a">
        <circle cx="50" cy="62" r="14" fill="none" stroke="#1a1a1a" stroke-width="5"/>
        <path d="M50 22 C44 30 41 36 45 44 C47 48 50 50 52 51 C50 47 52 45 54 47 C56 49 56 52 53 54 C57 53 60 50 60 45 C61 39 56 36 55 30 C54 33 53 35 51 35 C53 30 53 26 50 22 Z"/>
        <line x1="24" y1="80" x2="76" y2="80" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
      </g>
    </svg>`,
  },
  GHS04: {
    nombre: "Gas a presión",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill="white" stroke="#dc2626" stroke-width="6" stroke-linejoin="round"/>
      <g fill="#1a1a1a">
        <rect x="46" y="24" width="8" height="6"/>
        <path d="M42 30 L58 30 L58 38 L62 38 L62 72 C62 76 58 80 54 80 L46 80 C42 80 38 76 38 72 L38 38 L42 38 Z"/>
      </g>
    </svg>`,
  },
  GHS05: {
    nombre: "Corrosivo",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill="white" stroke="#dc2626" stroke-width="6" stroke-linejoin="round"/>
      <g fill="#1a1a1a">
        <!-- tubo izq vertiendo -->
        <path d="M16 30 L28 30 L28 38 C28 42 24 44 22 44 C20 44 16 42 16 38 Z"/>
        <path d="M22 44 L22 60" stroke="#1a1a1a" stroke-width="3" fill="none"/>
        <circle cx="22" cy="63" r="2.5"/>
        <!-- tubo der vertiendo -->
        <path d="M58 26 L78 30 L76 38 C75 42 70 42 67 41 C64 40 60 36 60 32 Z"/>
        <path d="M68 42 L72 56" stroke="#1a1a1a" stroke-width="3" fill="none"/>
        <circle cx="73" cy="59" r="2.5"/>
        <!-- mano sobre la que cae -->
        <path d="M52 62 L82 62 L78 70 L60 70 L56 76 L52 70 Z"/>
        <!-- barra inferior (superficie corroída) -->
        <path d="M16 75 L42 75 L46 80 L24 80 Z"/>
      </g>
    </svg>`,
  },
  GHS06: {
    nombre: "Tóxico",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill="white" stroke="#dc2626" stroke-width="6" stroke-linejoin="round"/>
      <g fill="#1a1a1a">
        <!-- cráneo -->
        <ellipse cx="50" cy="44" rx="22" ry="20"/>
        <!-- ojos (huecos) -->
        <ellipse cx="42" cy="42" rx="4" ry="5" fill="white"/>
        <ellipse cx="58" cy="42" rx="4" ry="5" fill="white"/>
        <!-- nariz triangular -->
        <path d="M50 50 L46 56 L54 56 Z" fill="white"/>
        <!-- dientes -->
        <rect x="42" y="58" width="16" height="6" fill="white"/>
        <line x1="46" y1="58" x2="46" y2="64" stroke="#1a1a1a" stroke-width="1.5"/>
        <line x1="50" y1="58" x2="50" y2="64" stroke="#1a1a1a" stroke-width="1.5"/>
        <line x1="54" y1="58" x2="54" y2="64" stroke="#1a1a1a" stroke-width="1.5"/>
        <!-- huesos cruzados -->
        <g stroke="#1a1a1a" stroke-width="5" stroke-linecap="round" fill="none">
          <line x1="24" y1="64" x2="76" y2="86"/>
          <line x1="76" y1="64" x2="24" y2="86"/>
        </g>
        <g fill="#1a1a1a">
          <circle cx="22" cy="62" r="4"/>
          <circle cx="22" cy="66" r="4"/>
          <circle cx="78" cy="62" r="4"/>
          <circle cx="78" cy="66" r="4"/>
          <circle cx="22" cy="84" r="4"/>
          <circle cx="22" cy="88" r="4"/>
          <circle cx="78" cy="84" r="4"/>
          <circle cx="78" cy="88" r="4"/>
        </g>
      </g>
    </svg>`,
  },
  GHS07: {
    nombre: "Irritante / Nocivo",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill="white" stroke="#dc2626" stroke-width="6" stroke-linejoin="round"/>
      <g fill="#1a1a1a">
        <path d="M44 26 L56 26 L54 60 L46 60 Z"/>
        <circle cx="50" cy="72" r="6"/>
      </g>
    </svg>`,
  },
  GHS08: {
    nombre: "Peligro para la salud",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill="white" stroke="#dc2626" stroke-width="6" stroke-linejoin="round"/>
      <g fill="#1a1a1a">
        <!-- cabeza -->
        <circle cx="50" cy="28" r="7"/>
        <!-- cuerpo -->
        <path d="M36 40 L64 40 L62 76 L38 76 Z"/>
        <!-- brazos -->
        <path d="M36 42 L26 60 L30 62 L40 46 Z"/>
        <path d="M64 42 L74 60 L70 62 L60 46 Z"/>
        <!-- estrella en el pecho (asterisco de 5 puntas blanco) -->
        <path d="M50 46 L52 54 L60 54 L54 59 L56 67 L50 62 L44 67 L46 59 L40 54 L48 54 Z" fill="white"/>
      </g>
    </svg>`,
  },
  GHS09: {
    nombre: "Peligro para el medio ambiente",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill="white" stroke="#dc2626" stroke-width="6" stroke-linejoin="round"/>
      <g fill="#1a1a1a">
        <!-- árbol muerto (tronco) -->
        <rect x="22" y="44" width="5" height="22"/>
        <path d="M24 30 L20 48 M24 30 L30 44 M24 36 L16 42 M24 36 L32 38" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" fill="none"/>
        <!-- superficie de agua -->
        <path d="M14 68 L86 68 L86 72 L14 72 Z"/>
        <!-- pez muerto -->
        <path d="M48 76 C56 72 68 72 74 78 C70 76 60 76 56 80 C60 84 70 84 74 82 C68 88 56 88 48 84 L42 84 L46 80 L42 76 Z"/>
        <circle cx="68" cy="78" r="1.5" fill="white"/>
      </g>
    </svg>`,
  },
};

function renderPictogramas(codigos) {
  if (!codigos || codigos.length === 0) return "";
  const items = codigos.map(c => {
    const p = PICTOGRAMAS[c];
    if (!p) return "";
    return `<div class="pictograma" title="${p.nombre}">
              ${p.svg}
              <span class="pictograma-label">${p.nombre}</span>
            </div>`;
  }).join("");
  return `<div class="pictogramas">${items}</div>`;
}
