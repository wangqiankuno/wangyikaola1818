/* 
* @Author: Marte
* @Date:   2018-11-28 20:26:55
* @Last Modified by:   Marte
* @Last Modified time: 2019-01-02 19:33:29
*/

document.addEventListener('DOMContentLoaded', function(){
    let head_top_right=document.querySelector('#head_top_right');
    
    let head_top_right2=document.getElementsByClassName('head_top_right2');
    let sanjiao=document.getElementsByClassName('sanjiao');
    // console.log(sanjiao);
    for(let i=0;i<head_top_right2.length;i++){
        // console.log(i);
        head_top_right2[i].onmouseover=function(){
            // console.log(head_top_right2[i]);
            sanjiao[i].style.transform='rotateZ(180deg)';
            sanjiao[i].style.transitionDuration='0.2s';
           
           
        }
        head_top_right2[i].onmouseout=function(){
            sanjiao[i].style.transform='rotateZ(0deg)';
            sanjiao[i].style.transitionDuration='0.2s';
        }
    }
    var back=document.querySelector('.back');
    back.onmouseover=function(){
        back.style.opacity='0.8';
    }
    back.onmouseout=function(){
         back.style.opacity='1';
    }
    var head_center2=document.querySelector('.head_center2');
    head_center2.onmouseover=function(){
        head_center2.style.backgroundColor='#FFF4F5';
    }
    head_center2.onmouseout=function(){
        head_center2.style.backgroundColor='';
    }
    var head_bottom1=document.querySelector('.head_bottom1');
    var yidui=rich.children;
    var xuanxiangbox=document.getElementsByClassName('xuanxiangbox');
    // console.log(xuanxiangbox);
    head_bottom1.onmouseover=function(){
        rich.style.display='block';
        for(let i=0;i<yidui.length;i++){
            yidui[i].onmouseover=function(){
                yidui[i].style.backgroundColor='#fff';
                yidui[i].children[1].className='ziti';
                xuanxiangbox[i].style.display='block';
            }
            yidui[i].onmouseout=function(){
                    yidui[i].style.backgroundColor='';
                    yidui[i].children[1].className='';
                }
        }
    }

    head_bottom1.onmouseout=function(){
        rich.style.display='none';
        for(let i=0;i<yidui.length;i++){
           xuanxiangbox[i].style.display='none';
        }
    }

//接收列表页
    var wupinxiangqing=document.querySelector('.wupinxiangqing');
    var res=decodeURI(location.search);
        res=res.slice(5);
        // console.log(res);

    var xhr=new XMLHttpRequest();
    xhr.onload=function(){
        if(xhr.status===200){
            var arr=JSON.parse(xhr.responseText);
           
            // console.log(arr);
            if(res){
            //利用filter筛选ID是res的数据
        wupinxiangqing.innerHTML= arr.map(function(item){
                    // console.log(item.images);
                    return `<div class="wupinxiangqing">     
                            <div id="wupin_img">
                            <div class="MagnifierMain">
                            <img src="${item.images}" class="MagTargetImg" data-src="${item.images}"/>
                            </div>
                    <span class="spe_leftBtn">&lt;</span>
                    <span class="spe_rightBtn">&gt;</span>
                    <div class="spec-items">
        <ul>
         <li class="on"><img src="${item.images}" data-lsrc="${item.images}" data-maxSrc="${item.images}"></li>
          <li><img src="${item.images}" data-lsrc="${item.images}" data-maxSrc="${item.images}"></li>
          <li><img src="${item.images}" data-lsrc="${item.images}" data-maxSrc="${item.images}"></li>
          <li><img src="${item.images}" data-lsrc="${item.images}" data-maxSrc="${item.images}"></li>
          <li><img src="${item.images}" data-lsrc="${item.images}" data-maxSrc="${item.images}"></li>
          <li><img src="${item.images}" data-lsrc="${item.images}" data-maxSrc="${item.images}"></li>
        </ul>
      </div>
    </div>
            <div class="wupin_xinxi">
                <span id="auto-id-1543318986353">${item.jieshao}</span><br /><br /><br /> 

              <div class="wupin_xinxi_b">
                <div>
                  售价：
                  <span class="xianjia">${item.jiage}</span><br/><br/>
                  
                  数量：
                  <input class="put" type="number" value="1" min="1" max="99"/>
                  <br /><br /><br />
                </div>
                <div class="tianjia">
                  <a href="javascript:;">加入购物车</a>
                </div>
              </div>
          </div>  
        </div>`;
    }).join('');

 //放大镜              
$(function(){
            // console.log(arr[0].images);
            // console.log(arr[0].img);
            var ss = arr[0].img;
    //数组假数据，换成你们数据库查询的数据即可
    var arrSmall = [`${arr[0].images}`,`${arr[0].images}`,`${arr[0].images}`,`${arr[0].images}`,`${arr[0].images}`];
    // var arrSmall = '["'+arr[0].img+'"]';
    var arrBig = [`${arr[0].images}`,`${arr[0].images}`,`${arr[0].images}`,`${arr[0].images}`,`${arr[0].images}`,`${arr[0].images}`];
            
 //渲染数据  
     var html='';
        for(var i=0;i<arrSmall.length;i++){
            html+=`<li><img src="${arrSmall[i]}" data-lsrc="${arrSmall[i]}" data-maxSrc="${arrBig[i]}"></li>`;
            }
            // console.log(html);
         $('#wupin_img .spec-items ul').html(html);//生成节点
         $('#wupin_img .spec-items ul li').eq(0).addClass('on');//第一个li样式为on
            
 //第一个大图的渲染
        var str=`<img class="MagTargetImg" src="${arrSmall[0]}" data-src="${arrBig[0]}">`;
        $('#wupin_img .MagnifierMain').html(str);
         
            //调用放大镜插件：传最大盒子id即可
         MagnifierF(wupin_img);
        });

//添加点击事件到购物车
            //点击购物车
    var tianjia=document.querySelector('.tianjia');
            //数量
    var put=document.querySelector('.put').value;
    var imagess= arr[0].images;
    var names= arr[0].name;
         // console.log(imagess);
    tianjia.onclick=function(){
        var goodslist=Cookie.get('name');
                // console.log(goodslist);
                if(goodslist == ""){
                        alert("请登录");
                        location.href="./dengluye.html"
                }else{
                     location.href="./gouwuche.html"
                    $cookie = goodslist;
                    $imagess = arr[0].images;
                    $names = arr[0].jieshao;
                    // $english = arr[0].english;
                    // $detail = arr[0].detail;
                    // dols = arr[0].dols;
                    $cny = arr[0].jiage;
                    $qty = $(".put").val();
                    console.log(arr);
                    console.log($qty);
                    $suoyin =arr[0].id;
                    // console.log($qty);
                    $.get("../api/gouwuche.php?yes=true&cookie="+$cookie+"&imagess="+$imagess+"&names="+$names+"&cny="+$cny+"&qty="+$qty+"&suoyin="+$suoyin,function(arrs){
                        console.log(arrs);
                        })
                }
        
                }
                 // $('.wupin_img_top').lxzoom()
            }
        }
    }
    // console.log(res);
    xhr.open('get',`../api/xiangqingye.php?id=${res}`);
    xhr.send();

var yonghuming=document.querySelector('.yonghuming');
var tuichubtn=document.querySelector('.tuichubtn');
  // console.log(tuichubtn);

 //接收Cookie账号
  var cookies=Cookie.get('name');
  cookies=cookies.slice(7);
// console.log(222);
  if(cookies){
    yonghuming.innerHTML='欢迎你尾号'+cookies+'的用户';
    tuichubtn.style.display='inline-block';
  }
  tuichubtn.onclick=function(){
    Cookie.remove('name','/');
    yonghuming.innerHTML='考拉欢迎你！';
    tuichubtn.style.display='none';
  }

//飞入效果
// $('.add-to-cart').on('click', function () {
// 	var cart = $('.shopping-cart');
// 	var imgtodrag = $(this).parent('.item').find('img').eq(0);
// 	if (imgtodrag) {
// 		var imgclone = imgtodrag.clone().offset({
// 			top: imgtodrag.offset().top,
// 			left: imgtodrag.offset().left
// 		}).css({
// 			'opacity': '0.5',
// 			'position': 'absolute',
// 			'height': '150px',
// 			'width': '150px',
// 			'z-index': '100'
// 		}).appendTo($('body')).animate({
// 			'top': cart.offset().top + 10,
// 			'left': cart.offset().left + 10,
// 			'width': 75,
// 			'height': 75
// 		}, 1000, 'easeInOutExpo');
// 		setTimeout(function () {
// 			cart.effect('shake', { times: 2 }, 200);
// 		}, 1500);
// 		imgclone.animate({
// 			'width': 0,
// 			'height': 0
// 		}, function () {
// 			$(this).detach();
// 		});
// 	}
// });


//返回顶部
    var fanhuidingbu=document.querySelector('.fanhuidingbu');
    var wupinxiangqing=document.querySelector('.wupinxiangqing');
    var wuming=document.querySelector('.wuming');
    var tp=wupinxiangqing.offsetTop;
 //滚动条下滑返回顶部出现
    window.onscroll=function(){
        var scrollTop=window.scrollY;
        if(scrollTop>=tp){
            wuming.style.display='block';
        }else{
            wuming.style.display='none';
        }
    }
    fanhuidingbu.onclick=function(){
        var timer=setInterval(function(){
            var v=Math.ceil(window.scrollY/5);
            scrollBy(0, -v);
            if(window.scrollY<=0){
                clearInterval(timer);
            }
        },30)
    }
  
})