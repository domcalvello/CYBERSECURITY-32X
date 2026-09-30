const chapters = [
  {
    slug: "discovery",
    phase: "Discontinued find",
    title: "Found beneath the dust",
    image: "assets/images/1_discovery.png",
    alt: "A worn Cybersecurity Sega 32X game box discovered in an abandoned computer store bin.",
    description: "The store had been empty for decades. Under dead monitors, manuals and warped diskettes sat a 32X box no catalog seemed to remember.",
    detail: "Inventory markings place the object among discontinued business software—not games. The cardboard is sun-faded, but the foil seal is still intact.",
    note: "I swear this was not here last week.",
    material: "material-dust"
  },
  {
    slug: "unboxing",
    phase: "Unboxing",
    title: "A cartridge with no record",
    image: "assets/images/2_unboxing.png",
    alt: "A hand holding the Cybersecurity 32X cartridge over its opened box and manual.",
    description: "Inside: one cartridge, a thin manual and packaging that looks professionally printed, then deliberately forgotten.",
    detail: "The label uses the same art as the box, but the shell has no molded production code. Dust sits inside the carton folds, suggesting it was opened long ago.",
    note: "The cart is heavier than a normal one.",
    material: "material-cardboard"
  },
  {
    slug: "box-art",
    phase: "Box cover",
    title: "Enter the Net",
    image: "assets/images/3_box_cover.png",
    alt: "The worn front box art for Cybersecurity on Sega 32X.",
    description: "The cover promises a network war rendered as an endless green grid: hack, fight, survive. It reads like arcade fantasy built from early internet anxiety.",
    detail: "No developer logo appears on the front. The age mark and Sega seal are present, while every credit that would identify the studio is missing.",
    note: "That red thing is definitely the final boss.",
    material: "material-studio"
  },
  {
    slug: "advertisement",
    phase: "Paper trail",
    title: "One advertisement survived",
    image: "assets/images/4_ad_discovery.png",
    alt: "An October 1995 newspaper advertisement listing Cybersecurity for Sega 32X.",
    description: "An October 1995 circular lists the game at $69.95 beneath the heading ‘Cyberspace Command.’ It is the first proof the release was meant to be public.",
    detail: "The advertisement repeats the box tagline and calls the title a rare find. No launch date, studio, or review score appears anywhere on the page.",
    note: "$69.95?! I need a whole summer job.",
    material: "material-newsprint"
  },
  {
    slug: "hardware",
    phase: "Hardware setup",
    title: "Channel three",
    image: "assets/images/5_sega_setup.png",
    alt: "A Sega Genesis and 32X connected to a dusty CRT television beside the Cybersecurity cartridge.",
    description: "A Genesis, 32X, CRT and three-button controller are assembled on the store counter. The television holds on channel three. The cartridge seats cleanly.",
    detail: "Power reaches the base console first, then the 32X. There is no battery warning and no startup error—only a longer-than-normal black screen.",
    note: "Do not bump the adapter. Seriously.",
    material: "material-workbench"
  },
  {
    slug: "title-screen",
    phase: "Start screen!",
    title: "The signal answers",
    image: "assets/images/6_turned_on.png",
    alt: "Cybersecurity title screen glowing on a CRT television.",
    description: "After eleven seconds, the grid appears. There is no publisher splash, no developer credit and no attract mode—just Start and Options waiting in phosphor green.",
    detail: "The copyright line claims 1995. The menu tone is lower than a standard Genesis chime, with a second pulse that seems to come from the television itself.",
    note: "OK. Nobody touch anything.",
    material: "material-retail gameplay",
    stickers: [
      { text: "MTV", src: "assets/stickers/mtv-sticker.png", cls: "image-sticker" },
      { text: "GOOSEBUMPS", src: "assets/stickers/goosebumps-sticker.png", cls: "image-sticker" }
    ]
  },
  {
    slug: "character-select",
    phase: "Player select",
    title: "Choose your fighter",
    image: "assets/images/7_select_screen.png",
    alt: "Character selection screen showing Warden, Breach and Synapse.",
    description: "Three security archetypes divide the roster: defense, offense and control. The blue guy looked like a good choice.",
    detail: "Warden blocks and counters. Breach attacks systems directly. Synapse appears to manipulate enemy state. Two-player mode remains selectable.",
    note: "Breach looks cooler, but Warden has the shield.",
    material: "material-holo gameplay",
    stickers: [
      { text: "WWF", src: "assets/stickers/wwf-sticker.png", cls: "image-sticker" },
      { text: "POWER RANGERS", src: "assets/stickers/powerrangers-sticker.png", cls: "image-sticker power-ranger-sticker" }
    ]
  },
  {
    slug: "warden",
    phase: "Fighter Selected",
    title: "Detect. Contain. Eradicate.",
    image: "assets/images/8_warden_selected.png",
    alt: "Warden, the armored blue defensive character, holding a glowing shield.",
    description: "Warden materializes in cobalt armor with a hex shield and a wrist console. The game labels him the Blue Team defense specialist.",
    detail: "Holding C maintains the shield. Forward plus B performs Shield Bash. His meter fills when attacks are blocked rather than dealt.",
    note: "BLUE TEAM forever!!!",
    material: "material-blueplastic gameplay",
    stickers: [
      { text: "X-MEN", src: "assets/stickers/xmen-sticker.png", cls: "image-sticker" },
      { text: "BATMAN", src: "assets/stickers/batman-sticker.png", cls: "image-sticker" }
    ]
  },
  {
    slug: "alert",
    phase: "Cut scene",
    title: "Unauthorized activity",
    image: "assets/images/9_cut_scene.png",
    alt: "Red pixel-art security control room displaying alert detected and unauthorized activity.",
    description: "The security chamber identifies a simultaneous global threat spike. Firewall, EDR and intrusion detection are active—yet something is already inside.",
    detail: "The world map lights faster than the counter can resolve. One red node remains centered over the facility the game calls K01.",
    note: "Ay, caramba. This got serious fast.",
    material: "material-alert gameplay",
    stickers: [
      { text: "THE SIMPSONS", src: "assets/stickers/simpsons-sticker.png", cls: "image-sticker" },
      { text: "BEAVIS + BUTT-HEAD", src: "assets/stickers/beavisandbutthead-sticker.png", cls: "image-sticker" }
    ]
  },
  {
    slug: "infection",
    phase: "Cut scene",
    title: "The desktop opens",
    image: "assets/images/10_cut_scene_2.png",
    alt: "A pixel-art desktop and circuit board showing malware processes and an infection warning.",
    description: "Windows, processes and hardware become one navigable machine. Malicious files are not menu items; they are enemies occupying physical space.",
    detail: "The process list names evilproc.exe, backdoor.dll and rootkit.sys. A message window flashes ‘Access Granted’ before the arena finishes loading.",
    note: "This is what Dad thinks happens when I use AOL.",
    material: "material-circuit gameplay",
    stickers: [
      { text: "AOL", src: "assets/stickers/aol-sticker.png", cls: "image-sticker" },
      { text: "NETSCAPE", src: "assets/stickers/netscape-sticker.png", cls: "image-sticker" }
    ]
  },
  {
    slug: "desktop-arena",
    phase: "Level one",
    title: "Desktop danger",
    image: "assets/images/11_desktop_level_1.png",
    alt: "Empty pixel-art desktop battlefield with folders, clouds and a trapdoor.",
    description: "Level one is a familiar desktop stretched into an arena. Folders sit on raised platforms. A dark access hatch waits in the floor.",
    detail: "Nothing attacks until the player crosses the center line. The taskbar lights appear to forecast which edge will spawn the next wave.",
    note: "Looks peaceful. Definitely a trap.",
    material: "material-desktop gameplay",
    stickers: [
      { text: "WINDOWS 95", src: "assets/stickers/windows95-sticker.png", cls: "image-sticker" },
      { text: "GOT MILK?", src: "assets/stickers/gotmilk-sticker.png", cls: "image-sticker" }
    ]
  },
  {
    slug: "first-wave",
    phase: "Level one",
    title: "You’ve got malware",
    image: "assets/images/12_first_play.png",
    alt: "Warden blocking malware creatures in the first Cybersecurity battle.",
    description: "Phishing drones cast bait, script imps rush from behind, and a Trojan carrier breaks the front line. Warden’s shield converts every clean block into charge.",
    detail: "The enemies are cybersecurity vocabulary turned into arcade silhouettes. Their behavior teaches the concept before the manual ever names it.",
    note: "Return this before Friday or the late fee is brutal.",
    material: "material-arcade gameplay",
    stickers: [
      { text: "BLOCKBUSTER VIDEO", src: "assets/stickers/blockbuster-sticker.png", cls: "image-sticker blockbuster-sticker" },
      { text: "POG CHAMPION", src: "assets/stickers/pog-sticker.png", cls: "image-sticker" }
    ]
  },
  {
    slug: "enemy-dossier",
    phase: "Enemies",
    title: "Know your threats",
    image: "assets/images/Level_1_enemies.png",
    alt: "Sprite sheet of six Cybersecurity enemies including a phishing creature, attachment monster and Trojan carrier.",
    description: "The first wave contains six readable enemy classes. Every silhouette communicates a threat before it moves: bait, attachment, script, pop-up, Trojan and dropper.",
    detail: "The sprite sheet exposes how tightly the combat language was planned. Even the support unit’s tanks use green and purple payload colors.",
    note: "The paperclip one is the WORST.",
    material: "material-enemy gameplay",
    stickers: [
      { text: "MADBALLS", src: "assets/stickers/madballs-sticker.png", cls: "image-sticker" }
    ]
  },
  {
    slug: "gamefan-cover",
    phase: "Paper trail",
    title: "The magazine remembers",
    image: "assets/images/13_gamefan_cover.png",
    alt: "A worn GameFan magazine cover featuring Cybersecurity for Sega 32X.",
    description: "A damaged May 1995 issue of GameFan gives the lost game its cover. Warden, Breach and Synapse appear together beneath ‘World Premiere.’",
    detail: "The cover promises explosive two-player net combat and a full strategy feature. Pages 40 and 41 remain legible inside.",
    note: "Found it! Do NOT bend the cover.",
    material: "material-magazine gameplay",
    stickers: [
      { text: "BEANIE BABIES", src: "assets/stickers/beaniebabies-sticker.png", cls: "image-sticker" },
      { text: "SCHOLASTIC BOOK FAIR", src: "assets/stickers/bookfair-sticker.png", cls: "image-sticker" }
    ]
  },
  {
    slug: "strategy-guide",
    phase: "Strategy guide",
    title: "A secret system defender",
    image: "assets/images/14_gamefan_open.png",
    alt: "Open GameFan spread explaining level one enemies and the Microsoft Sentinel special move.",
    description: "The article documents every first-wave enemy and reveals a screen-clearing summon: collect the upgrade cube, then press X + Y + Z.",
    detail: "This is the only point where the game expects a six-button controller. The magazine calls Sentinel an ‘ultimate system defender.’",
    note: "They hid the best move in a magazine?!",
    material: "material-magazine gameplay",
    stickers: [
      { text: "NINTENDO POWER", src: "assets/stickers/nintendo-sticker.png", cls: "image-sticker" },
    ]
  },
  {
    slug: "sentinel",
    phase: "Special move",
    title: "System defender deployed",
    image: "assets/images/15_sentinel_deployed.png",
    alt: "A blue and white Microsoft Sentinel robot firing a huge screen-clearing energy blast.",
    description: "The hidden input works. Sentinel enters beside Warden and sends a blue firewall across the desktop, clearing every active process in a single pass.",
    detail: "The summon freezes the clock but not the debris. One extra press releases an emergency blast before Sentinel disappears.",
    note: "X + Y + Z. Write that down forever.",
    material: "material-chrome gameplay",
    stickers: [
      { text: "TAMAGOTCHI", src: "assets/stickers/tamagotchi-sticker.png", cls: "image-sticker" },
      { text: "TECH DECK", src: "assets/stickers/techdeck-sticker.png", cls: "image-sticker" }
    ]
  },
  {
    slug: "boss",
    phase: "Level two boss",
    title: "Breach versus Interceptor",
    image: "assets/images/16_breach_v_inceptor_boss.png",
    alt: "Breach facing the armored Interceptor boss in a pixel-art server facility.",
    description: "The campaign changes operators without warning. Breach enters a burning server facility and faces Interceptor, a boss built from hijacked authentication systems.",
    detail: "Interceptor displays a captured token above one hand. His armor combines access controls, cables and a live status panel.",
    note: "Boss music just blew out the left speaker.",
    material: "material-boss gameplay",
    stickers: [
      { text: "MORTAL KOMBAT", src: "assets/stickers/mk-sticker.png", cls: "image-sticker" },
      { text: "SPAWN", src: "assets/stickers/spawn-sticker.png", cls: "image-sticker" }
    ]
  },
  {
    slug: "hijack",
    phase: "Level two boss",
    title: "Session hijack",
    image: "assets/images/17_inceptor_attack.png",
    alt: "Interceptor stealing a session token from Breach while connection compromised flashes in red.",
    description: "Interceptor steals the live session token and turns the connection against the player. Breach’s movement locks while the interface floods red.",
    detail: "The attack is labeled ‘BetterCAP: Session Hijack.’ Escaping requires breaking the connection rather than damaging the boss directly.",
    note: "Pull the cable? No—that makes it worse.",
    material: "material-hijack gameplay",
    stickers: [
      { text: "NINE INCH NAILS", src: "assets/stickers/nin-sticker.png", cls: "image-sticker" }
    ]
  },
  {
    slug: "takedown",
    phase: "Level two boss",
    title: "Unauthorized network removed",
    image: "assets/images/18_breach_attack.png",
    alt: "Breach disabling the rogue access point and defeating Interceptor in green light.",
    description: "Breach identifies the rogue access point, confirms the BSSID, disconnects clients, blocks the malicious signal and isolates the device.",
    detail: "The finishing move is a visible incident-response checklist. Each completed step feeds the final green blast until the unauthorized network disappears.",
    note: "GAME CLEARED. Nobody will ever believe this.",
    material: "material-victory gameplay",
    stickers: [
      { text: "FRESH PRINCE", src: "assets/stickers/freshprince-sticker.png", cls: "image-sticker" },
      { text: "SPACE JAM", src: "assets/stickers/spacejam-sticker.png", cls: "image-sticker" }
    ]
  }
];

const story = document.querySelector("#story");
const stageList = document.querySelector("#stage-list");
const stageDialog = document.querySelector("#stage-dialog");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentIndex = 0;
let powered = false;
let soundEnabled = false;
let navigationLock = false;
let navigationToken = 0;
const navigationTrail = [];

function padButton(letter, label, action) {
  if (letter === "START") {
    return `<button class="pad-button start-pad" type="button" data-action="${action}" aria-label="Open chapter select"><span class="letter">START</span></button>`;
  }
  return `<button class="pad-button" type="button" data-action="${action}"><span class="letter">${letter}</span><small>${label}</small></button>`;
}

function stickerMarkup(sticker) {
  if (sticker.src) {
    const modifier = sticker.src.includes("microsoft-sticker") ? " microsoft-sticker" : "";
    return `<img class="sticker ${sticker.cls}${modifier}" src="${sticker.src}" alt="" aria-hidden="true" decoding="async">`;
  }
  const style = `--sticker-bg:${sticker.bg};--sticker-fg:${sticker.fg}`;
  return `<span class="sticker ${sticker.cls}" style="${style}" aria-hidden="true">${sticker.text}</span>`;
}

function renderChapters() {
  story.innerHTML = chapters.map((chapter, index) => {
    const number = String(index + 1).padStart(2, "0");
    const stickers = chapter.stickers?.length
      ? `<div class="sticker-zone">${chapter.stickers.map(stickerMarkup).join("")}</div>`
      : "";
    return `
      <article class="chapter ${index % 2 ? "even" : "odd"} ${chapter.material}" id="${chapter.slug}" data-index="${index}" aria-labelledby="title-${chapter.slug}">
        <div class="media-panel">
          <span class="chapter-label">ARCHIVE ${number}<br>${chapter.phase}</span>
          <div class="media-frame">
            <img src="${chapter.image}" alt="${chapter.alt}" ${index > 1 ? 'loading="lazy"' : ""} decoding="async">
          </div>
          <button class="mobile-story-jump" type="button" data-action="details" aria-label="Continue to ${chapter.title} description and controls">
            <span>NEXT</span>
          </button>
        </div>
        <div class="story-panel">
          ${stickers}
          <h2 id="title-${chapter.slug}">${chapter.title}</h2>
          <p class="chapter-description">${chapter.description}</p>
          <p class="detail-note" id="detail-${chapter.slug}">${chapter.detail}</p>
          <div class="chapter-controls" aria-label="Controls for ${chapter.title}">
            ${padButton("A", "INSPECT", "inspect")}
            ${padButton("B", "BACK", "back")}
            ${padButton("C", index === chapters.length - 1 ? "FOOTAGE" : "CONTINUE", "next")}
            ${padButton("START", "CHAPTERS", "stages")}
          </div>
        </div>
      </article>`;
  }).join("");

  stageList.innerHTML = chapters.map((chapter, index) => `
    <button type="button" data-stage="${index}" ${index === 0 ? 'aria-current="true"' : ""}>
      <strong>${String(index + 1).padStart(2, "0")} ${chapter.title}</strong>
      <span>${chapter.phase}</span>
    </button>`).join("");
}

class SignalTransition {
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl", { alpha: true, antialias: false });
    if (this.gl) this.setup();
    window.addEventListener("resize", () => this.resize(), { passive: true });
    this.resize();
  }
  setup() {
    const gl = this.gl;
    const vertex = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
    const fragment = `
      precision mediump float;
      uniform float t;
      uniform vec2 r;
      uniform float m;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      void main(){
        vec2 uv=gl_FragCoord.xy/r;
        float band=step(.72,hash(vec2(floor(uv.y*34.0),floor(t*18.0))));
        float scan=step(.55,fract(gl_FragCoord.y*.5+t*36.0));
        float dust=step(.93,hash(floor(uv*vec2(120.,80.))+t));
        float edge=smoothstep(.0,.38,t)*smoothstep(1.,.62,t);
        vec3 c;
        float a;
        if(m<.5){c=vec3(1.,.82,.48)*dust+vec3(1.)*scan*.28;a=(dust*.65+scan*.18)*edge;}
        else if(m<1.5){c=vec3(.12,.95,.4)*band+vec3(.08,.5,1.)*scan*.32;a=(band*.5+scan*.14)*edge;}
        else if(m<2.5){c=vec3(1.,.05,.02)*band+vec3(1.,.28,.02)*scan*.5;a=(band*.72+scan*.22)*edge;}
        else{c=vec3(.34,1.,.12)*band+vec3(.75,1.,.5)*scan*.35;a=(band*.46+scan*.12)*edge;}
        gl_FragColor=vec4(c,a);
      }`;
    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment));
    gl.linkProgram(program);
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,3,-1,-1,3]), gl.STATIC_DRAW);
    const location = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
    this.program = program;
    this.time = gl.getUniformLocation(program, "t");
    this.resolution = gl.getUniformLocation(program, "r");
    this.mode = gl.getUniformLocation(program, "m");
  }
  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    this.canvas.width = Math.round(innerWidth * dpr);
    this.canvas.height = Math.round(innerHeight * dpr);
  }
  play(targetIndex = 0) {
    if (!this.gl || reducedMotion.matches) return;
    this.canvas.classList.add("active");
    const started = performance.now();
    const frame = now => {
      const elapsed = Math.min((now - started) / 650, 1);
      const gl = this.gl;
      gl.viewport(0, 0, this.canvas.width, this.canvas.height);
      gl.clearColor(0,0,0,0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(this.time, elapsed);
      gl.uniform2f(this.resolution, this.canvas.width, this.canvas.height);
      gl.uniform1f(this.mode, targetIndex <= 4 ? 0 : targetIndex <= 14 ? 1 : targetIndex <= 17 ? 2 : 3);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (elapsed < 1) requestAnimationFrame(frame);
      else this.canvas.classList.remove("active");
    };
    requestAnimationFrame(frame);
  }
}

class ConsoleAudio {
  constructor() { this.context = null; }
  ensure() { this.context ||= new (window.AudioContext || window.webkitAudioContext)(); }
  blip(frequency = 160, duration = .08, type = "square") {
    if (!soundEnabled) return;
    this.ensure();
    const ctx = this.context;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(35, frequency * .62), ctx.currentTime + duration);
    gain.gain.setValueAtTime(.055, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + duration);
    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + duration);
  }
  power() {
    if (!soundEnabled) return;
    this.ensure();
    [65, 130, 260].forEach((f, i) => setTimeout(() => this.blip(f, .2, "sawtooth"), i * 90));
  }
}

renderChapters();
const signal = new SignalTransition(document.querySelector("#signal-canvas"));
const audio = new ConsoleAudio();

function activeChapter() {
  return document.querySelector(`.chapter[data-index="${currentIndex}"]`);
}

function setCurrent(index, updateHash = true) {
  currentIndex = Math.max(0, Math.min(chapters.length - 1, index));
  document.querySelectorAll(".chapter").forEach((chapter, i) => chapter.classList.toggle("is-active", i === currentIndex));
  document.querySelectorAll("[data-stage]").forEach((button, i) => {
    if (i === currentIndex) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  if (updateHash) history.replaceState(null, "", `#${chapters[currentIndex].slug}`);
}

function transitionClass(index) {
  if (index <= 4) return "transition-paper";
  if (index <= 14) return "transition-crt";
  if (index <= 17) return "transition-threat";
  return "transition-restore";
}

function animateChapter(index) {
  const chapter = document.querySelector(`.chapter[data-index="${index}"]`);
  const classes = ["transition-paper", "transition-crt", "transition-threat", "transition-restore"];
  chapter.classList.remove(...classes);
  void chapter.offsetWidth;
  chapter.classList.add(transitionClass(index));
  setTimeout(() => chapter.classList.remove(...classes), 950);
}

function scrollToIndex(index, recordHistory = true) {
  const target = Math.max(0, Math.min(chapters.length - 1, index));
  if (target === currentIndex) return;
  const origin = currentIndex;
  if (recordHistory && navigationTrail.at(-1) !== origin) navigationTrail.push(origin);
  navigationLock = true;
  const lockToken = ++navigationToken;
  signal.play(target);
  audio.blip(target > currentIndex ? 210 : 120, .1);
  setCurrent(target);
  animateChapter(target);
  document.querySelector(`.chapter[data-index="${target}"]`).scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
  setTimeout(() => {
    if (lockToken === navigationToken) navigationLock = false;
  }, reducedMotion.matches ? 30 : 2500);
}

function inspectCurrent() {
  const chapter = activeChapter();
  if (!chapter) return;
  const next = !chapter.classList.contains("inspected");
  chapter.classList.toggle("inspected", next);
  chapter.querySelectorAll('[data-action="inspect"]').forEach(button => button.setAttribute("aria-pressed", String(next)));
  audio.blip(next ? 440 : 280, .09, "triangle");
}

function nextChapter() {
  if (currentIndex === chapters.length - 1) {
    signal.play(currentIndex);
    document.querySelector("#recovered-video").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" });
    return;
  }
  scrollToIndex(currentIndex + 1);
}

function previousChapter() {
  if (navigationTrail.length) scrollToIndex(navigationTrail.pop(), false);
  else if (currentIndex > 0) scrollToIndex(currentIndex - 1, false);
  else document.querySelector("#archive").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" });
}

function openStages() {
  audio.blip(330, .12);
  stageDialog.showModal();
  stageDialog.querySelector(`[data-stage="${currentIndex}"]`)?.focus();
}

function powerOn() {
  if (powered) {
    document.querySelector("#archive").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" });
    return;
  }
  powered = true;
  document.body.classList.remove("preboot");
  document.body.classList.add("powered");
  document.querySelector("#power-switch").setAttribute("aria-pressed", "true");
  audio.power();
  signal.play(0);
  setTimeout(() => document.querySelector("#archive").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" }), reducedMotion.matches ? 0 : 900);
}

document.querySelector("#power-switch").addEventListener("click", powerOn);
document.querySelector("#boot-start").addEventListener("click", powerOn);
document.querySelector("#stage-close").addEventListener("click", () => stageDialog.close());
document.querySelector("#sound-toggle").addEventListener("click", event => {
  soundEnabled = !soundEnabled;
  event.currentTarget.setAttribute("aria-pressed", String(soundEnabled));
  event.currentTarget.setAttribute("aria-label", soundEnabled ? "Turn sound off" : "Turn sound on");
  event.currentTarget.querySelector(".sound-state").textContent = soundEnabled ? "ON" : "OFF";
  if (soundEnabled) { audio.ensure(); audio.blip(520, .13, "triangle"); }
});
document.querySelector("#replay-button").addEventListener("click", () => {
  setCurrent(0);
  document.querySelector("#power-deck").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" });
});

story.addEventListener("click", event => {
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const chapter = actionButton.closest(".chapter");
  if (chapter) setCurrent(Number(chapter.dataset.index));
  const action = actionButton.dataset.action;
  if (action === "inspect") inspectCurrent();
  if (action === "back") previousChapter();
  if (action === "next") nextChapter();
  if (action === "details") chapter.querySelector(".story-panel").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
  if (action === "stages") openStages();
});

stageList.addEventListener("click", event => {
  const target = event.target.closest("[data-stage]");
  if (!target) return;
  stageDialog.close();
  scrollToIndex(Number(target.dataset.stage));
});

document.addEventListener("keydown", event => {
  if (event.key === "Tab") document.body.classList.add("keyboard-navigation");
  if (stageDialog.open) return;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
  const key = event.key.toLowerCase();
  if (key === "a") inspectCurrent();
  if (key === "b" || event.key === "ArrowLeft") previousChapter();
  if (key === "c" || event.key === "ArrowRight") nextChapter();
  if (event.key === "Enter" && powered) {
    event.preventDefault();
    openStages();
  }
});
document.addEventListener("pointerdown", () => document.body.classList.remove("keyboard-navigation"), { passive: true });

const observer = new IntersectionObserver(entries => {
  if (navigationLock) return;
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) {
    const observedIndex = Number(visible.target.dataset.index);
    if (observedIndex !== currentIndex) {
      if (navigationTrail.at(-1) !== currentIndex) navigationTrail.push(currentIndex);
      setCurrent(observedIndex, false);
    }
  }
}, { threshold: [.3, .5, .7] });
document.querySelectorAll(".chapter").forEach(chapter => observer.observe(chapter));

window.addEventListener("pointermove", event => {
  document.documentElement.style.setProperty("--pointer-x", `${(event.clientX / innerWidth) * 100}%`);
  document.documentElement.style.setProperty("--pointer-y", `${(event.clientY / innerHeight) * 100}%`);
}, { passive: true });

const requestedSlug = location.hash.slice(1);
const requestedIndex = chapters.findIndex(chapter => chapter.slug === requestedSlug);
if (requestedIndex >= 0) setCurrent(requestedIndex, false);
else setCurrent(0, false);
