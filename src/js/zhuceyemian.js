/* 
* @Author: Marte
* @Date:   2018-11-24 10:09:20
* @Last Modified by:   Marte
* @Last Modified time: 2019-01-02 19:30:22
*/

document.addEventListener('DOMContentLoaded', function(){
    var shoujidenglu=document.querySelector('.shoujidenglu');
    // var youxiangdenlu=document.querySelector('.youxiangdenlu');
    // var denglubottom1=document.querySelector('.denglubottom1');
    // var denglubottom2=document.querySelector('.denglubottom2');
    // shoujidenglu.onclick=function(){
    //     denglubottom1.style.display='block';
    //     denglubottom2.style.display='none';
    //     shoujidenglu.style.color='#E31436';
    //     youxiangdenlu.style.color='#000';
    //     // youxiangdenlu.onmouseover=function(){
    //     //     youxiangdenlu.style.color='#E31436';
    //     // }
    //     // youxiangdenlu.onmouseout=function(){
    //     //     youxiangdenlu.style.color='#000';
    //     // }
    // }
    // youxiangdenlu.onclick=function(){
    //     denglubottom1.style.display='none';
    //     denglubottom2.style.display='block';
    //     shoujidenglu.style.color='#000';
    //     youxiangdenlu.style.color='red';
    //     // shoujidenglu.onmouseover=function(){
    //     //     shoujidenglu.style.color='#E31436';
    //     // }
    //     // shoujidenglu.onmouseout=function(){
    //     //     shoujidenglu.style.color='#000';
    //     // }
    // }
    var qudenglu=document.querySelector('.qudenglu');
    var zhuce=document.querySelector('#zhuce');
    var denglu=document.querySelector('#denglu');
    // qudenglu.onclick=function(){
    //     zhuce.style.display='none';
    //     denglu.style.display='block';
    // }
    var shoujiekuaijiezhuce=document.querySelector('.shoujiekuaijiezhuce');
    // shoujiekuaijiezhuce.onclick=function(){
    //     zhuce.style.display='block';
    //     denglu.style.display='none';
    // }
    // 需求:
    //     用户名验证
    //     注册
    //     登陆
    //     退出
    var shoujihao=document.querySelector('.shoujihao');
    var yval=document.querySelector('.yval');
    var ybtn=document.querySelector('.ybtn');
    var sval=document.querySelector('.sval');
    var tishixinxi=document.querySelector('.tishixinxi');
    var tishi1=document.querySelector('.tishi1');
    var tishi2=document.querySelector('.tishi2');
    var tishi3=document.querySelector('.tishi3');

    var isok1=false;
    var isok2=false;
    var isok3=false;
  shoujihao.onblur=function(){
        isok1=false;
        var val1=shoujihao.value;
        console.log(val1);
    if(val1){
        if (/^1[2-8]\d{9}$/.test(val1)) {
            var url='../api/regincheckname.php';
            var data=`username=${val1}&time=${new Date()}`;
            ajax('GET',url,data,function(str){
                // console.log(str);
                if(str == 'success') {
                    tishi1.innerHTML='可以使用';
                    // console.log('手机号码可以使用');
                    isok1=true;
                    tishixinxi.innerHTML='';
                }else{
                    console.log('手机号码已存在');
                    
                    tishixinxi.innerHTML='该用户已经存在';
                }
            })
        } else {
            console.log('手机号码格式错误');
            tishi1.innerHTML='不符合规则';
        }
    }
  }
  function suiji(){
    var randomnuber=parseInt(Math.random().toFixed(4)*10000);
    // console.log(randomnuber);
    yval.innerHTML=randomnuber;
  }
  suiji();
  ybtn.onclick=function(){
   
    suiji();
  }
sval.onblur=function(){
    isok2=false;
    var sval1=sval.value.trim();
    if(sval1==yval.innerHTML){
        isok2=true;
        tishixinxi.innerHTML='';  
    }else{
        tishixinxi.innerHTML='验证码输入错误';    
    }
}
var password=document.querySelector('.password');

password.onblur=function(){
    isok3=false;
    var pval=password.value; 
    if(pval){
        if(/^\d{3,8}$/.test(pval)){
            console.log('手机密码格式正确');
            tishixinxi.innerHTML='';
            isok3=true;
        }else{
            tishixinxi.innerHTML='数字,3到8位数';
        }
    }
  
}
var zbtn=document.querySelector('.zbtn');
var checked=document.querySelector('.checked');
    zbtn.onclick=function(){

        if(isok1==true && isok2==true && isok3==true && checked.checked==true){
               
                var url='../api/regin.php';
                var pval=password.value;
                var val1=shoujihao.value;
                var data=`username=${val1}&password=${pval}&time=${new Date()}`;
          
                
                // Cookie.set('username',val1,{path:'/'});
                // location.href='../html/dengluye.html';
                ajax('GET',url,data,function(str){
                    console.log(str);
                if(str==='success'){
                    Cookie.set('username',val1,{path:'/'});
                    console.log(666);
                    location.href='../html/dengluye.html';  
                    tishixinxi.innerHTML='';
                }
                })
        }
        else{
            tishixinxi.innerHTML='下面没勾';
        }
    }
    var denglubottom1=document.querySelector('.denglubottom1');
    var dshoujihao=document.querySelector('.dshoujihao');
    var dpass=document.querySelector('.dpass');
    var dtishixinxi=document.querySelector('.dtishixinxi');
    var d_btn=document.querySelector('.d_btn');
    var dchecked=document.querySelector('.dchecked');
    // var isok1=false;
    // 
    //登录
    //
    // dshoujihao.onblur=function(){
    //     var shoujihaoval=dshoujihao.value.trim();
    //     if(shoujihaoval){
    //         var url='../api/login.php';
    //         var data=`username=${shoujihaoval}&time=${new Date()}`;
    //         ajax('GET',url,data,function(str){
    //             console.log(str);
    //             if(str === 'success'){
    //                 dtishixinxi.innerHTML='';
    //                 console.log('用户名可以登录');
    //                 // isok1=true;
    //             }else{
    //                 dtishixinxi.innerHTML='用户名不存在';
    //             }

    //         })
    //     }
    // }
    // var dchecked=document.querySelector('.dchecked');
    // d_btn.onclick=function(){
    //     var shoujihaoval=dshoujihao.value.trim();
    //     var dpassval=dpass.value.trim();
    //     if(shoujihaoval && dpassval){
    //         var url='../api/login.php';
    //         var data=`username=${shoujihaoval}&password=${dpassval}&time=${new Date()}`;
    //         ajax('GET',url,data,function(str){
    //             console.log(str);
    //             if(str==='success'){
    //                 dtishixinxi.innerHTML='';
    //                 if(dchecked.checked){
    //                     var date = new Date();
    //                     date.setDate(date.getDate()+10);
    //                     document.cookie = 'username=' + shoujihaoval + ';expires=' + date.toUTCString()+';path=/';
    //                     document.cookie = 'password=' + dpassval + ';expires=' + date.toUTCString()+';path=/';

    //                 }
    //                 location.href='../shouye.html?';
    //             }else{
    //                 dtishixinxi.innerHTML='用户名或者密码不正确';
    //             }
    //         })
    //     }
    // }
})