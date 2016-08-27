var obiWan = {name: "Obi-Wan Kenobi", attack: 8, counterAttack: 20, hp: 120};

var luke= {name: "Luke Skywalker", attack: 5, counterAttack: 15, hp: 100};

var dSidious = {name: "Darth Sidious", attack: 18, counterAttack: 30, hp: 150};

var dMaul = {name: "Darth Maul", attack: 25, counterAttack: 42, hp: 180};


var yourCharacter;
var defender;
var isYourCharacterSelected = false;
var isTheDefenderSelected = false;
// var char1 = $('.char1');
// var char2 = $('.char2');
// var char3 = $('.char3');
// var char4 = $('.char4');

$(document).ready(function(){

// console.log($('.obiWan').before(obiWan.name));

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

stats();

// var defenderNotChosen = true;
// var characterNotSelected = true;


// $('.character').on('click', function(){

// 	if ($(this).hasClass("char1") && characterNotSelected) {
// 		yourCharacter = $(this);
// 		$('#yourCharacter').prepend(yourCharacter);
// 		$('#enemiesAvailable').append(char2,char3,char4);
// 		characterNotSelected = false;
// 	}
// 	else if ($(this).hasClass("char2") && characterNotSelected) {
// 		yourCharacter = $(this);
// 		$('#yourCharacter').prepend(yourCharacter);
// 		$('#enemiesAvailable').append(char1,char3,char4);
// 		characterNotSelected = false;
// 	}
// 	else if ($(this).hasClass("char3") && characterNotSelected) {
// 		yourCharacter = $(this);
// 		$('#yourCharacter').prepend(yourCharacter);
// 		$('#enemiesAvailable').append(char1,char2,char4);
// 		characterNotSelected = false;
// 	}
// 	else if ($(this).hasClass("char4") && characterNotSelected) {
// 		yourCharacter = $(this);
// 		$('#yourCharacter').prepend(yourCharacter);
// 		$('#enemiesAvailable').append(char1,char2,char3);
// 		characterNotSelected = false;
// 	}

// 	if ($('#enemiesAvailable').find(this) > -1 && defenderNotChosen) {

// 			defender = $(this);
// 			$('#defender').append(defender);

// 		}
// 		x = $('#enemiesAvailable').find(this).inArray()
// 		console.log(x);
// 		$(enemiesAvailable).append(char1,char2,char3);
// 		console.log($(enemiesAvailable).push(char1,char2,char3));
// 	})

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
	}

})

// $('#attack').on('click', function()){

// }


})