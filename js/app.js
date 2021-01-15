let fondoGeometrico = document.getElementById("fondoGeometrico");
let fondo = 3; //cambiar los fondos 2 = cuadrado ; 1 = hexagono ; 3 = octagono.
if (fondo === 1) {
  $(".fondoGeometrico").css({
    "clip-path":
      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  });
  fondoGeometrico.style.background = "aliceblue";
  fondoGeometrico.style.position = "relative";
  fondoGeometrico.style.width = "370px";
  fondoGeometrico.style.height = "350px";
} else if (fondo === 2) {
  $(".fondoGeometrico").css({
    "clip-path":
      "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
  });
  fondoGeometrico.style.background = "#F6B507 ";
  fondoGeometrico.style.position = "relative";
  fondoGeometrico.style.width = "370px";
  fondoGeometrico.style.height = "350px";
} else if (fondo === 3) {
  $(".fondoGeometrico").css({
    "clip-path":
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
  });
  fondoGeometrico.style.background = "#dedede ";
  fondoGeometrico.style.position = "relative";
  fondoGeometrico.style.width = "370px";
  fondoGeometrico.style.height = "350px";
}

var playOrPause = document.getElementById("pButton");

playOrPause.addEventListener("click", play);

var music = document.getElementById("music");

var slider = document.getElementById("myRange"); // timeline  = CUADRO ROJO

var output = document.getElementById("demo");
var signo = " %";
var signo2 = signo.fontcolor("yellow");

let interval;
let sliderInUse = false;

var copyElpasedTimeToSlider = (_) => {
  var slider = document.getElementById("myRange");
  slider.value = (music.currentTime * 100) / music.duration;

  output.innerHTML = slider.value + guiones + signo2;
};

function play() {
  if (music.paused) {
    music.play();
    playOrPause.innerHTML = "PAUSE";
    playOrPause.style.background = "brown";
  } else {
    music.pause();
    playOrPause.innerHTML = "PLAY";
    playOrPause.style.background = "green";
  }
}
music.addEventListener("ended", function () {
  this.currentTime = 0;
  this.pause();
  playOrPause.innerHTML = "PLAY";
  playOrPause.style.background = "green";
});

// BARRA DEL TIEMPO:
var puntos = ":";
var menos = "-";
var result = puntos.fontcolor("gray");
var result3 = menos.fontcolor("blue");

optionTotal = 1; // desaparecer los 3 tiempos = 0 y 1 = aparecer
cuentaProgresiva = 1; // desaparecer 0  y 1 = aparecer
cuentaTotal = 1; // desaparecer 0  y 1 = aparecer
cuentaRegresiva = 0; // desaparecer 0  y 1 = aparecer

var barra = "/";
var result2 = barra.fontcolor("red");

if (optionTotal === 1) {
  if (cuentaTotal === 1) {
    // CUENTA TOTAL:
    music.addEventListener(
      "timeupdate",
      function () {
        var timeleft = document.getElementById("total"),
          duration = parseInt(music.duration),
          currentTime = parseInt(music.currentTime),
          timeLeft = duration,
          s,
          m,
          h;

        s = timeLeft % 60;
        m = Math.floor(timeLeft / 60) % 60;
        h = Math.floor(timeLeft / 3600) % 60;

        s = s < 10 ? "0" + s : s;
        m = m < 10 ? "0" + m : m;
        h = h < 10 ? "0" + h : h;
        timeleft.innerHTML = h + result + m + result + s;

        if (!sliderInUse) {
          copyElpasedTimeToSlider();
        }
      },
      false
    );
  }
  if (cuentaRegresiva === 1) {
    // CUENTA REGRESIVA:
    music.addEventListener(
      "timeupdate",
      function () {
        var timeleft = document.getElementById("timeleft"),
          duration = parseInt(music.duration),
          currentTime = parseInt(music.currentTime),
          timeLeft = duration - currentTime,
          s,
          m,
          h;
        s = timeLeft % 60;
        m = Math.floor(timeLeft / 60) % 60;
        h = Math.floor(timeLeft / 60 / 60) % 60;

        s = s < 10 ? "0" + s : s;
        m = m < 10 ? "0" + m : m;
        h = h < 10 ? "0" + h : h;

        timeleft.innerHTML =
          " " + result4 + result3 + h + result + m + result + s;
      },
      false
    );
  }
  if (cuentaProgresiva === 1) {
    // CUENTA PROGRESIVA:
    music.addEventListener(
      "timeupdate",
      function () {
        var timeline = document.getElementById("currentTime");

        var s = parseInt(music.currentTime % 60);
        var m = parseInt((music.currentTime / 60) % 60);
        var h = parseInt((music.currentTime / 60 / 60) % 60);

        s = s < 10 ? "0" + s : s;
        m = m < 10 ? "0" + m : m;
        h = h < 10 ? "0" + h : h;

        timeline.innerHTML = h + result + m + result + s + " " + result2;
      },
      false
    );
  }
}

if (cuentaProgresiva === 1) {
  var result2 = " ";
} else {
  var barra = "/";
  var result2 = barra.fontcolor("red");
}
if (cuentaRegresiva === 1) {
  var barra = "/";
  var result2 = barra.fontcolor("red");
} else {
  //  var result2 = "";
  var barra = "/";
  var result2 = barra.fontcolor("red");
}

if (cuentaTotal === 1) {
  var barra2 = "/";
  var result4 = barra.fontcolor("red");
} else {
  var result4 = " ";
}

var duration = music.duration;

// Barra de volumen:
var barrita = document.getElementById("barrita");
var text = document.getElementById("text");
var guion = "--";
var guiones = guion.fontcolor("black");
var signo3 = "%";
var signo4 = signo3.fontcolor("yellow");

barrita.oninput = function () {
  text.innerHTML = this.value + guiones + signo4;
};

function myFunction() {
  text.innerHTML = barrita.value + guiones + signo4;
}
myFunction();

var e = document.querySelector(".contenedor");
var eInner = document.querySelector(".barrita");
var audio = document.querySelector("audio");

window.SetVolume = function (val) {
  console.log("Before: " + audio.volume);
  audio.volume = val / 100;
  console.log("After: " + audio.volume);
};

// BARRA DEL TRANSCURSO DEL TIEMPO DE LA MUSICA:
var playhead = document.getElementById("sliderContainer"); // playhead = CCONTENEDOR AZUL

slider.oninput = function () {
  sliderInUse = true;
  valor = this.value;
  music.currentTime = (this.value * music.duration) / 100;

  output.innerHTML = this.value + guiones + signo2;
};

slider.onmouseup = function () {
  sliderInUse = false;
};
