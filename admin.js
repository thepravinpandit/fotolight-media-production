const STORAGE_KEY = "fotolightData";
const STORAGE_SYNC_KEY = "fotolightDataUpdatedAt";
const SYNC_DB_NAME = "fotolightSync";
const SYNC_DB_STORE = "fileHandles";
const SYNC_DB_KEY = "projectDirectory";
const AUTH_KEY = "fotolightAuth";
const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "fotolight2026";

const DEFAULT_DATA = window.FOTOLIGHT_DEFAULT_DATA || {
  hero: {
    eyebrow: "Foto Light Media Production",
    headline: "Life moves fast. Let’s freeze your favorite moments.",
    lead:
      "We offer expert digital photography, customized album printing, and vibrant videography to make sure your memories stay alive, forever.",
    cta: [
      { label: "Let’s Make Memories Together", href: "#contact" },
      { label: "View Portfolio", href: "#portfolio" },
    ],
    slides: [
      {
        image: "img/hero-carousel/banner-1.webp",
        caption: "Featured story",
        title: "Wedding Portrait Series",
      },
      {
        image: "img/hero-carousel/banner-2.webp",
        caption: "Featured story",
        title: "Engagement Evenings",
      },
      {
        image: "img/hero-carousel/banner-3.webp",
        caption: "Featured story",
        title: "Family Celebration",
      },
      {
        image: "img/hero-carousel/about-portrait.webp",
        caption: "Featured story",
        title: "Cinematic Ceremony",
      },
    ],
    stats: [
      { value: "120+", label: "Events covered" },
      { value: "48 hrs", label: "First edit" },
      { value: "4.9", label: "Client rating" },
    ],
    highlights: ["Wedding Photography", "Custom Albums", "Cinematic Films"],
  },
  ticker: [
    // "Vanta Apparel",
    // "Solar & Co",
    // "Atlas Studios",
    // "Maison Rue",
    // "Nova Cosmetics",
    // "Echo Mobility",
  ],
  about: {
    eyebrow: "About us",
    heading: "Capture Moments. Create Memories. Treasure Forever.",
    lead:
      "At Foto Light Media Production, we specialize in digital photography, custom album printing, and professional videography — all crafted with love and creativity.",
    features: [
      {
        title: "Photography that Tells Your Story",
        description:
          "From weddings and birthdays to family gatherings, we don’t just take pictures — we capture emotions, moments, and memories you’ll cherish forever.",
      },
      {
        title: "Albums that Keep Memories Alive",
        description:
          "Our digital album printing service transforms your favorite moments into beautifully designed keepsakes — a treasure you’ll hold close for a lifetime.",
      },
      {
        title: "Videography that Brings Memories to Life",
        description:
          "Relive your special occasions through cinematic videos — whether it’s a traditional ceremony or a modern celebration, we capture the magic in motion.",
      },
    ],
    closing:
      "Choose Foto Light Media for photography and videography that goes beyond just pictures and videos — we capture the essence of your happiest days.",
    heart: "Let’s create memories together.",
    image: "img/about-portrait.jpg",
  },
  services: [
    {
      icon: "01",
      title: "Wedding Photography",
      description:
        "We capture the magic, emotions, and timeless moments of your special day with precision and passion. Every smile, tear, and joyous celebration is preserved beautifully forever.",
      tag: "Timeless Moments",
    },
    {
      icon: "02",
      title: "Candid Photography",
      description:
        "True moments are unposed and full of life — that's what we love to capture. Our candid photography freezes natural emotions and spontaneous memories in the most authentic way.",
      tag: "Authentic & Natural",
    },
    {
      icon: "03",
      title: "Event Photography",
      description:
        "From grand celebrations to intimate gatherings, we cover every event with a keen eye for detail. No moment goes unnoticed, creating a vivid story of your occasion.",
      tag: "Full Coverage",
    },
    {
      icon: "04",
      title: "Videography",
      description:
        "Bring your memories to life with dynamic videography services. We capture every movement, laughter, and emotion in cinematic quality you’ll love watching again and again.",
      tag: "Cinematic Films",
    },
    {
      icon: "05",
      title: "Corporate Shoot",
      description:
        "Professional, polished, and powerful — our corporate shoots deliver. From team portraits to brand events, we craft visuals that elevate your corporate identity.",
      tag: "Brand Presence",
    },
    {
      icon: "06",
      title: "Product Photography",
      description:
        "We bring your products to life with high-quality, visually appealing images that highlight every detail. Perfect for e-commerce, catalogs, and campaigns.",
      tag: "E-commerce Ready",
    },
  ],
  useCases: [
    {
      number: "01",
      title: "Weddings & Receptions",
      description:
        "Full-day coverage for rituals, portraits, and highlight films.",
      bullets: ["Photo + video team", "Traditional + candid", "Album-ready edits"],
    },
    {
      number: "02",
      title: "Pre-Wedding & Engagement",
      description: "Styled shoots with cinematic light and storytelling frames.",
      bullets: ["Creative locations", "Outfit guidance", "Reel-ready cuts"],
    },
    {
      number: "03",
      title: "Family & Milestones",
      description: "Birthdays, anniversaries, and moments that feel intimate.",
      bullets: ["Natural expressions", "Soft, warm light", "Story-led coverage"],
    },
    {
      number: "04",
      title: "Corporate & Events",
      description: "Professional coverage that elevates your brand presence.",
      bullets: ["Team portraits", "Event highlights", "Fast turnarounds"],
    },
    {
      number: "05",
      title: "Product & E-commerce",
      description:
        "Crisp product visuals built for conversion and catalog use.",
      bullets: ["Clean backgrounds", "Detail close-ups", "Batch production"],
    },
    {
      number: "06",
      title: "Films & Highlight Edits",
      description: "Cinematic storytelling that feels alive for years to come.",
      bullets: ["Multi-camera setup", "Sound design", "Social cutdowns"],
    },
  ],
  useCasesCta: {
    text: "Not sure what you need? We’ll help you choose the right package.",
    label: "Get a Free Consult",
    href: "#contact",
  },
  portfolio: [
    { src: "img/portfolio/Portfolio-1.webp", alt: "Wedding portrait highlights" },
    { src: "img/portfolio/img-1.webp", alt: "Candid celebration moment" },
    { src: "img/portfolio/img-2.webp", alt: "Couple portrait with warm light" },
    { src: "img/portfolio/img-10.webp", alt: "Traditional ceremony detail" },
    { src: "img/portfolio/img-11.webp", alt: "Family gathering photo story" },
    { src: "img/portfolio/img-12.webp", alt: "Reception candid snapshot" },
    { src: "img/portfolio/img-15.webp", alt: "Bride and groom portrait" },
    { src: "img/portfolio/img-16.webp", alt: "Event highlight detail" },
    { src: "img/portfolio/img-17.webp", alt: "Evening celebration shot" },
    { src: "img/portfolio/img-18.webp", alt: "Emotive family moment" },
  ],
  photos: [
    { src: "img/portfolio/img-1.webp", alt: "Photo tile 1" },
    { src: "img/portfolio/img-10.webp", alt: "Photo tile 2" },
    { src: "img/portfolio/img-12.webp", alt: "Photo tile 3" },
    { src: "img/portfolio/img-15.webp", alt: "Photo tile 4" },
  ],
  videos: [
    {
      src: "video/intro-video.mp4",
      poster: "video/poster/intro-video.png",
      title: "Brand Film — Atelier",
      description: "Story-driven launch film with atmospheric lighting.",
    },
    {
      src: "video/haldi-video.mp4",
      poster: "video/poster/haldi-video.png",
      title: "Product Reveal — Nova",
      description: "Macro sequences and slow motion for premium detail.",
    },
    {
      src: "video/jai-mala-video.mp4",
      poster: "video/poster/jai-mala-video.png",
      title: "Event Recap — Echo",
      description: "High-energy edit with ambient sound design.",
    },
  ],
  stats: [
    { value: "48 hrs", label: "Average first edit turnaround" },
    { value: "30+", label: "Production partners worldwide" },
    { value: "92%", label: "Clients who return for season two" },
    { value: "8 yrs", label: "Building visual stories with light" },
  ],
  testimonials: [
    {
      quote:
        "Every shoot felt effortless, and the final cut launched our best campaign yet.",
      author: "— Creative Lead, Nova Cosmetics",
    },
    {
      quote: "They translated our brand into images we were proud to launch.",
      author: "— Founder, Maison Rue",
    },
    {
      quote: "On time, on budget, and the visuals were world-class.",
      author: "— Marketing Director, Echo Mobility",
    },
  ],
  contact: {
    email: "hello@fotolightmedia.in",
    phone: "+91 90000 00000",
    studio: "Mumbai, India",
    firstTime: {
      heading: "First time working with us?",
      description:
        "Share your date, venue, and the kind of memories you want. We’ll guide you through every step.",
      bullets: [
        "15-minute discovery call",
        "Custom quote within 24 hours",
        "Clear timeline & deliverables",
      ],
    },
    formLabels: {
      name: "Name",
      email: "Email",
      event: "Event type",
      message: "Tell us about your event",
      button: "Send Inquiry",
    },
  },
  footer: {
    logo: "img/logo.png",
    tagline: "Cinematic content studio focused on light, story, and impact.",
    email: "hello@fotolightmedia.in",
    phone: "+91 90000 00000",
    socials: "Instagram · Vimeo · Behance",
    copyright: "© 2026 FotoLight Media Studio",
  },
  settings: {
    maintenance: false,
    adminPassword: "",
    autoFileSync: false,
  },
  activityLog: [],
};

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const deepMerge = (target, source) => {
  if (!source) return target;
  Object.keys(source).forEach((key) => {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  });
  return target;
};

const loadData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return deepClone(DEFAULT_DATA);
    const parsed = JSON.parse(raw);
    return deepMerge(deepClone(DEFAULT_DATA), parsed);
  } catch (error) {
    console.warn("Failed to load data", error);
    return deepClone(DEFAULT_DATA);
  }
};

const state = {
  data: loadData(),
  activeSection: "dashboard",
  dirty: false,
  syncDirectoryHandle: null,
  autoSyncWarningShown: false,
};

const loginScreen = document.getElementById("login-screen");
const adminApp = document.getElementById("admin-app");
const loginForm = document.getElementById("login-form");
const navItems = document.querySelectorAll(".nav-item[data-section]");
const sectionContent = document.getElementById("section-content");
const sectionTitle = document.getElementById("section-title");
const sectionSubtitle = document.getElementById("section-subtitle");
const saveButton = document.getElementById("save-section");
const previewButton = document.getElementById("preview-site");
const logoutButton = document.getElementById("logout-btn");
const toastContainer = document.getElementById("toast-container");
const confirmModal = document.getElementById("confirm-modal");
const confirmTitle = document.getElementById("confirm-title");
const confirmMessage = document.getElementById("confirm-message");
const confirmCancel = document.getElementById("confirm-cancel");
const confirmAccept = document.getElementById("confirm-accept");
const importFileInput = document.getElementById("import-file");

const SECTION_META = {
  dashboard: {
    title: "Dashboard",
    subtitle: "Overview of activity and quick actions.",
  },
  hero: {
    title: "Hero Section",
    subtitle: "Edit the first impression and hero carousel.",
  },
  ticker: {
    title: "Ticker / Clients",
    subtitle: "Update the scrolling client name strip.",
  },
  about: {
    title: "About",
    subtitle: "Manage the story and portrait content.",
  },
  services: {
    title: "Services",
    subtitle: "Maintain service cards and offerings.",
  },
  useCases: {
    title: "Use Cases",
    subtitle: "Define key scenarios and CTA messaging.",
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Curate your gallery slider images.",
  },
  photos: {
    title: "Photos",
    subtitle: "Manage the four featured photo tiles.",
  },
  videos: {
    title: "Videos",
    subtitle: "Upload and edit featured videos.",
  },
  stats: {
    title: "Stats",
    subtitle: "Update performance metrics.",
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "Edit client stories and quotes.",
  },
  contact: {
    title: "Contact",
    subtitle: "Update contact details and form labels.",
  },
  footer: {
    title: "Footer",
    subtitle: "Adjust logo, social text, and legal details.",
  },
  settings: {
    title: "Settings",
    subtitle: "Security, import/export, and maintenance mode.",
  },
};

const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const setDirty = (value) => {
  state.dirty = value;
  saveButton.textContent = value ? "Save Changes*" : "Save Changes";
  saveButton.disabled = !value;
};

const showToast = (message) => {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
};

const supportsProjectSync = () => {
  return typeof window.showDirectoryPicker === "function";
};

const openSyncDb = () =>
  new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      resolve(null);
      return;
    }
    const request = indexedDB.open(SYNC_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(SYNC_DB_STORE)) {
        db.createObjectStore(SYNC_DB_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

const saveSyncDirectoryHandle = async (handle) => {
  const db = await openSyncDb();
  if (!db) return;
  await new Promise((resolve, reject) => {
    const tx = db.transaction(SYNC_DB_STORE, "readwrite");
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
    tx.objectStore(SYNC_DB_STORE).put(handle, SYNC_DB_KEY);
  });
  db.close();
};

const loadSyncDirectoryHandle = async () => {
  const db = await openSyncDb();
  if (!db) return null;
  const handle = await new Promise((resolve, reject) => {
    const tx = db.transaction(SYNC_DB_STORE, "readonly");
    tx.onerror = () => reject(tx.error);
    const request = tx.objectStore(SYNC_DB_STORE).get(SYNC_DB_KEY);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return handle;
};

const ensureSyncPermission = async (handle) => {
  if (!handle) return false;
  const options = { mode: "readwrite" };
  if ((await handle.queryPermission(options)) === "granted") return true;
  if ((await handle.requestPermission(options)) === "granted") return true;
  return false;
};

const writeFileToHandle = async (directoryHandle, fileName, content) => {
  const fileHandle = await directoryHandle.getFileHandle(fileName, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(content);
  await writable.close();
};

const buildSourceDataFile = () => {
  return `window.FOTOLIGHT_DEFAULT_DATA = ${JSON.stringify(state.data, null, 2)};\n`;
};

const serializeForInlineScript = (value) => {
  return JSON.stringify(value).replace(/<\//g, "<\\/");
};

const buildIndexBootDataBlock = () => {
  const payload = serializeForInlineScript(state.data);
  return `<!-- FOTOLIGHT_BOOT_DATA_START -->
  <script id="fotolight-boot-data">
    window.FOTOLIGHT_BOOT_DATA = ${payload};
  </script>
  <!-- FOTOLIGHT_BOOT_DATA_END -->`;
};

const escapeRegExp = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const syncIndexHtml = async (directoryHandle) => {
  const fileHandle = await directoryHandle.getFileHandle("index.html", { create: false });
  const file = await fileHandle.getFile();
  const html = await file.text();
  const startMarker = "<!-- FOTOLIGHT_BOOT_DATA_START -->";
  const endMarker = "<!-- FOTOLIGHT_BOOT_DATA_END -->";
  const bootBlock = buildIndexBootDataBlock();
  let nextHtml = html;

  if (html.includes(startMarker) && html.includes(endMarker)) {
    const markerPattern = new RegExp(
      `${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`
    );
    nextHtml = html.replace(markerPattern, bootBlock);
  } else {
    const defaultDataScriptPattern =
      /<script\s+src=["']fotolight-default-data\.js["']\s*><\/script>/i;
    if (defaultDataScriptPattern.test(html)) {
      nextHtml = html.replace(defaultDataScriptPattern, `${bootBlock}\n  $&`);
    } else if (html.includes("</body>")) {
      nextHtml = html.replace("</body>", `${bootBlock}\n</body>`);
    } else {
      nextHtml = `${html}\n${bootBlock}\n`;
    }
  }

  const writable = await fileHandle.createWritable();
  await writable.write(nextHtml);
  await writable.close();
};

const connectProjectFolder = async () => {
  if (!supportsProjectSync()) {
    showToast("Project file sync requires Chrome/Edge on localhost or HTTPS.");
    return false;
  }
  try {
    const directoryHandle = await window.showDirectoryPicker({ mode: "readwrite" });
    const hasPermission = await ensureSyncPermission(directoryHandle);
    if (!hasPermission) {
      showToast("Folder permission denied.");
      return false;
    }
    state.syncDirectoryHandle = directoryHandle;
    await saveSyncDirectoryHandle(directoryHandle);
    showToast(`Connected folder: ${directoryHandle.name}`);
    renderSection();
    return true;
  } catch (error) {
    if (error?.name !== "AbortError") {
      console.warn("Unable to connect project folder", error);
      showToast("Unable to connect project folder.");
    }
    return false;
  }
};

const syncProjectFiles = async ({ silent = false } = {}) => {
  if (!supportsProjectSync()) {
    if (!silent) showToast("Project file sync is not supported in this browser.");
    return false;
  }
  try {
    if (!state.syncDirectoryHandle) {
      state.syncDirectoryHandle = await loadSyncDirectoryHandle();
    }
    if (!state.syncDirectoryHandle) {
      if (!silent) showToast("Connect project folder first.");
      return false;
    }
    const hasPermission = await ensureSyncPermission(state.syncDirectoryHandle);
    if (!hasPermission) {
      if (!silent) showToast("Please allow write permission for the project folder.");
      return false;
    }

    await writeFileToHandle(
      state.syncDirectoryHandle,
      "fotolight-default-data.js",
      buildSourceDataFile()
    );
    await writeFileToHandle(
      state.syncDirectoryHandle,
      "fotolight-data.json",
      `${JSON.stringify(state.data, null, 2)}\n`
    );
    await syncIndexHtml(state.syncDirectoryHandle);

    if (!silent) showToast("Project files synced.");
    return true;
  } catch (error) {
    console.warn("Project file sync failed", error);
    if (!silent) showToast("Project file sync failed.");
    return false;
  }
};

const confirmDialog = (title, message) =>
  new Promise((resolve) => {
    confirmTitle.textContent = title;
    confirmMessage.textContent = message;
    confirmModal.classList.remove("hidden");

    const cleanup = (result) => {
      confirmModal.classList.add("hidden");
      confirmAccept.removeEventListener("click", onAccept);
      confirmCancel.removeEventListener("click", onCancel);
      resolve(result);
    };

    const onAccept = () => cleanup(true);
    const onCancel = () => cleanup(false);

    confirmAccept.addEventListener("click", onAccept);
    confirmCancel.addEventListener("click", onCancel);
  });

const getByPath = (obj, path) => {
  return path.split(".").reduce((acc, key) => {
    if (acc === undefined || acc === null) return acc;
    const index = Number.isNaN(Number(key)) ? key : Number(key);
    return acc[index];
  }, obj);
};

const setByPath = (obj, path, value) => {
  const keys = path.split(".");
  let current = obj;
  keys.forEach((key, index) => {
    const parsed = Number.isNaN(Number(key)) ? key : Number(key);
    if (index === keys.length - 1) {
      current[parsed] = value;
    } else {
      if (current[parsed] === undefined) {
        current[parsed] = Number.isNaN(Number(keys[index + 1])) ? {} : [];
      }
      current = current[parsed];
    }
  });
};

const moveItem = (array, from, to) => {
  if (!Array.isArray(array) || from < 0 || to < 0 || from >= array.length) return;
  const [item] = array.splice(from, 1);
  array.splice(to, 0, item);
};

const logActivity = (action) => {
  const timestamp = new Date().toLocaleString();
  state.data.activityLog.unshift({ action, timestamp });
  state.data.activityLog = state.data.activityLog.slice(0, 50);
};

const saveData = (actionLabel) => {
  logActivity(actionLabel);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  localStorage.setItem(STORAGE_SYNC_KEY, String(Date.now()));
  setDirty(false);
  showToast("Changes saved successfully.");

  if (state.data.settings?.autoFileSync) {
    void syncProjectFiles({ silent: true }).then((synced) => {
      if (synced) {
        state.autoSyncWarningShown = false;
        showToast("Source files synced.");
        return;
      }
      if (!state.autoSyncWarningShown) {
        showToast("Auto sync skipped. Connect project folder in Settings.");
        state.autoSyncWarningShown = true;
      }
    });
  }
};

const getAdminPassword = () => {
  const stored = state.data.settings?.adminPassword;
  return stored && stored.length ? stored : DEFAULT_PASSWORD;
};

const login = (username, password) => {
  return username === DEFAULT_USERNAME && password === getAdminPassword();
};

const renderDashboard = () => {
  const stats = [
    { label: "Portfolio Images", value: state.data.portfolio.length },
    { label: "Videos", value: state.data.videos.length },
    { label: "Testimonials", value: state.data.testimonials.length },
    { label: "Services", value: state.data.services.length },
  ];
  const log = state.data.activityLog.slice(0, 10);
  const now = new Date().toLocaleString();

  return `
    <div class="card">
      <h3>Welcome back</h3>
      <p>Today is ${escapeHtml(now)}</p>
      <div class="card-grid">
        ${stats
      .map(
        (item) => `
          <div class="card">
            <h3>${escapeHtml(item.value)}</h3>
            <p>${escapeHtml(item.label)}</p>
          </div>
        `
      )
      .join("")}
      </div>
    </div>
    <div class="card">
      <h3>Recent activity</h3>
      ${log.length
      ? `<div class="card-grid">${log
        .map(
          (entry) => `
            <div class="list-item">
              <strong>${escapeHtml(entry.action)}</strong>
              <span class="badge">${escapeHtml(entry.timestamp)}</span>
            </div>
          `
        )
        .join("")}</div>`
      : `<p>No edits logged yet.</p>`
    }
    </div>
    <div class="card">
      <h3>Quick actions</h3>
      <div class="row">
        <button class="btn" data-action="preview-site">Preview Site</button>
        <button class="btn btn--ghost" data-action="export-data">Export Data</button>
        <button class="btn btn--ghost" data-action="sync-project-files">Sync Files</button>
        <button class="btn btn--ghost" data-action="export-sync-js">Export Sync JS</button>
        <button class="btn btn--ghost" data-action="import-data">Import Data</button>
      </div>
    </div>
  `;
};

const renderHero = () => {
  const hero = state.data.hero;
  return `
    <div class="card">
      <h3>Hero Copy</h3>
      <div class="field-grid">
        <label>Eyebrow
          <input data-bind="hero.eyebrow" value="${escapeHtml(hero.eyebrow)}" />
        </label>
        <label>Headline
          <textarea rows="2" data-bind="hero.headline">${escapeHtml(hero.headline)}</textarea>
        </label>
        <label>Lead Paragraph
          <textarea rows="3" data-bind="hero.lead">${escapeHtml(hero.lead)}</textarea>
        </label>
      </div>
    </div>
    <div class="card">
      <div class="row">
        <h3>CTA Buttons</h3>
        <button class="small-btn" data-action="add-item" data-path="hero.cta">Add CTA</button>
      </div>
      ${hero.cta
      .map(
        (cta, index) => `
        <div class="list-item">
          <div class="row">
            <span class="badge">CTA ${index + 1}</span>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="hero.cta" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="hero.cta" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="hero.cta" data-index="${index}">Delete</button>
            </div>
          </div>
          <div class="field-grid">
            <label>Label
              <input data-bind="hero.cta.${index}.label" value="${escapeHtml(cta.label)}" />
            </label>
            <label>Link
              <input data-bind="hero.cta.${index}.href" value="${escapeHtml(cta.href)}" />
            </label>
          </div>
        </div>
      `
      )
      .join("")}
    </div>
    <div class="card">
      <div class="row">
        <h3>Hero Slider</h3>
        <button class="small-btn" data-action="add-item" data-path="hero.slides">Add Slide</button>
      </div>
      ${hero.slides
      .map(
        (slide, index) => `
        <div class="list-item">
          <div class="row">
            <span class="badge">Slide ${index + 1}</span>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="hero.slides" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="hero.slides" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="hero.slides" data-index="${index}">Delete</button>
            </div>
          </div>
          <div class="field-grid">
            <label>Caption
              <input data-bind="hero.slides.${index}.caption" value="${escapeHtml(slide.caption)}" />
            </label>
            <label>Title
              <input data-bind="hero.slides.${index}.title" value="${escapeHtml(slide.title)}" />
            </label>
          </div>
          <div class="row">
            <label>Upload Image
              <input type="file" accept="image/*" data-upload="hero.slides.${index}.image" data-max="1920" />
            </label>
            <div class="image-preview"><img src="${escapeHtml(slide.image)}" alt="Slide preview" /></div>
          </div>
        </div>
      `
      )
      .join("")}
    </div>
    <div class="card">
      <div class="row">
        <h3>Hero Stats</h3>
        <button class="small-btn" data-action="add-item" data-path="hero.stats">Add Stat</button>
      </div>
      ${hero.stats
      .map(
        (stat, index) => `
        <div class="list-item">
          <div class="row">
            <span class="badge">Stat ${index + 1}</span>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="hero.stats" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="hero.stats" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="hero.stats" data-index="${index}">Delete</button>
            </div>
          </div>
          <div class="field-grid">
            <label>Value
              <input data-bind="hero.stats.${index}.value" value="${escapeHtml(stat.value)}" />
            </label>
            <label>Label
              <input data-bind="hero.stats.${index}.label" value="${escapeHtml(stat.label)}" />
            </label>
          </div>
        </div>
      `
      )
      .join("")}
    </div>
    <div class="card">
      <div class="row">
        <h3>Highlight Tags</h3>
        <button class="small-btn" data-action="add-item" data-path="hero.highlights">Add Highlight</button>
      </div>
      ${hero.highlights
      .map(
        (highlight, index) => `
        <div class="list-item">
          <div class="row">
            <span class="badge">Tag ${index + 1}</span>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="hero.highlights" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="hero.highlights" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="hero.highlights" data-index="${index}">Delete</button>
            </div>
          </div>
          <label>Highlight
            <input data-bind="hero.highlights.${index}" value="${escapeHtml(highlight)}" />
          </label>
        </div>
      `
      )
      .join("")}
    </div>
  `;
};

const renderTicker = () => {
  return `
    <div class="card">
      <div class="row">
        <h3>Client Names</h3>
        <button class="small-btn" data-action="add-item" data-path="ticker">Add Client</button>
      </div>
      ${state.data.ticker
      .map(
        (client, index) => `
        <div class="list-item">
          <div class="row">
            <span class="badge">${index + 1}</span>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="ticker" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="ticker" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="ticker" data-index="${index}">Delete</button>
            </div>
          </div>
          <input data-bind="ticker.${index}" value="${escapeHtml(client)}" />
        </div>
      `
      )
      .join("")}
    </div>
  `;
};

const renderAbout = () => {
  const about = state.data.about;
  return `
    <div class="card">
      <h3>About Copy</h3>
      <div class="field-grid">
        <label>Eyebrow
          <input data-bind="about.eyebrow" value="${escapeHtml(about.eyebrow)}" />
        </label>
        <label>Heading
          <textarea rows="2" data-bind="about.heading">${escapeHtml(about.heading)}</textarea>
        </label>
        <label>Lead Paragraph
          <textarea rows="3" data-bind="about.lead">${escapeHtml(about.lead)}</textarea>
        </label>
      </div>
    </div>
    <div class="card">
      <div class="row">
        <h3>About Features</h3>
        <button class="small-btn" data-action="add-item" data-path="about.features">Add Feature</button>
      </div>
      ${about.features
      .map(
        (feature, index) => `
        <div class="list-item">
          <div class="row">
            <span class="badge">Feature ${index + 1}</span>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="about.features" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="about.features" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="about.features" data-index="${index}">Delete</button>
            </div>
          </div>
          <div class="field-grid">
            <label>Title
              <input data-bind="about.features.${index}.title" value="${escapeHtml(feature.title)}" />
            </label>
            <label>Description
              <textarea rows="2" data-bind="about.features.${index}.description">${escapeHtml(feature.description)}</textarea>
            </label>
          </div>
        </div>
      `
      )
      .join("")}
    </div>
    <div class="card">
      <h3>Closing & Tagline</h3>
      <label>Closing Paragraph
        <textarea rows="2" data-bind="about.closing">${escapeHtml(about.closing)}</textarea>
      </label>
      <label>Heart Line
        <input data-bind="about.heart" value="${escapeHtml(about.heart)}" />
      </label>
    </div>
    <div class="card">
      <h3>Portrait Image</h3>
      <div class="row">
        <label>Upload Image
          <input type="file" accept="image/*" data-upload="about.image" data-max="800" />
        </label>
        <div class="image-preview"><img src="${escapeHtml(about.image)}" alt="About preview" /></div>
      </div>
    </div>
  `;
};

const renderServices = () => {
  return `
    <div class="card">
      <div class="row">
        <h3>Service Cards</h3>
        <button class="small-btn" data-action="add-item" data-path="services">Add Service</button>
      </div>
      ${state.data.services
      .map(
        (service, index) => `
        <div class="list-item">
          <div class="row">
            <span class="badge">Service ${index + 1}</span>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="services" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="services" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="services" data-index="${index}">Delete</button>
            </div>
          </div>
          <div class="field-grid">
            <label>Number/Icon
              <input data-bind="services.${index}.icon" value="${escapeHtml(service.icon)}" />
            </label>
            <label>Title
              <input data-bind="services.${index}.title" value="${escapeHtml(service.title)}" />
            </label>
            <label>Tag
              <input data-bind="services.${index}.tag" value="${escapeHtml(service.tag)}" />
            </label>
            <label>Description
              <textarea rows="2" data-bind="services.${index}.description">${escapeHtml(service.description)}</textarea>
            </label>
          </div>
        </div>
      `
      )
      .join("")}
    </div>
  `;
};

const renderUseCases = () => {
  const cta = state.data.useCasesCta;
  return `
    <div class="card">
      <div class="row">
        <h3>Use Cases</h3>
        <button class="small-btn" data-action="add-item" data-path="useCases">Add Use Case</button>
      </div>
      ${state.data.useCases
      .map(
        (item, index) => `
        <div class="list-item">
          <div class="row">
            <span class="badge">Use Case ${index + 1}</span>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="useCases" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="useCases" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="useCases" data-index="${index}">Delete</button>
            </div>
          </div>
          <div class="field-grid">
            <label>Number
              <input data-bind="useCases.${index}.number" value="${escapeHtml(item.number)}" />
            </label>
            <label>Title
              <input data-bind="useCases.${index}.title" value="${escapeHtml(item.title)}" />
            </label>
            <label>Description
              <textarea rows="2" data-bind="useCases.${index}.description">${escapeHtml(item.description)}</textarea>
            </label>
          </div>
          <div class="field-grid">
            ${item.bullets
            .map(
              (bullet, bulletIndex) => `
              <label>Bullet ${bulletIndex + 1}
                <input data-bind="useCases.${index}.bullets.${bulletIndex}" value="${escapeHtml(bullet)}" />
              </label>
            `
            )
            .join("")}
          </div>
        </div>
      `
      )
      .join("")}
    </div>
    <div class="card">
      <h3>Use Cases CTA</h3>
      <div class="field-grid">
        <label>CTA Text
          <textarea rows="2" data-bind="useCasesCta.text">${escapeHtml(cta.text)}</textarea>
        </label>
        <label>Button Label
          <input data-bind="useCasesCta.label" value="${escapeHtml(cta.label)}" />
        </label>
        <label>Button Link
          <input data-bind="useCasesCta.href" value="${escapeHtml(cta.href)}" />
        </label>
      </div>
    </div>
  `;
};

const renderPortfolio = () => {
  return `
    <div class="card">
      <div class="row">
        <h3>Portfolio Images</h3>
        <label class="small-btn">
          Upload Images
          <input type="file" multiple accept="image/*" data-upload-multiple="portfolio" data-max="800" hidden />
        </label>
        <button class="small-btn danger" data-action="delete-selected" data-path="portfolio">Delete Selected</button>
      </div>
      <div class="portfolio-grid">
        ${state.data.portfolio
      .map(
        (item, index) => `
          <div class="portfolio-item">
            <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" />
            <input data-bind="portfolio.${index}.alt" value="${escapeHtml(item.alt)}" placeholder="Alt text" />
            <label><input type="checkbox" data-select="portfolio" value="${index}" /> Select</label>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="portfolio" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="portfolio" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="portfolio" data-index="${index}">Delete</button>
            </div>
          </div>
        `
      )
      .join("")}
      </div>
    </div>
  `;
};

const renderPhotos = () => {
  return `
    <div class="card">
      <h3>Photo Tiles</h3>
      <div class="portfolio-grid">
        ${state.data.photos
      .map(
        (photo, index) => `
          <div class="portfolio-item">
            <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" />
            <label>Upload Photo
              <input type="file" accept="image/*" data-upload="photos.${index}.src" data-max="800" />
            </label>
            <input data-bind="photos.${index}.alt" value="${escapeHtml(photo.alt || "")}" placeholder="Alt text" />
          </div>
        `
      )
      .join("")}
      </div>
    </div>
  `;
};

const renderVideos = () => {
  return `
    <div class="card">
      <div class="row">
        <h3>Video Cards</h3>
        <button class="small-btn" data-action="add-item" data-path="videos">Add Video</button>
      </div>
      ${state.data.videos
      .map(
        (video, index) => `
        <div class="list-item">
          <div class="row">
            <span class="badge">Video ${index + 1}</span>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="videos" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="videos" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="videos" data-index="${index}">Delete</button>
            </div>
          </div>
          <video class="video-preview" src="${escapeHtml(video.src)}" poster="${escapeHtml(video.poster)}" controls></video>
          <div class="field-grid">
            <label>Video URL
              <input data-bind="videos.${index}.src" value="${escapeHtml(video.src)}" placeholder="Paste video URL or upload" />
            </label>
            <label>Upload Video
              <input type="file" accept="video/*" data-upload-video="videos.${index}.src" />
            </label>
            <label>Poster URL
              <input data-bind="videos.${index}.poster" value="${escapeHtml(video.poster)}" placeholder="Poster image URL" />
            </label>
            <label>Upload Poster
              <input type="file" accept="image/*" data-upload="videos.${index}.poster" data-max="800" />
            </label>
            <label>Title
              <input data-bind="videos.${index}.title" value="${escapeHtml(video.title)}" />
            </label>
            <label>Description
              <textarea rows="2" data-bind="videos.${index}.description">${escapeHtml(video.description)}</textarea>
            </label>
          </div>
        </div>
      `
      )
      .join("")}
    </div>
  `;
};

const renderStats = () => {
  return `
    <div class="card">
      <div class="row">
        <h3>Stats</h3>
        <button class="small-btn" data-action="add-item" data-path="stats">Add Stat</button>
      </div>
      ${state.data.stats
      .map(
        (stat, index) => `
        <div class="list-item">
          <div class="row">
            <span class="badge">Stat ${index + 1}</span>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="stats" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="stats" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="stats" data-index="${index}">Delete</button>
            </div>
          </div>
          <div class="field-grid">
            <label>Value
              <input data-bind="stats.${index}.value" value="${escapeHtml(stat.value)}" />
            </label>
            <label>Label
              <input data-bind="stats.${index}.label" value="${escapeHtml(stat.label)}" />
            </label>
          </div>
        </div>
      `
      )
      .join("")}
    </div>
  `;
};

const renderTestimonials = () => {
  return `
    <div class="card">
      <div class="row">
        <h3>Testimonials</h3>
        <button class="small-btn" data-action="add-item" data-path="testimonials">Add Testimonial</button>
      </div>
      ${state.data.testimonials
      .map(
        (testimonial, index) => `
        <div class="list-item">
          <div class="row">
            <span class="badge">Testimonial ${index + 1}</span>
            <div class="list-actions">
              <button class="small-btn" data-action="move-item" data-path="testimonials" data-index="${index}" data-direction="up">↑</button>
              <button class="small-btn" data-action="move-item" data-path="testimonials" data-index="${index}" data-direction="down">↓</button>
              <button class="small-btn danger" data-action="remove-item" data-path="testimonials" data-index="${index}">Delete</button>
            </div>
          </div>
          <label>Quote
            <textarea rows="2" data-bind="testimonials.${index}.quote">${escapeHtml(testimonial.quote)}</textarea>
          </label>
          <label>Author
            <input data-bind="testimonials.${index}.author" value="${escapeHtml(testimonial.author)}" />
          </label>
        </div>
      `
      )
      .join("")}
    </div>
  `;
};

const renderContact = () => {
  const contact = state.data.contact;
  return `
    <div class="card">
      <h3>Contact Details</h3>
      <div class="field-grid">
        <label>Email
          <input data-bind="contact.email" value="${escapeHtml(contact.email)}" />
        </label>
        <label>Phone
          <input data-bind="contact.phone" value="${escapeHtml(contact.phone)}" />
        </label>
        <label>Studio Location
          <input data-bind="contact.studio" value="${escapeHtml(contact.studio)}" />
        </label>
      </div>
    </div>
    <div class="card">
      <h3>First Time Section</h3>
      <label>Heading
        <input data-bind="contact.firstTime.heading" value="${escapeHtml(contact.firstTime.heading)}" />
      </label>
      <label>Description
        <textarea rows="2" data-bind="contact.firstTime.description">${escapeHtml(
    contact.firstTime.description
  )}</textarea>
      </label>
      <div class="field-grid">
        ${contact.firstTime.bullets
      .map(
        (bullet, index) => `
          <label>Bullet ${index + 1}
            <input data-bind="contact.firstTime.bullets.${index}" value="${escapeHtml(
          bullet
        )}" />
          </label>
        `
      )
      .join("")}
      </div>
    </div>
    <div class="card">
      <h3>Form Labels</h3>
      <div class="field-grid">
        <label>Name Label
          <input data-bind="contact.formLabels.name" value="${escapeHtml(contact.formLabels.name)}" />
        </label>
        <label>Email Label
          <input data-bind="contact.formLabels.email" value="${escapeHtml(contact.formLabels.email)}" />
        </label>
        <label>Event Label
          <input data-bind="contact.formLabels.event" value="${escapeHtml(contact.formLabels.event)}" />
        </label>
        <label>Message Label
          <input data-bind="contact.formLabels.message" value="${escapeHtml(contact.formLabels.message)}" />
        </label>
        <label>Button Label
          <input data-bind="contact.formLabels.button" value="${escapeHtml(contact.formLabels.button)}" />
        </label>
      </div>
    </div>
  `;
};

const renderFooter = () => {
  const footer = state.data.footer;
  return `
    <div class="card">
      <h3>Footer Details</h3>
      <div class="row">
        <label>Upload Logo
          <input type="file" accept="image/*" data-upload="footer.logo" data-max="800" />
        </label>
        <div class="image-preview"><img src="${escapeHtml(footer.logo)}" alt="Footer logo" /></div>
      </div>
      <div class="field-grid">
        <label>Tagline
          <textarea rows="2" data-bind="footer.tagline">${escapeHtml(footer.tagline)}</textarea>
        </label>
        <label>Email
          <input data-bind="footer.email" value="${escapeHtml(footer.email)}" />
        </label>
        <label>Phone
          <input data-bind="footer.phone" value="${escapeHtml(footer.phone)}" />
        </label>
        <label>Social Links Text
          <input data-bind="footer.socials" value="${escapeHtml(footer.socials)}" />
        </label>
        <label>Copyright
          <input data-bind="footer.copyright" value="${escapeHtml(footer.copyright)}" />
        </label>
      </div>
    </div>
  `;
};

const renderSettings = () => {
  const maintenance = state.data.settings.maintenance;
  const autoFileSync = !!state.data.settings.autoFileSync;
  const connectedFolder = state.syncDirectoryHandle
    ? `Connected folder: ${escapeHtml(state.syncDirectoryHandle.name)}`
    : "No folder connected.";
  return `
    <div class="card">
      <h3>Admin Password</h3>
      <div class="field-grid">
        <label>New Password
          <input type="password" id="new-password" placeholder="New password" />
        </label>
        <label>Confirm Password
          <input type="password" id="confirm-password" placeholder="Confirm password" />
        </label>
      </div>
      <button class="small-btn" data-action="change-password">Update Password</button>
    </div>
    <div class="card">
      <h3>Maintenance Mode</h3>
      <label>
        <input type="checkbox" data-bind="settings.maintenance" ${maintenance ? "checked" : ""} />
        Enable maintenance mode
      </label>
    </div>
    <div class="card">
      <h3>Data Management</h3>
      <div class="row">
        <button class="btn btn--ghost" data-action="export-data">Export Data</button>
        <button class="btn btn--ghost" data-action="export-sync-js">Export Sync JS</button>
        <button class="btn btn--ghost" data-action="import-data">Import Data</button>
        <button class="btn" data-action="reset-data">Reset to Defaults</button>
      </div>
      <p>Tip: Export a backup before importing or resetting. Use "Export Sync JS" if you also want source defaults updated.</p>
    </div>
    <div class="card">
      <h3>Project Source Sync</h3>
      <p>${connectedFolder}</p>
      <div class="row">
        <button class="btn btn--ghost" data-action="connect-sync-folder">Connect Project Folder</button>
        <button class="btn" data-action="sync-project-files">Sync Now</button>
      </div>
      <label>
        <input type="checkbox" data-bind="settings.autoFileSync" ${autoFileSync ? "checked" : ""} />
        Auto sync source files on every save
      </label>
      <p>This writes <code>fotolight-default-data.js</code> and <code>fotolight-data.json</code> in your project.</p>
    </div>
  `;
};

const renderSection = () => {
  const meta = SECTION_META[state.activeSection];
  sectionTitle.textContent = meta.title;
  sectionSubtitle.textContent = meta.subtitle;

  let html = "";
  switch (state.activeSection) {
    case "dashboard":
      html = renderDashboard();
      break;
    case "hero":
      html = renderHero();
      break;
    case "ticker":
      html = renderTicker();
      break;
    case "about":
      html = renderAbout();
      break;
    case "services":
      html = renderServices();
      break;
    case "useCases":
      html = renderUseCases();
      break;
    case "portfolio":
      html = renderPortfolio();
      break;
    case "photos":
      html = renderPhotos();
      break;
    case "videos":
      html = renderVideos();
      break;
    case "stats":
      html = renderStats();
      break;
    case "testimonials":
      html = renderTestimonials();
      break;
    case "contact":
      html = renderContact();
      break;
    case "footer":
      html = renderFooter();
      break;
    case "settings":
      html = renderSettings();
      break;
    default:
      html = renderDashboard();
  }

  sectionContent.innerHTML = html;
  sectionContent.classList.remove("animate-in");
  void sectionContent.offsetWidth;
  sectionContent.classList.add("animate-in");
};

const updateNav = () => {
  navItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.section === state.activeSection);
  });
};

const navigate = async (section) => {
  if (state.dirty) {
    const ok = await confirmDialog(
      "Unsaved changes",
      "You have unsaved changes. Continue without saving?"
    );
    if (!ok) return;
  }
  state.activeSection = section;
  updateNav();
  renderSection();
};

const downloadFile = (fileName, content, mimeType) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const exportData = () => {
  downloadFile("fotolight-data.json", JSON.stringify(state.data, null, 2), "application/json");
};

const exportSyncJs = () => {
  const payload = JSON.stringify(state.data, null, 2);
  const source = `window.FOTOLIGHT_DEFAULT_DATA = ${payload};\n`;
  downloadFile("fotolight-default-data.js", source, "application/javascript");
  showToast('Downloaded "fotolight-default-data.js".');
};

const importData = (file) => {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      state.data = deepMerge(deepClone(DEFAULT_DATA), parsed);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
      localStorage.setItem(STORAGE_SYNC_KEY, String(Date.now()));
      setDirty(false);
      renderSection();
      showToast("Data imported successfully.");
      if (state.data.settings?.autoFileSync) {
        void syncProjectFiles({ silent: true });
      }
    } catch (error) {
      showToast("Import failed. Invalid JSON.");
    }
  };
  reader.readAsText(file);
};

const resetData = async () => {
  const ok = await confirmDialog(
    "Reset data",
    "This will reset all content to defaults. Continue?"
  );
  if (!ok) return;
  state.data = deepClone(DEFAULT_DATA);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  localStorage.setItem(STORAGE_SYNC_KEY, String(Date.now()));
  setDirty(false);
  renderSection();
  showToast("All data reset to defaults.");
  if (state.data.settings?.autoFileSync) {
    void syncProjectFiles({ silent: true });
  }
};

const resizeImage = (file, maxWidth) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const handleImageUpload = async (input) => {
  const path = input.dataset.upload;
  const max = Number(input.dataset.max || 800);
  const file = input.files?.[0];
  if (!path || !file) return;
  const dataUrl = await resizeImage(file, max);
  setByPath(state.data, path, dataUrl);
  setDirty(true);
  renderSection();
};

const handleVideoUpload = async (input) => {
  const path = input.dataset.uploadVideo;
  const file = input.files?.[0];
  if (!path || !file) return;
  const dataUrl = await readFileAsDataUrl(file);
  setByPath(state.data, path, dataUrl);
  setDirty(true);
  renderSection();
};

const handleMultiUpload = async (input) => {
  const path = input.dataset.uploadMultiple;
  const max = Number(input.dataset.max || 800);
  const files = Array.from(input.files || []);
  if (!path || !files.length) return;
  const list = getByPath(state.data, path);
  if (!Array.isArray(list)) return;
  for (const file of files) {
    const dataUrl = await resizeImage(file, max);
    list.push({ src: dataUrl, alt: "" });
  }
  setDirty(true);
  renderSection();
};

const createDefaultItem = (path) => {
  switch (path) {
    case "hero.cta":
      return { label: "New CTA", href: "#" };
    case "hero.slides":
      return { image: "", caption: "Featured story", title: "New slide" };
    case "hero.stats":
      return { value: "", label: "" };
    case "hero.highlights":
      return "New highlight";
    case "ticker":
      return "New Client";
    case "about.features":
      return { title: "", description: "" };
    case "services":
      return { icon: "0", title: "", description: "", tag: "" };
    case "useCases":
      return { number: "0", title: "", description: "", bullets: ["", "", ""] };
    case "portfolio":
      return { src: "", alt: "" };
    case "videos":
      return { src: "", poster: "", title: "", description: "" };
    case "stats":
      return { value: "", label: "" };
    case "testimonials":
      return { quote: "", author: "" };
    default:
      return "";
  }
};

sectionContent.addEventListener("input", (event) => {
  const target = event.target;
  if (target.matches("input[type='checkbox']") && target.dataset.bind) {
    setByPath(state.data, target.dataset.bind, target.checked);
    setDirty(true);
    return;
  }
  if (!target.dataset.bind) return;
  setByPath(state.data, target.dataset.bind, target.value);
  setDirty(true);
});

sectionContent.addEventListener("change", (event) => {
  const target = event.target;
  if (target.dataset.upload) {
    handleImageUpload(target);
  }
  if (target.dataset.uploadVideo) {
    handleVideoUpload(target);
  }
  if (target.dataset.uploadMultiple) {
    handleMultiUpload(target);
  }
});

sectionContent.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const action = button.dataset.action;

  if (action === "preview-site") {
    window.open("index.html", "_blank");
    return;
  }

  if (action === "export-data") {
    exportData();
    return;
  }

  if (action === "export-sync-js") {
    exportSyncJs();
    return;
  }

  if (action === "connect-sync-folder") {
    await connectProjectFolder();
    return;
  }

  if (action === "sync-project-files") {
    const synced = await syncProjectFiles();
    if (synced) {
      localStorage.setItem(STORAGE_SYNC_KEY, String(Date.now()));
    }
    return;
  }

  if (action === "import-data") {
    importFileInput.click();
    return;
  }

  if (action === "reset-data") {
    resetData();
    return;
  }

  if (action === "change-password") {
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (!newPassword || newPassword.length < 6) {
      showToast("Password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast("Passwords do not match.");
      return;
    }
    state.data.settings.adminPassword = newPassword;
    saveData("Updated admin password");
    showToast("Password updated.");
    return;
  }

  if (action === "delete-selected") {
    const path = button.dataset.path;
    const list = getByPath(state.data, path);
    if (!Array.isArray(list)) return;
    const selected = Array.from(
      sectionContent.querySelectorAll(`input[data-select='${path}']:checked`)
    ).map((input) => Number(input.value));
    if (!selected.length) {
      showToast("Select items to delete.");
      return;
    }
    const ok = await confirmDialog(
      "Delete selected",
      `Delete ${selected.length} selected items?`
    );
    if (!ok) return;
    state.data[path] = list.filter((_, index) => !selected.includes(index));
    setDirty(true);
    renderSection();
    showToast("Selected items removed.");
    return;
  }

  if (action === "add-item") {
    const path = button.dataset.path;
    const list = getByPath(state.data, path);
    if (!Array.isArray(list)) return;
    list.push(createDefaultItem(path));
    setDirty(true);
    renderSection();
    return;
  }

  if (action === "remove-item") {
    const path = button.dataset.path;
    const index = Number(button.dataset.index);
    const list = getByPath(state.data, path);
    if (!Array.isArray(list)) return;
    const ok = await confirmDialog("Delete item", "Are you sure you want to delete this item?");
    if (!ok) return;
    list.splice(index, 1);
    setDirty(true);
    renderSection();
    showToast("Item removed.");
    return;
  }

  if (action === "move-item") {
    const path = button.dataset.path;
    const index = Number(button.dataset.index);
    const direction = button.dataset.direction;
    const list = getByPath(state.data, path);
    if (!Array.isArray(list)) return;
    const nextIndex = direction === "up" ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= list.length) return;
    moveItem(list, index, nextIndex);
    setDirty(true);
    renderSection();
  }
});

importFileInput.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (file) importData(file);
  importFileInput.value = "";
});

saveButton.addEventListener("click", () => {
  saveData(`Saved ${SECTION_META[state.activeSection].title}`);
});

previewButton.addEventListener("click", () => {
  window.open("index.html", "_blank");
});

logoutButton.addEventListener("click", async () => {
  const ok = await confirmDialog("Logout", "Are you sure you want to log out?");
  if (!ok) return;
  sessionStorage.removeItem(AUTH_KEY);
  window.location.reload();
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navigate(item.dataset.section);
  });
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const username = formData.get("username");
  const password = formData.get("password");

  if (login(username, password)) {
    sessionStorage.setItem(AUTH_KEY, "true");
    loginScreen.classList.add("hidden");
    adminApp.classList.remove("hidden");
    renderSection();
    setDirty(false);
  } else {
    showToast("Invalid credentials.");
  }
});

window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
    event.preventDefault();
    saveData(`Saved ${SECTION_META[state.activeSection].title}`);
  }
});

window.addEventListener("beforeunload", (event) => {
  if (!state.dirty) return;
  event.preventDefault();
  event.returnValue = "";
});

const init = async () => {
  if (supportsProjectSync()) {
    try {
      state.syncDirectoryHandle = await loadSyncDirectoryHandle();
    } catch (error) {
      console.warn("Unable to restore project sync folder", error);
    }
  }

  const authed = sessionStorage.getItem(AUTH_KEY) === "true";
  if (authed) {
    loginScreen.classList.add("hidden");
    adminApp.classList.remove("hidden");
    renderSection();
    setDirty(false);
  }
};

init();

/* =====================================================
   UI ANIMATIONS — Scroll progress + reveal observer
   ===================================================== */

// Scroll progress bar
(function () {
  const bar = document.getElementById("admin-scroll-progress");
  if (!bar) return;
  const main = document.querySelector(".main") || document.documentElement;
  const update = () => {
    const el = document.querySelector(".main") || document.documentElement;
    const scrollable = el.scrollHeight - el.clientHeight;
    if (scrollable <= 0) { bar.style.width = "0%"; return; }
    bar.style.width = Math.min(100, (el.scrollTop / scrollable) * 100) + "%";
  };
  (document.querySelector(".main") || window).addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
})();

// Scroll-reveal observer for [data-animate], [data-stagger] and variants
(function () {
  const selectors = [
    "[data-animate]",
    "[data-animate-left]",
    "[data-animate-right]",
    "[data-animate-scale]",
    "[data-stagger]",
  ];

  const observe = (root) => {
    const targets = root.querySelectorAll(selectors.join(","));
    if (!targets.length || !window.IntersectionObserver) {
      // Fallback: make everything visible
      targets.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach(el => io.observe(el));
  };

  // Run on section switch: re-observe after section content renders
  const origRenderSection = typeof renderSection === "function" ? renderSection : null;
  const patchObserver = () => {
    setTimeout(() => {
      const content = document.getElementById("section-content");
      if (content) observe(content);
    }, 80);
  };
  // Observe whenever content is injected (MutationObserver on section container)
  const sectionEl = document.getElementById("section-content");
  if (sectionEl) {
    const mo = new MutationObserver(() => patchObserver());
    mo.observe(sectionEl, { childList: true, subtree: false });
  }
  // Also run once on page load
  document.addEventListener("DOMContentLoaded", () => observe(document.body), { once: true });
  observe(document.body);
})();
