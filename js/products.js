/* global value that holds current popup */
var popup;
var popup_image;
var popup_options;

$(document).ready(function() {
	$(window).resize(function() {
		/* when the window resize, calculate the new absolute positions */

		$(".card").each(function() {
			$(this).css('position', 'static');
		});

		$(".card").each(function () {
			$(this).css('top', this.getBoundingClientRect().top);
			$(this).css('left', this.getBoundingClientRect().left);
		});

		$(".card").each(function() {
			$(this).css('position', 'absolute');
		});
	});

	$(window).trigger('resize');

	$(".popup").on('click.show', function() {

		popup = $(this);

		popup.addClass("popup-show");

		/* consume clicks on popup card so the popup background won't trigger close */
		$(".popup.popup-show .card").on('click.consume', function() {
			return false;
		});

		popup.on('click.hide', close);

		/* change image when clicking on .product-option */
		popup_image = popup.find(".product-image img");
		popup_options = popup.find(".product-option");

		popup_options.each(function() {
			$(this).on('click', function() {
				popup_options.removeClass("product-option-selected");
				$(this).addClass("product-option-selected");
				console.log("src: " + $(this).attr('id'));
				popup_image.attr("src", "/img/" + $(this).attr('id') + ".jpg");
			});
		});
	});

	$(".popup-close").on('click', close);
});

function close(event) {
	$(".popup.popup-show .card").off('click.consume');

	popup.removeClass("popup-show");
	popup.off('click.hide');
	return false;
}
