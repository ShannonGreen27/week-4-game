var obiWan = {name: "Obi-Wan Kenobi", attack: 8, counterAttack: 20, hp: 120};

var luke= {name: "Luke Skywalker", attack: 5, counterAttack: 15, hp: 100};

var dSidious = {name: "Darth Sidious", attack: 18, counterAttack: 30, hp: 150};

var dMaul = {name: "Darth Maul", attack: 25, counterAttack: 42, hp: 180};

var attackIncrease = 0;
var yourCharacter;
var defender;
var isYourCharacterSelected = false;
var isTheDefenderSelected = false;
// var char1 = $('.char1');
// var char2 = $('.char2');
// var char3 = $('.char3');
// var char4 = $('.char4');

$(document).ready(function(){

	stats();

	$('.character').on('click', function(){
		if (!isYourCharacterSelected) {
			yourCharacter = $(this);
			$('#yourCharacter').append(yourCharacter);
			$('#enemiesAvailable').append($('#waitingArea').children());
			isYourCharacterSelected = true;
		
		}	else if (!isTheDefenderSelected){
			defender = $(this);
			$('#defender').append(defender);
			isTheDefenderSelected = true;
			clear();
		}

	})

	$('#attack').on('click', function(){

		if (isYourCharacterSelected && isTheDefenderSelected) {

			if (obiWan.hp > 0) {

				if (attackIncrease == 0) {
				attackIncrease = obiWan.attack;
				}
				obiWan.hp-= luke.counterAttack;
				luke.hp-= obiWan.attack;
				displayResult();
				obiWan.attack+= attackIncrease;

			}	else {
				$('#prompt').html('You have been defeated');
				$('#restart').append($('<button>Restart<button/>').on('click', function() {
					restart();
				}))
			}

		}	else {

			$('#prompt').html('Please select your character and enemy you want to attack.');

		}		

	})

})

function clear() {
	$('#prompt').empty();		
}

function displayResult() {

	$('#result').html("<p>You attacked Luke Skywalker for " + obiWan.attack + " damage.</p>" + 
		"<p>Luke Skywalker attacked you back for " + luke.counterAttack + " damage.</p>");

	$('.obiWanHealth').html(obiWan.hp);
	$('.lukeHealth').html(luke.hp);
}

function stats() {
	$('.obiWanName').html(obiWan.name);
	$('.obiWanHealth').html(obiWan.hp);

	$('.lukeName').html(luke.name);
	$('.lukeHealth').html(luke.hp);

	$('.dSidiousName').html(dSidious.name);
	$('.dSidiousHealth').html(dSidious.hp);

	$('.dMaulName').html(dMaul.name);
	$('.dMaulHealth').html(dMaul.hp);
}

function restart()	{
	attackIncrease = 0;
	yourCharacter;
	defender;
	isYourCharacterSelected = false;
	isTheDefenderSelected = false;
}