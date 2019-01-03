
    //1.把所有的图片放在右侧，第一个图片放到可视区
    //获取图片宽度
    var iW=$('.meizhuangbox ul').eq(0).outerWidth();//JS offsetwidth
    // var iW=220;//JS offsetwidth
    $('.meizhuangbox ul').css('left',iW);
    $('.meizhuangbox ul').eq(0).css('left',0);
    // console.log($('.meizhuangbox ul').length)
    
    //2.开定时器：每次轮播一个图
    var timer=null;
    clearInterval(timer);
    var now=0;
    
    timer=setInterval(next,3000);//每隔2秒钟切换一个图
    
    function next(){
        //旧的挪走
        $('.meizhuangbox ul').eq(now).animate({'left':-iW},1000);
        now = ++now >= $('.meizhuangbox ul').length ? 0 : now;
        //新的快速放在右侧，再挪进可视区
        $('.meizhuangbox ul').eq(now).css('left',iW);
        $('.meizhuangbox ul').eq(now).animate({'left':0},1000);
        light();
    }
    




    //3.焦点跟随
    function light(){
        $('#light span').removeClass('active');
        $('#light span').eq(now).addClass('active');
    }
    
    function prev(){
        //从左侧切入到可视区
        //旧的挪到右侧
        $('#imglist li').eq(now).animate({'left':iW},1000);
        //新的
        now=--now<0?$('#imglist li').size()-1:now;
        $('#imglist li').eq(now).css('left',-iW);
        $('#imglist li').eq(now).animate({'left':0},1000);
        light();
    }
    
    //4.点击上下按钮可以切图:如果是渲染出来的数据，记得用事件委托来绑定
    
    //鼠标经过停止，鼠标离开继续运动
    $('#box').hover(function(){
        clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer=setInterval(next,2000);
    });
    //5.点击焦点可以跳转
    
    $('#light span').click(function(){
        //旧 ：now
        //新：index() 新的
        var index=$(this).index();
        if(index>now){
            //从右边切入
            //旧 now：挪到左边
            $('#imglist li').eq(now).animate({'left':-iW},1000);
            //新的
            $('#imglist li').eq(index).css('left',iW);
            $('#imglist li').eq(index).animate({'left':0},1000);
            now=index;//最新的一张变成index
            
        }
        if(index<now){
            //从左边切入
            //旧 now：挪到左边
            $('#imglist li').eq(now).animate({'left':iW},1000);
            //新的
            $('#imglist li').eq(index).css('left',-iW);
            $('#imglist li').eq(index).animate({'left':0},1000);
            now=index;//最新的一张变成index
        }
        
        light();
    });
