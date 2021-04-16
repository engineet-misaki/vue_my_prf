// 始まりのスライド
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


// プロフ表示のスライド
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



// ヨコスライド
ScrollReveal().reveal('.top_fade', { 
  distance: '50px',
  origin: 'top',
  duration: 1000, // アニメーションの完了にかかる時間
  viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  reset: true   // 何回もアニメーション表示するか
});
ScrollReveal().reveal('.top_slide', { 
  distance: '300px',
  origin: 'top',
  duration: 1000, // アニメーションの完了にかかる時間
  viewFactor: 1, // 0~1,どれくらい見えたら実行するか
  reset: true   // 何回もアニメーション表示するか
});
ScrollReveal().reveal('.fade', { 
  distance: '0px',
  origin: 'top',
  duration: 1000, // アニメーションの完了にかかる時間
  viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  reset: true   // 何回もアニメーション表示するか
});
ScrollReveal().reveal('.bottom_slide', { 
  distance: '300px',
  origin: 'bottom',
  duration: 1000, // アニメーションの完了にかかる時間
  viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  reset: true   // 何回もアニメーション表示するか
});







// マウスホイール
$(function(){
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