var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var prvRandom1 = "./images/dice"+randomNumber1+".png"
let img1 = document.getElementById("img1")
img1.setAttribute("src" , prvRandom1)
// separation 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var prvRandom2 = "./images/dice"+randomNumber2+".png"
let img2 = document.getElementById("img2")
img2.setAttribute("src" , prvRandom2)


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🥳 Player1 win"
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw"
}else{
    document.querySelector("h1").innerHTML = "🥳 Player2 win"
}