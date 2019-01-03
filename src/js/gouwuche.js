/* 
* @Author: Marte
* @Date:   2018-11-29 22:42:52
* @Last Modified by:   Marte
* @Last Modified time: 2019-01-02 20:20:38
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

//渲染请求
    aaa();
  
    //点击删除数据
    var cookies=Cookie.get('name');
    // console.log($('.del'));
    $('.cart').on('click','.del',function(){

    // $('.del').remove(true).insertAfter($);
    var index=$(this).parents('li')[0].dataset.id;
    console.log(index);
    var murl=`../api/gouwuche.php?id=${index}&names=${cookies}&del=true`;
    var data=`names=${name}&id=${index}`;
        $.ajax({type:'GET',url:murl,success:function(str){

        // console.log(str);
            aaa();
       
        }})
    })
   
    



        $('.cart').on('click',(e)=>{
            if(e.target.className==='addnum'){
                    e.preventDefault();
                a=$(e.target).prev().val();
                    a++;
                    $(e.target).prev().val(a);
                var danjia=$(e.target).parents('.num').prev().html().slice(1)*1;
                    $(e.target).parents('.num').next().html('￥'+(danjia*a*1));
                    total()
                      
             }else if(e.target.className==='cutnum'){
                    e.preventDefault();
                a=$(e.target).next().val();
                    if(a==1)return;
                    a--;
                    $(e.target).next().val(a);
                    var danjia=$(e.target).parents('.num').prev().html().slice(1)*1;
                    $(e.target).parents('.num').next().html('￥'+(danjia*a*1));
                    total()
                      
            }
        })
      
     function total(){
           var nownum=document.getElementsByClassName('nownum');
            var allnum=document.querySelector('#allnum');
            var good_total=document.getElementsByClassName('good_total');
            var zongji=document.querySelector('.zongji');
            var checkbox=document.querySelectorAll('.checkbox')
            var total=0;
            var zongjia=0;
            var a=false;
            for(let i=0;i<nownum.length;i++){
                if(checkbox[i].checked){
                      var nownumval=nownum[i].value*1;
                        total+=nownumval;
                        allnum.innerHTML='已选商品'+total+'件';
                        var good_totalval=good_total[i].innerHTML.slice(1)*1;
                        zongjia+=good_totalval;
                        zongji.innerHTML='￥'+zongjia;
                        a=true;
                }
                if(!a){
                      allnum.innerHTML='已选商品'+0+'件';
                       zongji.innerHTML='￥'+0;
                 }        
            }
     }
    jQuery($=>{

            // 全选/不选
            var $checkbox=$('li :checkbox');
           
            $('#xuanzhong').click(function(){
                $checkbox.prop('checked',this.checked);
                total()
            })
            $checkbox.on('click',()=>{
                console.log(343)
                 total();
                 quanxuan();
            })
            //如果都被选中怎全选就勾选
            function quanxuan(){
                //筛选出有checked属性的集合
                $checked=$('li :checkbox').filter(':checked');//筛选匹配的表达式
                $('#xuanzhong').prop('checked',$checked.length===$checkbox.length);
        
            }
         
         
        });
      

var yonghuming=document.querySelector('.yonghuming');
var tuichubtn=document.querySelector('.tuichubtn');
  // console.log(tuichubtn);

 //接收Cookie账号
  let cook=Cookie.get('name');
  cook=cook.slice(7);
// console.log(222);
  if(cook){
    yonghuming.innerHTML='欢迎你尾号'+cook+'的用户';
    tuichubtn.style.display='inline-block';
  }
  tuichubtn.onclick=function(){
    Cook.remove('name','/');
    yonghuming.innerHTML='考拉欢迎你！';
    tuichubtn.style.display='none';
  }


//渲染封装
  function aaa(){
        var cart=document.querySelector('.cart');
        var goodslist=Cookie.get('name');
            goodslist===''? [] : JSON.parse(goodslist);
        $.getJSON("../api/gouwuche.php?ssr=ture&goodslist="+goodslist,function(res){
            var aee = res;
            // console.log(res);
            cart.innerHTML=aee.map(item=>{
                      return `<li data-id="${item.id}">
                                        <p class="good_check"><input type="checkbox" name="good" value=""  class="checkbox"  /></p>
                                        <p><img src="${item.images}" height="80" width="80" alt="" /></p>
                                        <p class="good_name">${item.jieshao}</p>
                                        <p class="good_price">￥${item.jiage}</p>
                                        <p class="num">
                                            <span class="cutnum">-</span><input class="nownum" type="Number" value="${item.qty}" min="1"/><span class="addnum">+</span>   
                                        </p>
                                        <p class="good_total">￥${(item.qty)*1*((item.jiage)*1).toFixed(2)}</p>
                                        <p class="good_del">
                                            <a class="del" >删除</a>
                                        </p>
                                    </li>`

            }).join('');
        })
    } 
})