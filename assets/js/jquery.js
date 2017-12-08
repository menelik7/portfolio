$(document).ready(function() {

  // Allows for one-page smooth scrolling between sections
  $('a[href*=\\#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
      if ($target) {
        var targetOffset = $target.offset().top;
        $(this).click(function() {
          $("#navbar li a").removeClass("active");
          $(this).addClass('active');
          $('html, body').animate({scrollTop: targetOffset}, 1000);
          return false;
        });

        $(".row").mouseenter(function(){
          var id = $(this).attr('id');
          $("#navbar li a").removeClass('active');
          $("[href=\\#"+id+"]").addClass('active');
        });
      }
    }
  });

  // displays and hides "header" depending on the scroll location (hidden @ Home)
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
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
