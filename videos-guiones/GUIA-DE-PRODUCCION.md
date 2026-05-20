# Guía de producción de videos SST · COFCA

Esta guía elimina toda la adivinación. Quien produzca los videos solo tiene que
**seguir el formato y pegar el guion** de cada producto.

---

## 1. Decisión sobre el avatar (IMPORTANTE)

**Se usa UN solo avatar fijo: el "presentador de SST".**

- El avatar se ve **siempre igual** en todos los videos (vestido profesional —
  idealmente con bata blanca o chaleco de seguridad).
- **NO se le cambia el vestuario ni se le pone casco por tema.** Eso complica todo.
- El equipo de protección (EPP) de cada producto aparece como **texto y gráficos
  en pantalla**, al lado del avatar — no en el cuerpo del avatar.

> ¿Por qué? Así funcionan los videos de seguridad profesionales: un narrador
> constante + apoyos visuales que cambian. Es más rápido, más barato y más claro.

---

## 2. Formato fijo de cada video (estructura)

Todos los videos siguen la misma estructura de **40–60 segundos**:

| Segmento | Duración | Contenido |
|----------|----------|-----------|
| **1. Saludo** | 5 s | "Hola, soy del equipo de SST de COFCA." |
| **2. Producto** | 5 s | Nombre del producto y para qué se usa. |
| **3. Peligro** | 12 s | Los riesgos principales (lo que destaca en rojo en el resumen). |
| **4. EPP** | 12 s | Qué protección ponerse antes de manipularlo. |
| **5. Primeros auxilios** | 12 s | Qué hacer si hay contacto (ojos, piel). |
| **6. Cierre** | 4 s | "Tu seguridad primero. Gracias por cuidarte." |

**En pantalla** (texto/gráficos que aparecen mientras el avatar habla):
- Segmento 3 → palabra **"PELIGRO"** + íconos de riesgo
- Segmento 4 → íconos de EPP (los mismos de la pantalla EPP del QR)
- Segmento 5 → ícono de ducha/agua y de ojos

---

## 3. Especificaciones técnicas

- **Duración:** 40–60 segundos (no más; la gente no ve videos largos en el celular)
- **Formato:** MP4
- **Orientación:** Horizontal 16:9 (se ve bien embebido en la página)
- **Resolución:** 1080p (Full HD)
- **Voz:** Español latinoamericano, tono calmado y claro
- **Subtítulos:** Activarlos en HeyGen (mucha gente ve sin sonido)

---

## 4. Dónde subir y cómo conectar

1. Generar el MP4 en HeyGen.
2. Subir a **YouTube** como **"No listado"** (Unlisted).
3. Pasar el link al desarrollador para conectarlo en `datos.js`:
   ```js
   video: "https://www.youtube.com/watch?v=CODIGO",
   ```

---

## 5. Pasos en HeyGen (resumen)

1. heygen.com → cuenta gratis (3 min de prueba)
2. Create Video → Avatar Video
3. Avatars → Upload → subir el avatar de COFCA (1 sola vez)
4. Voice → Español latinoamericano
5. Script → pegar el guion del producto
6. Activar subtítulos
7. Generate → descargar MP4

---

## 6. Orden de prioridad sugerido (por riesgo)

**Fase 1 — Riesgo ALTO, los primeros 10:**
1. Diablo Rojo (corrosivo)
2. Soda Cáustica Líquida 50% (corrosivo)
3. Pintóxido Incoloro (corrosivo)
4. Hipoclorito de Sodio (los 3 hipocloritos en 1 video)
5. Masilla Supermastick PR (cancerígeno)
6. Limpiador de Contactos 3 en Uno (inflamable / mortal aspiración)
7. Oxígeno Medicinal (comburente)
8. Óxido Nitroso (comburente / fertilidad)
9. Dióxido de Carbono (asfixia)
10. Butano (gas inflamable)

**Fase 2:** el resto de productos, en lotes.

---

*Los guiones individuales de cada producto están en esta misma carpeta,
listos para copiar y pegar en HeyGen.*
