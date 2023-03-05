function stopwatch(elementName) {
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    const btn = document.getElementById("hint");
  
    // Load the timer values from local storage
    var tens = parseInt(localStorage.getItem("tens_p0")) || 0;
    var seconds = parseInt(localStorage.getItem("seconds_p0")) || 0;
    var minutes = parseInt(localStorage.getItem("minutes_p0")) || 0;
  
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
      localStorage.setItem("tens_p0", tens);
      localStorage.setItem("seconds_p0", seconds);
      localStorage.setItem("minutes_p0", minutes);
  
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

