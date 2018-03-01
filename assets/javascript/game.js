
$(document).ready(function(){

    var targetNumber = Math.floor(Math.random() * 101 + 19)

    var crystals= ['assets/images/blue.jpg', 'assets/images/emerald.jpg', 'assets/images/ruby.jpg', 'assets/images/gold.jpg',];
    var wins = 0;
    var loss= 0;
    var count = 0;

//GLOBAL//
var numberGuess = 0;
$('#win').text(wins);
$('#lose').text(loss);

newCrystals();
newGame();
function newCrystals (){
    var number = []
    while (number.length < crystals.length) {
        var randomNumber = Math.ceil(Math.random()*12)
        var found = false;
        for (var i= 0; i < number.length; i ++){
            if (number [i] === randomNumber){
                found = true; break;
            }
        }
            if (!found)number[number.length]=randomNumber;
        }
        for (i = 0; i < number.length; i++){
            var crystalImage = $ ('.crystalImage' + i);
            crystalImage.attr('data-num', number[i]);
            crystalImage.addClass('crystalImage');
            $('.crystals').append(crystalImage);
console.log(number);
        }
    }
function newGame(){
    count = 0;
    $('#score').text(count);

    function randomIntFromInterval (min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
   // Variables are a random number//
    var numberGuess = randomIntFromInterval(19,120);
    $('value').text(numberGuess);
    //on click function//
    $('.crystalImage').on('click', function(){
        count + parseInt ($(this).data('num'));
    })
    //display random number//
    $('#score').text(count);
     if (count === numberGuess){
         alert("YAY!! You won!!!")
         $('#status').text('Would you like to play again?!');
         wins++;
         $('#win').text(wins);
         console.log(wins);
         $(crystal).empty();

         newCrystals();
         newGame();
     }
     else if(count > numberGuess){
         alert('Oh No!')
         $('#status').text('You lose! Want to try agian??');
         losses++;
			$('#loss').text(losses);
			console.log(losses);
			$('crystals').empty();
				
			newCrystals();
			newGame();
			}
     };
    });

