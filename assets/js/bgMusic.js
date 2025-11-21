const audio = document.getElementById("bgm");

if (!audio) {
    console.warn("bg music audio element not found. most likely; there's no music on this page");
} else {
    attemptPlay();
}

function attemptPlay() {
    console.log("attempting autoplay");
    audio.play().then(() => {
        console.log("autoplay successful");
        removeInteractionListeners();
    }).catch(() => {
        console.log("autoplay blocked >:[");
        addInteractionListeners();
    });
}

function playOnInteract() {
    console.log("user interaction detected, attempting autoplay again");
    audio.play().then(() => {
        console.log("autoplay successful");
        removeInteractionListeners();
    }).catch(err => {
        console.warn("somehow, something has gone very *very* wrong. user interaction listener did stuff, but autoplay is still blocked. here's the error: ", err);
    });
}

function addInteractionListeners() {
    const events = ["click", "mousedown", "keydown", "touchstart", "scroll"];
    events.forEach(e => window.addEventListener(e, playOnInteract, { once: true }));
}

function removeInteractionListeners() {
    const events = ["click", "mousedown", "keydown", "touchstart", "scroll"];
    events.forEach(e => window.removeEventListener(e, playOnInteract));
}

export function getVolume() {
    const audio = document.getElementById("bgm");
    return audio ? audio.volume : null;
}

export function setVolume(v) {
    const audio = document.getElementById("bgm");
    if(!audio) return;

    // Shronk into the valid range
    const vol = Math.min(1, Math.max(0, Number(v)));
    audio.volume = vol;
    return vol;
}
