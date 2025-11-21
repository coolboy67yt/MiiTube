import { setTheme } from './theme.js';

export function checkCSSDebug() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("dbg") === "1") {
    const style = document.createElement("style");
    style.textContent = `* { outline: 1px solid rgba(255, 0, 0, 0.5) !important; }`;
    document.head.appendChild(style);
    console.log("%ccss debugging is enabled", "color: lime");
  }
}

function toggleCSSDebug() {
  const url = new URL(window.location);
  const params = url.searchParams;

  if (params.get("dbg") === "1") {
    params.delete("dbg");
  } else {
    params.set("dbg", "1");
  }

  url.search = params.toString();
  window.location.href = url.toString();
}

function createDevBadge(menu) {
  const badge = document.createElement('div');
  badge.id = 'devbadge';
  badge.setAttribute('aria-hidden', 'true');
  badge.textContent = '⋯';
  badge.tabIndex = -1;
  document.body.appendChild(badge);

  badge.addEventListener('click', () => menu.classList.toggle('show'));
}

function createDevMenu() {
  const menu = document.createElement('div');
  menu.id = 'devmenu';
  menu.innerHTML = `
    <header> <span>DEVELOPER TOOLS</span> <button id="devclose" aria-label="Close">✕</button> </header>
    <div class="buttons">
      <button class="button tooltip red" id="reloadBtn" data-tooltip="Reload the page."><span>b</span>Reload</button>
      <button class="button tooltip blue" id="devTestsBtn" data-tooltip="Open the DevTests menu."><span>y</span>DevTests</button>
      <button class="button tooltip purple" id="cssDbgBtn" data-tooltip="Toggle CSS debugging."><span>M</span>CSS Debug</button>
    </div>
    <div class="force-theme">
      <label for="themeInput">Force Theme</label>
      <div class="input-row">
        <input id="themeInput" type="text" placeholder="theme-id">
        <button id="themeApplyBtn" class="button">OK</button>
      </div>
    </div>
  `;
  document.body.appendChild(menu);

  menu.querySelector('#devclose').addEventListener('click', () => menu.classList.remove('show'));

  return menu;
}

function attachDevMenuActions() {
  document.getElementById('reloadBtn').addEventListener('click', () => location.reload());
  document.getElementById('devTestsBtn').addEventListener('click', () => location.href = '/secret/devtests.html');
  document.getElementById('cssDbgBtn').addEventListener('click', toggleCSSDebug);

  const themeInput = document.getElementById('themeInput');
  const themeApplyBtn = document.getElementById('themeApplyBtn');
  themeApplyBtn.addEventListener('click', () => {
    const theme = themeInput.value.trim();
    setTheme(theme);
    console.log(`set the theme to ${theme}"`);
  });
}

export function initDevTools() {
  const DEV_HOSTS = new Set(['localhost', 'dev-miitube.vercel.app', '127.0.0.1']);
  if (!DEV_HOSTS.has(location.hostname)) return;

  console.log("developer mode has been enabled");

  const menu = createDevMenu();
  createDevBadge(menu);
  attachDevMenuActions();
}