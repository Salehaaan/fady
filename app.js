const colors = ["green", "#90ee90", "blue", "red", "#a1e7cf", "rgba(133,122,200)"];
const btn = document.getElementById("btn");

const color = document.querySelector(".color")


btn.addEventListener("click",function () {

const randomNumber = getRandomNumber();
console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = ["it's Fady 24 Birthday Bitches"]; 
});

function getRandomNumber() {
return Math.floor(Math.random() * colors.length);
}