$(document).ready(function(){

	var crystalNumber =  ""
	var randomNumber = ""
	var totalNumber = ""
	var totalScore  = ""
	var winCounter  = 0 
	var lossCounter = 0
	var matchNumber = 0


function startGame() {
randomNumber =  Math.floor((Math.random()*100)+19);
$("#random-number").html(randomNumber);

};

$(".button").on("click", function(){
 crystalNumber = Math.floor((Math.random()*12)+1);
 $("#match").html(matchNumber += crystalNumber);
	
});

function roundComplete() {
		if (randomNumber===matchNumber) {
 	    winCounter++
 	    alert("You Win")

 }else{
 	lossCounter--
 	alert("You Lost")
 }

		
	
	}	


startGame();

});










