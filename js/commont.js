$(document).ready(function (e) {
  //轮播图
  $('#b01').unslider({
    fluid: false,
    dots: true//加上原点指示器
  });
  //移动端nav
  $('.m-nav-btn').click(function () {
    $('.m-nav').toggle();
  });
  $('.m-nav__li--arrow').click(function () {
    $(this).find('.m-nav__panel').toggle();
  });

});