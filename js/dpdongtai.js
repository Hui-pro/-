$(function() {
	$('h1').click(function() {
		var str = $('h1').html();
		if(str == "+ 关注") {
			$(this).html('已关注');
			$(this).css('background-color', 'rgb(199,71,59)')
		} else if(str == "已关注") {
			$(this).html('+ 关注');
			$(this).css('background-color', 'rgb(47,215,166)')
		}
	})
	$('.qw').click(function(){
		$('.wen').css('height','14.2rem');
		$(this).parent('p').hide();
	})
	$('.sq').click(function(){
		$('.wen').css('height','7.2rem');
		$('.qw').parent('p').show();
	})
})