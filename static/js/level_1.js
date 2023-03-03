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




