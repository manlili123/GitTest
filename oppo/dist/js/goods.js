define(["jquery","jquery-cookie"],function($){

    function download(){
        //1.找到详情页加载商品的id
        var id = valueByName(location.search,"id")
        // alert(id);
        $.ajax({
            url:"../data/goods.json",
            success:function(arr){
                var goodsMsg = arr.find(item => item.id == id);
                // console.log(goodsMsg)
                var node = $(`<div class="top">
                <div class="left">
                    <div class="leftImg">

                        <!-- 左边小图 -->
                        <div class="imgBox">
                            <img src="${goodsMsg.img}" alt="">
                            <div class="mark"></div>
                        </div>

                        <!-- 右边放大 -->
                        <div class="bigImg">
                            <img src="${goodsMsg.img}" alt="">
                        </div>


                        <div class="imgBtn">
                            <img src="${goodsMsg.img}" alt="" class="imgstyle">
                            <img src="${goodsMsg.img2}" alt="" >
                            <img src="${goodsMsg.img3}" alt="" >
                            <img src="${goodsMsg.img4}" alt="" >
                            <img src="${goodsMsg.img5}" alt="" >
                        </div>
                    </div>
                </div>

                <div class="right">
                    <div class="msg">
                        <div class="title">
                            <h1>${goodsMsg.name}</h1>
                            <div class="font">
                                <span>【10.21-11.11全程保价 买贵补差 | 积分最高可抵200元 | 直播间下单享更多好礼】</span><span>充电5分钟，刷剧4小时，前置3200万AI美颜自拍，OLED超清护眼屏。</span>
                                <a href="#">以旧换新最高额外补贴1100元>>></a>
                            </div>
                            <h2>￥${goodsMsg.price}</h2>
                            <div class="support">
                                商品支持：&nbsp;<i class="iconfont">&#xe630;</i>&nbsp;花呗分期 12期免息&nbsp;&nbsp;&nbsp; <a href=""><i class="iconfont">&#xe612;</i>&nbsp;以旧换新</a>
                            </div>
                        </div>
                        <div class="color">
                            <p>颜色</p>
                            <a href="" class="listborder">超闪蓝</a>
                            <a href="">超闪黑</a>
                            <a href="">超闪白</a>
                        </div>
                        <div class="configuration">
                            <p>配置</p>
                            <a href="" class="listborder">8G+128G</a>
                            <a href="">8G+256</a>
                        </div>
                        <div class="server">
                            <p>服务</p>
                            <a href="">屏碎保一年￥99</a>
                            <a href="">0享无忧￥148</a>
                            <a href="">进液保一年￥249</a>
                            <a href="">延长保半年￥79</a>
                            <a href="">延长保一年￥129</a>
                        </div>
                        <div class="installment">
                            <p>花呗分期</p>
                            <a href="">
                                <p>￥833×3期</p><br>   
                                <p>手续费￥0/期</p>
                            </a>
                            <a href="">
                                <p>￥416.5×6期</p><br>     
                                <p>手续费￥0/期</p>
                            </a>
                            <a href="">
                                <p>￥208.25×12期</p><br>      
                                <p>手续费￥0/期</p>
                            </a>
                        </div>
                        <div class="count">
                            <p>选择数量</p>
                            <div class="add">
                                <button>-</button><input type="text" value="1"><button>+</button>
                            </div>
                        </div>
                        <div class="btn">
                            <a id = "${goodsMsg.id}" href="">加入购物车</a>
                            <a href="cars.html">查看购物车</a>
                        </div>
                    </div>
                </div>
            </div>`).appendTo(".contentBox .topBox")


            magnifying();
            changeImg();
            borderColor();
            sc_btnClick();
            jia_jian();

            },
            error:function(msg){
                console.log(msg);
            }
            
        })
        
    }

    //?name1=value1&name2=value2
    //获取当前要加载详情的商品的数据
    function valueByName(search,name){
        //查找这个键值对开始的位置
        var start = search.indexOf(name + "=");
        if(start == -1){
            return null;
        }else{
            var end = search.indexOf("&",start);
            if(end == -1){
                end = search.length;
            }

            //提取想要的键值对
            var str =search.substring(start, end);
            var arr = str.split("=");
            return arr[1];
        }
    }



    //goods.html中放大镜
    function magnifying(){
        $(".top .imgBox").hover(function(ev){
            $(".mark").css("display",'block')
            $(".bigImg").css("display",'block')
            move(ev)
        },function(){
            $(".mark").css("display",'none')
            $(".bigImg").css("display",'none')
        })

        $(".top .imgBox").mousemove(function(ev){
            $(".mark").css("display",'block')
            $(".bigImg").css("display",'block')
            move(ev)
        })
        
        function move(ev){
            var mark = document.querySelector(".mark")
            var bigImg = document.querySelector(".bigImg img")
            var l = ev.clientX - $(".top .imgBox").offset().left - $(".mark").width()/2;
            l=Math.max(0,l);
            l=Math.min(l,360);
            var t = ev.clientY - $(".top .imgBox").position().top - $(".mark").width() + $(window).scrollTop();
            t=Math.max(0,t);
            t=Math.min(t,360);

            mark.style.left = l + 'px';
            mark.style.top = t + 'px';
            bigImg.style.left = -2 * l +'px'
            bigImg.style.top = -2 * t +'px'
        }
        
    }

    //goods.html中放大镜切换图片
    function changeImg(){
        var aBtns = $(".imgBtn img")
        var iNow = 0;
        aBtns.click(function(){
            iNow = $(this).index()
            var node = $(this).clone(true)
            var node2 = $(this).clone(true)
            aBtns.removeClass("imgstyle").eq(iNow).addClass("imgstyle")
            node.replaceAll($(".top .imgBox img"));
            node2.replaceAll($(".top .bigImg img"));
        })
    }


    //goods.html中s数量加减
    function jia_jian(){
        $(".contentBox .right").on("click", ".count button", function(){
            if(this.innerHTML == "+"){
                var num = $(this).siblings("input").val();
                num++
                $(this).siblings("input").val(num);
            }
            if(this.innerHTML == "-" && $(this).siblings("input").val()>=2){
                var num = $(this).siblings("input").val();
                num--
                $(this).siblings("input").val(num);
            }
        })
    }


    //goods.html中点击切换a标签border颜色
    function borderColor(){
        var count1 = 0;
        $(".contentBox .msg .color a").click(function(){
            count1 = $(this).index()-1
            $(".contentBox .msg .color a").removeClass("listborder").eq(count1).addClass("listborder");
            return false;
        })

        var count2 = 0;
        $(".contentBox .msg .configuration a").click(function(){
            count2 = $(this).index()-1
            $(".contentBox .msg .configuration a").removeClass("listborder").eq(count2).addClass("listborder");
            return false;
        })

        var count3 = 0;
        $(".contentBox .msg .server a").click(function(){
            count3 = $(this).index()-1
            $(".contentBox .msg .server a").removeClass("listborder").eq(count3).addClass("listborder");
            return false;
        })

        var count4 = 0;
        $(".contentBox .msg .installment a").click(function(){
            count4 = $(this).index()-1
            $(".contentBox .msg .installment a").removeClass("listborder").eq(count4).addClass("listborder");
            return false;
        })
    }
    

    //点击存入cookie
    //添加点击事件 加入购物车
    function sc_btnClick(){
        $(".contentBox .right .btn").on('click',"a:eq(0)",function(){
            var id = this.id;
            // alert(id)
            
            var first = $.cookie("goods") === null ? true : false;
            if (first){
                var cookieArr = [{id: id, num:1}];
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires: 7
                })
            }else{
                //查找之前是否添加过某样商品
                var cookieArr = JSON.parse($.cookie("goods"));
                var same = false;//假设没添加过
                for(var i = 0; i < cookieArr.length; i++){
                    if(cookieArr[i].id == id){
                        same = true;
                        break;
                    }
                }
                if(same){
                    cookieArr[i].num++;
                }else{
                    let obj = {id: id,num: 1}
                    cookieArr.push(obj);
                }
                $.cookie("goods", JSON.stringify(cookieArr),{
                    expires: 7
                })
                
            }
            // console.log($.cookie("goods"));
            return false;
        })
    }




    return{
        download,
        
    }
})