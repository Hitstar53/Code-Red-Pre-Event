const btn = document.querySelector('#code-re');
if (window.innerWidth < 768) {
  const textWrapper1 = document.querySelector('.text-wrapper1 p');
  const textw = document.querySelector('.text-wrapper1');
  textw.style.height = '90%';
  textw.style.width = '90%';
  textw.style.marginTop = '-6rem';
  textw.style.marginLeft = '13rem';
  textWrapper1.innerHTML = ` The button waits, to start the show,|
  The curtains rise, the clock starts to glow.|
  Tick! Tock! Tick! Tock! Time is running low,|
  The city awaits, its fate to be known.|
  |
  So, go ahead, make your move,|
  Save the city, earn its love.|
  But beware, I am not what I seem,|
  For I am a monster, a psychopathic dream.|`;
  // create a buuton and append to to textWrapper1

  btn.style.height = '50px';
  btn.style.width = '220px';
  btn.style.marginTop = '2rem';
  btn.style.marginLeft = '1.5rem';
}
else {
btn.style.display = 'none';
const tw = document.querySelector('.text-wrapper2 p');
tw.style.display = 'none';
const crbtn = document.querySelector('#code-red');
crbtn.style.display = 'none';
//sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(20000).then(() => {
  const textWrapper1 = document.querySelector('.text-wrapper2 p');
  textWrapper1.style.display = 'block';
  let text4 = textWrapper1.innerHTML;
  text4 = text4.replace(/<br>/, '|'); // Replace <br> tags with |
  textWrapper1.innerHTML = "";
  let ri = 0;
  const typing4 = setInterval(() => {
    if (ri < text4.length) {
      if (text4.charAt(ri) === '|') { // Replace | with <br>
        textWrapper1.innerHTML += '<br>';
      } else {
        textWrapper1.innerHTML += text4.charAt(ri);
      }
      ri++;
    } else {
      clearInterval(typing4);
    }
  }, 16);
});

sleep(27000).then(() => {
  const crbtn = document.querySelector('#code-red');
  crbtn.style.display = '';
});
document.getElementById('.audio-effect').play();}

// change text wrapper 1 html if the device is mobile
