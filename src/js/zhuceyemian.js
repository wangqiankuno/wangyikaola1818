/* 
* @Author: Marte
* @Date:   2018-11-24 10:09:20
* @Last Modified by:   Marte
* @Last Modified time: 2019-03-01 20:15:19
*/
$(function () {
    var shoujihao = document.querySelector('.shoujihao');
    // console.log(shoujihao);
    var yval = document.querySelector('.yval');
    var ybtn = document.querySelector('.ybtn');
    var sval = document.querySelector('.sval');
    var tishixinxi = document.querySelector('.tishixinxi');
    var tishi1 = document.querySelector('.tishi1');
    var tishi2 = document.querySelector('.tishi2');
    var tishi3 = document.querySelector('.tishi3');

    var isok1 = false;
    var isok2 = false;
    var isok3 = false;
    shoujihao.onblur = function () {
        // isok1=false;
        var val1 = shoujihao.value.trim();

        if (val1) {
            if (/^1[2-8]\d{9}$/.test(val1)) {
                console.log(val1);
                var url = '../api/zhuce.php';
                var data = 'shoujihao=' + val1;
                ajax('post', url, data, function (str) {
                    console.log(str);
                    if (str == 'no') {
                        tishixinxi.innerHTML = '可以使用';
                        tishixinxi.style.color = '#58bc58';
                        isok1 = true;
                        // tishixinxi.innerHTML='';
                    } else if (str == 'yes') {
                        console.log('手机号码已存在');
                        tishixinxi.innerHTML = '该用户已经存在';
                        tishixinxi.style.color = 'red';
                    }
                })
            } else {
                console.log('手机号码格式错误');
                alert('手机号不符合规则');
            }
        } else {
            tishi1.innerHTML = '不能为空！';
        }
    }
    function suiji() {
        var randomnuber = parseInt(Math.random().toFixed(4) * 10000);
        // console.log(randomnuber);
        yval.innerHTML = randomnuber;
    }
    suiji();
    ybtn.onclick = function () {

        suiji();
    }
    sval.onblur = function () {

        var sval1 = sval.value.trim();
        if (sval1 == yval.innerHTML) {
            isok2 = true;
            tishixinxi.innerHTML = '';
        } else {
            tishixinxi.innerHTML = '验证码输入错误';
        }
    }
    var password = document.querySelector('.password');

    password.onblur = function () {
        var pval = password.value;
        if (pval) {
            if (/^\d{3,8}$/.test(pval)) {
                console.log('手机密码格式正确');
                tishixinxi.innerHTML = '';
                isok3 = true;
            } else {
                tishixinxi.innerHTML = '数字,3到8位数';
            }
        }

    }
    
    var checked = document.querySelector('.checked');



    $('.zbtn').on('click', function () {

        if (isok1 == true && isok2 == true && isok3 == true) {

            if (checked.checked) {
                var pval = password.value;
                var val1 = shoujihao.value;
                console.log(val1);
                $.ajax({
                    'type': 'post',//请求类型
                    'data': 'username=' + val1 + '&password=' + pval,//传参
                    'url': '../api/regin.php',//接口
                    'success': function (str) {//成功的回调
                        console.log(str);//数据渲染
                        if (str === 'success') {
                            // Cookie.set('username', val1, { path: '/' });
                            console.log(666);
                            alert('注册成功！');
                            location.href = '../html/dengluye.html';
                            tishixinxi.innerHTML = '';
                        } else {
                            alert('注册失败！');
                        }
                    }
                });//$.方法名() 工具方法
            } else {
                tishixinxi.innerHTML = '下面没勾';
            }
        } else {
            tishixinxi.innerHTML = '用户名或密码不规范';
        }

    });
})
