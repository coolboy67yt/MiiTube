document.addEventListener("DOMContentLoaded", async () => {
  try {
    // add navbar css to page
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/navbar.css";
    document.head.appendChild(link);

    // create the navbar container
    const navbarContainer = document.createElement("div");
    navbarContainer.classList.add("navbar");

    // push nav container to top
    document.body.prepend(navbarContainer);

    // get the navbar code
    const res = await fetch("/assets/navbar.html");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    // put the navbar in the container
    navbarContainer.innerHTML = html;
  } catch (err) {
    console.error("Navbar failed to load:", err);
  }
});
