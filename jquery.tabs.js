/*
*	TABS PLUGIN BY STEPHEN RADFORD
*	COPYRIGHT 2011 STEPHEN RADFORD
*	ALL RIGHTS RESERVED
*/

$(document).ready(function() {
	$('.box-link').click(function tabbedbox() {
		
		var box = $(this).attr('href');
		var activetab = $('#links').children();
			
		$(activetab).removeClass('active-tab');
		$(this).addClass('active-tab');
		$('.active').removeClass('active');
		$(box).addClass('active');
		
		return false
		
	});
	
});