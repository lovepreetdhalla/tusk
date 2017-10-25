var main= function(){
	"use strict";
	$("h1").css("color","red");
	$(".important").css("color","green");
	$(".relevent p:first").css("color","yellow");
	$(".relevent p:nth-child()").css("color","blue")
	
};

$(document).ready(main);
