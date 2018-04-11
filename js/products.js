$(document).ready(function() {
	$(".popup").on('click.show', function() {

		$(this).addClass("popup-show");
		$(this).find(".card").addClass("popup-show");

		$(".card.popup-show").on('click.consume', function() {
			return false;
		});

		$(this).on('click.hide', function() {
			$(this).removeClass("popup-show");
			$(".card.popup-show").off('click.consume');
			$(this).find(".card").removeClass("popup-show");
			$(this).off('click.hide');
		});
	});
});
