import { setTheme, applyTheme } from '/assets/js/theme.js';
import { getCookie, setCookie } from '/assets/js/utils.js';
import { checkCSSDebug, initDevTools } from '/assets/js/devMenu.js';
import { setVolume, getVolume } from '/assets/js/bgMusic.js';


// useless but i guess good for debugging to see if main.js is imported?
// idfk
console.log("welcome to miitube");

(function() {
  checkCSSDebug();
  initDevTools();
})();

window.addEventListener('DOMContentLoaded', () => {
  const savedBgVolume = getCookie('bgVolume');
  const savedSfxVolume = getCookie('sfxVolume');
  const savedTheme = getCookie('theme');

  console.log(`DEBUG:\n  bgvol: ${savedBgVolume},\n  sfxvol: ${savedSfxVolume},\n  thm: ${savedTheme}`);
  if (savedBgVolume) { setVolume(savedBgVolume / 100); }
  if (savedTheme) {
    applyTheme(savedTheme);
  }
});

// Add more here later if needed
// this file is added to all pages of the site btw