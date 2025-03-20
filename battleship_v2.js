// eclaring variables
var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc ;
var location2 = location1 + 1;
var location3 = location2 + 2;

var guess ;
var hits = 0;
var guess = 0 ;
var isSunk = false;



while(isSunk == false){
    guess = prompt("ready ,aim,fire!! (enter number 0-6");

    if (guess < 0 || guess > 6){
        alert("please enter valid number")

    }else{
        guesses = guesses + 1;
        
        if (guess == location1 || guess == location2 || guess == location3){ 
            hits = hits + 1;
            alert("hit");

            if (hits == 3){
                isSunk = true;
                alert("battle ship is now shunk!!");

            }
            
        }else{ 
            alert("miss!!")
        }

    }

}

var stat = "battleship shunk at; " + guesses + "guesses" + "your acuracy is" + (3/guesses);
alert(stats);