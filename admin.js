/* =====================================================
   FotoLight Admin — Photos & Portfolio
   ===================================================== */

const STORAGE_KEY    = "fotolightData";
const AUTH_KEY       = "fotolightAuth";
const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "fotolight2026";

// ── Default data fallbacks ────────────────────────────────────────────────────
const DEFAULT_PHOTOS = (window.FOTOLIGHT_DEFAULT_DATA?.photos) || [
  { src: "img/portfolio/img-1.webp",  alt: "Photo tile 1" },
  { src: "img/portfolio/img-10.webp", alt: "Photo tile 2" },
  { src: "img/portfolio/img-12.webp", alt: "Photo tile 3" },
  { src: "img/portfolio/img-15.webp", alt: "Photo tile 4" },
];

const DEFAULT_PORTFOLIO = (window.FOTOLIGHT_DEFAULT_DATA?.portfolio) || [
  { src: "img/portfolio/Portfolio-1.webp", alt: "Wedding portrait highlights" },
  { src: "img/portfolio/img-1.webp",  alt: "Candid celebration moment" },
  { src: "img/portfolio/img-2.webp",  alt: "Couple portrait with warm light" },
  { src: "img/portfolio/img-10.webp", alt: "Traditional ceremony detail" },
  { src: "img/portfolio/img-11.webp", alt: "Family gathering photo story" },
  { src: "img/portfolio/img-12.webp", alt: "Reception candid snapshot" },
  { src: "img/portfolio/img-15.webp", alt: "Bride and groom portrait" },
  { src: "img/portfolio/img-16.webp", alt: "Event highlight detail" },
  { src: "img/portfolio/img-17.webp", alt: "Evening celebration shot" },
  { src: "img/portfolio/img-18.webp", alt: "Emotive family moment" },
];
const ORIGINAL_PHOTO_SRCS = DEFAULT_PHOTOS.map((item) => item.src);
const ORIGINAL_PORTFOLIO_SRCS = DEFAULT_PORTFOLIO.map((item) => item.src);

// ── Section meta ─────────────────────────────────────────────────────────────
const SECTION_META = {
  photos: {
    title: "Photos",
    subtitle: "Manage the featured photo tiles shown on the site.",
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Manage the portfolio gallery slider images.",
  },
};

// ── State ─────────────────────────────────────────────────────────────────────
const state = {
  activeSection: "photos",
  photos: [],
  portfolio: [],
  dirty: false,
};

// ── Load / Save ───────────────────────────────────────────────────────────────
/**
 * Returns the parsed localStorage object, or null if nothing is stored yet.
 */
function loadStoredData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;          // nothing ever saved
    return JSON.parse(raw) || null;
  } catch { return null; }
}

function sanitizePhotos(items) {
  const incoming = Array.isArray(items) ? items : [];
  return DEFAULT_PHOTOS.map((fallback, index) => {
    const candidate = incoming[index];
    if (
      candidate &&
      typeof candidate.src === "string" &&
      ORIGINAL_PHOTO_SRCS.includes(candidate.src)
    ) {
      return { src: candidate.src, alt: candidate.alt || fallback.alt || "" };
    }
    return { ...fallback };
  });
}

function sanitizePortfolio(items) {
  const incoming = Array.isArray(items) ? items : [];
  const cleaned = incoming
    .filter(
      (item) =>
        item &&
        typeof item.src === "string" &&
        ORIGINAL_PORTFOLIO_SRCS.includes(item.src)
    )
    .map((item) => ({ src: item.src, alt: item.alt || "" }));
  return cleaned.length ? cleaned : DEFAULT_PORTFOLIO.map((item) => ({ ...item }));
}

function sanitizeStoredMedia(data) {
  if (!data || typeof data !== "object") return data;
  const next = { ...data };
  next.photos = sanitizePhotos(data.photos);
  next.portfolio = sanitizePortfolio(data.portfolio);
  return next;
}

function loadPhotos() {
  const data = loadStoredData();
  // If localStorage has NEVER been written, use defaults.
  // If it HAS been written (even without a photos key), respect what's there.
  if (data === null) {
    return DEFAULT_PHOTOS.map(p => ({ ...p }));
  }
  const cleaned = sanitizeStoredMedia(data);
  if (JSON.stringify(cleaned) !== JSON.stringify(data)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
  }
  return cleaned.photos;
}

function loadPortfolio() {
  const data = loadStoredData();
  // Same logic: only seed defaults if localStorage is completely empty.
  if (data === null) {
    return DEFAULT_PORTFOLIO.map(p => ({ ...p }));
  }
  const cleaned = sanitizeStoredMedia(data);
  if (JSON.stringify(cleaned) !== JSON.stringify(data)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
  }
  return cleaned.portfolio;
}

function saveCurrent() {
  try {
    // Always read existing data first so we don't wipe other keys (videos, stats, etc.)
    const existing = loadStoredData() || {};
    existing.photos    = sanitizePhotos(state.photos);
    existing.portfolio = sanitizePortfolio(state.portfolio);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (e) {
    console.warn("Save failed", e);
  }
}

// ── DOM refs ──────────────────────────────────────────────────────────────────
const loginScreen     = document.getElementById("login-screen");
const adminApp        = document.getElementById("admin-app");
const loginForm       = document.getElementById("login-form");
const sectionContent  = document.getElementById("section-content");
const sectionTitle    = document.getElementById("section-title");
const sectionSubtitle = document.getElementById("section-subtitle");
const saveButton      = document.getElementById("save-section");
const previewButton   = document.getElementById("preview-site");
const logoutButton    = document.getElementById("logout-btn");
const toastContainer  = document.getElementById("toast-container");
const confirmModal    = document.getElementById("confirm-modal");
const confirmTitle    = document.getElementById("confirm-title");
const confirmMessage  = document.getElementById("confirm-message");
const confirmCancel   = document.getElementById("confirm-cancel");
const confirmAccept   = document.getElementById("confirm-accept");
const navItems        = document.querySelectorAll(".nav-item[data-section]");

// ── Helpers ───────────────────────────────────────────────────────────────────
function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function setDirty(value) {
  state.dirty = value;
  saveButton.textContent = value ? "Save Changes*" : "Save Changes";
  saveButton.disabled    = !value;
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className   = "toast";
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function confirmDialog(title, message) {
  return new Promise((resolve) => {
    confirmTitle.textContent   = title;
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
}

// ── Image resize helper ───────────────────────────────────────────────────────
function resizeImage(file, maxWidth = 1200) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale  = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement("canvas");
        canvas.width  = img.width  * scale;
        canvas.height = img.height * scale;
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.88));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ── Generic grid render (shared by Photos & Portfolio) ────────────────────────
/**
 * @param {Array}  items       - array of { src, alt }
 * @param {string} dataKey     - 'photo' | 'portfolio'  (used in data-* attrs)
 * @param {string} addLabel    - button label
 * @param {string} sectionHint - hint text shown below the heading
 */
function renderGalleryGrid(items, dataKey, addLabel, sectionHint) {
  const tiles = items.map((item, index) => `
    <div class="portfolio-item" data-index="${index}">
      <div class="image-preview">
        ${item.src
          ? `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async" />`
          : `<div style="width:100%;height:140px;display:flex;align-items:center;justify-content:center;background:#1a1a1a;color:#666;border-radius:8px;font-size:.8rem;">No image yet</div>`
        }
      </div>
      <label class="small-btn" style="margin-top:8px;cursor:pointer;display:block;text-align:center;">
        📁 Upload Image
        <input type="file" accept="image/*" data-upload-item="${dataKey}" data-item-index="${index}" hidden />
      </label>
      <input
        type="text"
        data-alt-item="${dataKey}"
        data-item-index="${index}"
        value="${escapeHtml(item.alt || "")}"
        placeholder="Alt text / caption"
        style="margin-top:6px;width:100%;box-sizing:border-box;"
      />
      <div class="list-actions" style="margin-top:6px;">
        <button class="small-btn" data-move-item="${dataKey}" data-direction="up"   data-item-index="${index}">↑</button>
        <button class="small-btn" data-move-item="${dataKey}" data-direction="down" data-item-index="${index}">↓</button>
        <button class="small-btn danger" data-remove-item="${dataKey}" data-item-index="${index}">Delete</button>
      </div>
    </div>
  `).join("");

  sectionContent.innerHTML = `
    <div class="card">
      <div class="row">
        <h3>${dataKey === "photo" ? "Photo Tiles" : "Portfolio Images"} (${items.length})</h3>
        <button class="small-btn" id="add-item-btn">＋ ${addLabel}</button>
      </div>
      <p style="margin:0 0 16px;color:var(--text-muted,#888);font-size:.875rem;">${sectionHint}</p>
      <div class="portfolio-grid">
        ${tiles || `<p style="color:var(--text-muted,#888);">No images yet. Click "${addLabel}" to get started.</p>`}
      </div>
    </div>
  `;

  // ── Event bindings ──────────────────────────────────────────────────────────

  // Add new empty item
  document.getElementById("add-item-btn")?.addEventListener("click", () => {
    getList(dataKey).push({ src: "", alt: "" });
    setDirty(true);
    renderSection();
  });

  // File upload
  sectionContent.querySelectorAll(`input[data-upload-item="${dataKey}"]`).forEach(input => {
    input.addEventListener("change", async () => {
      const idx  = Number(input.dataset.itemIndex);
      const file = input.files?.[0];
      if (!file) return;
      try {
        await resizeImage(file, 1200);
        showToast("Custom uploads are disabled here. Only original project images are allowed.");
      } catch {
        showToast("Upload failed — try a different image.");
      }
    });
  });

  // Alt text
  sectionContent.querySelectorAll(`input[data-alt-item="${dataKey}"]`).forEach(input => {
    input.addEventListener("input", () => {
      const idx = Number(input.dataset.itemIndex);
      getList(dataKey)[idx].alt = input.value;
      setDirty(true);
    });
  });

  // Move up / down
  sectionContent.querySelectorAll(`button[data-move-item="${dataKey}"]`).forEach(btn => {
    btn.addEventListener("click", () => {
      const idx  = Number(btn.dataset.itemIndex);
      const dir  = btn.dataset.direction;
      const list = getList(dataKey);
      const next = dir === "up" ? idx - 1 : idx + 1;
      if (next < 0 || next >= list.length) return;
      [list[idx], list[next]] = [list[next], list[idx]];
      setDirty(true);
      renderSection();
    });
  });

  // Delete
  sectionContent.querySelectorAll(`button[data-remove-item="${dataKey}"]`).forEach(btn => {
    btn.addEventListener("click", async () => {
      const idx = Number(btn.dataset.itemIndex);
      const ok  = await confirmDialog("Delete image", "Remove this image?");
      if (!ok) return;
      getList(dataKey).splice(idx, 1);
      setDirty(true);
      renderSection();
      showToast("Image removed.");
    });
  });

  // Animate in
  sectionContent.classList.remove("animate-in");
  void sectionContent.offsetWidth;
  sectionContent.classList.add("animate-in");
}

// Helper — get the right array from state
function getList(dataKey) {
  return dataKey === "photo" ? state.photos : state.portfolio;
}

// ── Section renderers ─────────────────────────────────────────────────────────
function renderPhotosSection() {
  renderGalleryGrid(
    state.photos,
    "photo",
    "Add Photo",
    "Upload photos, reorder with ↑ ↓, or delete tiles. Click <strong>Save Changes</strong> when done."
  );
}

function renderPortfolioSection() {
  renderGalleryGrid(
    state.portfolio,
    "portfolio",
    "Add Image",
    "Upload portfolio images, reorder with ↑ ↓, or delete. Click <strong>Save Changes</strong> when done."
  );
}

// ── Active section render ─────────────────────────────────────────────────────
function renderSection() {
  const meta = SECTION_META[state.activeSection];
  sectionTitle.textContent    = meta.title;
  sectionSubtitle.textContent = meta.subtitle;

  if (state.activeSection === "photos") {
    renderPhotosSection();
  } else if (state.activeSection === "portfolio") {
    renderPortfolioSection();
  }
}

// ── Navigation ────────────────────────────────────────────────────────────────
async function navigate(section) {
  if (state.dirty) {
    const ok = await confirmDialog(
      "Unsaved changes",
      "You have unsaved changes. Continue without saving?"
    );
    if (!ok) return;
    setDirty(false);
  }
  state.activeSection = section;
  navItems.forEach(item => item.classList.toggle("is-active", item.dataset.section === section));
  renderSection();
}

navItems.forEach(item => {
  item.addEventListener("click", () => navigate(item.dataset.section));
});

// ── Auth ──────────────────────────────────────────────────────────────────────
function getAdminPassword() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const stored = raw ? JSON.parse(raw)?.settings?.adminPassword : "";
    return stored && stored.length ? stored : DEFAULT_PASSWORD;
  } catch {
    return DEFAULT_PASSWORD;
  }
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data     = new FormData(loginForm);
  const username = data.get("username");
  const password = data.get("password");

  if (username === DEFAULT_USERNAME && password === getAdminPassword()) {
    sessionStorage.setItem(AUTH_KEY, "true");
    loginScreen.classList.add("hidden");
    adminApp.classList.remove("hidden");
    state.photos    = loadPhotos();
    state.portfolio = loadPortfolio();
    renderSection();
    setDirty(false);
  } else {
    showToast("Invalid credentials.");
  }
});

// ── Save ──────────────────────────────────────────────────────────────────────
function doSave() {
  if (!state.dirty) return;
  saveCurrent();
  setDirty(false);
  showToast(`${SECTION_META[state.activeSection].title} saved ✓`);
}

saveButton.addEventListener("click", doSave);

window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
    event.preventDefault();
    doSave();
  }
});

// ── Preview ───────────────────────────────────────────────────────────────────
previewButton.addEventListener("click", () => {
  window.open("/index.html", "_blank");
});

// ── Logout ────────────────────────────────────────────────────────────────────
logoutButton.addEventListener("click", async () => {
  const ok = await confirmDialog("Logout", "Are you sure you want to log out?");
  if (!ok) return;
  sessionStorage.removeItem(AUTH_KEY);
  window.location.reload();
});

// ── Warn on unsaved changes ───────────────────────────────────────────────────
window.addEventListener("beforeunload", (event) => {
  if (!state.dirty) return;
  event.preventDefault();
  event.returnValue = "";
});

// ── One-time migration: strip stale base64 blobs from old admin sessions ──────
function migrateStoredData() {
  const data = loadStoredData();
  if (!data) return;

  let changed = false;
  ["portfolio", "photos"].forEach((key) => {
    if (!Array.isArray(data[key])) return;
    const clean = data[key].filter(
      (item) => item && typeof item.src === "string" && !item.src.startsWith("data:")
    );
    if (clean.length !== data[key].length) {
      data[key] = clean;
      changed = true;
    }
  });

  if (changed) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      console.info("[Admin] Removed stale base64 images from localStorage.");
    } catch (e) {
      console.warn("[Admin] Migration save failed", e);
    }
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────
(function init() {
  migrateStoredData(); // clean up stale base64 blobs before reading state

  const authed = sessionStorage.getItem(AUTH_KEY) === "true";
  if (authed) {
    loginScreen.classList.add("hidden");
    adminApp.classList.remove("hidden");
    state.photos    = loadPhotos();
    state.portfolio = loadPortfolio();
    renderSection();
    setDirty(false);
  }
})();

/* =====================================================
   UI: Scroll progress bar
   ===================================================== */
(function () {
  const bar = document.getElementById("admin-scroll-progress");
  if (!bar) return;
  const update = () => {
    const el = document.querySelector(".main") || document.documentElement;
    const scrollable = el.scrollHeight - el.clientHeight;
    bar.style.width = scrollable <= 0 ? "0%" : Math.min(100, (el.scrollTop / scrollable) * 100) + "%";
  };
  (document.querySelector(".main") || window).addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
})();
