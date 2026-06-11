# Cómo crear las 3 poses de Iris (si HeyGen no funciona)

> **Antes de hacer esto, probá HeyGen Talking Photo con una sola imagen**
> (ver `IRIS-PARA-HEYGEN.md`). Si HeyGen le anima la boca a Iris bien, NO
> necesitas las 3 poses — ahorrás trabajo y tiempo.

---

## ¿Para qué sirven las 3 poses?

Para hacer **lip sync manual** (sincronizar la boca con la voz) si HeyGen no
reconoce a Iris como un rostro. Con 3 poses y un editor de video se logra un
efecto cartoon retro muy auténtico.

## La gran ventaja: el SVG ya garantiza consistencia

Iris está hecha en SVG vectorial — cada parte es una capa independiente. Para
tener 3 poses que **concuerden perfectamente**, NO se usa IA. Se duplica el SVG
y se modifica solo lo que cambia (boca, brazos). El resto queda idéntico.

---

## Las 3 poses mínimas para lip sync

| Pose | Cuándo se usa | Cómo se ve la boca |
|------|---------------|---------------------|
| **A — Cerrada** | Letras M, B, P, silencios | Línea curva sonriente, sin abertura |
| **B — Semi-abierta** | Letras A, E, I, O suaves | Apertura mediana, dientes apenas se ven |
| **C — Abierta** | Letras O, U, A acentuadas, exclamaciones | Boca bien abierta, redondeada |

Con solo estas 3, alternándolas cada 0.1-0.2 segundos al ritmo del audio, se
logra una sincronización suficiente para un video cartoon.

---

## Quién y cómo las hace

**El diseñador que creó el SVG de Iris** (es la persona indicada porque ya tiene
el archivo editable). Le toma ~30 minutos. Pasos:

1. Abrir `assets/mascota/iris-sst.svg` en **Adobe Illustrator**, **Figma**, o
   **Inkscape** (gratis).
2. **Guardar 3 copias** del archivo:
   - `iris-boca-cerrada.svg`
   - `iris-boca-semi.svg`
   - `iris-boca-abierta.svg`
3. En cada copia, modificar **únicamente la capa de la boca**.
4. Exportar las 3 como **PNG con transparencia**, mismo tamaño exacto.

## Opcional: variantes de brazos

Con 2 poses de brazos más (uno señalando, otro relajado) se logra más dinamismo.
Se combinan con las 3 bocas → 6 variaciones que dan mucha vida sin perder
consistencia.

---

## Cómo montarlo en video (CapCut, gratis)

1. Generar el audio con la voz IA de HeyGen (descargar solo audio, sin video) o
   con **ElevenLabs** (voz IA en español, plan gratis disponible).
2. Abrir **CapCut Desktop** (gratis).
3. Subir el audio + las 3 imágenes PNG.
4. Arrastrar las imágenes a la línea de tiempo, alternándolas al ritmo del audio.
5. Activar **"Auto Lip Sync"** en CapCut si está disponible para acelerar.
6. Exportar como MP4 1080p 16:9.

---

## Alternativa pro: Adobe Character Animator

Si COFCA invierte en una suscripción, **Adobe Character Animator** permite:
- Importar Iris con todas las capas separadas (boca, ojo, brazos)
- "Riggeárlo" una sola vez
- Animarlo automáticamente a partir del audio (lip sync automático)
- Capturar gestos con la webcam para añadirlos a Iris

Es la herramienta profesional para esto, pero requiere licencia Adobe Creative Cloud.

---

## Resumen del camino sugerido

```
1. Probar HeyGen Talking Photo con UNA imagen de Iris  ──┐
                                                          │
   ┌─── ¿Funciona la animación de boca? ──────────────────┘
   │
   ├── SÍ → Producir los 40 videos en HeyGen ✅
   │
   └── NO → Pedir al diseñador las 3 poses
           → Generar audio con voz IA
           → Montar en CapCut con lip sync manual
           → Producir los 40 videos así
```
