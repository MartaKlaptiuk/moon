var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);

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