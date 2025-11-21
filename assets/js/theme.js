export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

export function setTheme(theme) {
  applyTheme(theme);
  setCookie('theme', theme);
}
