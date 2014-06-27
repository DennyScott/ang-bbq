'use strict';
$(function(){
	$('.navigation-button').click(function(e){
		var me = $(e.currentTarget);
		window.location.href = "#/" + me.attr('data-location');
	});
});
