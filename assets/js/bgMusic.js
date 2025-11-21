const audio = document.getElementById("bgm");

attemptPlay();

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