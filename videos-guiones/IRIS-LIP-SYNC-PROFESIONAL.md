# Iris para lip sync profesional (Cartoon Animator)

El diseñador entregó un **set de lip sync por fonemas**, no imágenes
sueltas. Esto cambia la herramienta correcta para producir los videos.

---

## Lo que se recibió

Carpeta: `assets/mascota/lip-sync/`

| Archivo | Contenido |
|---------|-----------|
| `iris-poses.svg` | 5 formas de boca etiquetadas por fonema |
| `iris-boquitas-1.svg` | Igual al anterior — set de 5 boquitas |
| `iris-set-completo.svg` | 3 poses de cuerpo completas + el set de boquitas |

## Las 5 boquitas (fonemas)

| Etiqueta | Boca para… | Fonemas que cubre |
|----------|------------|--------------------|
| **silencio** | pausa, M, B, P | boca cerrada |
| **a** | A acentuadas, exclamaciones | bien abierta |
| **o u** | O, U, W | redonda |
| **ch-sh-c** | CH, SH, C suave, J | semi-abierta horizontal |
| **L** | L, T, D, N, R, S | boca con lengua visible |

Este es el sistema clásico **Preston Blair** (Disney/Hanna-Barbera).
Profesional.

---

## ¿Cuál es la "Iris oficial"?

Para usar como **imagen fija** (sitio web, miniaturas, redes sociales):

→ **La pose de saludo con las dos manos arriba**
(la primera del archivo `iris-set-completo.svg`).

Las otras poses y las 5 boquitas son **herramientas de animación**, no
imágenes para mostrar por sí solas.

---

## Cómo hacerla hablar (la herramienta correcta)

**HeyGen NO es la herramienta indicada** para este setup. HeyGen Talking
Photo solo abre/cierra UNA boca — desperdicia las 5 boquitas.

### Opción A · Cartoon Animator 5 (recomendada)

- Reallusion · prueba gratis 30 días · ~$99 USD compra única
- Importás Iris con todas las capas separadas
- Asignás cada boquita a su fonema en el panel de Sprites
- Pegás el audio (o lo grabás con voz IA)
- El programa hace lip sync automático
- Exportás MP4 final

Tutoriales recomendados: buscar en YouTube
"Cartoon Animator 5 lip sync tutorial" — son cortos y claros.

### Opción B · Adobe Character Animator

- Viene con Creative Cloud
- Misma idea: capas + lip sync automático
- También permite captura de gestos por webcam

### Opción C · Wick Editor (gratis)

- Animación frame-by-frame manual
- Trabajoso, pero gratis
- Útil si los videos son cortos y pocos

---

## Flujo recomendado

```
1. Audio: generar con voz IA (ElevenLabs, HeyGen, o Voicemaker)
          en español latino, voz femenina natural.
          Pegar el guion de videos-guiones/individuales/<producto>.md
          Descargar el MP3.

2. Animación: en Cartoon Animator 5
          - Importar Iris con capas (cuerpo, brazos, gorra, boquitas)
          - Crear un Sprite de "mouth" con las 5 boquitas
          - Mapear cada boquita a su fonema
          - Importar el MP3 del paso 1
          - Aplicar "Auto Lip Sync"
          - Añadir gestos de brazos opcionales

3. Render: exportar MP4 1080p 16:9

4. Subir: YouTube → "No listado"
          → pasar el link para conectarlo en datos.js
```

---

## Si igual quieres probar HeyGen primero

Puedes hacerlo con UNA imagen de Iris (la oficial) — pero los videos no
van a aprovechar las 5 boquitas y se verán más limitados.
Recomendado solo para validar el flujo con tu jefe antes de invertir en
Cartoon Animator.
