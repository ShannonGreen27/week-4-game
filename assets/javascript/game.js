var obiWan = {name: "Obi-Wan Kenobi", attack: 8, counterAttack: 8, hp: 120};

var luke = {name: "Luke Skywalker", attack: 5, counterAttack: 5, hp: 100};

var dSidious = {name: "Darth Sidious", attack: 15, counterAttack: 20, hp: 150};

var dMaul = {name: "Darth Maul", attack: 25, counterAttack: 25, hp: 180};

var attackIncrease = 0;
var yourCharacter;
var defender;
var yourCharacterStats;
var defenderStats;
var isYourCharacterSelected = false;
var isTheDefenderSelected = false;

copyDiv();

$(document).ready(function(){

	statPrint();

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
		stats();
	})


	$('#attack').on('click', function(){

		if (isYourCharacterSelected && isTheDefenderSelected) {

			if (yourCharacterStats.hp > 0) {

				yourCharacterStats.attack+= attackIncrease;

				if (defenderStats.hp > yourCharacterStats.attack) {

					if (attackIncrease == 0) {

					attackIncrease = yourCharacterStats.attack;

					}
					yourCharacterStats.hp-= defenderStats.counterAttack;
					defenderStats.hp-= yourCharacterStats.attack;
					displayResult();

					}	else if ($('#enemiesAvailable') == null && $('#defender') == null) {

						$('#result').html("You won. The universe is safe.")
						restartGame();

					} else {

						$('#result').html("<p>You defeated " + defenderStats.name + ", choose you next enemy</p>");
						$('#defender').empty();
						isTheDefenderSelected = false;
					}

			}	else {
				$('#result').html('You have been defeated');
				restartGame();
			}

		}	else {

			$('#prompt').html('No enemy selected.');

		}		

	})

})

function clear() {
	$('#prompt').empty();
	$('#result').empty();	
}

function statPrint() {
	$('.obiWanName').html(obiWan.name);
	$('.obiWanHealth').html(obiWan.hp);

	$('.lukeName').html(luke.name);
	$('.lukeHealth').html(luke.hp);

	$('.dSidiousName').html(dSidious.name);
	$('.dSidiousHealth').html(dSidious.hp);

	$('.dMaulName').html(dMaul.name);
	$('.dMaulHealth').html(dMaul.hp);
}

function restartGame()	{
	$('#restart').append($('<button>Restart<button/>').on('click', function() {
		restart();
	}))
}

function restart()	{
	attackIncrease = 0;
	yourCharacter;
	defender;
	isYourCharacterSelected = false;
	isTheDefenderSelected = false;
	$("#waitingArea").replaceWith(divClone.clone());
}

function displayResult() {
	$('#result').html("<p>You attacked " + defenderStats.name + " for " + obiWan.attack + " damage.</p>" + 
		"<p>" + defenderStats.name + " attacked you back for " + defenderStats.counterAttack + " damage.</p>");

	if (yourCharacter.children().hasClass('obiWanName')) {
		
		$(yourCharacter).children('.obiWanHealth').html(yourCharacterStats.hp);

	}	else if (yourCharacter.children().hasClass('lukeName')) {
		
		$(yourCharacter).children('.lukeHealth').html(yourCharacterStats.hp);

	}	else if (yourCharacter.children().hasClass('dSidiousName')) {
		
		$(yourCharacter).children('.dSidiousHealth').html(yourCharacterStats.hp);

	}	else if (yourCharacter.children().hasClass('dMaulName')) {
		
		$(yourCharacter).children('.dMaulHealth').html(yourCharacterStats.hp);

	}

	if (defender.children().hasClass('obiWanName')) {
		
		$(defender).children('.obiWanHealth').html(defenderStats.hp);

	}	else if (defender.children().hasClass('lukeName')) {
		
		$(defender).children('.lukeHealth').html(defenderStats.hp);

	}	else if (defender.children().hasClass('dSidiousName')) {
		
		$(defender).children('.dSidiousHealth').html(defenderStats.hp);

	}	else if (defender.children().hasClass('dMaulName')) {
		
		$(defender).children('.dMaulHealth').html(defenderStats.hp);

	}


}

function copyDiv() {

	var divClone = $("#waitingArea").clone();

}

function stats()	{
		// Chooses appropriate object stats for your character
		if (yourCharacter.children().hasClass('obiWanName')) {

			yourCharacterStats = obiWan;	
		
		}	else if (yourCharacter.children().hasClass('lukeName')) {

			yourCharacterStats = luke;	

		}	else if (yourCharacter.children().hasClass('dSidiousName')) {

			yourCharacterStats = dSidious;

		}	else if (yourCharacter.children().hasClass('dMaulName')) {

			yourCharacterStats = dMaul;

		}

	// Chooses appropriate object stats for the defender
		if (defender.children().hasClass('obiWanName')) {

			defenderStats = obiWan;	

		}	else if (defender.children().hasClass('lukeName')) {

			defenderStats = luke;	

		}	else if (defender.children().hasClass('dSidiousName')) {

			defenderStats = dSidious;

		}	else if (defender.children().hasClass('dMaulName')) {

			defenderStats = dMaul;

		}
}