// When importing this into HTML, ALWAYS USE "defer"!!!!!!!!!! PLEASE!!
window.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loading-screen");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 500);
});
