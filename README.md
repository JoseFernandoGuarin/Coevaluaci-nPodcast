# Coevaluación de pódcast — Revisión crítica de artículo científico

https://josefernandoguarin.github.io/Coevaluaci-nPodcast/

Aplicativo web **estático** (sin servidor) para que los estudiantes del curso
**Sistemas de producción bovina especializada en leche (5007583)** realicen la
**coevaluación** de los pódcast de sus compañeros, usando la rúbrica de la actividad.

- **Valor:** 2,5 % de la nota del curso.
- **Regla de calificación:** el estudiante obtiene **5,0** si completa la coevaluación
  de **todos los grupos excepto el suyo** (5 de 6 grupos). No se evalúa el pódcast propio.
- **Truco de integridad:** el audio **no se puede adelantar**; la rúbrica solo se
  habilita cuando el pódcast se escuchó completo.

---

## Estructura del repositorio

```
.
├── index.html            ← App del ESTUDIANTE (escuchar + coevaluar)
├── datos.js              ← Lista de estudiantes, grupos y rúbrica (ÚNICO archivo editable)
├── materiales/
│   ├── grupo1/ … grupo6/
│   │   ├── podcast.mp3    ← audio de cada grupo
│   │   └── guion.pdf      ← guion de cada grupo
├── notas/
│   ├── index.html        ← App del DOCENTE (consolida comprobantes → notas)
│   └── README.md
└── README.md
```

---

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `coevaluacion-podcasts`).
2. Sube **todo el contenido** de esta carpeta (puedes arrastrar los archivos en
   *Add file → Upload files*, incluidas las subcarpetas `materiales/` y `notas/`).
3. Ve a **Settings → Pages**.
4. En *Source* elige la rama `main` y la carpeta `/ (root)`. Guarda.
5. En uno o dos minutos tendrás la URL pública, por ejemplo:
   `https://TU-USUARIO.github.io/coevaluacion-podcasts/`
6. Comparte ese enlace con los estudiantes.
   - La app del docente queda en: `.../coevaluacion-podcasts/notas/`

> Los archivos MP3 pesan en total ~100 MB. Está dentro de los límites de GitHub
> (100 MB por archivo, 1 GB por repositorio).

---

## Cómo funciona para el estudiante

1. Abre el enlace y **selecciona su nombre** de la lista.
2. Ve los **5 materiales** por coevaluar (los de los otros grupos).
3. En cada material:
   - Escucha el pódcast. **No puede adelantarlo**; sí puede pausar y retroceder.
   - Puede abrir el **guion** en pantalla.
   - Al terminar la escucha, se **desbloquea la rúbrica** (6 criterios, total 100).
   - Guarda la coevaluación.
4. Cuando completa los 5, descarga su **comprobante** (`comprobante_Apellido_Cedula.json`)
   y se lo envía al profesor por la plataforma del curso o correo.

El avance se guarda en el navegador, así que puede continuar en varias sesiones
(en el mismo equipo y navegador).

---

## Cómo obtiene usted las notas (docente)

1. Abra la app del docente: `.../notas/` en el navegador.
2. Arrastre allí **todos los comprobantes `.json`** que le enviaron los estudiantes.
3. Verá:
   - **Notas de participación (2,5 %):** 5,0 a quien completó los 5; parcial si entregó menos; en blanco si no entregó.
   - **Coevaluación recibida por grupo:** promedio que cada pódcast recibió de sus compañeros (sobre 100), útil para informar la nota del pódcast (5 %).
   - **Pendientes de entregar.**
4. Exporte los CSV (`notas_participacion.csv`, `coevaluacion_por_grupo.csv`) y
   guárdelos en la carpeta `notas/`.

Todo el procesamiento ocurre en su navegador; ningún dato sale a internet.

---

## Editar la lista o la rúbrica

Todo está en **`datos.js`**. Ahí puede corregir nombres, cambiar la integración de
los grupos o ajustar los criterios/puntajes de la rúbrica. No es necesario tocar
`index.html` ni `notas/index.html`.

### Grupos (según los materiales entregados)

| Grupo | Integrantes | Tema |
|---|---|---|
| 1 | Zapata, Londoño, Yepes, Paternina | Revisión de artículo (JDS) |
| 2 | Quiroz, Liévano, Carvajal, Orozco, Murillo | DCAD / hipocalcemia |
| 3 | Arbeláez, Flórez, Grisales | Metabolismo mamario (Anger et al.) |
| 4 | Gallón, Pulgarín, Pineda, Lalinde | Lactancias extendidas (Han et al., 2024) |
| 5 | Balzán, Tangarife, Martínez | Doble-Ovsynch / IATF (Laplacette et al., 2025) |
| 6 | Dorado, Hincapié, Ramírez | Pérdidas por enfermedades (Rasmussen et al., 2024) |

> **Revisar:** la conformación del Grupo 6 (Dorado, Hincapié, Ramírez) se dedujo por
> descarte, porque su guion no traía los nombres. Si no coincide, corríjalo en `datos.js`.

---

## Nota sobre la integridad

El bloqueo de avance y la escucha completa promueven el trabajo honesto, pero esto es
una app de navegador: un usuario con conocimientos técnicos podría eludir los controles.
Como la nota es por **participación** (5,0 por completar, sin importar los puntajes que
asigne), el incentivo para hacer trampa es bajo. Si necesita control estricto, considere
una plataforma con backend (p. ej. un formulario institucional con registro de sesión).
