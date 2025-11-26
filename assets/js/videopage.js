// sorry for the lack of comments later on in the file

import { videos } from '/assets/data/videos.js'; // get the video list
import { users } from '/assets/data/users.js';

function getVideoThumbnail(video) {
  if(video.thumbnail) { // If the thumbnail is already provided, simply override and use this one
    return video.thumbnail;
  }
  return `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
}

// for figurin out vid IDs and stuff
const devMode = false;

// this is for the "Recommended" sort.
const recommendedVideos = [1, 8, 24, 17, 7, 15, 43, 27, 25, 34, 29, 20, 9, 13, 4, 23, 11];

let currentSort = "recommended";
let reverseOrder = false;

function getSortedVideos() {
    // this handles how things are sorted on the page
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

    // Determine author name
    let user = users.find(u => u.username.substring(1) === video.author);
    let authorName = user ? user.name : video.author;

    // Playlist badge HTML
    const playlistBadge = video.type === "playlist" 
        ? `<br><span class="playlist-text">📂 Playlist</span>` 
        : '';

    // Dev mode extra info
    const devInfo = devMode ? ` | ${originalIndex}` : '';

    // Full HTML
    const html = `
        <div class="video-box">
            <a class="cover-container" href="/watch.html?id=${originalIndex}">
                <img class="cover" src="${getVideoThumbnail(video)}" alt="Thumbnail">
            </a>
            <div class="video-info">
                <div class="video-title">
                    ${video.title}${playlistBadge}
                </div>
                <div class="video-author">
                    by ${authorName}${devInfo}
                </div>
            </div>
        </div>
    `;

    // Convert HTML string to DOM element
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}



// render videos
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