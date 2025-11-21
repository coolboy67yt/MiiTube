import { setCookie } from "./utils.js";

export function applyTheme(theme) {
  console.log(`applying theme: ${theme}`);
  document.documentElement.setAttribute('data-theme', theme);
}

export function setTheme(theme) {
  console.log(`setting theme: ${theme}`);
  applyTheme(theme);
  setCookie('theme', theme);
  console.log(`saved to cookie`)
}
