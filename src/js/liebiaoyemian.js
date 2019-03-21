/* 
* @Author: Marte
* @Date:   2018-11-26 11:16:27
* @Last Modified by:   Marte
* @Last Modified time: 2019-01-03 11:27:35
*/

jQuery(function ($) {
    // console.log(555);
    let head_top_right = document.querySelector('#head_top_right');

    let head_top_right2 = document.getElementsByClassName('head_top_right2');
    let sanjiao = document.getElementsByClassName('sanjiao');
    // console.log(sanjiao);
    for (let i = 0; i < head_top_right2.length; i++) {
        // console.log(i);
        head_top_right2[i].onmouseover = function () {
            console.log(head_top_right2[i]);
            sanjiao[i].style.transform = 'rotateZ(180deg)';
            sanjiao[i].style.transitionDuration = '0.2s';


        }
        head_top_right2[i].onmouseout = function () {
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
    var head_center2 = document.querySelector('.head_center2');
    head_center2.onmouseover = function () {
        head_center2.style.backgroundColor = '#FFF4F5';
    }
    head_center2.onmouseout = function () {
        head_center2.style.backgroundColor = '';
    }
    var head_bottom1 = document.querySelector('.head_bottom1');
    var yidui = rich.children;
    var xuanxiangbox = document.getElementsByClassName('xuanxiangbox');
    // console.log(xuanxiangbox);
    head_bottom1.onmouseover = function () {
        rich.style.display = 'block';
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

    head_bottom1.onmouseout = function () {
        rich.style.display = 'none';
        for (let i = 0; i < yidui.length; i++) {
            xuanxiangbox[i].style.display = 'none';
        }
    }

    //搜索框百度效果
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
        key.value = '';
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



    var yonghuming = document.querySelector('.yonghuming');
    var tuichubtn = document.querySelector('.tuichubtn');
    // console.log(yon);

    //接收Cookie账号
    var cookies = Cookie.get('name');
    cookies = cookies.slice(7);
    // console.log(222);
    if (cookies) {
        yonghuming.innerHTML = '欢迎你尾号' + cookies + '的用户';
        tuichubtn.style.display = 'inline-block';
    }
    tuichubtn.onclick = function () {
        Cookie.remove('name', '/');
        yonghuming.innerHTML = '考拉欢迎你！';
        tuichubtn.style.display = 'none';
    }


    

    // 返回顶部
    var louceng_tiaoyue = document.querySelector('.louceng_tiaoyue');
    var benceng = document.getElementsByClassName('benceng');
    var lou = document.getElementsByClassName('lou');
    // console.log(lou);
    var alis = louceng_tiaoyue.children;
    // console.log(alis);
    for (let i = 0; i < alis.length; i++) {
        alis[i].onmouseover = function () {
            alis[i].style.backgroundColor = '#FFECED';
        }
        alis[i].onmouseout = function () {
            alis[i].style.backgroundColor = '';
        }
    }
    for (let j = 0; j < benceng.length; j++) {
        // console.log(j)
        benceng[j].onclick = function () {

            var gaodu = lou[j].offsetTop;
            console.log('距离顶部的距离：' + gaodu);
            window.scrollTo(0, gaodu);
            // console.log(gaodu);
        }
    }
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


    //价格排序
    var sheng = document.querySelector('.sheng');
    var jiang = document.querySelector('.jiang');

    //按价格排序
    sheng.onclick = function () {
        $.get('../api/goodlist.php', { sheng: 1 }, function (res) {
            var con = JSON.parse(res);
            // console.log(con);
            var hezi = document.querySelector('.zhongjiantop1_bottom');
            render(hezi, con);

        })
    }

    //按下降排序
    jiang.onclick = function () {
        $.get('../api/goodlist.php', { jiang: 2 }, function (res) {
            var con = JSON.parse(res);
            console.log(con);
            var hezi = document.querySelector('.zhongjiantop1_bottom');
            render(hezi, con);

        })
    }

    //价格排序渲染
    $.ajax({
        url: '../api/goodlist.php',
        type: 'get',
        data: { sheng: 3 },
        dataType: "JSON",
        success: function (msg) {
            // var arr = msg;
            // console.log(msg);
            var hezi = document.querySelector('.zhongjiantop1_bottom');
            render(hezi, msg);

            var hezi2 = document.querySelector('.zhongjiantop2_bottom');
            render(hezi2, msg);

        }

    })


    //价格排序商品渲染
    function render(hezi, msg) {
        var arr = [];
        hezi.innerHTML = arr = msg.map(function (item) {
            return `  <div class="hezi" >
                  <a href="xiangqingye.html?gid=${item.id}">
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

    //列表传到详情
    $(".hezi").on("click", function () {
        // location.href = `../html/xiangqingye.html?id=${curUl.getAttribute('gid')}`;
    })




    //懒加载链接数据库
    var more = document.querySelector(".more");
    var gif = document.querySelector("#gif");
    var jiazai = document.querySelector('.zhongjianbottom2');
    var zhong = document.querySelector('.zhongjian2');
    var zhongjiantop3 = document.querySelector('.zhongjiantop3');
    //点击更多执行懒加载
    //2.点击加载更多的时候：渲染新的内容
    more.onclick = function () {
        //加上过渡效果
        css(more, 'display', 'none');
        css(gif, 'display', 'block');//点击加载出现动图
        setTimeout(function () {
            css(more, 'display', 'block');
            css(gif, 'display', 'none');//5秒后动图消失，才加载内容

            ipage++;//页码加一
            reut(ipage);//重新调用渲染


        }, 2000);
    }

    //懒加载商品渲染
    var ipage = 1;//第一页
    var inum = 10;//每页5条
    reut(ipage);


    function reut(ipage) {
        $.ajax({
            url: '../api/lanjiazai.php',
            type: 'post',
            data: 'page=' + ipage + '&num=' + inum,
            dataType: "JSON",
            success: function (str) {
                // console.log(str);
                var arr = str.data;
                // console.log(arr);

                res = arr.map(function (item) {
                    return `<div class="goods_bd">
                    <div class="goods_bd_border">
                    <a href="xiangqingye.html?gid=${item.id}">
                    <div class="goods_img"><img src="${item.images}" alt="" /></div>
                    <h5><a href="#">${item.jieshao}</a></h5>
                  
                    <div class="m-priceitem">
                        <span class="price"><i>￥</i>${item.jiage}</span>
                        <span class="mktprice"><del>￥6279</del></span>
                        <a href="#" class="goods-btn"><span>加入购物车</span></a>
                    </div>
                    </a>
                    </div>
                </div>`;
                }).join('');

                zhongjiantop3.innerHTML += res;
                var pages = Math.ceil(str.total / str.num);//存总页码
                // console.log(pages);

                if (ipage == pages) {
                    alert('最后一次了！');
                }

            }
        })


    }

})



