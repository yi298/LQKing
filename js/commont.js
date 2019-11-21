//禁止页面选择以及鼠标右键
document.οncοntextmenu = function () { return false; };
document.onselectstart = function () { return false; };

$(document).ready(function (e) {
  //轮播图
  $('#b01').unslider({
    fluid: false,
    dots: true//加上原点指示器
  });
  //移动端nav
  $('.m-nav-btn').click(function () {
    $('.m-nav').slideToggle();
  });
  $('.m-nav__li--arrow').click(function () {
    $(this).find('.m-nav__panel').slidetoggle();
  });

  // 价格套餐切换
  $("#on").click(function () {
    $("#company").hide();
    $("#person").show();
  });
  $("#on2").click(function () {
    $("#company").show();
    $("#person").hide();
  });
});


var e = document.getElementById('btn');
e.addEventListener('click', function () {
  if (this.className == 'on') this.classList.remove('on');
  else this.classList.add('on');
});