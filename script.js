const button = document.getElementById("btn-js");

let arr = new Array("img/1.png", "img/2.png", "img/3.png", "img/4.png");

button.addEventListener("click", () => {
  pictureGen();
});
function pictureGen() {
  let randInt = Math.floor(Math.random() * arr.length);
  document.getElementById("photo").src = arr[randInt];
}
