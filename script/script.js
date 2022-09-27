$('a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;  //idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});



// --------------------
// スクロールエフェクト
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
      $('.btn-line').addClass('open-line');
      $('.btn-line2').addClass('open-line2');
      $('.btn-line3').addClass('open-line3');
      $('.open-line').removeClass('btn-line');
      $('.open-line2').removeClass('btn-line2');
      $('.open-line3').removeClass('btn-line3');

flag = 0;

}else{
      $('.content-left').removeClass('open');
      $('.content-left').addClass('close');
      $('.open-line').addClass('btn-line');
      $('.open-line2').addClass('btn-line2');
      $('.open-line3').addClass('btn-line3');
      $('.btn-line').removeClass('open-line');
      $('.btn-line2').removeClass('open-line2');
      $('.btn-line3').removeClass('open-line3');

flag =  1;

};
});
});



