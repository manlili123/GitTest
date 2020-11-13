define(["jquery"],function($){

    //index.html中nav数据下载
    function navdownload(){
        $.ajax({
            url:"../data/index.json",
            success:function(arr){
                var navArr = arr.nav
                var count = 0;
                $(".header .tabBox .listBox a").mouseenter(function(){
                    $(".header .goodsBox .goods").html("")
                    count = $(this).index()
                    var childsArr = navArr[count].childs;
                        for(var i = 0; i < childsArr.length; i++){
                            var node = $(`<a href="">
                                <img src="${childsArr[i].img}" alt="">
                                <h4>${childsArr[i].name}</h4>
                            </a>`);
    
                            node.appendTo($(".header .tabBox .goodsBox .goods"));
                        }
                })
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    //index.html中oppo数据下载
    function oppodownload(){
        $.ajax({
            url:"../data/index.json",
            success:function(arr){
                var oppoArr = arr.oppo
                var count = 0;
                $(".oppo .top li").mouseenter(function(){
                    $(".oppo .center").html("")
                    count = $(this).index()
                    var childsArr = oppoArr[count].childs;
                        for(var i = 0; i < childsArr.length; i++){
                            var node = $(`<a href="">
                            <img src="${childsArr[i].img}" alt="">
                            <div>
                                <h4>${childsArr[i].title}</h4>
                                <h5>${childsArr[i].price}</h5>
                            </div>
                        </a>`);
    
                            node.appendTo($(".oppo .center"));
                        }
                })
                var childsArr = oppoArr[0].childs;
                        for(var i = 0; i < childsArr.length; i++){
                            var node = $(`<a href="">
                            <img src="${childsArr[i].img}" alt="">
                            <div>
                                <h4>${childsArr[i].title}</h4>
                                <h5>${childsArr[i].price}</h5>
                            </div>
                        </a>`);
    
                            node.appendTo($(".oppo .center"));
                        }

                
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    //index.html中oneplus数据下载
    function oneplusdownload(){
        $.ajax({
            url:"../data/index.json",
            success:function(arr){
                var oneplusArr = arr.oneplus
                var count = 0;
                $(".onePlus .top li").mouseenter(function(){
                    $(".onePlus .center").html("")
                    count = $(this).index()
                    var childsArr = oneplusArr[count].childs;
                        for(var i = 0; i < childsArr.length; i++){
                            var node = $(`<a href="">
                            <img src="${childsArr[i].img}" alt="">
                            <div>
                                <h4>${childsArr[i].title}</h4>
                                <h5>${childsArr[i].price}</h5>
                            </div>
                        </a>`);
    
                            node.appendTo($(".onePlus .center"));
                        }
                })
                var childsArr = oneplusArr[0].childs;
                        for(var i = 0; i < childsArr.length; i++){
                            var node = $(`<a href="">
                            <img src="${childsArr[i].img}" alt="">
                            <div>
                                <h4>${childsArr[i].title}</h4>
                                <h5>${childsArr[i].price}</h5>
                            </div>
                        </a>`);
    
                            node.appendTo($(".onePlus .center"));
                        }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    //index.html中realme数据下载
    function realmedownload(){
        $.ajax({
            url:"../data/index.json",
            success:function(arr){
                var realmeArr = arr.realme
                var count = 0;
                $(".realme .top li").mouseenter(function(){
                    $(".realme .center").html("")
                    count = $(this).index()
                    var childsArr = realmeArr[count].childs;
                        for(var i = 0; i < childsArr.length; i++){
                            var node = $(`<a href="">
                            <img src="${childsArr[i].img}" alt="">
                            <div>
                                <h4>${childsArr[i].title}</h4>
                                <h5>${childsArr[i].price}</h5>
                            </div>
                        </a>`);
    
                            node.appendTo($(".realme .center"));
                        }
                })
                var childsArr = realmeArr[count].childs;
                        for(var i = 0; i < childsArr.length; i++){
                            var node = $(`<a href="">
                            <img src="${childsArr[i].img}" alt="">
                            <div>
                                <h4>${childsArr[i].title}</h4>
                                <h5>${childsArr[i].price}</h5>
                            </div>
                        </a>`);
    
                            node.appendTo($(".realme .center"));
                        }
              
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }

    //index.html中智能硬件smart_devices数据下载
    function smart_devicesdownload(){
        $.ajax({
            url:"../data/index.json",
            success:function(arr){
                var smart_devicesArr = arr.smart_devices
                var count = 0;
                $(".smart_devices .top li").mouseenter(function(){
                    $(".smart_devices .center").html("")
                    count = $(this).index()
                    var childsArr = smart_devicesArr[count].childs;
                        for(var i = 0; i < childsArr.length; i++){
                            var node = $(`<a href="">
                            <img src="${childsArr[i].img}" alt="">
                            <div>
                                <h4>${childsArr[i].title}</h4>
                                <h5>${childsArr[i].price}</h5>
                            </div>
                        </a>`);
    
                            node.appendTo($(".smart_devices .center"));
                        }
                })
                var childsArr = smart_devicesArr[count].childs;
                        for(var i = 0; i < childsArr.length; i++){
                            var node = $(`<a href="">
                            <img src="${childsArr[i].img}" alt="">
                            <div>
                                <h4>${childsArr[i].title}</h4>
                                <h5>${childsArr[i].price}</h5>
                            </div>
                        </a>`);
    
                            node.appendTo($(".smart_devices .center"));
                        }
              
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }

    //index.html轮播图
    function banner(){
        $(function(){
            var aBtns = $(".banner").find("ul li");
            var imgBox = $(".banner .imgBox");
            var iNow = 0;
            var timer = null;

            $(".banner").mouseenter(function(){
                clearInterval(timer);
            })
        
            $(".banner").mouseleave(function () {
                //轮播
                timer = setInterval(function () {
                  iNow++;
                  tab();
                }, 3000);
              });
        
              aBtns.click(function () {
                iNow = $(this).index();
                tab();
              });
        
              //轮播
            timer = setInterval(function () {
                iNow++;
                tab();
            }, 3000);


            function tab() {
                aBtns.removeClass("active").eq(iNow).addClass("active");
                
                if(iNow == 0 || iNow == 4){
                    $(".tabBox .title a").css('color',"white")
                }else{
                    $(".tabBox .title a").css('color',"black")
                }

                if (iNow == aBtns.size()) {
                  aBtns.eq(0).addClass("active");
                }
                
                imgBox.animate(
                  {
                    left: iNow * -1520,
                  },
                  1000,
                  function () {
                    //判断是否是最后一张图片
                    if (iNow === aBtns.size()) {
                      iNow = 0;
                      imgBox.css("left", 0);
                    }
                  }
                );
              }
        })
        
    }

    //index.html中nav选项卡效果
    function nav(){
        $(".tabBox .list").mouseenter(function(){
            $(".titleBox").addClass("titleStyle")
            $(".tabBox .goodsBox").css("display","block")
            $(".tabBox .goodsBox").stop(true).animate({
                height:'200px'
            })
            $(".tabBox .title a").addClass("actives")
        })
        $(".tabBox").mouseleave(function(){
            $(".titleBox").removeClass('titleStyle')
            $(".tabBox .goodsBox").css("display","none")
            $(".tabBox .goodsBox").stop(true).animate({
                height:'0px'
            })
            
            $(".tabBox .title a").removeClass("actives")
        })

        //购物车点击效果
        var count = 1;
        $(".tabBox .ico").click(function(){
            if(count ==1 ){
                $(".tabBox .car").css({
                    display:'block'
                }) 
                count += 1 ;
            }else{
                $(".tabBox .car").css({
                    display:'none'
                })
                count = 1 ;
            }
            return false;
        })
    
    }

    
    //index.html中标题滑动切换效果
    function select(){
        var aBtns = $(".oppo .top ul li")
        iNow = 0;
        aBtns.on("mouseenter",function(){
            iNow = $(this).index()
            aBtns.removeClass("oppostyle").eq(iNow).addClass("oppostyle");
            if(iNow == 0){
                $(".oppo").css("height",1044)
            }else if(iNow == 1){
                $(".oppo").css("height",1516)
            }

        })

        var aBtns2 = $(".onePlus .top ul li")
        iNow = 0;
        aBtns2.on("mouseenter",function(){
            iNow = $(this).index()
            aBtns2.removeClass("oppostyle").eq(iNow).addClass("oppostyle");
            if(iNow == 0){
                $(".onePlus").css("height",572)
            }else if(iNow == 1){
                $(".onePlus").css("height",1044)
            }

        })

        var aBtns3 = $(".realme .top ul li")
        iNow = 0;
        aBtns3.on("mouseenter",function(){
            iNow = $(this).index()
            aBtns3.removeClass("oppostyle").eq(iNow).addClass("oppostyle");
            if(iNow == 0){
                $(".realme").css("height",1516)
            }else if(iNow == 1){
                $(".realme").css("height",1044)
            }

        })

        var aBtns4 = $(".smart_devices .top ul li")
        iNow = 0;
        aBtns4.on("mouseenter",function(){
            iNow = $(this).index()
            aBtns4.removeClass("oppostyle").eq(iNow).addClass("oppostyle");
            if(iNow == 0){
                $(".smart_devices").css("height",572)
            }else if(iNow == 1){
                $(".smart_devices").css("height",572)
            }
            else if(iNow == 2){
                $(".smart_devices").css("height",1988)
            }
            else if(iNow == 3){
                $(".smart_devices").css("height",1516)
            }
            else if(iNow == 4){
                $(".smart_devices").css("height",1044)
            }
            else if(iNow == 5){
                $(".smart_devices").css("height",1988)
            }
            else if(iNow == 6){
                $(".smart_devices").css("height",1988)
            }
            else if(iNow == 7){
                $(".smart_devices").css("height",1516)
            }

        })
  
    }

    //index.html中nav标题滑动切换颜色
    function listSelect(){
        var aBtns = $(".tabBox .listBox a")
        var iNow = 0;
        aBtns.hover(function(){
            iNow = $(this).index()
            aBtns.eq(iNow).addClass("liststyle");
        },function(){
            aBtns.removeClass("liststyle")
        })
        
        $(".tabBox .listBox .ico").hover(function(){
            $(".tabBox .listBox .ico").addClass("liststyle");
        },function(){
            $(".tabBox .listBox .ico").removeClass("liststyle")
        })
    }


    return {
        navdownload,
        oppodownload,
        oneplusdownload,
        realmedownload,
        smart_devicesdownload,
        banner,
        nav,
        listSelect,
        select,
    }

})