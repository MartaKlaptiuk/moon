//preolader
$(window).on('load', function () {
      $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
      $loader.fadeOut();
      $preloader.delay(350).fadeOut('slow');
    });
//sticky menu
// var header = $("nav");
// var headerY = header.offset().top;
// $(document).scroll(function () {
//     var y = $(document).scrollTop();

//     if (y >= headerY) {
//         header.addClass('fixed');
//     } else {
//         header.removeClass('fixed');
//     }
// });


// typer for hello
window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // inject css
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 10px solid #0F2241 }";
  document.body.appendChild(css);
};

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 1) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 200;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};
//slow scrolling 
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200);
    return false;
});

//scroll to top 
$(function() {
 $(window).scroll(function() {
 if($(this).scrollTop() != 0) {
 $('#toTop').fadeIn();
 } else {
 $('#toTop').fadeOut();
 }
 });
 $('#toTop').click(function() {
 $('body,html').animate({scrollTop:0},800);
 });
});
//parallax
var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);
//menu
(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);

$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.addEventListener('scroll', function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }, {passive: true});
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

//Scroll
$(document).ready(function () {
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }
        return false; 
    });
});




// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});


$(".handle").draggable({ 
  axis: "x",
  containment: "parent",
  drag: function() {
    var position = $(this).position();
    var positionExtra = position.left + 6;
    $(".coverImage").width(positionExtra + "px");
  }
});

//draggable planet
(function($){
$(function(){
  $('.before-wrapper').on( "mousemove", function(e) {
    var offsets = $(this).offset();
    var fullWidth = $(this).width();
    var mouseX = e.pageX - offsets.left;

    if (mouseX < 0) { mouseX = 0; }
    else if (mouseX > fullWidth) { mouseX = fullWidth }


    $(this).parent().find('.comparison-slider').css({
      left: mouseX,
      transition: 'none'
    });
    $(this).find('.after-wrapper').css({
      transform: 'translateX(' + (mouseX) + 'px)',
      transition: 'none'
    });
    $(this).find('.after-image').css({
      transform: 'translateX(' + (-1*mouseX) + 'px)',
      transition: 'none'
    });
  });
  $('.slider-wrapper').on( "mouseleave", function() {
    $(this).parent().find('.comparison-slider').css({
      left: '50%',
      transition: 'all .3s'
    });
    $(this).find('.after-wrapper').css({
      transform: 'translateX(50%)',
      transition: 'all .3s'
    });
    $(this).find('.after-image').css({
      transform: 'translateX(-50%)',
      transition: 'all .3s'
    });
  });

}); 
})(jQuery); 

// Form
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});