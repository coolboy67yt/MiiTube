// When importing this into HTML, ALWAYS USE "defer"!!!!!!!!!! PLEASE!!

// After 500ms, hide the loading-screen element.
// This is so that while the thumbnails load in
// for the first time, you don't see them load.
// This is jank. And stupid. Will replace later.
window.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loading-screen");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 500);
});
