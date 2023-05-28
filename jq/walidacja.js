
$(document).ready(function() {
	//Walidacja nazwy
	$('#imie').on('blur', function() {
		var input = $(this);
		var name_length = input.val().length;
		if(name_length >= 2 && name_length <= 20){
			input.removeClass("invalid").addClass("valid");
			input.next('.komunikat').text("").removeClass("blad").addClass("ok");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('.komunikat').text("Podaj imię").removeClass("ok").addClass("blad");
			
		}
	});

    $('#nazwisko').on('blur', function() {
		var input = $(this);
		var surname_length = input.val().length;
		if(surname_length >= 2 && surname_length <= 50){
			input.removeClass("invalid").addClass("valid");
			input.next('.komunikat').text("").removeClass("blad").addClass("ok");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('.komunikat').text("Podaj nazwisko").removeClass("ok").addClass("blad");
			
		}
	});
		
	//Walidacja email
	$('#Email').on('blur', function() {
		var input = $(this);
		var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var is_email = pattern.test(input.val());
		if(is_email){
			input.removeClass("invalid").addClass("valid");
			input.next('.komunikat').text("").removeClass("blad").addClass("ok");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('.komunikat').text("Wprowadź poprawny email!").removeClass("ok").addClass("blad");
		}
	});	
	
	//Walidacja wiadomości
	$('#wiadomosc').on('blur', function() {
		var input = $(this);
		var message = $(this).val();
		if(message){
			input.removeClass("invalid").addClass("valid");
			input.next('.komunikat').text("").removeClass("blad").addClass("ok");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('.komunikat').text("Wiadomość nie może być pusta!").removeClass("ok").addClass("blad");
		}   
	});
	
	//Po próbie wysłania formularza
		$('#submit button').click(function(event){
			var name = $('#imie');
            var surname = $('#nazwisko')
			var email = $('#Email');
			var message = $('#wiadomosc');
			
			if(name.hasClass('valid') && surname.hasClass('valid') && email.hasClass('valid') && message.hasClass('valid')){
				alert("Pomyślnie wysłano formularz.");	
			}
			else {
				event.preventDefault();
				alert("Uzupełnij wszystkie pola!");	
			}
		});
});
