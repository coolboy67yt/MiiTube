// How to import new vids
// tutorial by turtledevv

// 1. Get the youtube ID. You can find this in the link: https://www.youtube.com/watch?v=LaYhiP2se9o
//                                                                                          ^ right there!

// 2. Get the title.

// 3. Get the author name. Please make sure that there is a .jpg in /assets/img/users/ that has the EXACT SAME NAME.
//    For example: If you do {author: "JacaneU"}: in /assets/img/users, there needs to be "JacaneU.jpg".

// p.s: IT NEEDS TO BE A ".jpg"! NOT A ".jpeg", NOT A "png", JUST A ".jpg"!!! IF it's any other format, simply convert it to .jpg

// 4. Is it a video or playlist?
//      playlist:  Put {type: "playlist"}, and then add {"thumbnail": "(put your image url here)"}
//      video:     Put {type: "video"}. The thumbnail is handled by the script auto-magically so you don't need to define it.

// Now, go to the very bottom of the videos list. Add a comma to the end of the previous entry (right after the closing curly bracket),
// then add your video. It should be something like this.
// { id: "step1", title: "step2", author: "step3", type: "step4" }

// Then, save. Go to the videos page and hard-refresh (Ctrl+Shift+R, or hold down shift while clicking the reload button).

// If it pops up, and you can click it, and the video player fully works, then congrats!
// If not, just DM me, I'll figure out what you did wrong.

export const videos = [
  { id: "TyQ8EON7pXw", title: "MiiTube - Launch Trailer", author: "JacaneU", type: "video" },
  { id: "bgsNEm9t9JI", title: "DSneo Concept", author: "JacaneU", type: "video" },
  { id: "XwpxU1ufhxo", title: "Mii Creator Check Mii out", author: "JacaneU", type: "video" },
  { id: "6PPB0-_ttXs", title: "Mii network-launch trailer", author: "JacaneU", type: "video" },
  { id: "3c0O-qkSxUs", title: "WiiU phone Concept", author: "JacaneU", type: "video" },
  { id: "nH8RbUT2PS0", title: "My Tomodachi life ltd wishlist", author: "JacaneU", type: "video" },
  { id: "CorxS-fkbr4", title: "How to make a WiiU phone", author: "JacaneU", type: "video" },
  { id: "-9p8FkswQ7g", title: "Introducing: Mii Creator!", author: "MiiCreatorREAL", type: "video" },
  { id: "X9If_rY-okw", title: "Mii Creator DIRECT🔴", author: "MiiCreatorREAL", type: "video" },
  { id: "PLGpTUSDBaNFQtbm78RgbNQvU2mIG_5ttC", title: "Mii Creator OST", author: "MiiCreatorREAL", type: "playlist", thumbnail: "https://i.ytimg.com/vi/Bdg2qt_HCyE/hq720.jpg" },
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
  { id: "GVK1wzaKkzE", title: "I tried blender", author: "JacaneU", type: "video" },
  { id: "oZ-AZFJzjrQ", title: "Mii Network V 2 Direct", author: "JacaneU", type: "video" },
  { id: "VUk1O041Se8", title: "Mii Merchandise", author: "Zorrpu", type: "video" },
  { id: "Hk3IKv0v3bU", title: "mii lost media", author: "Zorrpu", type: "video" },
  { id: "L40iWBNpcjk", title: "the Mii iceberg", author: "Zorrpu", type: "video" },
  { id: "5WZ0NBexHro", title: "Nintendo's secret mii document", author: "Zorrpu", type: "video" },
  { id: "sHZK4wH4vRc", title: "Miis on the Switch 2", author: "Zorrpu", type: "video" },
  { id: "Rq5iHQa9RXE", title: "unreproducible miis", author: "Zorrpu", type: "video" },
  { id: "JgmfkErBORA", title: "Mii", author: "Zorrpu", type: "video" },
  { id: "Tuj4kUtIeM4", title: "Welcome to my channel!", author: "RFGuy", type: "video" },
  { id: "kOy8CwgdBTc", title: "Mii Creator Dev build!", author: "RFGuy", type: "video" },
  { id: "grS0eTELOeM", title: "How to make RFGuy's mii", author: "RFGuy", type: "video" },
  { id: "9-xZ_4_UTtY", title: "Another Mii Maker", author: "RFGuy", type: "video" },
  { id: "m1uhlSHfnrw", title: "Mii creator's update facts!", author: "RFGuy", type: "video" },
  { id: "tumX179z044", title: "Hellyeha", author: "Mertcanius", type: "video" },
  { id: "4HZLGjpUxOE", title: "cloud", author: "Mertcanius", type: "video" },
  { id: "8LZn1wHvA6A", title: "Whiplash mii", author: "Mertcanius", type: "video" },
  { id: "rXRn5eO284U", title: "frieden-peace", author: "Mertcanius", type: "video" },
  { id: "Rn_FkM6stfA", title: "test", author: "Mertcanius", type: "video" },
  { id: "D1yUWQgOgyY", title: "test_02", author: "Mertcanius", type: "video" },
  { id: "TV0KhuN-vX8", title: "test_03", author: "Mertcanius", type: "video" },
  { id: "saMpgWW5XBQ", title: "How One Bug RUINED Our Game...", author: "RayaGamedev", type: "video" }
];
