import { getCookie, setTheme, setCookie, applyTheme } from '/assets/js/theme.js';
import { checkCSSDebug, initDevTools } from '/assets/js/devMenu.js';

// useless but i guess good for debugging to see if main.js is imported?
// idfk
console.log("welcome to miitube");

(function() {
  checkCSSDebug();
  initDevTools();
})();

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = getCookie('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  }
});

// Add more here later if needed
// this file is added to all pages of the site btw