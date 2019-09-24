$(document).ready(function(){
  /* 헤더 */
  var $gnb = $('nav > ul'),
      $header = $('#header'),
      $gnb_wrap = $('.menu');

      $gnb.mouseover(function(){
        $header.stop().animate({height:'400px'},300),
        $gnb_wrap.stop().animate({height:'285px'},300);
      })
      .mouseout(function(){
        $header.stop().animate({height:'140px'},300),
        $gnb_wrap.stop().animate({height:'53px'},300);
      });

  /*스크롤하면 내려오기*/
  $(window).scroll(function(){
    $('.ano_img').each(function(i){
      var bottomOfObject = $(this).offset().top + $(this).outerHeight();
      var bottomOfWindow = $(window).scrollTop() + $(window).height();

      if(bottomOfWindow >= bottomOfObject/2){
        $(this).animate({'opacity':'1', 'margin-top':'0px'},20);
      };
    });
  });

  /* top버튼 */
  $('#back_up').hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 300 ){
      $('#back_up').fadeIn();
    } else {$('#back_up').fadeOut();}
  });

  $('#back_up a').click(function(){
    $('body,html').animate({scrollTop:0},800);
  });

});
