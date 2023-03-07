function flipCard(card) {
    card.classList.toggle('card-flipped');
  }

const words =[
    {id:1,word:'crypt',N:15912581,D:500000000},
    {id:2,word:'omen',N:7565257,D:50000000},
    {id:3,word:'lurk',N:12211811,D:100000000},
    {id:4,word:'coven',N:157610257,D:5000000000},
    {id:5,word:'fate',N:1202401,D:20000000},
    {id:6,word:'fear',N:3025059,D:50000000},
    {id:7,word:'hex',N:20131,D:250000},
    {id:8,word:'dock',N:4150311,D:100000000},
     


]

randomid= Math.floor(Math.random() * 8) + 1;
console.log(randomid);
const word = words.find(word => word.id === randomid);
const N = word.N;
const D = word.D;
const word1 = word.word;
B1 = document.getElementById("B1");
B2 = document.getElementById("B2");
B1.innerHTML = N;
B2.innerHTML= D;

function check(){
    if (document.getElementById('answer').value == word1){
        document.getElementById('bool').value ="yes"
        alert("Correct");
    }
    else{
        alert("Incorrect");
    }

}

function stopwatch(elementName) {
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    const btn = document.getElementById("hint");
  
    // Load the timer values from local storage
    var tens = parseInt(localStorage.getItem("tens_2")) || 0;
    var seconds = parseInt(localStorage.getItem("seconds_2")) || 0;
    var minutes = parseInt(localStorage.getItem("minutes_2")) || 0;
  
    // Display the timer values
    appendTens.innerHTML = formatTime(tens);
    appendSeconds.innerHTML = formatTime(seconds);
    appendMinutes.innerHTML = formatTime(minutes);
  
    // Start the timer
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
      // Save the timer values to local storage
      localStorage.setItem("tens_2", tens);
      localStorage.setItem("seconds_2", seconds);
      localStorage.setItem("minutes_2", minutes);
  
      // Display the timer values
      appendTens.innerHTML = formatTime(tens);
      appendSeconds.innerHTML = formatTime(seconds);
      appendMinutes.innerHTML = formatTime(minutes);
  
      // Enable the button when the timer reaches 1 minute
      if (minutes > 0) {
        btn.disabled = false;
        btn.style.border = "none";
        btn.style.color = "black";
        btn.style.backgroundColor = "yellow";
        btn.style.cursor = "pointer";
      }
    }
  
    // Format the time value with leading zeros
    function formatTime(time) {
      return time.toString().padStart(2, "0");
    }
  }
  
  window.onbeforeunload = function() {
    localStorage.clear();
  }
  
  
  
  stopwatch("stopwatch");
  localStorage.clear();

