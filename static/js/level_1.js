function flipCard(card) {
    card.classList.toggle('card-flipped');
  }

const words =[
    {id:1,word:'crypt',N:15912581,D:500000000},
    {id:2,word:'omen',N:7565257,D:50000000},
    {id:3,word:'lurk',N:12211811,D:100000000},
    {id:4,word:'coven',N:157610257,D:5000000000},
    {id:5,word:'fate',N:1202401,D:20000000},
    {id:6,word:'fear',N:13025059,D:50000000},
    {id:7,word:'hex',N:120131,D:250000},
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

