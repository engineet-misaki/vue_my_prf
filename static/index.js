ScrollReveal().reveal('.box1', { 
    delay: 2000,
    distance: '50px',
    origin: 'top',
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: true   // 何回もアニメーション表示するか
  });
ScrollReveal().reveal('.box1b', { 
    delay: 4500,
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: true   // 何回もアニメーション表示するか
  });
ScrollReveal().reveal('.box2', { 
    delay: 5500,
    distance: '50px',
    origin: 'top',
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: true   // 何回もアニメーション表示するか
  });
ScrollReveal().reveal('.box2b', { 
    delay: 7500,
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: true   // 何回もアニメーション表示するか
  });
ScrollReveal().reveal('.box3', { 
    delay: 8500,
    distance: '50px',
    origin: 'top',
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: true   // 何回もアニメーション表示するか
  });
ScrollReveal().reveal('.box3b', { 
    delay: 10000,
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: true   // 何回もアニメーション表示するか
  });



ScrollReveal().reveal('.boxpro', { 
    delay: 2000,
    distance: '50px',
    origin: 'bottom',
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: true   // 何回もアニメーション表示するか
  });
ScrollReveal().reveal('.boxhead', { 
    delay: 2200,
    distance: '50px',
    origin: 'top',
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: true   // 何回もアニメーション表示するか
  });
ScrollReveal().reveal('.boxtable', { 
    delay: 3000,
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: true   // 何回もアニメーション表示するか
  });






//   //横にスクロールする要素をマウスホイールで動かせるようにするJavaScript
// $.fn.mycus_hScroll = function (amount) {
// 	amount = amount || 120;
// 	$(this).bind("DOMMouseScroll mousewheel", function (event) {
// 		var oEvent = event.originalEvent, 
// 		direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
// 		position = $(this).scrollLeft();
// 		position += direction > 0 ? -amount : amount;
// 		$(this).scrollLeft(position);
// 		event.preventDefault();
// 	})
// };

// $(function() {
// 	$(".body-class").mycus_hScroll(60); // カッコ内の数字でスクロール量を調節できます。
// });


    // $(function() {
    //     //コンテンツの横サイズ
    //     var cont = $('.body-class');
    //     var contW = $('.body-class').outerWidth(true) * $('div',cont ).length;
    //     cont.css('width', 1);
    //     //スクロールスピード
    //     var speed = 30;
    //     //マウスホイールで横移動
    //     $('html').mousewheel(function(event, mov) {
    //         //ie firefox
    //         $(this).scrollLeft($(this).scrollLeft() - mov * speed);
    //         //webkit
    //         $('body').scrollLeft($('body').scrollLeft() - mov * speed);
    //         return false;   //縦スクロール不可
    //     });
      //  $('a[href^=#]').click(function() {
      // var speed = 400;// ミリ秒
      // var href= $(this).attr("href");
      // var target = $(href == "#" || href == "" ? 'html' : href);
      // var position = target.offset().left; //targetの位置を取得
      // $('html, body').animate({scrollLeft:position}, speed, 'swing');
      // return false;
      //  });
    // });

    $(function(){
      //--------------------------------------------------------------------------------
      // マウスホイールで横スクロール処理
      //--------------------------------------------------------------------------------
      // スクロール後の位置
      var moving;
      // 1スクロールの移動距離
      var speed = 1;
      $('html').mousewheel(function(event, mov) {
          //  スクロール後の位置の算出
          var moving = $(this).scrollLeft() - mov * speed;
          // スクロールする
          $(this).scrollLeft(moving);
          // 縦スクロールさせない
          return false;
      });
  });