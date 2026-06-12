# Video 21 · Diablo Rojo — Versión por escenas

| | |
|---|---|
| **Categoría** | Productos Químicos |
| **Severidad** | 🔴 ALTO |
| **PDF** | `archivos/quimicos/20-diablo-rojo.pdf` |
| **ID** | `20-diablo-rojo` |
| **Duración total** | ~58 segundos |
| **Estructura** | 6 escenas |

---

## 🎬 Las 6 escenas — qué va en cada una

### ESCENA 1 · Intro (0-5s)

**Fondo:** azul COFCA sólido (#00467F)
**Iris:** centrada, hablando
**Texto grande arriba:** `SST · COFCA`
**Texto abajo:** `Seguridad y Salud en el Trabajo`

**Iris dice:**
```
Hola, soy Iris, la mascota del equipo de Seguridad y Salud en el Trabajo de COFCA.
```

---

### ESCENA 2 · Presentación del producto (5-10s)

**Fondo:** blanco o azul muy claro
**Iris:** lado izquierdo, señalando con la mano
**Centro / lado derecho:** foto del producto Diablo Rojo (si no hay foto, mostrar solo el título)
**Texto título grande:** `DIABLO ROJO`
**Subtítulo:** `Destapador de cañerías`

**Iris dice:**
```
Hoy hablaremos del Diablo Rojo, un destapador de cañerías que usamos en la clínica.
```

---

### ESCENA 3 · Peligro (10-22s)

**Fondo:** rojo de alerta degradado (#FFEEEE → #FFCCCC)
**Iris:** lado izquierdo, con expresión seria
**Centro:** pictograma SGA corrosivo (rombo rojo grande)
**Texto banner rojo:** `⚠ PELIGRO · CORROSIVO`
**Texto debajo:** `Graves quemaduras en piel y ojos`

**Archivo del pictograma:** `assets/pictogramas-png/GHS05-corrosivo.png`

**Iris dice:**
```
¡Mucho cuidado! Es un producto corrosivo: puede provocar graves quemaduras
en la piel y lesiones graves en los ojos.
```

---

### ESCENA 4 · Equipo de Protección Personal (22-37s)

**Fondo:** naranja SST (#FFF6E5)
**Iris:** lado izquierdo, postura de presentadora
**Centro:** 3 íconos grandes en fila, con etiqueta debajo de cada uno:
  - 🧤 **GUANTES**
  - 🥼 **ROPA DE PROTECCIÓN**
  - 👁️ **GAFAS / CARETA**
**Banner arriba:** `EQUIPO DE PROTECCIÓN PERSONAL · EPP`

**Iris dice:**
```
Antes de manipularlo, ponte siempre tu equipo de protección:
guantes, ropa de protección y gafas o careta para la cara.
No respires sus vapores, y no comas, bebas ni fumes mientras lo usas.
```

---

### ESCENA 5 · Primeros auxilios (37-52s)

**Fondo:** azul cielo (#E8F4FB)
**Iris:** lado izquierdo
**Centro:** 2 íconos grandes:
  - 🚿 **PIEL** → "Lava con abundante agua"
  - 💧 **OJOS** → "Enjuaga varios minutos"
**Banner abajo:** `Centro de Toxicología: 018000-916012` (línea nacional Colombia)

**Iris dice:**
```
Si te cae en la piel, quítate la ropa contaminada de inmediato y lava con
abundante agua. Si te cae en los ojos, enjuaga con agua varios minutos
y llama al centro de toxicología.
```

---

### ESCENA 6 · Cierre (52-58s)

**Fondo:** azul COFCA en degradado bonito
**Iris:** centrada, saludando con la mano
**Texto grande:** `Tu seguridad es lo primero`
**Logo COFCA** abajo

**Iris dice:**
```
Tu seguridad es lo primero. Gracias por cuidarte y cuidarnos.
```

---

## 🛠️ Cómo armar cada escena en HeyGen

Para cada una de las 6 escenas, repetir este flujo dentro de tu proyecto:

1. **Botón "+ Add Scene"** (al final de la línea de tiempo abajo)
2. **Background:** click → elegir color sólido o subir imagen
3. **Avatar (Iris):** arrastrarla a la posición indicada (centro / izquierda)
4. **Botón "Text"** en la barra → escribir el título grande y subtítulos
5. **Botón "Image" o "Upload":**
   - Para pictogramas: subí los PNG de `assets/pictogramas-png/`
   - Para íconos EPP: usá emojis grandes (HeyGen los soporta) o buscá "ppe icon" en su biblioteca
6. **Script:** en el panel derecho, escribís SOLO el fragmento de Iris que corresponde a esa escena (los bloques de arriba)
7. **Duración:** HeyGen ajusta automáticamente según el script. Si querés más tiempo en pantalla con la imagen, agregás 1-2 segundos de pausa.

---

## 📁 Archivos listos en el proyecto

| Recurso | Ruta | Para qué escena |
|---|---|---|
| Iris oficial (con casco SST) | `assets/mascota/iris-sst-oficial.png` | Todas las escenas |
| Pictograma corrosivo | `assets/pictogramas-png/GHS05-corrosivo.png` | Escena 3 |
| (Otros pictogramas si los necesitás) | `assets/pictogramas-png/GHS0*-*.png` | — |

## 📸 Lo único que falta

- **Foto real del producto Diablo Rojo** (escena 2) — buscás en Google Images "Diablo Rojo destapador" o sacás foto a un envase
- **Logo COFCA** (escena 1 y 6) — el oficial de la clínica
