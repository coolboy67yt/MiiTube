console.log("welcome to miitube");

(function() {
  const params = new URLSearchParams(window.location.search);
  const dbg = params.get("dbg");

  if (dbg === "1") {
    // Create style for debug mode
    const style = document.createElement("style");
    style.textContent = `
      .debug-css * {
        outline: 1px solid rgba(255, 0, 0, 0.5) !important;
      }
    `;
    document.head.appendChild(style);

    // Add class to EVERYTHING
    document.querySelectorAll("*").forEach(el => {
      el.classList.add("debug-css");
    });

    console.log("%ccss debugging is enabled", "color: lime");
  }
})();

// Add more here later if needed
// this file is added to all pages of the site btw