$(document).ready(function() {

  // Allows for one-page smooth scrolling between sections
  $('a[href*=#slide]').bind("click", function(e){       
    var anchor = $(this);
    $(this).click(function() {
      $("#navbar li a").removeClass("active");
      $(this).addClass('active');
      return false;
    });
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });

  // displays and hides "header" depending on the scroll location (hidden @ Home)
  $(window).scroll(function() {
    if ($(this).scrollTop() > 370) {
      $('#header').removeClass('hidden');
      $('#header').fadeIn();
    } else {
      $('#header').fadeOut();
      $('#header').addClass('hidden');
    }
  });

  // animate the tools chart
  $('.skills').waypoint(function(){
    $('.chart').each(function(){
      $(this).easyPieChart({
        size:140,
        animate: 2000,
        lineCap:'butt',
        scaleColor: false,
        barColor: '#FF530D',
        trackColor: 'transparent',
        lineWidth: 10
      });
    });
  },{offset:'80%'});

});


