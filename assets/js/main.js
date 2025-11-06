import { getCookie, setTheme, setCookie, applyTheme } from '/assets/js/theme.js';

// useless but i guess good for debugging to see if main.js is imported?
// idfk
console.log("welcome to miitube");

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = getCookie('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  }
});

// this is in charge of doing the debug css.
// add ?dbg=1 at the end of the URL, and it'll
// let you debug your CSS. wowies.
(function() {
  const params = new URLSearchParams(window.location.search);
  const dbg = params.get("dbg");

  if (dbg === "1") {
    // Create style for debug mode
    const style = document.createElement("style");
    style.textContent = `
      .debug-css * {
        outline: 1px solid rgba(255, 0, 0, 0.5) !important;
      }
    `;
    document.head.appendChild(style);

    // Add class to EVERYTHING
    document.querySelectorAll("*").forEach(el => {
      el.classList.add("debug-css");
    });

    console.log("%ccss debugging is enabled", "color: lime");
  }
})();

(function () {
  // hosts that should show the text
  const DEV_HOSTS = new Set([
    'localhost',
    'dev-miitube.vercel.app',
    '127.0.0.1'
  ]);

  if (!DEV_HOSTS.has(location.hostname)) return; // for prod

  const badge = document.createElement('div');
  badge.textContent = 'DEVELOPER PREVIEW';
  badge.setAttribute('aria-hidden', 'true');
  badge.style.position = 'fixed';
  badge.style.left = '10px';
  badge.style.bottom = '10px';
  badge.style.margin = '4px';
  badge.style.zIndex = '6942067'; // hehe funny numbers
  badge.style.pointerEvents = 'none';
  badge.style.userSelect = 'none';
  badge.style.padding = '6px 10px';
  badge.style.fontFamily = "Inter, sans-serif";
  badge.style.fontSize = '18px';
  badge.style.fontWeight = '700';
  badge.style.letterSpacing = '0.06em';
  badge.style.borderRadius = '6px';
  badge.style.background = 'rgba(0,0,0,0.05)'; // semi-transparent
  badge.style.color = 'rgba(0, 0, 0, 0.49)';
  badge.style.backdropFilter = 'saturate(120%) blur(4px)';
  badge.style.boxShadow = '0 6px 18px rgba(0,0,0,0.35)';
  badge.style.transform = 'translateZ(0)';

  badge.style.transition = 'opacity 200ms ease, transform 200ms ease';
  badge.style.opacity = '0.95';

  document.documentElement.appendChild(badge);

  badge.tabIndex = -1;
})();


// Add more here later if needed
// this file is added to all pages of the site btw