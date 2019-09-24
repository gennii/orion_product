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

  /* 햄버거 메뉴 */
  $('.hamburger_button').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.sub_menu').toggleClass('active');
  });

/* 조명 깜빡이기 */
var snap = function(){

    $('.snap').fadeIn(2000, function(){
      $('.snap').fadeOut(2000, snap);
  });
}
snap();

  /*제품 사진 롤링 */
  var $banner = $('.banner').find('ul');

  var $itemWidth = $banner.children().outerWidth();
  var $itemHeight = $banner.children().outerHeight();
  var $itemLength = $banner.children().length;
  var rollingId;

  auto();

    function auto(){
      rollingId = setInterval(function(){
        start();
      }, 2000);
    }


    function start(){
      $banner.css('width', $itemWidth * $itemLength + 'px');
      $banner.animate({'left': -$itemWidth + 'px'}, 4000, function(){
        $(this).append('<li>' + $(this).find('li:first').html() + '</li>');
        $(this).find('li:first').remove();
        $(this).css('left', 0);
      });
    }

  /*클릭하면 제품 레이아웃 바꾸기*/
  $('#all').click(function(){
    $('.liner').hide();
    $('.liner1').show();
    $('.liner5').show();
  })
  $('#orion').click(function(){
    $('.liner').hide();
    $('.liner2').show();
    $('.liner5').show();
  })
  $('#marketo').click(function(){
    $('.liner').hide();
    $('.liner3').show();
    $('.liner5').show();
  })
  $('#dryou').click(function(){
    $('.liner').hide();
    $('.liner4').show();
    $('.liner5').show();
  })

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
