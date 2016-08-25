var obiWan = {name: "Obi-Wan Kenobi", attack: 8, counterAttack: 20, hp: 120};

var luke= {name: "Luke Skywalker", attack: 5, counterAttack: 15, hp: 100};

var darthSidious = {name: "Darth Sidious", attack: 18, counterAttack: 30, hp: 150};

var darthMaul = {name: "Darth Maul", attack: 25, counterAttack: 42, hp: 180};

$(document).ready(function(){

var char1 = $('.char1');
var char2 = $('.char2');
var char3 = $('.char3');
var char4 = $('.char4');
var yourCharacter;
var defender;



$('.character').on('click', function(){

	if ($(this).hasClass("char1")) {
	yourCharacter = $(this);
	$('#yourCharacter').prepend(yourCharacter);
	$('#enemiesAvailable').append(char2,char3,char4);
	}
	else if ($(this).hasClass("char2")) {
	yourCharacter = $(this);
	$('#yourCharacter').prepend(yourCharacter);
	$('#enemiesAvailable').append(char1,char3,char4);
	}
	else if ($(this).hasClass("char3")) {
	yourCharacter = $(this);
	$('#yourCharacter').prepend(yourCharacter);
	$('#enemiesAvailable').append(char1,char2,char4);
	}
	else if ($(this).hasClass("char4")) {
	yourCharacter = $(this);
	$('#yourCharacter').prepend(yourCharacter);
	$('#enemiesAvailable').append(char1,char2,char3);
	}

	// if ($('#enemiesAvailable').find(this) > -1 && $('#defender').find('img') == 0 ) {

	// 		defender = $(this)
	// 	}
	console.log(yourCharacter);
	})





})