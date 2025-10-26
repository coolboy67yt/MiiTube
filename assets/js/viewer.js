import { videos } from '/assets/data/videos.js';

function getEmbedLink(videoID) {
  return `https://www.youtube.com/embed/${videoID}`;
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
        const embedLink = getEmbedLink(video.id);
        const videoTitle = video.title;
        const videoAuthor = video.author;
        const authorPFP = `/assets/img/users/${videoAuthor}.jpg`;

        setVideo(embedLink, videoTitle, videoAuthor, authorPFP);
    } else {
        console.log("type is playlist, redirecting to youtube")
        window.location.assign(`https://www.youtube.com/playlist?list=PLGpTUSDBaNFQtbm78RgbNQvU2mIG_5ttC`)
    }

});


// <iframe width="560" height="315" src="https://www.youtube.com/embed/(videoID)"
// title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
// gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
