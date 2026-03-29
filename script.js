const STORAGE_KEY = "fotolightData";
const STORAGE_SYNC_KEY = "fotolightDataUpdatedAt";

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
      src: "https://www.dropbox.com/scl/fi/mjc4il568gp2nv4tfud2v/intro-video.mp4?rlkey=9jwbhebze4f2jwt9bu52mevdf&st=gewd6fc2&dl=0",
      poster: "video/poster/intro-video.png",
      title: "Wedding Video",
      description: "A cinematic wedding film capturing love, emotion, and timeless moments.",
    },
    {
      src: "https://www.dropbox.com/scl/fi/rfjirb6m32kr5jbkxmto7/haldi-video.mp4?rlkey=o33wcyzww8gptxtrsn2tbrdn6&st=bg0s9qbo&dl=0",
      poster: "video/poster/haldi-video.png",
      title: "Haldi Video",
      description: "A vibrant haldi film filled with color, laughter, and joyful celebration.",
    },
    {
      src: "https://www.dropbox.com/scl/fi/2fwj9p0nkq6h3htpufwhi/jai-mala-video.mp4?rlkey=z7dnvuvspgbppv43el7ggzjv4&st=83aj3ode&dl=0",
      poster: "video/poster/jai-mala-video.png",
      title: "Jai Mala Video",
      description: "An elegant jai mala film preserving the warmth and beauty of the ceremony.",
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
const ORIGINAL_PHOTO_SRCS = DEFAULT_DATA.photos.map((item) => item.src);
const ORIGINAL_PORTFOLIO_SRCS = DEFAULT_DATA.portfolio.map((item) => item.src);
const arraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const isUploadedImageSrc = (value) =>
  typeof value === "string" && value.startsWith("data:image/");

const getStoredData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (error) {
    console.warn("Unable to parse stored data", error);
    return null;
  }
};

const sanitizePhotoItems = (items) => {
  const incoming = Array.isArray(items) ? items : [];
  return DEFAULT_DATA.photos.map((fallback, index) => {
    const candidate = incoming[index];
    if (
      candidate &&
      typeof candidate.src === "string" &&
      (ORIGINAL_PHOTO_SRCS.includes(candidate.src) ||
        isUploadedImageSrc(candidate.src))
    ) {
      return {
        src: candidate.src,
        alt: candidate.alt || fallback.alt || "",
      };
    }
    return { ...fallback };
  });
};

const sanitizePortfolioItems = (items) => {
  const incoming = Array.isArray(items) ? items : [];
  const cleaned = incoming
    .filter(
      (item) =>
        item &&
        typeof item.src === "string" &&
        (ORIGINAL_PORTFOLIO_SRCS.includes(item.src) ||
          isUploadedImageSrc(item.src))
    )
    .map((item) => ({
      src: item.src,
      alt: item.alt || "",
    }));

  return cleaned.length ? cleaned : deepClone(DEFAULT_DATA.portfolio);
};

const sanitizeStoredMediaData = (data) => {
  if (!data || typeof data !== "object") return data;
  const next = { ...data };
  next.photos = sanitizePhotoItems(data.photos);
  next.portfolio = sanitizePortfolioItems(data.portfolio);
  return next;
};

const getData = () => {
  let baseData = deepClone(DEFAULT_DATA);
  if (
    window.FOTOLIGHT_BOOT_DATA &&
    typeof window.FOTOLIGHT_BOOT_DATA === "object"
  ) {
    baseData = { ...baseData, ...deepClone(window.FOTOLIGHT_BOOT_DATA) };
  }

  const stored = getStoredData();
  if (stored) {
    const sanitizedStored = sanitizeStoredMediaData(stored);
    if (
      !arraysEqual(stored.photos, sanitizedStored.photos) ||
      !arraysEqual(stored.portfolio, sanitizedStored.portfolio)
    ) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitizedStored));
      } catch (error) {
        console.warn("Unable to clean stored media data", error);
      }
    }
    baseData = { ...baseData, ...sanitizedStored };
  }

  baseData.photos = sanitizePhotoItems(baseData.photos);
  baseData.portfolio = sanitizePortfolioItems(baseData.portfolio);
  return baseData;
};

const setText = (el, value) => {
  if (!el || value === undefined || value === null) return;
  el.textContent = value;
};

const toTelHref = (value) => {
  const raw = String(value || "").trim().replace(/[^\d+]/g, "");
  if (!raw) return "tel:";
  const normalized = raw.startsWith("+")
    ? `+${raw.slice(1).replace(/\+/g, "")}`
    : raw.replace(/\+/g, "");
  return `tel:${normalized}`;
};

const normalizeVideoSrc = (src) => {
  const value = String(src || "").trim();
  if (!value) return "";

  // Dropbox share links are not directly streamable in <video>.
  // Convert them to "raw" links that usually work for MP4 playback.
  if (/dropbox\.com/i.test(value)) {
    try {
      const url = new URL(value);
      // Common formats:
      // - https://www.dropbox.com/s/<id>/file.mp4?dl=0
      // - https://www.dropbox.com/scl/fi/<id>/file.mp4?rlkey=...&dl=0
      // - https://dl.dropboxusercontent.com/... (already direct)
      if (/^www\.dropbox\.com$/i.test(url.hostname)) {
        url.hostname = "dl.dropboxusercontent.com";
      }
      // Force a direct response
      url.searchParams.delete("dl");
      url.searchParams.set("raw", "1");
      return url.toString();
    } catch {
      // Fallback: best-effort string replace
      return value
        .replace("www.dropbox.com", "dl.dropboxusercontent.com")
        .replace(/[?&]dl=\d+/i, "")
        .replace(/\?$/, "") + (value.includes("?") ? "&raw=1" : "?raw=1");
    }
  }

  return value;
};

const scheduleIdle = (callback) => {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(callback, { timeout: 1200 });
    return;
  }
  window.setTimeout(callback, 180);
};

const createRafThrottle = (callback) => {
  let scheduled = false;
  return () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      callback();
    });
  };
};

const applyBackgroundImage = (el) => {
  if (!el || !el.dataset.bg) return;
  el.style.backgroundImage = `url('${el.dataset.bg}')`;
  el.dataset.bgLoaded = "true";
};

const showSiteToast = (message) => {
  let container = document.querySelector(".site-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "site-toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "site-toast";
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("is-visible"));

  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => toast.remove(), 260);
  }, 2200);
};

const markImageLoaded = (img) => {
  const slide = img?.closest(".portfolio-slide");
  if (!slide) return;
  slide.classList.remove("is-loading");
  slide.classList.add("is-loaded");
};

const bindPortfolioImageState = (img) => {
  const slide = img?.closest(".portfolio-slide");
  if (!img || !slide) return;
  slide.classList.add("is-loading");

  if (img.complete && img.naturalWidth > 0) {
    markImageLoaded(img);
  } else {
    img.addEventListener("load", () => markImageLoaded(img), { once: true });
    img.addEventListener("error", () => slide.classList.remove("is-loading"), {
      once: true,
    });
  }

  slide.addEventListener("click", () => {
    if (!slide.classList.contains("is-loaded")) {
      showSiteToast("Portfolio image is loading, please wait...");
    }
  });
};

const bindVideoState = (video) => {
  const thumb = video?.closest(".video-card__thumb");
  if (!video || !thumb) return;

  const finishLoading = () => {
    thumb.classList.remove("is-loading");
    thumb.classList.add("is-loaded");
    if (video.dataset.autoplayRequested === "true") {
      video.dataset.autoplayRequested = "false";
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }
  };

  if (video.readyState >= 2 && !video.dataset.src) {
    finishLoading();
  } else {
    thumb.classList.add("is-loading");
    video.addEventListener("canplay", finishLoading, { once: true });
    video.addEventListener(
      "error",
      () => {
        thumb.classList.remove("is-loading");
      },
      { once: true }
    );
  }

  thumb.addEventListener("click", () => {
    const needsLoad = Boolean(video.dataset.src) || video.readyState < 2;
    if (needsLoad) {
      showSiteToast("Video is loading, it will play in a moment...");
      video.dataset.autoplayRequested = "true";
      if (video.dataset.src) {
        loadVideoSource(video);
      }
      return;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  });
};

const loadVideoSource = (video) => {
  if (!video || !video.dataset.src) return;
  video.src = normalizeVideoSrc(video.dataset.src);
  video.removeAttribute("data-src");
  video.load();
};

const setImageBackground = (el, src, options = {}) => {
  if (!el || !src) return;
  const { eager = false } = options;
  el.dataset.bg = src;
  if (eager) {
    applyBackgroundImage(el);
  }
};

const applyHero = (hero) => {
  const heroSection = document.querySelector(".hero");
  if (!heroSection) return;
  setText(heroSection.querySelector(".eyebrow"), hero.eyebrow);
  setText(heroSection.querySelector("h1"), hero.headline);
  setText(heroSection.querySelector(".lead"), hero.lead);

  const actions = heroSection.querySelector(".hero__actions");
  if (actions && Array.isArray(hero.cta)) {
    actions.innerHTML = "";
    hero.cta.forEach((cta, index) => {
      const link = document.createElement("a");
      link.className = index === 0 ? "btn" : "btn btn--outline";
      link.href = cta.href || "#";
      link.textContent = cta.label || "Learn more";
      actions.appendChild(link);
    });
  }

  const highlights = heroSection.querySelector(".hero__highlights");
  if (highlights && Array.isArray(hero.highlights)) {
    highlights.innerHTML = "";
    hero.highlights.forEach((text) => {
      const item = document.createElement("div");
      item.className = "highlight";
      item.textContent = text;
      highlights.appendChild(item);
    });
  }

  const stats = heroSection.querySelector(".hero__stats");
  if (stats && Array.isArray(hero.stats)) {
    stats.innerHTML = "";
    hero.stats.forEach((stat) => {
      const card = document.createElement("div");
      card.innerHTML = `<h3>${stat.value || ""}</h3><p>${stat.label || ""}</p>`;
      stats.appendChild(card);
    });
  }

  const slider = heroSection.querySelector(".hero__slider");
  if (slider && Array.isArray(hero.slides)) {
    const dots = slider.querySelector(".hero__slider-dots");
    slider.querySelectorAll(".hero__slide").forEach((slide) => slide.remove());
    if (dots) dots.innerHTML = "";

    hero.slides.forEach((slide, index) => {
      const slideEl = document.createElement("div");
      slideEl.className = `hero__slide${index === 0 ? " is-active" : ""}`;

      const imageEl = document.createElement("div");
      imageEl.className = "hero__slide-image";
      imageEl.setAttribute("role", "img");
      imageEl.setAttribute("aria-label", slide.title || "Hero slide");
      setImageBackground(imageEl, slide.image, { eager: index === 0 });

      const caption = document.createElement("div");
      caption.className = "hero__slide-caption";
      caption.innerHTML = `<p>${slide.caption || ""}</p><strong>${slide.title || ""
        }</strong>`;

      slideEl.appendChild(imageEl);
      slideEl.appendChild(caption);

      slider.insertBefore(slideEl, dots);

      if (dots) {
        const dot = document.createElement("button");
        dot.className = `hero__dot${index === 0 ? " is-active" : ""}`;
        dot.setAttribute("aria-label", `Show slide ${index + 1}`);
        dots.appendChild(dot);
      }
    });
  }
};

const applyTicker = (items) => {
  const track = document.querySelector(".ticker__track");
  if (!track || !Array.isArray(items)) return;
  track.innerHTML = "";
  const looped = items.concat(items);
  looped.forEach((name) => {
    const span = document.createElement("span");
    span.textContent = name;
    track.appendChild(span);
  });
};

const applyAbout = (about) => {
  const section = document.querySelector(".about");
  if (!section || !about) return;
  setText(section.querySelector(".eyebrow"), about.eyebrow);
  setText(section.querySelector("h2"), about.heading);
  setText(section.querySelector(".lead"), about.lead);
  const list = section.querySelector(".about__list");
  if (list && Array.isArray(about.features)) {
    list.innerHTML = "";
    about.features.forEach((feature) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="about__check">✓</span>
        <div>
          <h3>${feature.title || ""}</h3>
          <p>${feature.description || ""}</p>
        </div>
      `;
      list.appendChild(li);
    });
  }
  setText(section.querySelector(".about__closing"), about.closing);
  setText(section.querySelector(".about__heart"), about.heart);
  const imageEl = section.querySelector(".about__image");
  setImageBackground(imageEl, about.image);
};

const applyServices = (services) => {
  const grid = document.querySelector(".services-grid");
  if (!grid || !Array.isArray(services)) return;
  grid.innerHTML = "";
  services.forEach((service) => {
    const card = document.createElement("article");
    card.className = "service-card";
    card.innerHTML = `
      <div class="service-card__icon">${service.icon || ""}</div>
      <h3>${service.title || ""}</h3>
      <p>${service.description || ""}</p>
      <span class="tag">${service.tag || ""}</span>
    `;
    grid.appendChild(card);
  });
};

const applyUseCases = (useCases, cta) => {
  const grid = document.querySelector(".use-cases__grid");
  if (grid && Array.isArray(useCases)) {
    grid.innerHTML = "";
    useCases.forEach((item) => {
      const card = document.createElement("article");
      card.className = "use-case";
      const bullets = Array.isArray(item.bullets) ? item.bullets : [];
      card.innerHTML = `
        <div class="use-case__icon">${item.number || ""}</div>
        <h3>${item.title || ""}</h3>
        <p>${item.description || ""}</p>
        <ul class="use-case__list">
          ${bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
      `;
      grid.appendChild(card);
    });
  }
  const ctaEl = document.querySelector(".use-cases__cta");
  if (ctaEl && cta) {
    const textEl = ctaEl.querySelector("p");
    if (textEl) textEl.textContent = cta.text || "";
    const btn = ctaEl.querySelector("a");
    if (btn) {
      btn.textContent = cta.label || "";
      btn.href = cta.href || "#contact";
    }
  }
};

const applyPortfolio = (items) => {
  const slider = document.querySelector("[data-portfolio-slider]");
  if (!slider || !Array.isArray(items)) return;
  const track = slider.querySelector(".portfolio-slider__track");
  if (!track) return;
  track.innerHTML = "";
  items.forEach((item) => {
    const slide = document.createElement("article");
    slide.className = "portfolio-slide is-loading";
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt || "Portfolio image";
    img.loading = "lazy";
    img.decoding = "async";
    slide.appendChild(img);
    bindPortfolioImageState(img);
    track.appendChild(slide);
  });
};

const applyPhotos = (photos) => {
  const grid = document.querySelector(".photo-grid");
  if (!grid || !Array.isArray(photos)) return;
  const tiles = grid.querySelectorAll(".photo-tile");
  if (tiles.length) {
    tiles.forEach((tile, index) => {
      if (photos[index]) {
        setImageBackground(tile, photos[index].src, { eager: true });
      }
    });
  } else {
    grid.innerHTML = "";
    photos.forEach((photo) => {
      const tile = document.createElement("div");
      tile.className = "photo-tile";
      setImageBackground(tile, photo.src, { eager: true });
      grid.appendChild(tile);
    });
  }
};

const applyVideos = (videos) => {
  const grid = document.querySelector(".video-grid");
  if (!grid || !Array.isArray(videos)) return;
  grid.innerHTML = "";
  videos.forEach((video) => {
    const card = document.createElement("article");
    card.className = "video-card";

    const rawSrc = String(video.src || "");
    const isDrive = rawSrc.includes("drive.google.com");
    let mediaHtml = "";
    if (isDrive) {
      let driveSrc = rawSrc.replace("/view", "/preview");
      mediaHtml = `
          <iframe
            src="${driveSrc}"
            allow="autoplay"
            class="video-preview"
            style="width: 100%; height: 100%; border: none; aspect-ratio: 16/9; display: block;"
          ></iframe>
        `;
    } else {
      const playableSrc = normalizeVideoSrc(rawSrc);
      mediaHtml = `
          <video
            data-src="${playableSrc}"
            poster="${video.poster || ""}"
            controls
            preload="none"
            playsinline
          ></video>
        `;
    }

    card.innerHTML = `
      <div class="video-card__thumb is-loading">
        ${mediaHtml}
      </div>
      <h3>${video.title || ""}</h3>
      <p>${video.description || ""}</p>
    `;
    grid.appendChild(card);

    const videoEl = card.querySelector("video");
    if (videoEl) bindVideoState(videoEl);
  });
};

const applyStats = (stats) => {
  const grid = document.querySelector(".stats-grid");
  if (!grid || !Array.isArray(stats)) return;
  grid.innerHTML = "";
  stats.forEach((stat) => {
    const card = document.createElement("div");
    card.className = "stat";
    card.innerHTML = `<h3>${stat.value || ""}</h3><p>${stat.label || ""}</p>`;
    grid.appendChild(card);
  });
};

const applyTestimonials = (testimonials) => {
  const grid = document.querySelector(".testimonial-grid");
  if (!grid || !Array.isArray(testimonials)) return;
  grid.innerHTML = "";
  testimonials.forEach((item) => {
    const card = document.createElement("article");
    card.className = "testimonial-card";

    const mark = document.createElement("span");
    mark.className = "testimonial-card__mark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = '"';

    const quote = document.createElement("p");
    quote.className = "testimonial-card__quote";
    quote.textContent = item.quote || "";

    const rating = document.createElement("div");
    rating.className = "testimonial-card__rating";
    rating.setAttribute("aria-label", "5 star review");
    rating.textContent = "★★★★★";

    const meta = document.createElement("div");
    meta.className = "testimonial-card__meta";

    const line = document.createElement("span");
    line.className = "testimonial-card__line";
    line.setAttribute("aria-hidden", "true");

    const author = document.createElement("p");
    author.className = "testimonial-card__author";
    author.textContent = String(item.author || "").replace(/^[-—–\s]+/, "");

    meta.append(line, author);
    card.append(mark, quote, rating, meta);
    grid.appendChild(card);
  });
};

const applyContact = (contact) => {
  if (!contact) return;
  const details = document.querySelectorAll(".contact__details > div");
  if (details.length >= 3) {
    const emailValue = contact.email || "";
    const phoneValue = contact.phone || "";
    const studioValue = contact.studio || "";

    const emailEl = details[0].querySelector("a, p");
    if (emailEl) {
      emailEl.textContent = emailValue;
      if (emailEl.tagName === "A") {
        emailEl.href = `mailto:${emailValue}`;
      }
    }

    const phoneEl = details[1].querySelector("a, p");
    if (phoneEl) {
      phoneEl.textContent = phoneValue;
      if (phoneEl.tagName === "A") {
        phoneEl.href = toTelHref(phoneValue);
      }
    }

    const studioEl = details[2].querySelector("a, p");
    if (studioEl) studioEl.textContent = studioValue;

    const headerCall = document.querySelector(".header-call-link");
    if (headerCall) headerCall.href = toTelHref(phoneValue);
  }

  const starter = document.querySelector(".contact__starter");
  if (starter && contact.firstTime) {
    setText(starter.querySelector("h3"), contact.firstTime.heading);
    setText(starter.querySelector("p"), contact.firstTime.description);
    const list = starter.querySelector("ul");
    if (list) {
      list.innerHTML = "";
      (contact.firstTime.bullets || []).forEach((bullet) => {
        const li = document.createElement("li");
        li.textContent = bullet;
        list.appendChild(li);
      });
    }
  }

  const form = document.querySelector(".contact__form");
  if (form && contact.formLabels) {
    const labels = form.querySelectorAll("label");
    const labelMap = [
      contact.formLabels.name,
      contact.formLabels.email,
      contact.formLabels.event,
      contact.formLabels.message,
    ];
    labels.forEach((label, index) => {
      const text = labelMap[index];
      if (!text) return;
      const control = label.querySelector("input, select, textarea");
      if (control) {
        label.firstChild.textContent = `${text}\n            `;
      }
    });
    const button = form.querySelector("button");
    if (button) button.textContent = contact.formLabels.button || "Send";
  }
};

const applyFooter = (footer) => {
  if (!footer) return;
  const logo = document.querySelector(".footer-logo");
  if (logo && footer.logo) logo.src = footer.logo;

  const copyrightEl = document.querySelector(".site-footer__copyright");
  if (!copyrightEl) return;
  const value = String(footer.copyright || "").trim();
  if (!value) {
    copyrightEl.textContent = "";
    copyrightEl.style.display = "none";
    return;
  }
  copyrightEl.style.display = "";
  copyrightEl.textContent = value;
};

const applyMaintenance = (settings) => {
  if (!settings || !settings.maintenance) return;
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(15, 23, 42, 0.9)";
  overlay.style.color = "#fff";
  overlay.style.display = "grid";
  overlay.style.placeItems = "center";
  overlay.style.zIndex = "9999";
  overlay.style.textAlign = "center";
  overlay.style.padding = "2rem";
  overlay.innerHTML = `
    <div style="max-width: 480px; background: rgba(30,41,59,0.9); padding: 2rem; border-radius: 20px; border: 1px solid rgba(148,163,184,0.3);">
      <h1 style="margin-top:0;">Site under maintenance</h1>
      <p>We’re polishing the experience. Please check back soon.</p>
    </div>
  `;
  document.body.appendChild(overlay);
};

const applyData = (data) => {
  applyHero(data.hero);
  applyTicker(data.ticker);
  applyAbout(data.about);
  applyServices(data.services);
  applyUseCases(data.useCases, data.useCasesCta);
  applyPortfolio(data.portfolio);
  applyPhotos(data.photos);
  applyVideos(data.videos);
  applyStats(data.stats);
  applyTestimonials(data.testimonials);
  applyContact(data.contact);
  applyFooter(data.footer);
  applyMaintenance(data.settings);
};

const initAnimations = () => {
  const animatedItems = document.querySelectorAll("[data-animate]");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const staggerGroups = document.querySelectorAll("[data-stagger]");
  staggerGroups.forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      child.style.setProperty("--delay", `${index * 90}ms`);
    });
  });

  if (prefersReducedMotion) {
    animatedItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
};

const initNavMenu = () => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  if (!toggle || !menu) return;
  const isMobileMenu = () => window.matchMedia("(max-width: 900px)").matches;

  const setOpen = (isOpen) => {
    menu.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "Close" : "Menu";
  };

  setOpen(false);

  toggle.addEventListener("click", () => {
    setOpen(!menu.classList.contains("is-open"));
  });

  menu.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!isMobileMenu() || !menu.classList.contains("is-open")) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!menu.contains(target) && !toggle.contains(target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      setOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      setOpen(false);
    }
  });
};

const initHeroSlider = () => {
  const slider = document.querySelector("[data-slider]");
  if (!slider) return;
  const slides = slider.querySelectorAll(".hero__slide");
  const dots = slider.querySelectorAll(".hero__dot");
  if (!slides.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let index = 0;
  let intervalId = null;

  const showSlide = (nextIndex) => {
    slides[index].classList.remove("is-active");
    if (dots[index]) dots[index].classList.remove("is-active");

    index = nextIndex;

    slides[index].classList.add("is-active");
    if (dots[index]) dots[index].classList.add("is-active");
  };

  const startAuto = () => {
    if (prefersReducedMotion || slides.length < 2) return;
    intervalId = window.setInterval(() => {
      showSlide((index + 1) % slides.length);
    }, 5000);
  };

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      showSlide(dotIndex);
      if (intervalId) {
        window.clearInterval(intervalId);
        startAuto();
      }
    });
  });

  startAuto();
};

const initLazyVideos = () => {
  const lazyVideos = document.querySelectorAll("video[data-src]");
  if (!lazyVideos.length) return;

  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadVideoSource(entry.target);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "200px 0px" }
    );

    lazyVideos.forEach((video) => videoObserver.observe(video));
  } else {
    lazyVideos.forEach((video) => loadVideoSource(video));
  }
};

const initLazyBackgrounds = () => {
  const lazyBackgrounds = Array.from(
    document.querySelectorAll("[data-bg]:not([data-bg-loaded='true'])")
  );
  if (!lazyBackgrounds.length) return;

  const loadBackground = (element) => {
    applyBackgroundImage(element);
    element.removeAttribute("data-bg");
  };

  const heroDeferred = document.querySelectorAll(
    ".hero__slide-image[data-bg]:not([data-bg-loaded='true'])"
  );
  if (heroDeferred.length) {
    scheduleIdle(() => {
      heroDeferred.forEach((element) => loadBackground(element));
    });
  }

  const remaining = lazyBackgrounds.filter(
    (element) => !element.closest(".hero__slide")
  );
  if (!remaining.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadBackground(entry.target);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "240px 0px" }
    );

    remaining.forEach((element) => observer.observe(element));
  } else {
    scheduleIdle(() => {
      remaining.forEach((element) => loadBackground(element));
    });
  }
};

const initPortfolioSlider = () => {
  const portfolioSlider = document.querySelector("[data-portfolio-slider]");
  if (!portfolioSlider) return;
  const track = portfolioSlider.querySelector(".portfolio-slider__track");
  const slides = Array.from(track.children);
  if (!slides.length) return;
  const prevBtn = portfolioSlider.querySelector(".portfolio-slider__btn--prev");
  const nextBtn = portfolioSlider.querySelector(".portfolio-slider__btn--next");
  const dotsContainer = portfolioSlider.querySelector(".portfolio-slider__dots");

  let index = 0;
  let autoId = null;
  let currentDotCount = 0;

  const getSlidesPerView = () => {
    const value = window
      .getComputedStyle(portfolioSlider)
      .getPropertyValue("--slides-per-view");
    return Number.parseInt(value, 10) || 3;
  };

  const getGap = () => {
    const gap = window.getComputedStyle(track).gap;
    return Number.parseFloat(gap) || 0;
  };

  const updateDots = (slidesPerView) => {
    const maxIndex = Math.max(0, slides.length - slidesPerView);
    const needed = maxIndex + 1;
    if (needed !== currentDotCount) {
      dotsContainer.innerHTML = "";
      for (let i = 0; i < needed; i += 1) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "portfolio-slider__dot";
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.addEventListener("click", () => {
          index = i;
          update();
          restartAuto();
        });
        dotsContainer.appendChild(dot);
      }
      currentDotCount = needed;
    }

    const dots = dotsContainer.querySelectorAll(".portfolio-slider__dot");
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
  };

  const update = () => {
    const slidesPerView = getSlidesPerView();
    const maxIndex = Math.max(0, slides.length - slidesPerView);
    index = Math.min(index, maxIndex);

    const gap = getGap();
    const slideWidth = slides[0].getBoundingClientRect().width + gap;
    track.style.transform = `translateX(${-index * slideWidth}px)`;

    updateDots(slidesPerView);
  };

  const stopAuto = () => {
    if (autoId) {
      window.clearInterval(autoId);
      autoId = null;
    }
  };

  const startAuto = () => {
    const slidesPerView = getSlidesPerView();
    if (slides.length <= slidesPerView) return;
    autoId = window.setInterval(() => {
      const maxIndex = Math.max(0, slides.length - slidesPerView);
      index = index >= maxIndex ? 0 : index + 1;
      update();
    }, 4500);
  };

  const restartAuto = () => {
    stopAuto();
    startAuto();
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      index = Math.max(0, index - 1);
      update();
      restartAuto();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const slidesPerView = getSlidesPerView();
      const maxIndex = Math.max(0, slides.length - slidesPerView);
      index = Math.min(maxIndex, index + 1);
      update();
      restartAuto();
    });
  }

  portfolioSlider.addEventListener("mouseenter", stopAuto);
  portfolioSlider.addEventListener("mouseleave", startAuto);
  portfolioSlider.addEventListener("focusin", stopAuto);
  portfolioSlider.addEventListener("focusout", startAuto);

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(update);
  });

  update();
  startAuto();
};

const initStorageSync = () => {
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY || event.key === STORAGE_SYNC_KEY) {
      window.location.reload();
    }
  });
};

// =====================================================
// PREMIUM EDITORIAL ANIMATIONS — FOTOLIGHT 2026
// =====================================================

/** Scroll-progress bar at the top of the page */
const initScrollProgress = () => {
  const bar = document.createElement("div");
  bar.id = "scroll-progress";
  document.body.prepend(bar);
  const update = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const scrolled = scrollable > 0 ? doc.scrollTop / scrollable : 0;
    bar.style.width = `${Math.min(scrolled * 100, 100)}%`;
  };
  const onScroll = createRafThrottle(update);
  window.addEventListener("scroll", onScroll, { passive: true });
  update();
};

/** Back-to-top floating button */
const initBackToTop = () => {
  const btn = document.createElement("button");
  btn.id = "back-to-top";
  btn.innerHTML = "↑";
  btn.setAttribute("aria-label", "Back to top");
  document.body.appendChild(btn);
  const updateVisibility = createRafThrottle(() => {
    btn.classList.toggle("is-visible", window.scrollY > 400);
  });
  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

// Removed gaudy particle and counter animations.

/** Enhanced scroll-reveal: also handles data-animate-left/right/scale */
const initEnhancedAnimations = () => {
  const selectors = [
    "[data-animate-left]",
    "[data-animate-right]",
    "[data-animate-scale]",
  ];
  const all = document.querySelectorAll(selectors.join(","));
  if (!all.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  all.forEach((el) => observer.observe(el));
};

/** Eyebrow typing animation on the hero */
const initTypingEyebrow = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const eyebrow = document.querySelector(".hero .eyebrow");
  if (!eyebrow) return;
  const text = eyebrow.textContent.trim();
  eyebrow.textContent = "";
  eyebrow.style.borderRight = "2px solid var(--accent)";
  let i = 0;
  const type = () => {
    if (i < text.length) {
      eyebrow.textContent += text[i++];
      setTimeout(type, 45 + Math.random() * 30);
    } else {
      // Remove blinking cursor after done
      setTimeout(() => { eyebrow.style.borderRight = "none"; }, 800);
    }
  };
  // Delay until page paints
  setTimeout(type, 400);
};

/** Nav link active highlighting on scroll */
const initActiveNavLinks = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav a[href^='#']");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "is-active-nav",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
};

/** Theme toggle functionality */
const initThemeToggle = () => {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem("fotolightTheme");
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    toggleBtn.textContent = currentTheme === "dark" ? "☀️" : "🌙";
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("fotolightTheme", newTheme);
    toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
  });
};

/** Cinematic Photo Studio Effects: Parallax and Camera UI */
const initCinematicStudioEffects = () => {
  // 1. Camera flash effect on slider interaction
  const triggerFlash = () => {
    const flash = document.createElement("div");
    flash.className = "camera-flash";
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 600);
  };

  const sliderTriggers = document.querySelectorAll(".hero__dot, .portfolio-slider__btn");
  sliderTriggers.forEach(btn => btn.addEventListener("click", triggerFlash));

  // 2. Apply Viewfinder frames to portfolio imagery
  const portSlides = document.querySelectorAll(".portfolio-slide");
  portSlides.forEach(slide => slide.classList.add("viewfinder"));

  // 3. Glow Highlight on Testimonial cards
  const cards = document.querySelectorAll(".testimonial-card");
  cards.forEach(card => card.classList.add("glow-highlight"));
};

const init = () => {
  const data = getData();
  if (data) {
    applyData(data);
  }
  initStorageSync();
  initNavMenu();
  initHeroSlider();
  initThemeToggle();
  initLazyBackgrounds();

  window.requestAnimationFrame(() => {
    initAnimations();
    initActiveNavLinks();
    initScrollProgress();
    initBackToTop();
  });

  scheduleIdle(() => {
    initPortfolioSlider();
    initLazyVideos();
    initEnhancedAnimations();
    initTypingEyebrow();
    initCinematicStudioEffects();
  });
};

document.addEventListener("DOMContentLoaded", init);
