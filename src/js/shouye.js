/* 
* @Author: Marte
* @Date:   2018-11-22 19:33:50
* @Last Modified by:   Marte
* @Last Modified time: 2019-01-02 19:32:28
*/

document.addEventListener('DOMContentLoaded', function(){
    console.log(555);
    let headtopright=document.querySelector('#head_top_right');
      
    let headtopright2=document.getElementsByClassName('head_top_right2');
    let sanjiao=document.getElementsByClassName('sanjiao');
    console.log(sanjiao);


    //菜单箭头旋转 
    for(let i=0;i<headtopright2.length;i++){
        console.log(i);
        headtopright2[i].onmouseover=function(){
            // console.log(head_top_right2[i]);
            sanjiao[i].style.transform='rotateZ(180deg)';
            sanjiao[i].style.transitionDuration='0.2s';

        }
        headtopright2[i].onmouseout=function(){
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
    var headcenter2=document.querySelector('.head_center2');
    headcenter2.onmouseover=function(){
        headcenter2.style.backgroundColor='#FFF4F5';
    }
    headcenter2.onmouseout=function(){
        headcenter2.style.backgroundColor='';
    }
    var headbottom1=document.querySelector('.head_bottom1');
    var yidui=rich.children;
    var xuanxiangbox=document.getElementsByClassName('xuanxiangbox');
    console.log(xuanxiangbox);
    headbottom1.onmouseover=function(){
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




    headbottom1.onmouseout=function(){
        for(let i=0;i<yidui.length;i++){
           xuanxiangbox[i].style.display='none';
           // xuanxiangbox[i].animation(ele,obj,time,fn);
        }
    }

//给三级导航添加动画吸顶
// for (let i = 0; i < 6; i++) {
//         secondNavLI.children[i].onmouseenter = function(e) {
//             this.children[5].style.top = 70 * i + 'px';
//             this.children[5].style.display = 'block';
//             animation(this.children[5], {
//                 top: 0
//             }, 30);
//         };
//         secondNavLI.children[i].onmouseleave = function() {
//             this.children[5].style.display = 'none';
//         };
//     }


  //  var xhr=new XMLHttpRequest();

  // xhr.onload=()=>{
  //    if(xhr.status===200 ){
  //        var arr=JSON.parse(xhr.responseText);
  //        console.log(arr);
  //        var meizhuang_bottom=document.querySelector('.meizhuang_bottom');

  //       var res=arr.map(function(item){
  //       // console.log(item.image.slice(3));
  //       return  `<div class="meizhuangbox">
  //                   <div class="goods_img">
  //                       <img src="${item.image.slice(3)}" alt="" />
  //                   </div>
  //                   <h5>
  //                       <a href="./html/liebiaoye.html">${item.name}</a>
  //                   </h5>
  //                   <h6>${item.tiqu}</h6>
  //                   <div class="m-priceitem">
  //                       <span class="price"><i>￥</i>${item.sale}</span>
  //                       <span class="mktprice"><del>￥${item.price}</del></span>
  //                   </div>
  //               </div>`;

  // }).join('');
  //        // console.log(res);
  //        meizhuang_bottom.innerHTML=res;

  //        var meishi_bottom=document.querySelector('.meishi_bottom');
  //        var res2=arr.map(function(item){
  //           return `<div class="meishibox">
  //                   <div class="goods_img">
  //                       <img src="${item.image.slice(3)}" alt="" />
  //                   </div>
  //                   <h5>
  //                       <a href="#">${item.name}</a>
  //                   </h5>
  //                   <h6>${item.tiqu}</h6>
  //                   <div class="m-priceitem">
  //                       <span class="price"><i>￥</i>${item.sale}</span>
  //                       <span class="mktprice"><del>￥${item.price}</del></span>
                        
  //                   </div>
  //               </div>`
  //        }).join('');
  //        // console.log(res2);
  //        meishi_bottom.innerHTML=res2;
  //    }
  // }
 

 //跳转列表页
  // xhr.open('get','./api/goodlist.php');
  // xhr.send();
  // var loucengtiaoyue=document.querySelector('.louceng_tiaoyue');
  // var benceng=document.getElementsByClassName('benceng');
  // var lou=document.getElementsByClassName('lou');
  // console.log(lou);
  // var alis=loucengtiaoyue.children;
  // console.log(alis);
  // for(let i=0;i<alis.length;i++){
  //   alis[i].onmouseover=function(){
  //       alis[i].style.backgroundColor='#330B77';
  //   }
  //   alis[i].onmouseout=function(){
  //       alis[i].style.backgroundColor='';
  //   }
  // }
  // for(let j=0;j<benceng.length;j++){
  //   console.log(j)
  //   benceng[j].onclick=function(){

  //       var gaodu=lou[j].offsetTop;
  //       console.log('距离顶部的距离：'+gaodu);
  //      window.scrollTo(0, gaodu);
  //      // console.log(gaodu);
  //   }
  // }

//吸顶菜单
  // var headcenter=document.querySelector('#headcenter');
  // var headtop=document.querySelector('#headtop');
  // // console.log(headtop);
  // window.onscroll=function(){
  //    console.log(666);
  //       var scrollTop=window.scrollY;
  //       console.log(scrollTop);
  //       if(scrollTop>=headtop.offsetHeight){
  //         console.log(666);
  //         headcenter.className='xin';
  //       }else{
  //        headcenter.className='';
  //       }
  //     }
  // console.log(headcenter);





  //返回顶部
  var fanhuidingbu=document.querySelector('.fanhuidingbu');
  var louceng=document.querySelector('.louceng');
  window.onscroll=function(){
    if(window.scrollY>680){
        louceng.style.display='block';
    }else{
        louceng.style.display='none';
    }
    fanhuidingbu.onclick=function(){
        let timer=setInterval(function(){
            let v=Math.ceil(window.scrollY/5);
            scrollBy(0,-v);
            if(window.scrollY<=0){
                clearInterval(timer);
            }
        },30)
    }
  }



  var yonghuming=document.querySelector('.yonghuming');
  var tuichubtn=document.querySelector('.tuichubtn');
  console.log(222);

 //接收Cookie账号
  var cookies=Cookie.get('name');
  console.log(cookies);
  cookies=cookies.slice(7);

  if(cookies){
    yonghuming.innerHTML='欢迎你尾号'+cookies+'的用户';
    tuichubtn.style.display='inline-block';
  }
  tuichubtn.onclick=function(){
    Cookie.remove('name','/');
    yonghuming.innerHTML='考拉欢迎你！';
    tuichubtn.style.display='none';
  }

 jQuery(function($){
      $.ajax({
        url: '../api/context.php',
        type: 'get',
        dataType:"JSON",
        success:function(msg){
          // var arr =  JSON.parse(msg)
        // console.log(msg[0]);
var hezi=document.querySelector('.zhongjiantop1_bottom');
   render(hezi,msg);


var hezi2=document.querySelector('.zhongjiantop2_bottom');
    render(hezi2,msg);
         }
      })
    })
function render(hezi,msg){
  var arr = [];
 hezi.innerHTML= arr = msg.map(function(item){
         return  `  <div class="hezi">
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