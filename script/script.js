// --------------------
// エフェクト
// ------------------------
$(window).scroll(function(){
    $('.effect').each(function(){
      var zahyou=$(this).offset().top;
      var scleantop=$(window).scrollTop();
      var windowheight=$(window).height();
      if(scleantop > zahyou - windowheight + 200){
        $(this).addClass('effect-scroll');
      }
    });
    $('.effect-left').each(function(){
        var zahyou=$(this).offset().top;
        var scleantop=$(window).scrollTop();
        var windowheight=$(window).height();
        if(scleantop > zahyou - windowheight + 200){
          $(this).addClass('effect-scroll');
        }
      });
  });

  // ----------------------
  // ハンバーガーメニュー
  // -----------------------
var flag = 1;


  $(function(){
    $('.menu-btn').on('click',function(){
      if(flag == 1){

      $('.content-left').removeClass('close');
      $('.content-left').addClass('open');

flag = 0;

}else{
      $('.content-left').removeClass('open');
      $('.content-left').addClass('close');

flag =  1;

};
});
});



