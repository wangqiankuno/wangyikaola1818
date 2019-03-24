/* 
* @Author: Marte
* @Date:   2018-11-29 22:42:52
* @Last Modified by:   Marte
* @Last Modified time: 2019-01-03 22:08:55
*/

document.addEventListener('DOMContentLoaded', function () {
    let head_top_right = document.querySelector('#head_top_right');
    var jiesuan = document.querySelector('.jiesuan');
    let head_top_right2 = document.getElementsByClassName('head_top_right2');
    let sanjiao = document.getElementsByClassName('sanjiao');
    // console.log(sanjiao);
    for (let i = 0; i < head_top_right2.length; i++) {
        // console.log(i);
        head_top_right2[i].onmouseover = function () {
            // console.log(head_top_right2[i]);
            sanjiao[i].style.transform = 'rotateZ(180deg)';
            sanjiao[i].style.transitionDuration = '0.2s';


        }
        head_top_right2[i].onmouseout = function () {
            sanjiao[i].style.transform = 'rotateZ(0deg)';
            sanjiao[i].style.transitionDuration = '0.2s';
        }
    }

    //渲染请求
    aaa();

    //点击删除当行数据
    var cookies = Cookie.get('name');
    // console.log($('.del'));
    $('.cart').on('click', '.del', function () {
        //jq删除节点   节点.remove()
        var res = confirm('您确定要删除吗?');
        if (res) {
            $(this).parent().parent().remove();
        }
        // update();//判断一次
        allNum();





        var index = $(this).parents('li')[0].dataset.id;
        console.log(index);
        var murl = `../api/gouwuche.php?id=${index}&names=${cookies}&del=true`;
        var data = `names=${name}&id=${index}`;
        $.ajax({
            type: 'GET', url: murl, success: function (str) {
                console.log(str);
                aaa();
            }
        });
        // total();
        allNum();
    });

    jiesuan.onclick = function () {
        alert('添加的太少了！');
    }

    //点击删除选中商品
    //6.全删
    $('#delall').on('click', function () {
        // console.log(arr);
        //$('#cart .goods').eq(0).remove();
        $('.good_check input').each(function (i, item) {
            if ($('.good_check input').eq(i).prop('checked')) {
                arr.push(i);
                var res = confirm('您确定要删除全部商品吗？');
                if (res) {
                    var index = $(this).parents('li');
                    // console.log(index);
                    var murl = `../api/gouwuche.php?id=${index}&names=${cookies}&dels=true`;
                    // var data=`names=${name}&id=${index}`;
                    $.ajax({
                        type: 'GET', url: murl, success: function (str) {
                            console.log(str);
                            aaa();
                            allNum();
                        }
                    });
                } else {
                    aaa();
                    allNum();
                }
            } else {
                aaa();
                allNum();
            }
        });


        // arr = [];//删除了记得清空数组
        // update();//状态改变
        allNum();
    });




    $('.cart').on('click', (e) => {
        if (e.target.className === 'addnum') {
            e.preventDefault();
            a = $(e.target).prev().val();
            a++;
            $(e.target).prev().val(a);
            var danjia = $(e.target).parents('.num').prev().html().slice(1) * 1;
            $(e.target).parents('.num').next().html('￥' + (danjia * a * 1));
            // total();
            allNum();

        } else if (e.target.className === 'cutnum') {
            e.preventDefault();
            a = $(e.target).next().val();
            if (a == 1) return;
            a--;
            $(e.target).next().val(a);
            var danjia = $(e.target).parents('.num').prev().html().slice(1) * 1;
            $(e.target).parents('.num').next().html('￥' + (danjia * a * 1));
            // total();
            allNum();

        }
    })


    //5.总数量和总价的更新
    var arr = [];
    function allNum() {
        arr = [];//存被选中的复选框的下标
        $('.good_check input').each(function (i, item) {
            if ($('.good_check input').eq(i).prop('checked')) {
                arr.push(i);
            }
        });
        // console.log(arr);

        var num = 0;//假设存总数量
        var priceAll = 0;//存总价的
        //		console.log($('.good_total').size());
        //		console.log($('.good_total').eq(0).html().slice(2));
        //&bnsp; 6位
        arr.forEach(function (item) {//item值：存的是下标
            num += $('.nownum').eq(item).val() * 1;
            priceAll += $('.good_total').eq(item).text().slice(1) * 1;//￥ 99
        });

        // console.log('总数量是：' + num);
        // console.log('总价格是：' + priceAll);
        $('#allnum').html('已选 ' + num + ' 件商品');
        $('#totalprice').html('总计（不含运费）：￥ ' + priceAll.toFixed(2));
    }



    jQuery($ => {
        //点击全选反选

        $('#all').on('click', function () {
            //prop  添加有行为的属性  checked  单选复选
            console.log($('#all'));
            if ($('#all').prop('checked')) {
                $('.cart input').prop('checked', true);
                // total();
                allNum();
            } else {
                $('.cart input').prop('checked', false);
                // total();
                allNum();
            }

        })
        //选中下面所有复选框，选中全选
        $('#cart').on('click', 'input', function () {
            console.log(status());
            if (status()) {
                $('#all').prop('checked', true);
            } else {
                $('#all').prop('checked', false);
            }
            allNum();
        });


        function status() {
            var isok = true;//true意味着全部被勾选，false：只要一个没被勾选
            $('#cart input').each(function (i, item) {//i下标 从0开始
                if (!$('#cart input').eq(i).prop('checked')) {
                    //意味着全部被选中
                    isok = false;
                }
            });

            return isok;
        }

        var $checkbox = $('li :checkbox');

        $checkbox.on('click', () => {
            //  total();
            allNum();
            quanxuan();
        })

        $('#xuanzhong').on('click', function () {
            $checkbox.prop('checked', this.checked);
            quanxuan();
            // total();
            allNum();
        })

        //如果都被选中怎全选就勾选
        function quanxuan() {
            //筛选出有checked属性的集合
            $checked = $('li :checkbox').filter(':checked');//筛选匹配的表达式
            $('#xuanzhong').prop('checked', $checked.length === $checkbox.length);

        }


    });


    var yonghuming = document.querySelector('.yonghuming');
    var tuichubtn = document.querySelector('.tuichubtn');
    // console.log(tuichubtn);

    //接收Cookie账号
    let cook = Cookie.get('name');
    cook = cook.slice(7);
    // console.log(222);
    if (cook) {
        yonghuming.innerHTML = '欢迎你尾号' + cook + '的用户';
        tuichubtn.style.display = 'inline-block';
    }
    tuichubtn.onclick = function () {
        Cookie.remove('name', '/');
        yonghuming.innerHTML = '考拉欢迎你！';
        tuichubtn.style.display = 'none';
    }


    //渲染封装
    function aaa() {
        var cart = document.querySelector('.cart');
        var goodslist = Cookie.get('name');
        goodslist === '' ? [] : JSON.parse(goodslist);
        $.getJSON("../api/gouwuche.php?ssr=ture&goodslist=" + goodslist, function (res) {
            var aee = res;
            // console.log(res);
            cart.innerHTML = aee.map(item => {
                return `<li data-id="${item.id}">
                                        <p class="good_check"><input type="checkbox" name="good" value=""  class="checkbox"  /></p>
                                        <p><img src="${item.images}" height="80" width="80" alt="" /></p>
                                        <p class="good_name">${item.jieshao}</p>
                                        <p class="good_price">￥${item.jiage}</p>
                                        <p class="num">
                                            <span class="cutnum">-</span><input class="nownum" type="Number" value="${item.qty}" min="1"/><span class="addnum">+</span>   
                                        </p>
                                        <p class="good_total">￥${(item.qty) * 1 * ((item.jiage) * 1).toFixed(2)}</p>
                                        <p class="good_del">
                                            <a class="del" >删除</a>
                                        </p>
                                    </li>`

            }).join('');
        })
    }
})