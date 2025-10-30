// this controls injecting the navbar onto the page
// and also mobile resizing (JANK WARNING)
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

    // get the logo
    const logo = navbarContainer.querySelector(".logo");


    // this function is fckn black magic i have no clue good luck
    // rewrite this later, this is the most jank function in this whole project
    function checkNavbar() {
        const tolerance = 1; // pixels of wiggle room
        const logoHidden = 480 - navbarContainer.clientWidth > tolerance;
        const navbarLeft = navbarContainer.querySelector(".navbar-left");
        const navbarRight = navbarContainer.querySelector(".navbar-right");

        if (logoHidden) {
            logo?.classList.add("hidden");

            // Move right children to left
            Array.from(navbarRight.children).forEach(child => {
                if (!navbarLeft.contains(child)) {
                    navbarLeft.appendChild(child);
                }
            });

            // Center all children
            navbarLeft.style.justifyContent = "center";
            navbarLeft.style.width = "100%"; // take up full navbar width
            navbarLeft.style.gap = "10px";   // optional spacing

        } else {
            logo?.classList.remove("hidden");

            // Move right children back
            Array.from(navbarLeft.children).forEach(child => {
                if (!child.classList.contains("always-left")) {
                    navbarRight.appendChild(child);
                }
            });

            // Restore original layout
            navbarLeft.style.justifyContent = "flex-start";
            navbarLeft.style.width = ""; // reset to original
            navbarLeft.style.gap = "0";  // reset gap
        }
    }


    // check on resize and load if navbar is too wide
    checkNavbar();
    let resizeTimeout;
    window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        checkNavbar(); // only runs once 50ms after resizing stops
    }, 50);
    });


  } catch (err) {
    console.error("Navbar failed to load:", err);
  }
});
