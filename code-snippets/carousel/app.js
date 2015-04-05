$(document).ready(function(){
	setInterval(function(){
      $("#next").trigger('click');
    },2500);
    
	$('#next').click(function(){
		var currentSlide=$('.active-slide');
		var currentDot=$('.active-dot');
		var nextSlide=currentSlide.next();
		var nextDot=currentDot.next();

		if(nextDot.length === 0){
			nextSlide=$('.slide').first();
			nextDot=$('li').first();

		}

		currentSlide.removeClass('active-slide');
		nextSlide.addClass('active-slide');
		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});

	$('#prev').click(function(){
		var currentSlide=$('.active-slide');
		var currentDot=$('.active-dot');
		var prevSlide=currentSlide.prev();
		var prevDot=currentDot.prev();

		if(prevDot.length === 0){
			prevSlide=$('.slide').last();
			prevDot=$('li').last();

		}

		currentSlide.removeClass('active-slide');
		prevSlide.addClass('active-slide');
		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	});

});