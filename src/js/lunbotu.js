
//1.把所有的图片放在右侧，第一个图片放到可视区
//获取图片宽度
window.onload = function () {
    var iW = $('.meizhuangbox ul').eq(0).outerWidth();//JS offsetwidth
    // var iW=220;//JS offsetwidth

    $('.meizhuangbox ul').css('left', iW);
    $('.meizhuangbox ul').eq(0).css('left', 0);
    // console.log($('.meizhuangbox ul').length)

    //2.开定时器：每次轮播一个图
    var timer = null;
    clearInterval(timer);
    var now = 0;

    timer = setInterval(next, 2000);//每隔2秒钟切换一个图

    function next() {
        //旧的挪走
        $('.meizhuangbox ul').eq(now).stop().animate({ 'left': -iW }, 1000);
        now = ++now >= $('.meizhuangbox ul').length ? 0 : now;
        //新的快速放在右侧，再挪进可视区
        $('.meizhuangbox ul').eq(now).css('left', iW);
        $('.meizhuangbox ul').eq(now).stop().animate({ 'left': 0 }, 1000);
        light();
    }

    //3.焦点跟随
    function light() {
        $('#ppo span').removeClass('active');
        $('#ppo span').eq(now).addClass('active');
    }

    function prev() {
        //从左侧切入到可视区
        //旧的挪到右侧
        $('.meizhuangbox ul').eq(now).stop().animate({ 'left': iW }, 1000);
        //新的
        now = --now < 0 ? $('.meizhuangbox ul').size() - 1 : now;
        $('.meizhuangbox ul').eq(now).css('left', -iW);
        $('.meizhuangbox ul').eq(now).stop().animate({ 'left': 0 }, 1000);
        light();
    }

    //4.点击上下按钮可以切图:如果是渲染出来的数据，记得用事件委托来绑定

    //鼠标经过停止，鼠标离开继续运动
    $('.meizhuang_bottom_r').hover(function () {
        clearInterval(timer);
    }, function () {
        clearInterval(timer);
        timer = setInterval(next, 2000);
    });
    //5.点击焦点可以跳转

    $('#ppo span').hover(function () {

        //旧 ：now
        //新：index() 新的
        var index = $(this).index();
        if (index > now) {
            //从右边切入
            //旧 now：挪到左边
            $('.meizhuangbox ul').eq(now).stop().animate({ 'left': -iW }, 1000);
            //新的
            $('.meizhuangbox ul').eq(index).css('left', iW);
            $('.meizhuangbox ul').eq(index).stop().animate({ 'left': 0 }, 1000);
            now = index;//最新的一张变成index

        }
        if (index < now) {
            //从左边切入
            //旧 now：挪到左边
            $('.meizhuangbox ul').eq(now).stop().animate({ 'left': iW }, 1000);
            //新的
            $('.meizhuangbox ul').eq(index).css('left', -iW);
            $('.meizhuangbox ul').eq(index).stop().animate({ 'left': 0 }, 1000);
            now = index;//最新的一张变成index
            // prev();
        }
        light();
    });

}
