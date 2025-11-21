import { setTheme, applyTheme } from '/assets/js/theme.js';
import { getCookie, setCookie } from '/assets/js/utils.js';
import { setVolume, getVolume } from '/assets/js/bgMusic.js';

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.theme-btn');
    const sfxSlider = document.getElementById('sfx-slider');
    const bgSlider = document.getElementById('bg-slider');

    const savedSfx = getCookie('sfxVolume');
    const savedBg = getCookie('bgVolume');
    const currentTheme = getCookie('theme');


    // save slider values when changed
    sfxSlider.addEventListener('input', () => {
        setCookie('sfxVolume', sfxSlider.value, 365);
    });

    bgSlider.addEventListener('input', () => {
        setCookie('bgVolume', bgSlider.value, 365);
        setVolume(bgSlider.value / 100);
    });

    if (savedSfx !== null && savedSfx !== "") { sfxSlider.value = savedSfx; }
    if (savedBg !== null && savedBg !== "") { bgSlider.value = savedBg; }

    // theme buttons stuff
    buttons.forEach(btn => {
        if(btn.dataset.theme === currentTheme) {
            btn.style.border = '2px solid var(--accent-color)';
            btn.style.fontWeight = 'bold';
        }
    });

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            setTheme(btn.dataset.theme);

            // remove the styling from all buttons
            buttons.forEach(b => { b.style.border = ''; b.style.fontWeight = ''; });

            // add it back to the chosen one (haha)
            btn.style.border = '2px solid var(--misc_accentColor)';
            btn.style.fontWeight = 'bold';
        });
    });
});