let diceNumberP1 = 0;
let diceNumberP2 = 0;



document.getElementById("letsRollBtn").onclick = function(){

    
    document.getElementById("trophy2").style.visibility = "hidden";
    document.getElementById("trophy1").style.visibility = "hidden";

    diceNumberP1 =randomDiceNumber(diceNumberP1);
    diceNumberP2 =randomDiceNumber(diceNumberP2);

    document.getElementById("dicePlayer1").src="images/"+diceNumberP1+".png";
    document.getElementById("dicePlayer2").src="images/"+diceNumberP2+".png";

    if(diceNumberP1 > diceNumberP2){

        document.getElementById("winner").innerHTML = "Player 1 Is The Winner!";
        document.getElementById("trophy1").style.visibility = "visible";

    } else if(diceNumberP1 < diceNumberP2){

        document.getElementById("winner").innerHTML = "Player 2 Is The Winner!";
        document.getElementById("trophy2").style.visibility = "visible";


    } else {
        document.getElementById("winner").innerHTML = "Tie! Both Players Win";
        document.getElementById("trophy2").style.visibility = "visible";
        document.getElementById("trophy1").style.visibility = "visible";

    }

}



function randomDiceNumber(dice){

    return dice = Math.floor(Math.random()*6);
    
}