/* 
* @Author: Marte
* @Date:   2018-11-24 10:09:20
* @Last Modified by:   Marte
* @Last Modified time: 2019-03-02 17:06:03
*/
    // 需求:
    //     用户名验证
    //     注册
    //     登陆
    //     退出
document.addEventListener('DOMContentLoaded', function(){
    var shoujidenglu=document.querySelector('.shoujidenglu');
    var youxiangdenlu=document.querySelector('.youxiangdenlu');
    var denglubottom1=document.querySelector('.denglubottom1');
    var denglubottom2=document.querySelector('.denglubottom2');
    shoujidenglu.onclick=function(){
        denglubottom1.style.display='block';
        denglubottom2.style.display='none';
        shoujidenglu.style.color='#E31436';
        youxiangdenlu.style.color='#000';
        // youxiangdenlu.onmouseover=function(){
        //     youxiangdenlu.style.color='#E31436';
        // }
        // youxiangdenlu.onmouseout=function(){
        //     youxiangdenlu.style.color='#000';
        // }
    }
    youxiangdenlu.onclick=function(){
        denglubottom1.style.display='none';
        denglubottom2.style.display='block';
        shoujidenglu.style.color='#000';
        youxiangdenlu.style.color='red';
    }

    var zhuce=document.querySelector('#zhuce');
    var denglu=document.querySelector('#denglu');

    var shoujiekuaijiezhuce=document.querySelector('.shoujiekuaijiezhuce');
    shoujiekuaijiezhuce.onclick=function(){
        zhuce.style.display='block';
        denglu.style.display='none';
    }

    //邮箱登录验证

    var youxiang=document.querySelector('.dyouxinaghao');
    var ypass=document.querySelector('.ypass');
    var dbtn=document.querySelector('.d_btn2');
        console.log(dbtn);
    var dtishixinxi2=document.querySelector('.dtishixinxi2');
    var isok1=false;
    var isok2=false;
//     var isok3=false;
  youxiang.onblur=function(){
    var valu=youxiang.value.trim();
    console.log(valu);
    if(valu){
        if ( /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(valu)) {
            isok1=true;
        } else {
            console.log('手机号码格式错误');
            dtishixinxi2.innerHTML='邮箱不符合规则';
        }
    }else{
        alert('邮箱空的！');
    }
  }

ypass.onblur=function(){
    var svall=ypass.value.trim();
    if(svall){
        if(/^\d{6}$/){
            isok2=true;
        }else{
            dtishixinxi2.innerHTML='6位数字';  
        }
    }else{
        dtishixinxi2.innerHTML='密码为空！';    
    }
}
// var password=document.querySelector('.password');

// password.onblur=function(){
//     var pval=password.value; 
//     if(pval){
//         if(/^\d{3,8}$/.test(pval)){
//             console.log('手机密码格式正确');
//             tishixinxi.innerHTML='';
//             isok3=true;
//         }else{
//             tishixinxi.innerHTML='数字,大小写字母,至少其中两种组成且长度不小于8';
//         }
//     }
// }
// var zbtn=document.querySelector('.zbtn');
    dbtn.onclick=function(){
        // var sval1=ypass.value.trim();
        // var valu=youxiang.value.trim();
        // var checked=document.querySelector('.checked');
        if(isok1&& isok2 ){
           
            alert('不好意思此功能还未开通！');
        }else{
            alert('邮箱或密码验证未成功');
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
//手机号登录验证
    //
    dshoujihao.onblur=function(){
        var shoujihaoval=dshoujihao.value.trim();
        if(shoujihaoval){
            //非空
        }else{
            dtishixinxi.innerHTML="内容为空！"
        }
    }
    var dchecked=document.querySelector('.dchecked');
    d_btn.onclick=function(){
        var shoujihaoval=dshoujihao.value.trim();
        var dpassval=dpass.value.trim();
        if(shoujihaoval && dpassval&&dchecked.checked){
            var url='../api/login.php';
            var data='username='+shoujihaoval +'&password='+dpassval;
            ajax('POST',url,data,function(str){
                console.log(str);

                if(str==='success'){
                    // dtishixinxi.innerHTML='';
                    // console.log('用户名可以登录');
                    dtishixinxi.innerHTML="用户名存在"
                    if(dchecked.checked){
                        var date = new Date();
                        date.setDate(date.getDate()+10);
                        document.cookie = 'name=' + shoujihaoval + ';expires=' + date.toUTCString()+';path=/';
                        document.cookie = 'mima=' + dpassval + ';expires=' + date.toUTCString()+';path=/';
                        console.log(666);
                    //设置name存在cookie里面
                    var d=new Date();
                    d.setDate(d.getDate()+30);
                    console.log(Cookie);
                    Cookie.set('name',shoujihaoval,d,'/');
                    alert('十天免登录');
                    }

                    location.href='../shouye.html';
                }else{
                    alert('用户名或者密码不正确');
                }
            })
        }else{
            dtishixinxi.innerHTML="下面没勾";
        }
    }
})