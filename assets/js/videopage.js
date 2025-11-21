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
    const box = document.createElement("div");
    box.className = "video-box";

    const link = document.createElement("a");
    link.className = "cover-container"
    link.href = `/watch.html?id=${originalIndex}`;

    const img = document.createElement("img");
    img.src = getVideoThumbnail(video);
    img.alt = "Thumbnail"
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

    // If a backend was added later, this would have to be altered to properly fetch the channel name in the backend
    let user = users.find(u => u.username.substring(1) === video.author), authorName = video.author;
    if (user) authorName = user.name;

    if (devMode) {
        authorDiv.textContent = `by ${authorName} | ${originalIndex}`;
    } else {
        authorDiv.textContent = `by ${authorName}`;
    }

    box.appendChild(titleDiv);
    box.appendChild(authorDiv);

    return box;
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