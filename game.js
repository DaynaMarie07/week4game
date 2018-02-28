var wins = 0;
var loss= 0;
var crytal; 0;
var sapphire = 0;
var emerald = 0;
var gold = 0;
var ruby = 0;

function reset(){
    guess = randomNumber(19,120);
    sapphire = 0;
    emerald = 0;
    gold = 0;
    ruby = 0;
    document.getElementById("rNumber").innerHTML ="Random Number is: " + guess;
    document.getElementById("cScore").innerHTML = crystal;
}

function lossx(){
    alert("YOU LOST. PLAY AGAIN?")
    loss++;
    document.getElementById("loss").innerHTML = "Losses " + loss;
    
}
function winx(){
    alert("YAY YOU WON! Want to play again?!")
    wins++;
    document.getElementById("wins").innerHTML ="Wins " + wins;
}
