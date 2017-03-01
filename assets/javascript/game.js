
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }

};
	var randomNumber = 0;
	var matchNumber = 0;

	var winCounter  = 0;
	var lossCounter = 0;
	

	


function startGame() {
		
		matchNumber=0;

		randomNumber =  Math.floor((Math.random()*100)+19);

	crystal.blue.value   = Math.floor((Math.random()*12)+1);
  	crystal.red.value    = Math.floor((Math.random()*12)+1);
  	crystal.green.value  = Math.floor((Math.random()*12)+1);
  	crystal.yellow.value = Math.floor((Math.random()*12)+1);
  	
  	$("#match").html(matchNumber);
  	$("#random-number").html(randomNumber);

	console.log("-----------------------------------");
  	console.log("random number: " + randomNumber);
  	console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
    " | Yellow: " + crystal.yellow.value);
  	console.log("-----------------------------------");
 
};

function roundComplete() {
		
		if (matchNumber > randomNumber) {
 	    alert("You Lost");
 	    console.log("You Lost");
 	    
 	    lossCounter++

 	    $("#loss-counter").html(lossCounter);

 	    startGame();

 
 	}

 	else if (matchNumber===randomNumber){
 		alert("You Won");
 		console.log("You Won");
 		winCounter++

 		$("#win-counter").html(winCounter);

 		startGame();
 	}

};

	var addValues = function(clickedCrystal) {

		matchNumber += clickedCrystal.value;
 
		$("#match").html(matchNumber);

		roundComplete();

		console.log("Your Score: " + matchNumber);

};
	
	


startGame();

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#red").click(function() {
  addValues(crystal.red);
});

$("#green").click(function() {
  addValues(crystal.green);
});

$("#yellow").click(function() {
  addValues(crystal.yellow);
});

	


//};










