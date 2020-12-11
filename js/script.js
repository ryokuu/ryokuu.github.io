$(document).ready(function() {
  // var headerHeight = $('.header-nav').outerHeight();
  // console.log (headerHeight);
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top - 132
       }, 750);
       jQuery.easing.def = "easeInOutExpo";
    });
});
