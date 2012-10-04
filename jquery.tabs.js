(function($) {
	
	$.fn.tabs = function(options) {
			
		var defaults = {
			'active' : 'active',
			'activetab' : 'active-tab'
		};

		var options = $.extend({}, defaults, options);
		
		return this.each(function() {

			var obj = $(this),
				tabs = obj.children('ul').children('li').children('a');

			obj.children('div').hide();

			tabs.click(function(e){

				e.preventDefault();

				var box = $(this).attr('href');

				obj.children('ul').children('li').children('.'+options.activetab).removeClass(options.activetab);
				$(this).addClass(options.activetab);

				$('.'+options.active).removeClass(options.active);
				$(box).addClass(options.active);

			});

		});
		
	};
	
})(jQuery);