// JavaScript Document


/*-----------------------------------------Video player JS----------------------------------------------------*/
$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<video  autoplay controls width="80%" height="80%"  allowfullscreen> <source src="img/home-page-video.mp4" type="video/mp4"> </video>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video().click; }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('video').remove();
}





/*---------------------------------------Section Vertical text------------------------------*/
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
  
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
  

$('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

$(document).ready(function () {
  
 $('#to-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 2000); 
        return false; 
    }); 
	
	
	
  'use strict';
  
   var c, currentScrollTop = 0,
      navbar = $('.navbar-fixed-top');

   $(window).scroll(function () {
      var a = $(window).scrollTop();

      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });

		$(".filter-button").click(function(){
				var value = $(this).attr('data-filter');
				
				if(value == "all")
				{
						//$('.filter').removeClass('hidden');
						$('.filter').show('1000');
				}
				else
				{
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
						$(".filter").not('.'+value).hide('3000');
						$('.filter').filter('.'+value).show('3000');
						
				}
		});
		
		if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

//window.onscroll = function() {scrollFunction()};
//
//function scrollFunction() {
//  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//    document.getElementById("navbar").style.paddingTop = "30px 10px";
//    document.getElementById("logo").style.height = "50px";
//  } else {
//    document.getElementById("navbar").style.padding = "80px 10px";
//    document.getElementById("logo").style.height = "auto";
//  }
//}