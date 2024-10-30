var randomNumber1 =  Math.floor(Math.random()*6)+1;
var score = "dice"+randomNumber1+".png";
var image1 = "images/"+score ;
document.querySelector(".img1").setAttribute("src",image1);
