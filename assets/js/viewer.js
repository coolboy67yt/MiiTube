import { videos } from '/assets/data/videos.js';

function getEmbedLink(videoID, videoPlatform) {
  if (videoPlatform === "yt") {
      return `https://www.youtube.com/embed/${videoID}`;
  } else if (videoPlatform === "od") {
      return `https://odysee.com/$/embed/${videoID}`;
  } else if (videoPlatform === "vm") {
      return `https://player.vimeo.com/video/${videoID}`;
  } else {
      console.error(`fatal: unknown video platform "${videoPlatform}"`);
      return `data:text/html;charset=utf-8,<h1 style='color:red;'>Error</h1><p>unknown video platform "${videoPlatform}"</p>`;
  }
}

// example usage:
//    setVideo("https://example.com", "Title", "Turtledevv", "/assets/img/users/Turtledevv.jpg");
function setVideo(url, title, author, profilePic) {
  const iframe = document.getElementById('video-embed');
  const titleText = document.getElementById('title');
  const authorText = document.getElementById('author');
  const profileImg = document.getElementById('pfp')

  if (!iframe) {
    console.error("fatal: Cannot find #video-embed!");
    return;
  }

  if (!titleText || !authorText) {
    console.warn("fatal: Cannot find #title and/or #author elements");
  }

  if (!profileImg) {
    console.warn("fatal: Cannot find #profileImg element!");
  }

  iframe.src = url;
  profileImg.src = profilePic;
  titleText.textContent = title;
  authorText.textContent = `by ${author}`;
}


document.addEventListener("DOMContentLoaded", () => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const videoID = params.get("id");

    console.log(`fetching video w/ id ${videoID}`)
    const video = videos[videoID - 1]

    if (video.type === "video") {
        const embedLink = getEmbedLink(video.id, video.platform);
        const videoTitle = video.title;
        const videoAuthor = video.author;
        const authorPFP = `/assets/img/users/${videoAuthor}.jpg`;

        setVideo(embedLink, videoTitle, videoAuthor, authorPFP);
    } else {
        console.log("type is playlist, redirecting to youtube")
        window.location.assign(`https://www.youtube.com/playlist?list=${video.id}`)
    }

});

// <iframe id="odysee-iframe" style="width:100%; aspect-ratio:16 / 9;"
// src="https://odysee.com/%24/embed/(videoID)" allowfullscreen></iframe>

// <iframe title="vimeo-player" src="https://player.vimeo.com/video/(videoID)" frameborder="0"
// referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media;
// web-share" allowfullscreen></iframe>

// <iframe width="560" height="315" src="https://www.youtube.com/embed/(videoID)"
// title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
// gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
