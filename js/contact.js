$(document).ready(function() {
	$(".form-element input, .form-element textarea").focus(function() {
		$(this).prev().addClass("form-element-label-floating");
		$(this).focusout(function() {
			if ($(this).val() == '') {
				$(this).prev().removeClass("form-element-label-floating");
			}
		});
	});
});
