(function($) {
	const color = '#556b2f';
	$.fn.greenify = function() {
		this.css('color', color);
		return this;
	};
})(jQuery)