$(document).ready(function(){
	$('.hamburger').on('click', function(){
		$('header nav').toggleClass('active');
		
	});

	$('.slider .slide:eq(0)').fadeIn(200);
	$('#dots li:eq(0)').addClass('active-dot').fadeIn(200);

	setInterval(function(){
		var curSlide=$('.active-slide');
		var nxtSlide=curSlide.next();
		var curDot=$('.active-dot');
		var nxtDot=curDot.next();

		if(nxtSlide.length===0){
			nxtSlide=$('.slide').first();
			nxtDot=$('#dots li').first();
		}

		curSlide.removeClass('active-slide').fadeOut(400);
		nxtSlide.addClass('active-slide').fadeIn(400);
		curDot.removeClass('active-dot');
		nxtDot.addClass('active-dot');
    },3000);

	$('#dots li').click(function() {    
	    var index = $(this).index();
	    $('.active-slide').removeClass('active-slide').fadeOut(400);
	    $('.slide:eq(' + index + ')').addClass('active-slide').fadeIn(400);
	    var curDot=$('.active-dot');
	    curDot.removeClass('active-dot');
	    $(this).addClass('active-dot');

	    return false;
	});



});