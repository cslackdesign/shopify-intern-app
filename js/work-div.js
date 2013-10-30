$(document).ready(function(){

  // HIDE
  $('#dropkick').hide();
  $('#iceland').hide();
  $('#collective').hide();
  $('#web-1').hide();
  $('#intranet').hide();
  $('#web-2').hide();

//SHOW ON CLICK
  $('#dropkick-button').click(function(){
      $('#work').fadeOut(400);
      $('#dropkick').fadeIn(800);
  });

  $('#iceland-button').click(function(){
      $('#work').fadeOut(400);
      $('#iceland').fadeIn(800);
  });

  $('#collective-button').click(function(){
      $('#work').fadeOut(400);
      $('#collective').show();
  });

  $('#web-1-button').click(function(){
      $('#work').fadeOut(400);
      $('#web-1').show();
  });

  $('#intranet-button').click(function(){
      $('#work').fadeOut(400);
      $('#intranet').fadeIn(800);
  });

  $('#web-2-button').click(function(){
      $('#work').fadeOut(400);
      $('#web-2').fadeIn(800);
  });
//CLOSE BUTTONS
  $('#close-dropkick').click(function(){
      $('#dropkick').fadeOut(400);
      $('#work').fadeIn(800);
  });

  $('#close-iceland').click(function(){
      $('#dropkick').fadeOut(400);
      $('#work').fadeIn(800);
  });

  $('#close-collective').click(function(){
      $('#collective').fadeOut(400);
      $('#work').fadeIn(800);
  });

  $('#close-web-1').click(function(){
      $('#web-1').fadeOut(400);
      $('#work').fadeIn(800);
  });

  $('#close-intranet').click(function(){
      $('#intranet').fadeOut(400);
      $('#work').fadeIn(800);
  });

  $('#close-web-2').click(function(){
      $('#web-2').fadeOut(400);
      $('#work').fadeIn(800);
  });
//NEXT

  $('#next-iceland').click(function(){
      $('#dropkick').fadeOut(400);
      $('#iceland').fadeIn(800);
  });

  $('#next-collective').click(function(){
      $('#iceland').fadeOut(400);
      $('#collective').fadeIn(800);
  });

  $('#next-web-1').click(function(){
      $('#collective').fadeOut(400);
      $('#web-1').fadeIn(800);
  });

  $('#next-intranet').click(function(){
      $('#web-1').fadeOut(400);
      $('#intranet').fadeIn(800);
  });

  $('#next-web-2').click(function(){
      $('#intranet').fadeOut(400);
      $('#web-2').fadeIn(800);
  });
//PREV

  $('#prev-dropkick').click(function(){
      $('#iceland').fadeOut(400);
      $('#dropkick').fadeIn(800);
  });

  $('#prev-iceland').click(function(){
      $('#collective').fadeOut(400);
      $('#iceland').fadeIn(800);
  });

  $('#prev-collective').click(function(){
      $('#web-1').fadeOut(400);
      $('#collective').fadeIn(800);
  });

  $('#prev-web-1').click(function(){
      $('#intranet').fadeOut(400);
      $('#web-1').fadeIn(800);
  });

  $('#prev-intranet').click(function(){
      $('#web-2').fadeOut(400);
      $('#intranet').fadeIn(800);
  });
});
