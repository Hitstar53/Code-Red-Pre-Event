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
document.getElementById('.audio-effect').play();