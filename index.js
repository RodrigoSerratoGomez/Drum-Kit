//Generar Sonidos con Click
var n = document.querySelectorAll(".drum").length;

for (let i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var x = this.innerHTML;
    hacerSonidos(x);
    animar(x);
  });
}

//Generar Sonidos con el Teclado
document.addEventListener("keypress", function(event) {
  var x = event.key;
  hacerSonidos(x);
  animar(x);
});

//Funcion de Generación de Ruidos
function hacerSonidos(key) {
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
      console.log(x);
  }
}

//Funcion de Animcion CSS
function animar(id){
  var clase = document.querySelector("." + id);
  clase.classList.add("pressed");
  setTimeout(function(){
    clase.classList.remove("pressed");
  }, 100);
}
