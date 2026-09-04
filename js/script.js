/* ==========================================================================
   NUESTRO PEQUEÑO MUNDO — script.js
   ========================================================================== */

/* ====================================
// CONTENIDO PERSONALIZABLE
// ==================================== */

const relationshipData = {
  girlfriendName: "Leire",
  myName: "Faizan",
  // formato: "AAAA-MM-DD"
  startDate: "2025-08-17",
  anniversaryDate: "2026-08-17"
};

// Línea temporal de la sección "Nuestra historia".
// image (opcional): nombre de archivo dentro de assets/images/memories/
const timeline = [
  {
    id: "t1",
    icon: "🌱",
    title: "El comienzo",
    date: "Mayo 2025",
    description: "El día en que comenzó nuestra historia. Todavía como conocidos simplemente.",
    image: "timeline-comienzo.jpg"
  },
  {
    id: "t2",
    icon: "💬",
    title: "Las primeras conversaciones",
    date: "Mayo-Junio 2025",
    description: "Horas y horas hablando de todo y de nada.",
    image: "timeline-conversaciones.jpg"
  },
  {
    id: "t3",
    icon: "❤️",
    title: "Cuando supe que estaba enamorado",
    date: "Agosto 2025",
    description: "Ese momento exacto en el que supe que eras perfecta a mis ojos.",
    image: "timeline-cambio.jpg"
  },
  {
    id: "t4",
    icon: "🌸",
    title: "Un momento especial",
    date: "Agosto 2025",
    description: "Un recuerdo  que se quedó grabado para siempre.",
    image: "timeline-especial.jpg"
  },
  {
    id: "t5",
    icon: "💋",
    title: "Nuestro primer beso",
    date: "Agosto 2025",
    description: "El primero de muchísimos más.",
    image: "timeline-beso.jpg"
  },
  {
    id: "t6",
    icon: "🥰",
    title: "6 meses",
    date: "Julio 2025",
    description: "Medio año juntos y con ganas de muchos más.",
    image: "timeline-6meses.jpg"
  },
  {
    id: "t7",
    icon: "🎉",
    title: "Nuestro primer año",
    date: "Enero 2026",
    description: "365 días después, aquí seguimos, eligiéndonos cada día.",
    image: "timeline-1anio.jpg"
  }
];

// Puntos del mapa de recuerdos. top/left en porcentaje (0-100).
const memories = [
  {
    id: "m1",
    icon: "🏠",
    label: "Casa de Joseba",
    top: 30, left: 18,
    title: "En casa, sin hacer nada",
    date: "Todo el año",
    story: "Los mejores planes a veces son no tener ningún plan, solo estar juntos.",
    image: "memory-casa.jpg"
  },
  {
    id: "m2",
    icon: "🌳",
    label: "Parque",
    top: 55, left: 40,
    title: "Aquella tarde en el parque",
    date: "Verano 2025",
    story: "Estuvimos juntos por horas, y no nos importaba lo demás.",
    image: "memory-parque.jpg"
  },
  {
    id: "m3",
    icon: "🍟",
    label: "McDonald's",
    top: 20, left: 62,
    title: "McDonald's",
    date: "Varias veces",
    story: "Ese rincón que ya sentimos nuestro, con nuestra mesa de siempre.",
    image: "memory-mcdonalds.jpg"
  },
  {
    id: "m4",
    icon: "🛟",
    label: "Piscina",
    top: 70, left: 68,
    title: "El día de piscina",
    date: "Verano 2026",
    story: "No hemos ido mucho, pero las veces que hemos ido, me ha encantado ir contigo.",
    image: "memory-piscina.jpg"
  },
  {
    id: "m5",
    icon: "❗",
    label: "La esquina de siempre",
    top: 45, left: 84,
    title: "Nuestra esquina de siempre",
    date: "Casi siempre que quedamos",
    story: "Un lugar que ahora significa mucho para mí, el lugar en el que nos vemos casi siempre que quedamos.",
    image: "memory-esquina.jpg"
  },
  {
    id: "m6",
    icon: "⭐",
    label: "Otros lugares",
    top: 12, left: 35,
    title: "Y muchos lugares más",
    date: "Todo este año",
    story: "Cada rincón que pisamos juntos se convirtió en un lugar favorito.",
    image: "memory-otros.jpg"
  }
];

// 50 razones — edita libremente cada frase.
const reasons = [
  "Tu sonrisa, que ilumina cualquier día raro.",
  "La forma en que consigues hacerme reír incluso cuando no quiero.",
  "Cómo te emocionas con las cosas pequeñas.",
  "Tu forma de escuchar de verdad, sin prisa.",
  "Lo bien que se siente estar en silencio contigo, sin necesidad de hablar.",
  "Tu manera de cuidar a las personas que quieres.",
  "Cómo cambias mi día solo con un mensaje tuyo.",
  "Tu paciencia conmigo, incluso cuando no la merezco del todo.",
  "La forma en que me miras cuando crees que no me doy cuenta.",
  "Tu curiosidad por todo lo que te rodea.",
  "Cómo defiendes lo que crees justo.",
  "Tu risa, sobre todo cuando intentas contenerla y no puedes.",
  "Lo fácil que es hablar contigo de cualquier cosa.",
  "Tu forma de abrazar, como si el tiempo se detuviera.",
  "Cómo te acuerdas de los detalles que a mí se me olvidan.",
  "Tu sentido del humor, que combina perfecto con el mío.",
  "La manera en la que me haces sentir en casa.",
  "Tu forma de bailar cuando crees que nadie te ve.",
  "Cómo intentas siempre ver el lado bueno de las cosas.",
  "Tu manera de decir las cosas tal como las sientes.",
  "Lo bien que me conoces, incluso mejor que yo mismo/a a veces.",
  "Tu forma de emocionarte planeando cosas juntos.",
  "Cómo me haces mejor persona simplemente estando cerca.",
  "Tu manera de disculparte cuando te equivocas.",
  "Lo fuerte que eres, aunque no siempre te lo digas a ti misma/o.",
  "Tu forma de hacer que los planes sencillos se sientan especiales.",
  "Cómo te preocupas por mi familia como si fuera la tuya.",
  "Tu manera de sorprenderme sin motivo aparente.",
  "Lo bien que se siente tu mano en la mía.",
  "Tu forma de recordar nuestras conversaciones más tontas.",
  "Cómo consigues calmarme cuando estoy nervioso/a.",
  "Tu manera de emocionarte con la música que te gusta.",
  "Lo mucho que te esfuerzas por las personas que quieres.",
  "Tu forma de mirar las estrellas como si fuera la primera vez.",
  "Cómo haces que cualquier plan sea mi favorito, solo por estar tú.",
  "Tu manera de contarme tu día con todo detalle.",
  "Lo bien que te queda reírte de ti misma/o.",
  "Tu forma de apoyarme en todo lo que hago.",
  "Cómo me haces sentir escuchado/a de verdad.",
  "Tu manera de hacer que las cosas difíciles se sientan más ligeras.",
  "Lo bonito que es ver cómo persigues tus sueños.",
  "Tu forma de decir 'te quiero' incluso sin decirlo.",
  "Cómo te preocupas por hacer feliz a los demás.",
  "Tu manera de mirar el mundo con ilusión.",
  "Lo cómodo/a que me siento siendo yo mismo/a contigo.",
  "Tu forma de hacer que cada aniversario se sienta como el primero.",
  "Cómo consigues que hasta un día normal se sienta especial.",
  "Tu manera de quererme, exactamente como soy.",
  "Lo mucho que aprendo de ti cada día.",
  "Que elijas seguir escribiendo esta historia conmigo, cada día."
];

// Cartas de la sección "Cartas para ti".
const letters = [
  {
    id: "l1",
    icon: "💌",
    label: "Ábreme cuando estés triste",
    body: "Si estás leyendo esto es porque no es tu mejor día. Respira. Esto va a pasar, y cuando pase, ahí voy a estar yo, con los brazos abiertos y sin ninguna prisa."
  },
  {
    id: "l2",
    icon: "💌",
    label: "Ábreme cuando me eches de menos",
    body: "Yo también te extraño, incluso cuando estamos juntos pienso en lo mucho que te voy a extrañar en cuanto te vayas. Eso también es quererte."
  },
  {
    id: "l3",
    icon: "💌",
    label: "Ábreme cuando necesites sonreír",
    body: "Piensa en la última vez que nos reímos hasta que dolió. Ahora sonríe, porque sé que se te acaba de escapar una."
  },
  {
    id: "l4",
    icon: "💌",
    label: "Ábreme cuando quieras saber cuánto te quiero",
    body: "Te quiero más de lo que puedo escribir en una sola carta. Pero si necesito resumirlo: te quiero como quien ha encontrado a alguien que valía la pena esperar."
  },
  {
    id: "l5",
    icon: "💌",
    label: "Ábreme en nuestro aniversario",
    body: "Feliz aniversario. Gracias por elegir compartir tu tiempo, tus días buenos y tus días malos conmigo. Ojalá algún día podamos releer esta carta y reírnos de lo jóvenes que éramos en nuestro primer año."
  }
];

// Canciones — coloca los archivos en assets/audio/ (opcional).
const songs = [
  {
    title: "TUS VUELTAS + CARENCIAS DE CORDURA",
    artist: "Milo J, Santino, Yami Safdie",
    cover: "c:\Users\Faizan\Downloads\nuestro-pequeno-mundo\nuestro-pequeno-mundo\assets\audio\cover1.jpg",
    audio: "cancion1.mp3",
    description: "Esta es nuestra canción, amor."
  },
  {
    title: "La de los recuerdos",
    artist: "Reemplázame",
    cover: "nuestro-pequeno-mundo/assets/audio/cover1.jpg/",
    audio: "song-2.mp3",
    description: "Esta me recuerda a ese viaje en coche donde la cantamos sin parar."
  },
  {
    title: "La que bailamos",
    artist: "Reemplázame",
    cover: "song-3.jpg",
    audio: "song-3.mp3",
    description: "La bailamos fatal, pero fue perfecta."
  }
];

// Deseos futuros (estrellas del cielo).
const futurePlans = [
  { id: "f1", icon: "⭐", top: 15, left: 12, text: "Viajar juntos a un lugar nuevo." },
  { id: "f2", icon: "⭐", top: 55, left: 20, text: "Ver un amanecer sin prisa, juntos." },
  { id: "f3", icon: "⭐", top: 30, left: 45, text: "Conocer un lugar con el que ambos soñamos." },
  { id: "f4", icon: "⭐", top: 68, left: 55, text: "Hacer esa actividad que siempre decimos que haremos." },
  { id: "f5", icon: "⭐", top: 20, left: 75, text: "Celebrar nuestro segundo aniversario, y muchos más." }
];

// Logros. type "static" = ya conseguido siempre. type "dynamic" = se desbloquea con acciones.
const achievements = [
  { id: "a-msg", icon: "🏆", title: "Primer mensaje", desc: "El inicio de todo.", type: "static" },
  { id: "a-cita", icon: "🏆", title: "Primera cita", desc: "Nervios y mariposas.", type: "static" },
  { id: "a-beso", icon: "🏆", title: "Primer beso", desc: "El primero de muchos.", type: "static" },
  { id: "a-100", icon: "🏆", title: "100 días", desc: "Y contando.", type: "static" },
  { id: "a-6m", icon: "🏆", title: "6 meses", desc: "Medio año juntos.", type: "static" },
  { id: "a-365", icon: "🏆", title: "365 días", desc: "Un año entero.", type: "static" },
  { id: "a-aniv", icon: "🏆", title: "Primer aniversario", desc: "¡Lo logramos!", type: "static" },
  { id: "a-explorer", icon: "🗺️", title: "Exploradora de recuerdos", desc: "Visita los 6 puntos del mapa.", type: "dynamic" },
  { id: "a-cartas", icon: "💌", title: "Coleccionista de cartas", desc: "Abre todas las cartas.", type: "dynamic" },
  { id: "a-corazon", icon: "💗", title: "Corazón completo", desc: "Descubre las 50 razones.", type: "dynamic" },
  { id: "a-melomana", icon: "🎵", title: "Melómana", desc: "Reproduce una canción.", type: "dynamic" },
  { id: "a-secretos", icon: "🔍", title: "Cazadora de secretos", desc: "Encuentra los 5 secretos.", type: "dynamic" }
];

// Secretos escondidos por la web. El "id" debe coincidir con data-secret en el HTML,
// o con el id usado al llamar unlockSecret() desde el código.
const secrets = [
  { id: "footer-heart", message: "Encontraste el corazón escondido del final. ♡" },
  { id: "logo-clicks", message: "Descubriste que el título esconde algo si le prestas atención. ✧" },
  { id: "ghost-star", message: "Encontraste la estrella invisible en el cielo. ✦" },
  { id: "achv-title", message: "Encontraste el secreto tras el título de los logros. 🏆" },
  { id: "hidden-cat", message: "Encontraste al gatito escondido entre las cartas. 🐈" }
];

/* ====================================
// FIN DEL CONTENIDO PERSONALIZABLE
// ==================================== */


(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const STORAGE_KEY = "nuestroPequenoMundo_v1";

  /* ------------------------------------------------------------------
     ESTADO PERSISTENTE (localStorage)
  ------------------------------------------------------------------ */
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) throw new Error("no-state");
      const parsed = JSON.parse(raw);
      return Object.assign({
        secretsFound: [],
        achievementsUnlocked: [],
        memoriesVisited: [],
        lettersOpened: [],
        reasonsRevealed: 0,
        songsPlayed: []
      }, parsed);
    } catch (e) {
      return {
        secretsFound: [],
        achievementsUnlocked: [],
        memoriesVisited: [],
        lettersOpened: [],
        reasonsRevealed: 0,
        songsPlayed: []
      };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* almacenamiento no disponible: la experiencia sigue funcionando sin guardar progreso */
    }
  }

  const state = loadState();

  /* ------------------------------------------------------------------
     UTILIDADES
  ------------------------------------------------------------------ */
  function announce(text) {
    const live = document.getElementById("aria-live");
    if (live) live.textContent = text;
  }

  function showToast(icon, text) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast__icon" aria-hidden="true">${icon}</span><span>${text}</span>`;
    container.appendChild(toast);
    announce(text);
    setTimeout(() => toast.remove(), 3200);
  }

  function openModal(html) {
    const overlay = document.getElementById("modal-overlay");
    const body = document.getElementById("modal-body");
    body.innerHTML = html;
    overlay.hidden = false;
    document.body.classList.add("no-scroll");
    const closeBtn = document.getElementById("modal-close");
    closeBtn.focus();
  }

  function closeModal() {
    const overlay = document.getElementById("modal-overlay");
    overlay.hidden = true;
    document.body.classList.remove("no-scroll");
  }

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  /* ------------------------------------------------------------------
     LOGROS
  ------------------------------------------------------------------ */
  function isAchievementUnlocked(id) {
    const def = achievements.find(a => a.id === id);
    if (!def) return false;
    if (def.type === "static") return true;
    return state.achievementsUnlocked.includes(id);
  }

  function unlockAchievement(id) {
    if (state.achievementsUnlocked.includes(id)) return;
    const def = achievements.find(a => a.id === id);
    if (!def) return;
    state.achievementsUnlocked.push(id);
    saveState();
    showToast("✨", `¡LOGRO DESBLOQUEADO! ${def.title}`);
    renderAchievements();
  }

  function renderAchievements() {
    const grid = document.getElementById("achievements-grid");
    grid.innerHTML = "";
    achievements.forEach(a => {
      const unlocked = isAchievementUnlocked(a.id);
      const card = document.createElement("div");
      card.className = "achievement-card" + (unlocked ? "" : " is-locked");
      card.innerHTML = `
        <div class="achievement-card__icon" aria-hidden="true">${unlocked ? a.icon : "🔒"}</div>
        <div class="achievement-card__title">${a.title}</div>
        <div class="achievement-card__desc">${unlocked ? a.desc : "Sigue explorando..."}</div>
      `;
      grid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------
     SECRETOS
  ------------------------------------------------------------------ */
  function unlockSecret(id) {
    if (state.secretsFound.includes(id)) return;
    const def = secrets.find(s => s.id === id);
    if (!def) return;
    state.secretsFound.push(id);
    saveState();
    showToast("🔍", `¡Secreto encontrado! ${def.message}`);
    renderSecrets();
    if (state.secretsFound.length >= secrets.length) {
      unlockAchievement("a-secretos");
      document.getElementById("secrets-complete-msg").hidden = false;
    }
  }

  function renderSecrets() {
    const countEl = document.getElementById("secrets-count");
    const slotsEl = document.getElementById("secrets-slots");
    countEl.textContent = String(state.secretsFound.length);
    slotsEl.innerHTML = "";
    secrets.forEach(s => {
      const found = state.secretsFound.includes(s.id);
      const slot = document.createElement("div");
      slot.className = "secret-slot" + (found ? " is-found" : "");
      slot.setAttribute("aria-hidden", "true");
      slot.textContent = found ? "💗" : "❓";
      slotsEl.appendChild(slot);
    });
    if (state.secretsFound.length >= secrets.length) {
      document.getElementById("secrets-complete-msg").hidden = false;
    }
  }

  function initSecretTriggers() {
    document.querySelectorAll(".secret-trigger[data-secret]").forEach(el => {
      el.addEventListener("click", () => unlockSecret(el.dataset.secret));
    });

    // secreto: triple clic sobre el título de la portada
    let logoClicks = 0;
    let logoClickTimer = null;
    const logo = document.getElementById("secret-logo");
    if (logo) {
      logo.style.cursor = "default";
      logo.addEventListener("click", () => {
        logoClicks += 1;
        clearTimeout(logoClickTimer);
        logoClickTimer = setTimeout(() => { logoClicks = 0; }, 1200);
        if (logoClicks >= 3) {
          unlockSecret("logo-clicks");
          logoClicks = 0;
        }
      });
    }

    // secreto: triple clic sobre el título de logros
    let achvClicks = 0;
    let achvClickTimer = null;
    const achvTitle = document.getElementById("achievements-title");
    if (achvTitle) {
      achvTitle.addEventListener("click", () => {
        achvClicks += 1;
        clearTimeout(achvClickTimer);
        achvClickTimer = setTimeout(() => { achvClicks = 0; }, 1200);
        if (achvClicks >= 3) {
          unlockSecret("achv-title");
          achvClicks = 0;
        }
      });
    }
  }

  /* ------------------------------------------------------------------
     INTRO Y TRANSICION
  ------------------------------------------------------------------ */
  function spawnFloatingHearts() {
    if (prefersReducedMotion) return;
    const layer = document.querySelector(".floating-hearts");
    if (!layer) return;
    const hearts = ["♡", "❤", "💕"];
    for (let i = 0; i < 14; i++) {
      const span = document.createElement("span");
      span.className = "heart-particle";
      span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      span.style.left = Math.random() * 100 + "%";
      span.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");
      span.style.animationDuration = (6 + Math.random() * 6) + "s";
      span.style.animationDelay = (Math.random() * 6) + "s";
      span.style.fontSize = (0.8 + Math.random() * 0.8) + "rem";
      layer.appendChild(span);
    }
  }

  function enterWorld() {
    const intro = document.getElementById("intro-screen");
    const curtain = document.getElementById("transition-curtain");
    const nav = document.getElementById("game-nav");
    const main = document.getElementById("main-content");

    curtain.classList.add("is-playing");

    setTimeout(() => {
      intro.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");
      main.setAttribute("aria-hidden", "false");
      nav.classList.add("is-visible");
      curtain.classList.remove("is-playing");
      document.getElementById("inicio").scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    }, prefersReducedMotion ? 50 : 550);
  }

  /* ------------------------------------------------------------------
     NAVEGACION
  ------------------------------------------------------------------ */
  function initNav() {
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.target);
        if (target) target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    });

    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          buttons.forEach(b => b.classList.toggle("is-active", b.dataset.target === entry.target.id));
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(s => observer.observe(s));
  }

  /* ------------------------------------------------------------------
     BIENVENIDA / CONTADOR DE DIAS
  ------------------------------------------------------------------ */
  function initWelcome() {
    const welcomeText = document.getElementById("welcome-text");
    const daysText = document.getElementById("days-together-text");
    welcomeText.textContent = `${relationshipData.girlfriendName}, esto es para ti.`;

    const start = new Date(relationshipData.startDate);
    const today = new Date();
    if (!isNaN(start.getTime())) {
      const days = Math.max(0, Math.floor((today - start) / (1000 * 60 * 60 * 24)));
      daysText.textContent = `Llevamos ${days} días escribiendo esta historia juntos.`;
    }
  }

  /* ------------------------------------------------------------------
     LINEA TEMPORAL
  ------------------------------------------------------------------ */
  function renderTimeline() {
    const list = document.getElementById("timeline-list");
    list.innerHTML = "";
    timeline.forEach(item => {
      const wrap = document.createElement("div");
      wrap.className = "timeline-item";
      wrap.setAttribute("role", "listitem");
      wrap.innerHTML = `
        <div class="timeline-node" aria-hidden="true">${item.icon}</div>
        <button type="button" class="timeline-card" data-id="${item.id}">
          <p class="timeline-card__date">${item.date}</p>
          <p class="timeline-card__title">${item.title}</p>
          <p class="timeline-card__hint">Toca para abrir este recuerdo →</p>
        </button>
      `;
      list.appendChild(wrap);
    });

    list.querySelectorAll(".timeline-card").forEach(card => {
      card.addEventListener("click", () => {
        const item = timeline.find(t => t.id === card.dataset.id);
        card.closest(".timeline-item").classList.add("is-unlocked");
        openModal(`
          <p class="modal-eyebrow">RECUERDO DESBLOQUEADO ✨</p>
          <img src="assets/images/memories/${item.image}" alt="Foto del recuerdo: ${item.title}"
               onerror="this.remove()">
          <p class="modal-eyebrow">${item.date}</p>
          <h3>${item.icon} ${item.title}</h3>
          <p>${item.description}</p>
        `);
        if (item.id === "t5") unlockAchievement("a-beso");
        if (item.id === "t1") unlockAchievement("a-msg");
      });
    });
  }

  /* ------------------------------------------------------------------
     MAPA DE RECUERDOS
  ------------------------------------------------------------------ */
  function renderMemoryMap() {
    const map = document.getElementById("memory-map");
    memories.forEach(m => {
      const pin = document.createElement("button");
      pin.type = "button";
      pin.className = "memory-pin";
      pin.style.top = m.top + "%";
      pin.style.left = m.left + "%";
      pin.innerHTML = `<span class="memory-pin__icon" aria-hidden="true">${m.icon}</span><span class="memory-pin__label">${m.label}</span>`;
      pin.addEventListener("click", () => {
        pin.classList.add("is-visited");
        if (!state.memoriesVisited.includes(m.id)) {
          state.memoriesVisited.push(m.id);
          saveState();
          if (m.id === memories[0].id) unlockAchievement("a-cita");
          if (state.memoriesVisited.length >= memories.length) unlockAchievement("a-explorer");
        }
        openModal(`
          <p class="modal-eyebrow">💗 ¡RECUERDO DESBLOQUEADO!</p>
          <img src="assets/images/memories/${m.image}" alt="Foto del recuerdo: ${m.title}"
               onerror="this.remove()">
          <p class="modal-eyebrow">${m.date}</p>
          <h3>${m.icon} ${m.title}</h3>
          <p>${m.story}</p>
        `);
      });
      map.appendChild(pin);
      if (state.memoriesVisited.includes(m.id)) pin.classList.add("is-visited");
    });
  }

  /* ------------------------------------------------------------------
     CARTAS
  ------------------------------------------------------------------ */
  function renderLetters() {
    const grid = document.getElementById("letters-grid");
    letters.forEach(letter => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "letter-envelope" + (state.lettersOpened.includes(letter.id) ? " is-opened" : "");
      btn.innerHTML = `
        <div class="letter-envelope__icon" aria-hidden="true">${letter.icon}</div>
        <div class="letter-envelope__label">${letter.label}</div>
      `;
      btn.addEventListener("click", () => {
        btn.classList.add("is-opened");
        if (!state.lettersOpened.includes(letter.id)) {
          state.lettersOpened.push(letter.id);
          saveState();
          if (state.lettersOpened.length >= letters.length) unlockAchievement("a-cartas");
        }
        openModal(`
          <p class="modal-eyebrow">${letter.label}</p>
          <h3>${letter.icon} Para ti</h3>
          <p>${letter.body}</p>
        `);
      });
      grid.appendChild(btn);
    });
  }

  /* ------------------------------------------------------------------
     50 COSAS QUE AMO DE TI
  ------------------------------------------------------------------ */
  function renderReasonsProgress() {
    document.getElementById("reason-counter").textContent =
      `${state.reasonsRevealed} / ${reasons.length} descubiertas`;
  }

  function initReasons() {
    renderReasonsProgress();
    const btn = document.getElementById("reveal-heart-btn");
    const card = document.getElementById("reason-card");
    const numberEl = document.getElementById("reason-number");
    const textEl = document.getElementById("reason-text");
    const log = document.getElementById("reason-log");

    // repone las razones ya vistas en el registro visual
    for (let i = 0; i < state.reasonsRevealed; i++) {
      const chip = document.createElement("span");
      chip.className = "reason-log__chip";
      chip.textContent = "#" + String(i + 1).padStart(2, "0");
      log.appendChild(chip);
    }

    btn.addEventListener("click", () => {
      if (state.reasonsRevealed >= reasons.length) {
        openModal(`
          <p class="modal-eyebrow">50 / 50</p>
          <h3>Has descubierto las 50 cosas ✨</h3>
          <p>Y aun así, todos los días encuentro una más.</p>
        `);
        return;
      }
      const index = state.reasonsRevealed;
      const reason = reasons[index];
      numberEl.textContent = `❤️ #${String(index + 1).padStart(2, "0")}`;
      textEl.textContent = reason;
      card.hidden = false;
      card.classList.remove("reason-card");
      void card.offsetWidth; // reinicia animación
      card.classList.add("reason-card");

      const chip = document.createElement("span");
      chip.className = "reason-log__chip";
      chip.textContent = "#" + String(index + 1).padStart(2, "0");
      log.appendChild(chip);

      state.reasonsRevealed += 1;
      saveState();
      renderReasonsProgress();

      if (state.reasonsRevealed >= reasons.length) {
        unlockAchievement("a-corazon");
        setTimeout(() => {
          openModal(`
            <p class="modal-eyebrow">50 / 50</p>
            <h3>Has descubierto las 50 cosas... ✨</h3>
            <p>Y esta lista, en realidad, nunca termina de verdad.</p>
          `);
        }, 900);
      }
    });
  }

  /* ------------------------------------------------------------------
     REPRODUCTOR DE CANCIONES
  ------------------------------------------------------------------ */
  function initPlayer() {
    const list = document.getElementById("song-list");
    const audio = document.getElementById("player-audio");
    const playBtn = document.getElementById("player-play");
    const prevBtn = document.getElementById("player-prev");
    const nextBtn = document.getElementById("player-next");
    const titleEl = document.getElementById("player-title");
    const artistEl = document.getElementById("player-artist");
    const descEl = document.getElementById("player-description");
    const coverEl = document.getElementById("player-cover");
    const eqEl = document.getElementById("player-eq");
    const progressFill = document.getElementById("player-progress");

    let currentIndex = -1;

    songs.forEach((song, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <button type="button" class="song-item" data-index="${i}">
          <span class="song-item__cover" aria-hidden="true">🎵</span>
          <span class="song-item__meta">
            <span class="song-item__title">${song.title}</span><br>
            <span class="song-item__artist">${song.artist}</span>
          </span>
        </button>
      `;
      list.appendChild(li);
    });

    function loadSong(index) {
      currentIndex = (index + songs.length) % songs.length;
      const song = songs[currentIndex];
      titleEl.textContent = song.title;
      artistEl.textContent = song.artist;
      descEl.textContent = song.description;
      coverEl.textContent = "🎵";
      progressFill.style.width = "0%";
      audio.pause();
      audio.setAttribute("src", `assets/audio/${song.audio}`);
      list.querySelectorAll(".song-item").forEach((btn, i) => {
        btn.classList.toggle("is-active", i === currentIndex);
      });
      setPlayingUI(false);
    }

    function setPlayingUI(isPlaying) {
      playBtn.textContent = isPlaying ? "⏸" : "▶";
      eqEl.classList.toggle("is-playing", isPlaying && !prefersReducedMotion);
    }

    playBtn.addEventListener("click", () => {
      if (currentIndex === -1) loadSong(0);
      if (audio.paused) {
        audio.play().catch(() => {
          // no hay archivo de audio disponible todavía: solo mostramos la interfaz
          showToast("🎵", "Añade tus canciones en assets/audio/ para poder reproducirlas.");
        });
        setPlayingUI(true);
        if (!state.songsPlayed.includes(currentIndex)) {
          state.songsPlayed.push(currentIndex);
          saveState();
          unlockAchievement("a-melomana");
        }
      } else {
        audio.pause();
        setPlayingUI(false);
      }
    });

    prevBtn.addEventListener("click", () => loadSong(currentIndex - 1));
    nextBtn.addEventListener("click", () => loadSong(currentIndex + 1));

    list.addEventListener("click", (e) => {
      const btn = e.target.closest(".song-item");
      if (!btn) return;
      loadSong(Number(btn.dataset.index));
    });

    audio.addEventListener("timeupdate", () => {
      if (audio.duration) progressFill.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    });
    audio.addEventListener("ended", () => setPlayingUI(false));

    loadSong(0);
  }

  /* ------------------------------------------------------------------
     CIELO DEL FUTURO
  ------------------------------------------------------------------ */
  function renderFutureSky() {
    const sky = document.getElementById("future-sky");

    futurePlans.forEach(plan => {
      const star = document.createElement("button");
      star.type = "button";
      star.className = "future-star";
      star.style.top = plan.top + "%";
      star.style.left = plan.left + "%";
      star.style.animationDelay = (Math.random() * 2) + "s";
      star.setAttribute("aria-label", "Deseo escondido");
      star.innerHTML = `<span aria-hidden="true">${plan.icon}</span>`;
      star.addEventListener("click", () => {
        star.classList.add("is-unlocked");
        openModal(`
          <p class="modal-eyebrow">✨ DESEO DESBLOQUEADO</p>
          <h3>${plan.icon} Todavía por vivir</h3>
          <p>${plan.text}</p>
        `);
      });
      sky.appendChild(star);
    });

    // estrella secreta, casi invisible
    const ghost = document.createElement("button");
    ghost.type = "button";
    ghost.className = "future-star future-star--ghost";
    ghost.style.top = "82%";
    ghost.style.left = "50%";
    ghost.setAttribute("aria-label", "???");
    ghost.innerHTML = `<span aria-hidden="true">✦</span>`;
    ghost.addEventListener("click", () => unlockSecret("ghost-star"));
    sky.appendChild(ghost);

    document.getElementById("future-star-big").addEventListener("click", () => {
      openModal(`
        <p class="modal-eyebrow">✨ DESEO ESPECIAL</p>
        <h3>Todo lo que todavía nos queda por vivir</h3>
        <p>Esto es solo el mapa de un pequeño trozo del camino. Queda un universo entero por delante.</p>
      `);
    });
  }

  /* ------------------------------------------------------------------
     FINAL: TEXTO PROGRESIVO
  ------------------------------------------------------------------ */
  function initFinal() {
    const finalLines = [
      "¿Sabes qué es lo más bonito de todo esto?",
      "Que esto solamente es el primer capítulo.",
      "365 días.",
      "Cientos de recuerdos.",
      "Y todavía quiero vivir muchísimos más contigo."
    ];
    const container = document.getElementById("final-text");
    const continueBtn = document.getElementById("final-continue-btn");
    let started = false;

    function playSequence() {
      if (started) return;
      started = true;
      finalLines.forEach((line, i) => {
        const p = document.createElement("p");
        p.textContent = line;
        p.style.animationDelay = (i * (prefersReducedMotion ? 0 : 1.1)) + "s";
        container.appendChild(p);
      });
      setTimeout(() => {
        continueBtn.hidden = false;
      }, prefersReducedMotion ? 200 : finalLines.length * 1100 + 400);
    }

    const finalSection = document.getElementById("final");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) playSequence();
      });
    }, { threshold: 0.5 });
    observer.observe(finalSection);

    continueBtn.addEventListener("click", () => {
      continueBtn.hidden = true;
      document.getElementById("final-message").hidden = false;
    });
  }

  /* ------------------------------------------------------------------
     INICIALIZACION GENERAL
  ------------------------------------------------------------------ */
  function init() {
    document.body.classList.add("no-scroll");
    spawnFloatingHearts();

    document.getElementById("enter-button").addEventListener("click", enterWorld);

    initNav();
    initWelcome();
    renderTimeline();
    renderMemoryMap();
    renderLetters();
    initReasons();
    initPlayer();
    renderFutureSky();
    renderAchievements();
    renderSecrets();
    initSecretTriggers();
    initFinal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
