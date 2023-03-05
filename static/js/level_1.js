
const imageBox = document.querySelector(".image-box");
const img = imageBox.querySelector("img");
const closeBtn = imageBox.querySelector(".close-btn");

img.addEventListener("click", function() {
  imageBox.style.width = "80%";
  imageBox.style.height = "80%";
  imageBox.style.position = "absolute";
    // imageBox.style.top = "50%";
    // imageBox.style.left = "50%";
    imageBox.style.marginTop = "0";
    imageBox.style.marginLeft = "-1rem";
    // imageBox.style.transform = "translate(-50%, -50%)";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  imageBox.style.width = "140px";
  imageBox.style.height = "140px";
  imageBox.style.marginTop = "-6rem";
    imageBox.style.marginLeft = "42rem";
  closeBtn.style.display = "none";
});


const numpad = document.querySelector(".numpad");
const num_input = document.querySelector("#num-input");
const del = document.querySelector("#del");
numpad.addEventListener("click", function(event) {
  
    if (event.target.classList.contains("num")) {
        num_input.value += event.target.innerText[0];
        event.preventDefault();
    }

});



del.addEventListener("click", function(event) {
    num_input.value = "";
    event.preventDefault();

});

const submit = document.querySelector("#enter");
submit.addEventListener("click", function(event) {
  if (num_input.value !== "22223222") {
    num_input.value = "Incorrect!!";
    event.preventDefault();

  }
})


function stopwatch(elementName) {
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  const btn = document.getElementById("hint");

  
  var tens = parseInt(localStorage.getItem("tens")) || 0;
  var seconds = parseInt(localStorage.getItem("seconds")) || 0;
  var minutes = parseInt(localStorage.getItem("minutes")) || 0;

 
  appendTens.innerHTML = formatTime(tens);
  appendSeconds.innerHTML = formatTime(seconds);
  appendMinutes.innerHTML = formatTime(minutes);


  var interval = setInterval(startTimer, 10);

  function startTimer() {
    tens++;
    if (tens > 99) {
      seconds++;
      tens = 0;
    }
    if (seconds > 59) {
      minutes++;
      seconds = 0;
    }
    
    localStorage.setItem("tens", tens);
    localStorage.setItem("seconds", seconds);
    localStorage.setItem("minutes", minutes);

 
    appendTens.innerHTML = formatTime(tens);
    appendSeconds.innerHTML = formatTime(seconds);
    appendMinutes.innerHTML = formatTime(minutes);

    
    if (minutes > 0) {
      btn.disabled = false;
      btn.style.border = "none";
      btn.style.color = "black";
      btn.style.backgroundColor = "yellow";
      btn.style.cursor = "pointer";
    }
  }


  function formatTime(time) {
    return time.toString().padStart(2, "0");
  }
}

window.onbeforeunload = function() {
  localStorage.clear();
}



stopwatch("stopwatch");
localStorage.clear();




