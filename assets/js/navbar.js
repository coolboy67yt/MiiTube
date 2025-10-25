// navbar.js — now with STYLE (chaos included)
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // 1️⃣ Inject CSS like a sneaky wizard
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/navbar.css";
    document.head.appendChild(link);

    // 2️⃣ Create the container for the navbar
    const navbarContainer = document.createElement("div");
    navbarContainer.classList.add("navbar");

    // 3️⃣ Push it to the top of <body>
    document.body.prepend(navbarContainer);

    // 4️⃣ Fetch the navbar HTML
    const res = await fetch("/assets/navbar.html");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    // 5️⃣ Inject HTML
    navbarContainer.innerHTML = html;

    // 6️⃣ Highlight current link
    const current = location.pathname.replace(/\/+$/, "");
    navbarContainer.querySelectorAll("a").forEach(a => {
      const href = a.getAttribute("href").replace(/\/+$/, "");
      if (href === current) a.classList.add("active");
    });
  } catch (err) {
    console.error("Navbar failed to load:", err);
  }
});
