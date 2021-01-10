var buttons = document.querySelectorAll("button");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var songs = this.innerHTML;

    makeSound(songs);
    animate(songs);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  animate(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    default:
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
  }
}

function animate(currentKey) {
  var anime = document.querySelector("." + currentKey);
  anime.classList.add("pressed");

  setTimeout(function () {
    anime.classList.remove("pressed");
    7000;
  });
}
