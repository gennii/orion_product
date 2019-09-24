$(document).ready(function(){
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
});
