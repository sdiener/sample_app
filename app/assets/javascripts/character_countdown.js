function updateCountdown() {
	//140 characters max
	
	var left = 140 - jQuery('#micropost_content').val().length;
	if(left == 1) {
		var charactersLeft = ' character left.'
	}
	else if (left < 0){
		var charactersLeft = ' characters too many.'
	}
	else {
		var charactersLeft = ' characters left.'

	}
	jQuery('div.samscountdown').text(Math.abs(left) + charactersLeft);

}

jQuery(document).ready(function($) {
	updateCountdown();
	$('.new_micropost').change(updateCountdown);
	$('.new_micropost').keyup(updateCountdown);
});