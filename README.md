# QR SST · COFCA

Sistema de visualización de Hojas de Seguridad mediante códigos QR para la **Clínica Oftalmológica del Caribe (COFCA)**.

Hay **dos QR independientes**, uno por zona física:

| QR | Zona | URL |
|---|---|---|
| Productos Químicos | Salón de productos químicos | https://deineracosta.github.io/qr-sst/quimicos/ |
| Gases Medicinales | Zona de gases medicinales | https://deineracosta.github.io/qr-sst/gases-medicinales/ |

Al escanear, el usuario ve la **lista de productos de esa zona**. Al tocar un producto accede a sus **3 recursos**: Hoja de Seguridad (PDF), Resumen y Video.

---

## 📁 Estructura del proyecto

```
QR SST/
├── index.html                      ← Selector de categoría (página de respaldo)
├── assets/
│   └── style.css                   ← Estilos compartidos (branding COFCA)
├── quimicos/
│   ├── datos.js                    ← ⭐ DATOS CENTRALIZADOS (productos, videos, resúmenes)
│   ├── index.html                  ← Lista buscable de productos
│   ├── producto.html               ← Pantalla del producto con sus 3 recursos
│   ├── ver-pdf.html                ← Visor de la Hoja de Seguridad (PDF)
│   ├── resumen.html                ← Resumen del producto
│   └── video.html                  ← Video del producto
├── gases-medicinales/
│   ├── datos.js                    ← ⭐ DATOS CENTRALIZADOS
│   ├── index.html
│   ├── producto.html
│   ├── ver-pdf.html
│   ├── resumen.html
│   └── video.html
├── archivos/
│   ├── quimicos/                   ← 35 fichas de seguridad (PDF)
│   └── gases-medicinales/          ← 5 fichas de seguridad (PDF)
├── qr-codes/                       ← QR generados (PNG + SVG)
├── generar-qr.py                   ← Script para crear los QR
└── README.md
```

> **Todo se controla desde `datos.js`.** Cada categoría tiene uno. Las páginas HTML
> son genéricas: leen `datos.js` y se arman solas. No necesitas tocar el HTML.

---

## ✏️ Cómo mantener el sitio (lo más importante)

Todo el contenido vive en `quimicos/datos.js` y `gases-medicinales/datos.js`.
Cada producto es un bloque así:

```js
{ id: "32-jabon-liquido", nombre: "Jabón Líquido", pdf: "32-jabon-liquido.pdf", video: "", resumen: "" },
```

### Conectar el video de un producto

Edita el campo `video` de ese producto:

| Caso | Qué poner |
|---|---|
| Video en YouTube | `video: "youtube:CODIGO"` (el CODIGO es lo que va después de `v=` en la URL) |
| URL completa de YouTube | `video: "https://www.youtube.com/watch?v=CODIGO"` (también funciona) |
| Archivo MP4 | `video: "archivos/quimicos/videos/jabon-liquido.mp4"` |
| Sin video todavía | `video: ""` → muestra "Video en preparación" |

> Para MP4: crea la carpeta `archivos/quimicos/videos/` y pon ahí los videos.
> ⚠️ GitHub limita archivos a 100 MB. Si un video pesa más, usa YouTube.

### Escribir el resumen de un producto

Edita el campo `resumen` con texto HTML:

```js
resumen: "<h3>Riesgos principales</h3><ul><li>Inflamable</li><li>Irritante</li></ul><p>Usar guantes y gafas.</p>"
```

Vacío (`resumen: ""`) muestra "Resumen en preparación".

### Agregar un producto nuevo

1. Pon el PDF en `archivos/quimicos/` (nombre en minúsculas, sin espacios).
2. Agrega un bloque al final del arreglo `PRODUCTOS` en `datos.js`.
3. Listo — la lista y el buscador se actualizan solos.

---

## 🚀 Despliegue (ya realizado ✓)

- ✅ Repo en GitHub: [github.com/DeinerAcosta/qr-sst](https://github.com/DeinerAcosta/qr-sst)
- ✅ GitHub Pages activo: https://deineracosta.github.io/qr-sst/
- ✅ 40 hojas de seguridad cargadas (35 químicos + 5 gases)

### Para subir cambios nuevos

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

A los 1-2 minutos los cambios están en vivo.

### Regenerar los códigos QR

```bash
python -m pip install "qrcode[pil]"
python generar-qr.py
```

Crea en `qr-codes/`: `qr-quimicos.png/.svg` y `qr-gases.png/.svg`.

---

## 🎨 Identidad visual

Colores corporativos definidos en `assets/style.css`:

| Variable             | Color    | Uso                       |
|----------------------|----------|---------------------------|
| `--cofca-primary`    | #00467F  | Azul clínico principal    |
| `--cofca-secondary`  | #0095D9  | Azul claro / accents      |
| `--cofca-accent`     | #00A19A  | Verde agua salud          |
| `--cofca-bg`         | #F4F8FB  | Fondo general             |

---

## 🧪 Cómo probar localmente

```bash
python -m http.server 8000
# Luego abre: http://localhost:8000
```

---

## 📝 Tareas pendientes

- [x] Cargar PDFs de químicos (35) ✓
- [x] Cargar PDFs de gases medicinales (5) ✓
- [x] Reestructurar a navegación "producto primero" ✓
- [x] Subir el sitio a GitHub Pages ✓
- [x] Generar QR ✓
- [ ] Conectar los videos de cada producto (campo `video` en `datos.js`)
- [ ] Escribir los resúmenes de cada producto (campo `resumen` en `datos.js`)
- [ ] Verificar nombres comerciales de los productos con el área SST

---

**COFCA** · Clínica Oftalmológica del Caribe · Sistema de Gestión SST
