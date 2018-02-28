
$(document).ready(function(){
    var crystals: ['assets/images/blue.ts', 'assets/images/emerald.ts', 'assets/images/ruby.ts', 'assets/images/gold.ts',];
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
    while (numbers.length < crystals.length) {
        var randomNumber = math.ceil(Math.random()*12)
        var found = false;
        for (var i= 0; i < numbers.length; i ++){
            if (number [i] === randomNumber){
                found = true; break;
            }
        }
            if (!found)numbers[numbers.length]=randomNumber;
        }
        console.log(numbers);
        for (i = 0; i < numbers.length; i++){
            var crystalImage = $ ('.crystalImage' + i);
            cryptalImage.attr('data-num', numbers[i]);
            createImage.addClass('crystalImage');
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
        count + = parseInt ($(this).data('num'));
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

