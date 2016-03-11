

;(function($) {
	
	$.fn.textareaAutoHeight = function(o) {
		var cfg = $.extend({}, {maxHeight: 0, resizable: false}, o || {});
		
		this.each(function(index, element) {
			var $this = $(this);
			if(this.tagName.toLowerCase() != 'textarea' || $this.hasClass('auto-height')) return this;
			
			var resizable = $this.attr('data-resizable') || cfg.resizable || false;
			cfg.resizable = resizable;
			
			$this
				.attr('data-height', $this.height())
				.bind('keydown keyup focus', function(e) {
					var tarea = $(this);
					tarea.height(tarea.attr('data-height'));
					var diff = parseInt(tarea.css('paddingTop')) + parseInt(tarea.css('paddingBottom')), 
					    h = tarea.prop('scrollHeight') - diff, 
					    maxHei = tarea.attr('data-max-height') || cfg.maxHeight || false;
					if(maxHei && maxHei <= h) {
						tarea.css({height: maxHei + 'px', overflow: 'auto'});
					} else {
						tarea.css({height: h + 'px', overflow: 'hidden'});
					}
				})
				.addClass('auto-height' + (cfg.resizable ? ' resizable' : ''));
		});
		
		if(cfg.resizable) {
			$(window).resize(function(e) {
				$('textarea.auto-height.resizable').trigger('focus');
			});
		}
		
		return this;
	};
	
})(jQuery);
