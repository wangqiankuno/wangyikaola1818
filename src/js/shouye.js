/* 
* @Author: Marte
* @Date:   2018-11-22 19:33:50
* @Last Modified by:   Marte
* @Last Modified time: 2019-01-02 19:32:28
*/

$(function () {

    let headtopright = document.querySelector('#head_top_right');

    let headtopright2 = document.getElementsByClassName('head_top_right2');
    let sanjiao = document.getElementsByClassName('sanjiao');
    // console.log(sanjiao);


    //菜单箭头旋转 
    for (let i = 0; i < headtopright2.length; i++) {
        // console.log(i);
        headtopright2[i].onmouseover = function () {
            // console.log(head_top_right2[i]);
            sanjiao[i].style.transform = 'rotateZ(180deg)';
            sanjiao[i].style.transitionDuration = '0.2s';

        }
        headtopright2[i].onmouseout = function () {
            sanjiao[i].style.transform = 'rotateZ(0deg)';
            sanjiao[i].style.transitionDuration = '0.2s';
        }
    }
    var back = document.querySelector('.back');
    back.onmouseover = function () {
        back.style.opacity = '0.8';
    }
    back.onmouseout = function () {
        back.style.opacity = '1';
    }
    var headcenter2 = document.querySelector('.head_center2');
    headcenter2.onmouseover = function () {
        headcenter2.style.backgroundColor = '#FFF4F5';
    }
    headcenter2.onmouseout = function () {
        headcenter2.style.backgroundColor = '';
    }
    var headbottom1 = document.querySelector('.head_bottom1');
    var yidui = rich.children;
    var xuanxiangbox = document.getElementsByClassName('xuanxiangbox');
    // console.log(xuanxiangbox);
    headbottom1.onmouseover = function () {
        for (let i = 0; i < yidui.length; i++) {
            yidui[i].onmouseover = function () {
                yidui[i].style.backgroundColor = '#fff';
                yidui[i].children[1].className = 'ziti';
                xuanxiangbox[i].style.display = 'block';
            }
            yidui[i].onmouseout = function () {
                yidui[i].style.backgroundColor = '';
                yidui[i].children[1].className = '';
            }
        }
    }




    headbottom1.onmouseout = function () {
        for (let i = 0; i < yidui.length; i++) {
            xuanxiangbox[i].style.display = 'none';
            // xuanxiangbox[i].animation(ele,obj,time,fn);
        }
    };

    //搜索框
    var output = document.querySelector('#output');
    var key = document.querySelector(".search");

    //函数内部写你想完成的功能
    window.show = function (data) {
        output.innerHTML = data.s.map(function (item) {
            return `<li>${item}</li>`;
        }).join("");
    }
    // 2.每次输入过程中，重新生成script标签（关键字改变了）
    key.onkeyup = function () {
        var _key = key.value;
        clearTimeout(this.timer);

        this.timer = setTimeout(function () {
            var script = document.createElement("script");
            script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&cb=show&wd=" + _key;
            document.body.appendChild(script);
            output.style.display = 'block';
        }, 600)
    }

    window.onclick = function () {
        output.style.display = 'none';
        key.value='';
    }
    output.onmouseover = (ev) => {
        if (ev.target.tagName = 'LI') {
            ev.target.style.color = 'red';
        }
    }
    output.onmouseout = (ev) => {
        if (ev.target.tagName = 'LI') {
            ev.target.style.color = '';
        }
    }


    //鼠标滑过字体变红
    var meizhuang_bottom_t = document.querySelector('.meizhuang_bottom_t')
    console.log(meizhuang_bottom_t);
    meizhuang_bottom_t.onmouseover = function (ev) {
        if (ev.target.tagName = 'A') {
            ev.target.style.color = 'red';
        }
    }
    meizhuang_bottom_t.onmouseout = function (ev) {
        if (ev.target.tagName = 'A') {
            ev.target.style.color = '';
        }
    }

    //限时购
    //获取倒计时的节点并渲染
    var djs = document.querySelector('.xianshi');
    setInterval(function () {
        djs.innerHTML = daoJS();
    }, 1000);

    function daoJS() {
        //获取现在时间的
        var now = new Date();
        //获取年月日时
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hour = now.getHours();

        //设置场次时间
        var hour_num; //场次开始的  时刻
        if (hour % 2 == 0) {
            hour_num = hour;

        } else {
            hour_num = hour - 1;
        }
        var end_hour = hour_num + 2; //场次结束的 时刻

        //拼接年月日
        var endres = year + '-' + month + '-' + day + ' ';
        endres += end_hour + ':00:00'; //2019-02-18 12:00:00

        //得到结束的时间点
        var endTime = new Date(endres);

        //结束时间-当前时间  毫秒数→转化为秒数
        var time = parseInt((endTime - now) / 1000);

        //时分秒
        var showHour = bu0(parseInt(time / 60 / 60));
        var showMin = bu0(parseInt(time / 60) % 60);
        var showSec = bu0(time % 60);

        return `
                <p class="xainshi_a" style=" font-size:28px;
                color:#000;margin-right: 31px;"><b>今日限时购:</b></p>
                <p class="lb_num" style="
                color:#000;margin:13px 31px 0 0;">${hour_num}:00场</p>
				<img src="css/img/lightbuy_light.png" style="margin:14px 31px 0 0;" alt="" />
				<p class="lb_1" style="margin:13px 31px 0 0;">距离结束还有</p>
				<p class="lb_djs" style="margin-top:13px;">
					<span>${showHour}</span>：
					<span>${showMin}</span>：
					<span>${showSec}</span>
			</p>`;
    }

    //补0函数
    function bu0(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }



    //第二个轮播图


    var iQ = $('.meishibox ul').eq(0).outerWidth();//JS offsetwidth
    // var iQ=220;//JS offsetwidth

    $('.meishibox ul').css('left', iQ);
    $('.meishibox ul').eq(0).css('left', 0);
    // console.log($('.meishibox ul').length)

    //2.开定时器：每次轮播一个图
    var timer = null;
    clearInterval(timer);
    var now = 0;

    timer = setInterval(next, 2000);//每隔2秒钟切换一个图

    function next() {
        //旧的挪走
        $('.meishibox ul').eq(now).stop().animate({ 'left': -iQ }, 1000);
        now = ++now >= $('.meishibox ul').length ? 0 : now;
        //新的快速放在右侧，再挪进可视区
        $('.meishibox ul').eq(now).css('left', iQ);
        $('.meishibox ul').eq(now).stop().animate({ 'left': 0 }, 1000);
        light();
    }

    //3.焦点跟随
    function light() {
        $('#ppu span').removeClass('active');
        $('#ppu span').eq(now).addClass('active');
    }

    function prev() {
        //从左侧切入到可视区
        //旧的挪到右侧
        $('.meishibox ul').eq(now).stop().animate({ 'left': iQ }, 1000);
        //新的
        now = --now < 0 ? $('.meishibox ul').size() - 1 : now;
        $('.meishibox ul').eq(now).css('left', -iQ);
        $('.meishibox ul').eq(now).stop().animate({ 'left': 0 }, 1000);
        light();
    }

    //4.点击上下按钮可以切图:如果是渲染出来的数据，记得用事件委托来绑定

    //鼠标经过停止，鼠标离开继续运动
    $('.meishi_bottom_r').hover(function () {
        clearInterval(timer);
    }, function () {
        clearInterval(timer);
        timer = setInterval(next, 2000);
    });
    //5.点击焦点可以跳转

    $('#ppu span').hover(function () {

        //旧 ：now
        //新：index() 新的
        var index = $(this).index();
        if (index > now) {
            //从右边切入
            //旧 now：挪到左边
            $('.meishibox ul').eq(now).stop().animate({ 'left': -iQ }, 1000);
            //新的
            $('.meishibox ul').eq(index).css('left', iQ);
            $('.meishibox ul').eq(index).stop().animate({ 'left': 0 }, 1000);
            now = index;//最新的一张变成index

        }
        if (index < now) {
            //从左边切入
            //旧 now：挪到左边
            $('.meishibox ul').eq(now).stop().animate({ 'left': iQ }, 1000);
            //新的
            $('.meishibox ul').eq(index).css('left', -iQ);
            $('.meishibox ul').eq(index).stop().animate({ 'left': 0 }, 1000);
            now = index;//最新的一张变成index
            // prev();
        }
        light();
    });





    //吸顶菜单

    var headcenter = document.querySelector('#headcenter');
    $(window).scroll(function () {
        var top = headcenter.offsetTop;
        // console.log(window.scrollY);
        if (window.scrollY > top) {
            headcenter.style.position = 'fixed';
            headcenter.style.top = 0 + 'px';
            headcenter.style.left = 0 + 'px';
        } else {
            headcenter.style.position = '';
        }
    })


    //返回顶部
    var fanhuidingbu = document.querySelector('.fanhuidingbu');
    var louceng = document.querySelector('.louceng');
    window.onscroll = function () {
        if (window.scrollY > 680) {
            louceng.style.display = 'block';
        } else {
            louceng.style.display = 'none';
        }
        fanhuidingbu.onclick = function () {
            let timer = setInterval(function () {
                let v = Math.ceil(window.scrollY / 5);
                scrollBy(0, -v);
                if (window.scrollY <= 0) {
                    clearInterval(timer);
                }
            }, 30)
        }
    }



    var yonghuming = document.querySelector('.yonghuming');
    var tuichubtn = document.querySelector('.tuichubtn');
    //   console.log(222);

    //接收Cookie账号
    var cookies = Cookie.get('name');
    //   console.log(cookies);
    cookies = cookies.slice(7);

    if (cookies) {
        yonghuming.innerHTML = '欢迎你尾号' + cookies + '的用户';
        tuichubtn.style.display = 'inline-block';
    }
    tuichubtn.onclick = function () {
        Cookie.remove('name', '/');
        yonghuming.innerHTML = '考拉欢迎你！';
        tuichubtn.style.display = 'none';
    }

    jQuery(function ($) {
        $.ajax({
            url: 'api/conn.php',
            type: 'get',
            dataType: "JSON",
            success: function (msg) {
                // var arr =  JSON.parse(msg)
                // console.log(msg[0]);
                var hezi = document.querySelector('.zhongjiantop1_bottom');
                render(hezi, msg);


                var hezi2 = document.querySelector('.zhongjiantop2_bottom');
                render(hezi2, msg);
            }
        })
    })
    function render(hezi, msg) {
        var arr = [];
        hezi.innerHTML = arr = msg.map(function (item) {
            return `  <div class="hezi">
                  <a href="xiangqingye.html">
                    <div class="img_box">
                    <img src="${item.images}" alt="" />
                    </div>
                        <div class="ximg_box">
                        <div class="imgtu">
                        <img class="ximg_boxmg" src="${item.img}" alt="" />
                        </div>
                        <div class="u_text_name"><p>${item.jieshao}</p></div> 
                        <span class="price">
                         <i class="rmd">双旦价 &nbsp;￥</i>${item.jiage}
                         </span>
                        <a class="good" href="javascript:;">立即购买</a>
                         </div>
                      </a>
                      </div>`;
        }).join('');
    }
})