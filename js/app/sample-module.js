/*!
* Groundwork Navigation
* @requires jQuery v1.7.2+
*
* Description
* 
* @author ...
*/
!(function($) {

	window.Groundwork.Navigation = window.Groundwork.Navigation || window.Groundwork.BaseModule(function() {
		
		var $el;

		return {
			init: function() {
				$el = $('.main-nav');
				this.attachEvents();
			},
			attachEvents: function() {
				$el.on('click', '.some-action', this.events.someAction);
			},
			events: {
				switchActive: function(e) {
					e.preventDefault();
					$el.find('.active').removeClass('active');
					$(this).closest('li').addClass('active');
				}
			}
		}
	}());

})(jQuery);


/*
<div class="sample-module" style="padding: 20px;">
	<button class="some-action">Do Something</button>	
	<span class="some-element"></span>
</div>
*/