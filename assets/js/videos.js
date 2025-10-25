const videos = [
  { id: "TyQ8EON7pXw", title: "MiiTube - Launch Trailer", author: "Jacane_U", type: "video" },
  { id: "bgsNEm9t9JI", title: "DSneo Concept", author: "Jacane_U", type: "video" },
  { id: "XwpxU1ufhxo", title: "Mii Creator Check Mii out", author: "Jacane_U", type: "video" },
  { id: "6PPB0-_ttXs", title: "Mii network-launch trailer", author: "Jacane_U", type: "video" },
  { id: "3c0O-qkSxUs", title: "WiiU phone Concept", author: "Jacane_U", type: "video" },
  { id: "nH8RbUT2PS0", title: "My Tomodachi life ltd wishlist", author: "Jacane_U", type: "video" },
  { id: "CorxS-fkbr4", title: "How to make a WiiU phone", author: "Jacane_U", type: "video" },
  { id: "-9p8FkswQ7g", title: "Introducing: Mii Creator!", author: "MiiCreatorREAL", type: "video" },
  { id: "X9If_rY-okw", title: "Mii Creator DIRECT🔴", author: "MiiCreatorREAL", type: "video" },
  { id: "Bdg2qt_HCyE", title: "Mii Creator OST", author: "MiiCreatorREAL", type: "playlist", thumbnail: "https://i.ytimg.com/vi/Bdg2qt_HCyE/hq720.jpg" },
  { id: "NyFtcr60GGI", title: "Party like it's 2009!🔴", author: "TripleDash", type: "video" },
  { id: "3l9Szn7zAjE", title: "Mario Kart Wii🔴", author: "TripleDash", type: "video" },
  { id: "fDiwTCJn1TE", title: "The FINAL Hour of the Nintendo 3DS and Wii U", author: "TripleDash", type: "video" },
  { id: "EqAYwYvXrSQ", title: "sonic racing🔴", author: "TripleDash", type: "video" },
  { id: "iahwSxFeBsc", title: "My Wii U nearly died", author: "TripleDash", type: "video" },
  { id: "GMo5dhOgyMY", title: "Welcome to mii channel!", author: "MiiMaker3D", type: "video" },
  { id: "XmZTq9UEg6Q", title: "Capitaliism", author: "MiiMaker3D", type: "video" },
  { id: "zKBi-VkP3W0", title: "Slumber Partii", author: "MiiMaker3D", type: "video" },
  { id: "ixPWFYOmV2Q", title: "Riiver Rush", author: "MiiMaker3D", type: "video" },
  { id: "PoDO4P8TyD4", title: "Switch 2 Home Menu Redesign", author: "MiiMaker3D", type: "video" },
  { id: "Y7noVBKR5HM", title: "Thanks for 1000 Subscribers!!!", author: "MiiMaker3D", type: "video" },
  { id: "GVK1wzaKkzE", title: "I tried blender", author: "Jacane_U", type: "video" },
  { id: "oZ-AZFJzjrQ", title: "Mii Network V 2 Direct", author: "Jacane_U", type: "video" },
  { id: "VUk1O041Se8", title: "Mii Merchandise", author: "Zorrpu", type: "video" },
  { id: "Hk3IKv0v3bU", title: "mii lost media", author: "Zorrpu", type: "video" },
  { id: "L40iWBNpcjk", title: "the Mii iceberg", author: "Zorrpu", type: "video" },
  { id: "5WZ0NBexHro", title: "Nintendo's secret mii document", author: "Zorrpu", type: "video" },
  { id: "sHZK4wH4vRc", title: "Miis on the Switch 2", author: "Zorrpu", type: "video" },
  { id: "Rq5iHQa9RXE", title: "unreproducible miis", author: "Zorrpu", type: "video" },
  { id: "JgmfkErBORA", title: "Mii", author: "Zorrpu", type: "video" },
  { id: "Tuj4kUtIeM4", title: "Welcome to my channel!", author: "RFguy", type: "video" },
  { id: "kOy8CwgdBTc", title: "Mii Creator Dev build!", author: "RFguy", type: "video" },
  { id: "grS0eTELOeM", title: "How to make RFGuy's mii", author: "RFguy", type: "video" },
  { id: "9-xZ_4_UTtY", title: "Another Mii Maker", author: "RFguy", type: "video" },
  { id: "m1uhlSHfnrw", title: "Mii creator's update facts!", author: "RFguy", type: "video" },
  { id: "tumX179z044", title: "Hellyeha", author: "Mertcanius", type: "video" },
  { id: "4HZLGjpUxOE", title: "cloud", author: "Mertcanius", type: "video" },
  { id: "8LZn1wHvA6A", title: "Whiplash mii", author: "Mertcanius", type: "video" },
  { id: "rXRn5eO284U", title: "frieden-peace", author: "Mertcanius", type: "video" },
  { id: "Rn_FkM6stfA", title: "test", author: "Mertcanius", type: "video" },
  { id: "D1yUWQgOgyY", title: "test_02", author: "Mertcanius", type: "video" },
  { id: "TV0KhuN-vX8", title: "test_03", author: "Mertcanius", type: "video" },
  { id: "saMpgWW5XBQ", title: "How One Bug RUINED Our Game...", author: "RayaGamedev", type: "video" }
];

function getVideoLink(video) {
  return `https://youtu.be/${video.id}`;
}

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
    const box = document.createElement("div");
    box.className = "video-box";

    const link = document.createElement("a");
    link.href = getVideoLink(video);

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
        // Find original index in the videos array (1-based)
        const originalIndex = videos.indexOf(video) + 1;
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

// --- Event listeners for dropdowns ---
document.addEventListener("DOMContentLoaded", () => {
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

    renderVideos(); // initial render
});
