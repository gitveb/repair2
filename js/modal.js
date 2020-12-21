$(document).ready(function () {
	$('.form-modal-button').on("click", function () {
		$('.modal').show();
	});
	$('.modal-dialog__close').on("click", function () {
		$('.modal').hide();
	});

	$('#modal-form').validate({
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			phone: {
				required: true,
				phone: true
			},
			
		},
		messages: {
			username: {
				required: "Введите имя",
      	minlength: jQuery.validator.format("Осталось: {0} символа!")
			},
			phone: "Введите номер телефона!",
			
		}
	});
	// $('.phone').mask('+7 (999) 999-99-99');
});

