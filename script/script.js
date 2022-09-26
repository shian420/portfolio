$(window).scroll(function(){
    $('.effect').each(function(){
      var zahyou=$(this).offset().top;
      var scleantop=$(window).scrollTop();
      var windowheight=$(window).height();
      if(scleantop > zahyou - windowheight + 200){
        $(this).addClass('effect-scroll');
      }
    });
    $('.effect-right').each(function(){
        var zahyou=$(this).offset().top;
        var scleantop=$(window).scrollTop();
        var windowheight=$(window).height();
        if(scleantop > zahyou - windowheight + 200){
          $(this).addClass('effect-scroll');
        }
      });
  });