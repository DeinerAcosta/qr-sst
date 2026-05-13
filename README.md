# QR SST · COFCA

Sistema de visualización de Hojas de Seguridad mediante códigos QR para la **Clínica Oftalmológica del Caribe (COFCA)**.

Cada QR abre una mini-página web con 3 accesos: **Hoja de Seguridad (PDF)**, **Resumen** y **Video** de capacitación.

---

## 📁 Estructura del proyecto

```
QR SST/
├── index.html                      ← Pantalla principal (selector de categoría)
├── assets/
│   └── style.css                   ← Estilos compartidos (branding COFCA)
├── quimicos/
│   ├── index.html                  ← Landing Productos Químicos (3 botones)
│   ├── hoja-seguridad.html         ← Lista buscable de los 32 productos
│   ├── ver-pdf.html                ← Visor PDF genérico (?f=archivo&t=titulo)
│   ├── resumen.html                ← Resumen formateado
│   └── video.html                  ← Reproductor de video
├── gases-medicinales/
│   ├── index.html                  ← Landing Gases Medicinales (3 botones)
│   ├── hoja-seguridad.html         ← Lista buscable de los 5 gases
│   ├── ver-pdf.html                ← Visor PDF genérico
│   ├── resumen.html
│   └── video.html
├── archivos/                       ← PDFs y videos
│   ├── quimicos/                   ← 32 fichas de seguridad
│   │   ├── 1-thinner.pdf
│   │   ├── 2-vasrsol.pdf
│   │   └── … (30 más)
│   └── gases-medicinales/          ← 5 fichas de seguridad
│       ├── aire-medicinal.pdf
│       ├── dioxido-de-carbono.pdf
│       ├── oxido-nitroso.pdf
│       ├── oxigeno-liquido.pdf
│       └── oxigeno-medicinal.pdf
├── qr-codes/                       ← QR generados (PNG + SVG)
├── generar-qr.py                   ← Script para crear los QR
└── README.md
```

---

## 🚀 Pasos para poner en marcha (de cero a producción)

### 1. Archivos (ya cargados ✓)

- **32 hojas de productos químicos** en `archivos/quimicos/` ✓
- **5 fichas de gases medicinales** en `archivos/gases-medicinales/` ✓

Si necesitas **agregar un producto nuevo** más adelante:
1. Pon el PDF en la carpeta correspondiente (nombre en minúsculas, sin espacios, ej: `33-producto-nuevo.pdf`).
2. Abre `quimicos/hoja-seguridad.html` (o `gases-medicinales/hoja-seguridad.html`) y añade una línea al array `productos`:
   ```js
   ["33-producto-nuevo.pdf", "Producto Nuevo"],
   ```

Para los videos, hay dos opciones:
  - **YouTube (recomendado):** edita los archivos `video.html` y reemplaza el bloque placeholder por:
    ```html
    <iframe src="https://www.youtube.com/embed/VIDEO_ID"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    ```
    Donde `VIDEO_ID` es la parte después de `v=` en la URL de YouTube.
  - **Archivo local:** pon el mp4 en `archivos/<categoría>/video.mp4` y reemplaza el bloque por:
    ```html
    <video controls playsinline preload="metadata">
      <source src="../archivos/quimicos/video.mp4" type="video/mp4" />
    </video>
    ```

### 2. Ajustar contenido de los resúmenes

Edita `quimicos/resumen.html` y `gases-medicinales/resumen.html` con la información oficial de COFCA.

### 3. Publicar en GitHub Pages

> Tu cuenta: [github.com/DeinerAcosta](https://github.com/DeinerAcosta)

```bash
# Desde la carpeta del proyecto:
git init
git add .
git commit -m "Sitio SST COFCA - inicial"
git branch -M main
git remote add origin https://github.com/DeinerAcosta/qr-sst.git
git push -u origin main
```

Luego en GitHub: **Settings → Pages → Source: `main` / root → Save.**

A los pocos minutos tu sitio estará en:
`https://deineracosta.github.io/qr-sst/`

### 4. Generar los códigos QR

```bash
pip install "qrcode[pil]"
python generar-qr.py
```

Esto crea dentro de `qr-codes/`:
- `qr-quimicos.png` y `qr-quimicos.svg`
- `qr-gases.png` y `qr-gases.svg`

> **Antes de ejecutar:** abre `generar-qr.py` y verifica que la variable `BASE_URL` coincida con la URL final donde quede publicado tu sitio.

### 5. Imprimir y colocar

- Usa el **PNG** para imprimir tamaño normal (carta, etiqueta, etc.).
- Usa el **SVG** si vas a imprimir en gran formato (poster, valla) — no pierde calidad.
- Recomendado: añade debajo del QR el nombre legible — *"Hoja de Seguridad · Productos Químicos"*.

---

## 🎨 Identidad visual

Colores corporativos definidos en `assets/style.css`:

| Variable             | Color    | Uso                       |
|----------------------|----------|---------------------------|
| `--cofca-primary`    | #00467F  | Azul clínico principal    |
| `--cofca-secondary`  | #0095D9  | Azul claro / accents      |
| `--cofca-accent`     | #00A19A  | Verde agua salud          |
| `--cofca-bg`         | #F4F8FB  | Fondo general             |

Si necesitas ajustar a la paleta exacta de COFCA, edita esas variables en `assets/style.css` — los cambios se aplican a todo el sitio.

---

## 🧪 Cómo probar localmente

Abre `index.html` directamente en el navegador, o levanta un servidor local:

```bash
# Python (incluido en Windows si tienes Python):
python -m http.server 8000
# Luego abre: http://localhost:8000
```

> Algunos navegadores bloquean PDFs e iframes al abrir archivos sin servidor.
> Para pruebas realistas, usa el servidor local.

---

## 📝 Tareas pendientes

- [x] Cargar PDFs de químicos (32) ✓
- [x] Cargar PDFs de gases medicinales (5) ✓
- [ ] Reemplazar el bloque de video en `quimicos/video.html` con YouTube o mp4
- [ ] Reemplazar el bloque de video en `gases-medicinales/video.html` con YouTube o mp4
- [ ] Revisar / aprobar texto de los dos `resumen.html`
- [ ] Verificar nombres legibles en las listas (`hoja-seguridad.html`) — algunos productos pueden tener nombre comercial distinto.
- [ ] Subir el sitio a GitHub Pages
- [ ] Confirmar URL final → actualizar `BASE_URL` en `generar-qr.py`
- [ ] Generar QR y entregar al área correspondiente

---

**COFCA** · Clínica Oftalmológica del Caribe · Sistema de Gestión SST
