/* global value that holds current popup */
var popup;

$(document).ready(function() {
	$(".popup").on('click.show', function() {

		popup = $(this);

		popup.addClass("popup-show");

		/* consume clicks on popup card so the popup background won't trigger close */
		$(".popup.popup-show .card").on('click.consume', function() {
			return false;
		});

		popup.on('click.hide', close);
	});

	$(".popup-close").on('click', close);
});

function close(event) {
	$(".popup.popup-show .card").off('click.consume');

	popup.removeClass("popup-show");
	popup.off('click.hide');
	return false;
}
