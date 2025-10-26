import { videos } from '/assets/data/videos.js';

function getVideoThumbnail(video) {
  if(video.thumbnail) { // If the thumbnail is already provided, simply override and use this one
    return video.thumbnail;
  }
  return `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
}

// --- Dev mode toggle ---
const devMode = false; // set to false in production

// --- Recommended order (1-based indices) ---
const recommendedVideos = [1, 8, 24, 17, 7, 15, 43, 27, 25, 34, 29, 20, 9, 13, 4, 23, 11];

// --- Sorting variables ---
let currentSort = "recommended";
let reverseOrder = false;

// --- Helper for sorted videos ---
function getSortedVideos() {
    let sorted = [...videos];

    switch (currentSort) {
        case "recommended":
            const recommended = [];
            const remaining = [];

            sorted.forEach((video, index) => {
                if (recommendedVideos.includes(index + 1)) {
                    recommended[recommendedVideos.indexOf(index + 1)] = video;
                } else {
                    remaining.push(video);
                }
            });

            sorted = recommended.filter(v => v).concat(remaining);
            if (reverseOrder) sorted.reverse();
            break;

        case "date":
            if (reverseOrder) sorted.reverse();
            break;

        case "alphabetical":
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            if (reverseOrder) sorted.reverse();
            break;

        case "creator":
            sorted.sort((a, b) => a.author.localeCompare(b.author));
            if (reverseOrder) sorted.reverse();
            break;
    }

    return sorted;
}

function createVideoBox(video) {
    const originalIndex = videos.indexOf(video) + 1;
    const box = document.createElement("div");
    box.className = "video-box";

    const link = document.createElement("a");
    link.href = `/watch.html?id=${originalIndex}`;

    const img = document.createElement("img");
    img.src = getVideoThumbnail(video);
    img.className = "cover";
    link.appendChild(img);

    box.appendChild(link);

    const titleDiv = document.createElement("div");
    titleDiv.className = "video-title";
    titleDiv.innerHTML = video.title;

    if (video.type === "playlist") {
        const playlistSpan = document.createElement("span");
        playlistSpan.className = "playlist-text";
        playlistSpan.textContent = "📂 Playlist";
        titleDiv.innerHTML += "<br>";
        titleDiv.appendChild(playlistSpan);
    }

    const authorDiv = document.createElement("div");
    authorDiv.className = "video-author";

    if (devMode) {
        authorDiv.textContent = `by ${video.author} | ${originalIndex}`;
    } else {
        authorDiv.textContent = `by ${video.author}`;
    }

    box.appendChild(titleDiv);
    box.appendChild(authorDiv);

    return box;
}


// --- Render videos ---
function renderVideos() {
    const container = document.getElementById("videos");
    if (!container) return console.error("No container with id 'videos' found.");

    container.innerHTML = "";
    getSortedVideos().forEach((video, index) => {
        container.appendChild(createVideoBox(video, index));
    });
}

function sortnRender() {
    const sortTypeSelect = document.getElementById("sort-type");
    const sortOrderSelect = document.getElementById("sort-order");

    sortTypeSelect.addEventListener("change", () => {
        currentSort = sortTypeSelect.value;
        renderVideos();
    });

    sortOrderSelect.addEventListener("change", () => {
        reverseOrder = sortOrderSelect.value === "reverse";
        renderVideos();
    });

    renderVideos();
}

document.addEventListener("DOMContentLoaded", () => {sortnRender();});