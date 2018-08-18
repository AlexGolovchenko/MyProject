//popup

//open popup by button
$('.js-button').click(function(){
  $('.js-overlay').fadeIn();
  $('.js-overlay').addClass('disabled');
})

//close popup by cross
$('.js-close').click(function(){
  $('.js-overlay').fadeOut();
})

//close popup outside the window
$(document).mouseup(function(e){
  var popup = $('.js-popup');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.js-overlay').fadeOut();
  }
})

//open popup by timer
$(window).on('load', function () {
  setTimeout(function () {
    if ($('.js-overlay').hasClass('disabled')) {
      return false;
    } else {
      $('.js-overlay').fadeIn();
    }
  }, 20000);
});
