var nod = document.querySelectorAll(".drum").length;

// function for detecting button press
for (var i = 0; i < nod; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      this.style.color = "white";
      var thisbutton = this.innerHTML;
      makesound(thisbutton);
      buttonanimation(thisbutton);
  });
}

// function for detecting keyboard press
document.addEventListener("keydown", function(event){
  makesound(event.key);
  buttonanimation(event.key);
});

// function to play audio
function makesound(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(thisbutton.innerHTML);
  }
}

// function to add animation
function buttonanimation(key){
  var activebutton = document.querySelector("." + key);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}
