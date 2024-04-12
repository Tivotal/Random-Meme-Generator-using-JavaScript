/* Created by Tivotal */

let meme = document.querySelector(".meme");
let memeTitle = document.querySelector(".meme-title");
let btn = document.querySelector(".btn");

let apiUrl = "https://meme-api.com/gimme/";

let subRaddits = [
  "dankmemes",
  "wholesomememes",
  "me_irl",
  "catmemes",
  "dogmemes",
];

let getMeme = () => {
  //getting random sub reddit from an array
  let ranSubreddit = subRaddits[Math.floor(Math.random() * subRaddits.length)];

  //fetching data from api
  fetch(apiUrl + ranSubreddit)
    .then((res) => res.json())
    .then((data) => {
      let newImg = new Image();

      newImg.onload = () => {
        meme.src = data.url;
        memeTitle.innerHTML = data.title;
      };
      newImg.src = data.url;
    });
};

btn.addEventListener("click", getMeme);
getMeme();
