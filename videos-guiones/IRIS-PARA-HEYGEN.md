# Cómo debe verse Iris para los videos en HeyGen (Talking Photo)

La imagen actual de Iris (cuerpo completo, saludando, riendo, de lado) **NO sirve**
para HeyGen. Se necesita una **nueva pose** de Iris con estas características.

---

## Especificación de la nueva Iris "presentadora"

| Elemento | Cómo debe estar |
|----------|-----------------|
| **Encuadre** | Busto: cabeza + parte superior del cuerpo. NO cuerpo completo. |
| **Vista** | Totalmente de frente, mirando a la cámara. |
| **Boca** | Ligeramente abierta, posición neutra (no riendo a carcajadas). |
| **Pupila** | Centrada, mirando al frente. |
| **Brazos** | Relajados o uno señalando suave. No saludando. |
| **Vestimenta** | Bata blanca de clínica + su gorra azul característica. Sin casco. |
| **Fondo** | Transparente o sólido limpio (un solo color). |
| **Resolución** | Alta. Formato vertical (2:3) o cuadrado (1:1). |

> El EPP de cada producto (guantes, gafas, etc.) NO va puesto en Iris.
> Se muestra como gráficos/íconos en pantalla durante el video.

---

## Quién debe crear esta imagen

**Lo ideal: el diseñador que hizo Iris.** El archivo "Iris editable.pdf" es vectorial,
así que quien lo diseñó puede redibujarla fácilmente en la pose de presentador
(de frente, busto, con bata). Es la forma más fiel a la marca.

Si no hay diseñador disponible, se puede generar con una herramienta de IA de imágenes
que acepte imagen de referencia (Leonardo, Canva Magic Media, etc.) usando el prompt de abajo
+ la imagen original de Iris como referencia de estilo.

---

## PROMPT para generar la nueva Iris (inglés — recomendado)

```
Cartoon mascot character of a friendly white eyeball with a single large blue iris,
front-facing, looking directly at the viewer, bust shot (head and upper body only),
wearing an open white medical lab coat and a blue baseball cap, blue cartoon gloves,
mouth slightly open in a neutral friendly talking expression (not laughing), clean
bold outline retro cartoon style, blue and white color palette, solid light background,
centered, high resolution, character design sheet style, consistent with reference image.
```

### Prompt negativo
```
no full body, no waving pose, no side view, no laughing wide mouth, no helmet,
no hard hat, no text, no watermark, no multiple characters
```

## PROMPT (español)

```
Personaje mascota caricatura de un ojo blanco amigable con un gran iris azul, de frente,
mirando directamente al espectador, plano de busto (solo cabeza y parte superior del cuerpo),
con bata blanca de médico abierta y gorra azul, guantes azules de caricatura, boca
ligeramente abierta en expresión neutra y amable de estar hablando (no riendo), estilo
caricatura retro de contorno marcado, paleta azul y blanco, fondo claro sólido, centrado,
alta resolución, consistente con la imagen de referencia.
```

---

## Pasos en HeyGen una vez tengas la imagen

1. Entrar a heygen.com
2. Create Video → **Talking Photo** (no "Avatar")
3. Subir la imagen de la nueva Iris (busto, de frente, boca neutra)
4. HeyGen detecta la boca y la prepara para animar
5. Voice → español latinoamericano (femenino, ya que Iris se llama "Iris")
6. Script → pegar el guion del producto (carpeta `videos-guiones/`)
7. Activar subtítulos
8. Generar → descargar MP4
9. Subir a YouTube "No listado" → pasar el link para conectarlo al sitio

---

## ⚠️ Advertencia honesta

HeyGen "Talking Photo" está optimizado para **caras humanas**. Iris es una mascota
(un ojo), así que el detector de rostro **podría no reconocerla** o animar la boca de
forma rara. Por eso:
- Hay que probar con la nueva pose (de frente, boca clara y centrada) — así tiene la
  mejor oportunidad de funcionar.
- Si HeyGen no la reconoce bien, la alternativa es la Opción A (Iris presenta + voz +
  gráficos, sin mover la boca), que siempre funciona.
