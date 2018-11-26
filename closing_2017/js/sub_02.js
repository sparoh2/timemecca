

/*메인 화면*/
$(document).ready(function() {
    $('.timemecca-title').addClass('on');
    $('.sub-title').addClass('on');
    $(function() {
            var sec_h = $(window).height();

            $(window).resize(function() {
                sec_h = $(window).height();
            });

            $(".title-wrap").each(function(e) {
                $(this).attr("data-st", sec_h * e);
            });

            $('.title-wrap').mousewheel(function(e, delta) {
                st = parseInt($(this).attr('data-st'))
                if (delta > 0) {

                    $('body,html').stop().animate({ scrollTop: st - sec_h }, 800);
                    return false;
                }
                if (delta < 0) {

                    $('body,html').stop().animate({ scrollTop: st + sec_h }, 800);
                    return false
                }
            });
        });
});



/*스크롤 페이드*/
$(function(){
    $(".hide").hide();

});



$(window).scroll(function(){
    var currT = $(this).scrollTop();
    if(currT>500&&currT<1100){
        $(".section_01")
        .fadeIn(1000);		
    }
    else if(currT>=1100&&currT<1550){
        $(".section_02")
        .fadeIn(1000);		
    }
    else if(currT>=1550&&currT<1950){
        $(".section_03")
        .fadeIn(1000);		
    }
    else if(currT>=1950&&currT<2400){
        $(".section_04")
        .fadeIn(1000);		
    }
    else if(currT>=2400&&currT<3000){
        $(".section_05")
        .fadeIn(1000);		
    }
    else if(currT>=3000&&currT<3350){
        $(".section_06")
        .fadeIn(1000);		
    }
    else if(currT>=3400&&currT<4200){
        $(".section_07")
        .fadeIn(1000);		
    }
    else if(currT>=4200&&currT<4750){
        $(".section_08")
        .fadeIn(1000);		
    }
    else if(currT>=4800&&currT<5150){
        $(".section_09")
        .fadeIn(1000);		
    }
    else if(currT>=5150&&currT<5600){
        $(".section_10")
        .fadeIn(1000);		
    }    
    else if(currT>=5600&&currT<5900){
        $(".section_11")
        .fadeIn(1000);		
    }  
    else if(currT>=5900){
        $(".section_12")
        .fadeIn(1000);		
    }  
});
























///////////부드러운 스크롤/////////////////
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 90;
    else if (event.detail) delta = -event.detail / 2;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
	var animationInterval = 10; //lower is faster
  var scrollSpeed = 10; //lower is faster

  if (end == null) {
  	end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
    interval = null;
    end = null;
}
$(window).scrollTop(scrollTop + step );
}, animationInterval);
}
}
