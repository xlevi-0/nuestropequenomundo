# ♡ Nuestro Pequeño Mundo

Página web de aniversario interactiva, con estética pixel-art / videojuego indie romántico.

---

## 1. Estructura del proyecto

```
/index.html
/css/style.css
/js/script.js
/assets/images/characters/   ← ya contiene vuestros 6 personajes recortados
/assets/images/memories/     ← fotos opcionales de vuestros recuerdos
/assets/images/backgrounds/  ← libre, no obligatorio
/assets/images/decorations/  ← libre, no obligatorio
/assets/audio/                ← vuestras canciones (opcional)
/README.md
```

## 2. Cómo ejecutarla (sin servidor)

Simplemente haz doble clic en `index.html` y se abrirá en tu navegador (Chrome, Edge, Firefox...).
No necesita instalación, ni internet (salvo para cargar las dos tipografías de Google Fonts la primera vez).

## 3. Los personajes

Ya he recortado las 6 poses de la imagen que subiste y las he guardado en
`assets/images/characters/` con estos nombres exactos:

- `couple-together.png` — de pie, juntos
- `couple-hug.png` — abrazo
- `couple-sitting.png` — sentados
- `couple-heart.png` — corazón con las manos
- `couple-piggyback.png` — a caballito
- `couple-kiss.png` — beso

Se usan tal cual, sin deformarlas (con `object-fit: contain` / ancho automático manteniendo proporción).
Si en algún momento quieres cambiar una pose, solo tienes que sustituir el archivo por otro con el mismo nombre.

## 4. Cómo añadir tus fotos de recuerdos (opcional)

En `js/script.js`, cada recuerdo del mapa y de la línea temporal tiene un campo `image`, por ejemplo:

```js
image: "memory-parque.jpg"
```

Para que aparezca, guarda una foto con ese nombre exacto dentro de `assets/images/memories/`.
Si no añades la foto, la web simplemente no la muestra (no rompe nada).

## 5. Cómo cambiar los textos y datos personales

Todo el contenido editable está al principio de `js/script.js`, dentro de:

```js
// ====================================
// CONTENIDO PERSONALIZABLE
// ====================================
```

Ahí encontrarás, en este orden:

- `relationshipData` → nombres y fechas (inicio de la relación y aniversario).
- `timeline` → los recuerdos de "Nuestra historia".
- `memories` → los puntos del mapa de "Nuestros recuerdos".
- `reasons` → las 50 cosas que amas de ella (edítalas todas si quieres).
- `letters` → las 5 cartas.
- `songs` → vuestras canciones (título, artista, descripción y nombre de archivo de audio).
- `futurePlans` → los deseos de la sección "Nuestro futuro".
- `achievements` → los logros tipo videojuego.
- `secrets` → los mensajes que aparecen al encontrar cada secreto escondido.

Solo tienes que sustituir los textos entre comillas `"..."`. No hace falta tocar nada más del archivo.

## 6. Cómo añadir vuestras canciones y sus portadas (opcional)

1. **Audio:** coloca tus archivos mp3 dentro de `assets/audio/`. En el array `songs` de `script.js`,
   pon el nombre exacto del archivo en el campo `audio`, por ejemplo `"audio": "song-1.mp3"`.
2. **Portada:** coloca la imagen dentro de `assets/images/songs/` (esta carpeta ya existe en el proyecto).
   En el campo `cover` de esa misma canción pon solo el nombre del archivo, por ejemplo `"cover": "song-1.jpg"`.
   **Importante:** en `cover` va únicamente el nombre del archivo, nunca una ruta completa
   (nada de `C:\Usuarios\...` ni `assets/images/songs/song-1.jpg`, solo `"song-1.jpg"`).
3. Si no añades audio o portada, el reproductor sigue funcionando igual: sin portada muestra un
   emoji 🎵, y sin audio solo avisa con un mensaje al pulsar play (no da ningún error).

No se ha incluido ninguna canción con derechos de autor dentro del proyecto.

## 6B. Contraseña de acceso

La web puede pedir una contraseña antes de mostrar nada. Se configura en `script.js`, justo antes de
`relationshipData`:

```js
const ACCESS_CODE = "teamo";
```

- Cambia `"teamo"` por la contraseña que quieras que use tu novia.
- Si quieres que la web se abra sin pedir nada, deja las comillas vacías: `const ACCESS_CODE = "";`
- No distingue mayúsculas de minúsculas, así que `"TeAmo"` también seria válida si la contraseña es `"teamo"`.
- Una vez se introduce bien, el navegador la recuerda (no la vuelve a pedir en ese mismo dispositivo).
- Ten en cuenta que esto es una protección sencilla pensada para un regalo personal, no una
  contraseña de verdad segura: cualquiera que abra el código fuente del archivo podría verla.

## 6C. Volver a leer las 50 razones y las cartas

- **Cartas:** puedes pulsar sobre un sobre ya abierto (verás la marca "abierta ✓") tantas veces
  como quieras y siempre te volverá a mostrar la carta completa.
- **50 cosas que amo de ti:** debajo del corazón hay una rejilla con los números del 01 al 50,
  visibles desde el principio. Puedes tocar cualquier número directamente para leer esa razón en
  concreto, sin tener que descubrirlas antes en orden con el botón del corazón. Los números ya
  leídos se quedan resaltados en rosa, para saber cuáles te faltan.

## 6D. Botón de reinicio

En la esquina superior izquierda hay un pequeño botón (⟳), semitransparente para no molestar,
que reinicia todo el progreso guardado: logros, secretos, cartas abiertas, razones descubiertas
y, si has puesto contraseña, también hace que se vuelva a pedir. Pide confirmación antes de borrar
nada, así que no hay riesgo de reiniciar por accidente. Es útil para probar la web varias veces
antes de dársela, o para que puedas volver a vivirla "como la primera vez" cuando quieras.

## 7. Los secretos escondidos

Hay 5 secretos repartidos por la web (no te los voy a chafar aquí 😉). El contador de la sección
"Secretos" se actualiza solo, y el progreso se guarda automáticamente en el propio navegador,
así que si tu novia cierra la pestaña y vuelve más tarde, no pierde lo que ya ha encontrado.

## 8. Publicarla más adelante (opcional)

Si en el futuro quieres que sea accesible desde un enlace (no solo abriendo el archivo), las opciones
más sencillas y gratuitas son:

- **Netlify Drop** (`app.netlify.com/drop`): arrastras la carpeta entera y te da un enlace al instante.
- **GitHub Pages**: subes la carpeta a un repositorio de GitHub y activas Pages en la configuración.
- **Vercel**: similar a Netlify, importando la carpeta o un repositorio.

Cualquiera de las tres funciona sin tocar nada del código, porque el proyecto no depende de ningún servidor.

## 9. Notas técnicas

- HTML5 + CSS3 + JavaScript vanilla, sin frameworks ni dependencias que instalar.
- Única dependencia externa: las fuentes de Google Fonts (Pixelify Sans y Nunito), cargadas por `<link>` en el `<head>`.
- El progreso (razones descubiertas, logros, secretos, cartas abiertas, recuerdos visitados) se guarda con `localStorage` en el propio navegador.
- Respeta `prefers-reduced-motion`: si tu novia tiene activada la reducción de movimiento en su sistema, las animaciones se simplifican automáticamente.
- Totalmente responsive: probado mentalmente en tres puntos de ruptura (móvil, tablet, escritorio), sin scroll horizontal.

Feliz aniversario. ♡
