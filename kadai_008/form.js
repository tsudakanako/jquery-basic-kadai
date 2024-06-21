$(function () {
  // class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function () {
  //「クリックしました！」と表示させる
  $('.text-box').val('クリックしました！').show();
  });
});