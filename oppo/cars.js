define(["jquery","jquery-cookie"],function($){
    
    //加载购物车商品
    //cookie 放着我们加入购物车的商品 id num
    //商品的具体的数据 数据源
    //下载列表页的数据
    function sc_msg(){
        $(".contentBox .content .goodsList").empty();
        $.ajax({
            type:"get",
            url:"../data/goods.json",
            success:function(arr){
                
                //在arr中将已经加入购物车的数据拿出来
                var cookieStr = $.cookie("goods");
                var newArr = [];
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    for(var i = 0; i < arr.length; i++){
                        for(var j = 0; j < cookieArr.length; j++){
                            if(arr[i].id == cookieArr[j].id){
                                //将数量添加上去
                                arr[i].num = cookieArr[j].num;
                                newArr.push(arr[i]);
                                break;
                            }
                        }
                    }
                    // console.log(newArr); //所有的数据都有
                    // console.log(cookieArr);//只有id和num
                    
                    // 将找出来的数据，在购物车的部分加载出来
                    for(var i = 0; i < newArr.length; i++){
                        var node = $(`<ul id = "${newArr[i].id}">
                        <li><i class="iconfont">&#xe66b;</i><i class="iconfont">&#xe655;</i></li>
                        <li><img src="${newArr[i].img}" alt=""></li>
                        <li>${newArr[i].name}</li>
                        <li>￥<span>${newArr[i].price}</span></li>
                        <li class="count"><button>-</button><input type="text" value="${newArr[i].num}"><button>+</button></li>
                        <li class = "delete"><i class="iconfont">&#xe618;</i></li>
                    </ul>`);
                        node.appendTo($(".contentBox .content .goodsList"));
	
                    }
                    check()
                }
            },
            error: function(msg){
                console.log(msg);
            }
        })

    }

    //给删除按钮添加点击
    function btn_delete(){
        $(".contentBox .goodsList").on("click",".delete",function(){
            //删除节点 页面上要删除这个节点，cookie中也要删除
            var id = $(this).closest("ul").remove().attr("id");
            var cookieArr = JSON.parse($.cookie("goods"));
            var index = cookieArr.findIndex(item => item.id == id);
            cookieArr.splice(index,1);
            //判断cookieArr是否为空
            cookieArr.length ===0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
            })
        })
    }

    //通过事件委托，给加和减这两个按钮添加点击
    function jia_jian(){
        $(".contentBox .goodsList").on("click", "ul .count button", function(){
            var id = $(this).closest('ul').attr("id");
            //1、先找到这个id的cookie数据
            var cookieArr = JSON.parse($.cookie("goods"));
            var index = cookieArr.findIndex(item => item.id == id);
            if(this.innerHTML == "+"){
                cookieArr[index].num++;
            }else{
                cookieArr[index].num == 1 ? alert("数量为1，不能减少") : cookieArr[index].num--;
            }	
            //页面显示的数量
            $(this).siblings("input").val(cookieArr[index].num);
            
            $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
            })

            isCheckAll();
        })
        
    }


    function check(){
        $(".contentBox .goodsList ul").on("click","li:eq(0) i:eq(1)",function(){
            if($(this).hasClass("isCheck")){
                $(this).removeClass("isCheck")
            }else{
                $(this).addClass("isCheck")
            }

            isCheckAll();
        })
        
    }
    
    function isCheckAll(){
        var allChecks = $(".contentBox .goodsList").find("ul")
        var isAll = true;
        var total= 0;//商品的总价
        var count = 0;//记录被选中的数量
        
        allChecks.each(function(index,item){
            if(!$(item).find("li:eq(0) i:eq(1)").hasClass("isCheck")){
                isAll = false
            }else{
                total +=parseFloat($(item).find("li:eq(3)").find("span").html().trim()) * parseFloat($(this).find("li:eq(4) input").val());
                // total +=($(item).find("li:eq(3)").find("span").html() * $(this).find("li:eq(4) input").val()).toFixed(1);
                count += parseInt($(this).find("li:eq(4) input").val());
            }
        }) 
        // console.log(total)
        
        $(".contentBox .foot .price .sum").html(total.toFixed(2))

    }



    // 分割线
    function goodsdownload(){
        $.ajax({
            type:"get",
            url:"../data/cars.json",
            success:function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node = $(`<li>
                        <img src="${arr[i].img}" alt="">
                        <h1>${arr[i].name}</h1>
                        <h2><span>${arr[i].price}</span>元</h2>
                        <h3>${arr[i].comment}</h3>
                        <h4 href="" id = "${arr[i].id}">加入购物车</h4>
                    </li>`).appendTo($(".goods_listBox .goods_list ul"));
                    
                    
                }
                goods_List()
                sc_btnClick()
            },
            error: function(msg){
                console.log(msg);
            }
        })
    }

    function goods_List(){
        $(".goods_listBox ul li").on("mouseenter", function(){
            $(this).find("h3").css("display","none")
            $(this).find("h4").css("display","block")
        })

        $(".goods_listBox ul li").on("mouseleave", function(){
            $(this).find("h3").css("display","block")
            $(this).find("h4").css("display","none")
        })
    }

    //点击存入cookie
    //添加点击事件 加入购物车
    function sc_btnClick(){
        $(".goods_listBox .goods_list li").on('click',"h4",function(){
            loadCarDate()
            isCheckAll()
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
        })
    }
    
    //两份数据
    function loadCarDate(){
        $(".contentBox .content .goodsList").empty();
        new Promise(function(resolve,reject){
            $.ajax({
                type:"get",
                url:"../data/goods.json",
                success:function(arr){
                    resolve(arr)
                },
                error: function(msg){
                    reject(msg);
                }
            })
        }).then(function(arr1){
            //下载第二份代码
            return new Promise(function(resolve,reject){
                $.ajax({
                    type:"get",
                    url:"../data/cars.json",
                    success:function(arr2){
                        //将两份数据合并
                        var newArr = arr1.concat(arr2)
                        resolve(newArr)
                    },
                    error: function(msg){
                        reject(msg);
                    }
                })
            })
        }).then(function(arr){
            // console.log(arr); 
            //arr 是所有商品的信息
            //在arr中将已经加入购物车的数据拿出来
            var cookieStr = $.cookie("goods");
            var newArr = [];
            if(cookieStr){
                var cookieArr = JSON.parse(cookieStr);
                for(var i = 0; i < arr.length; i++){
                    for(var j = 0; j < cookieArr.length; j++){
                        if(arr[i].id == cookieArr[j].id){
                            //将数量添加上去
                            arr[i].num = cookieArr[j].num;
                            newArr.push(arr[i]);
                            break;
                        }
                    }
                }
                // console.log(newArr); //所有的数据都有
                // console.log(cookieArr);//只有id和num
                
                //将找出来的数据，在购物车的部分加载出来
                for(var i = 0; i < newArr.length; i++){
                    var node = $(`<ul id = "${newArr[i].id}">
                    <li><i class="iconfont">&#xe66b;</i><i class="iconfont">&#xe655;</i></li>
                    <li><img src="${newArr[i].img} " alt=""></li>
                    <li>${newArr[i].name}</li>
                    <li>￥<span>${newArr[i].price}</span></li>
                    <li class="count"><button>-</button><input type="text" value="${newArr[i].num}"><button>+</button></li>
                    <li class = "delete"><i class="iconfont">&#xe618;</i></li>
                </ul>`);
                    node.appendTo($(".contentBox .content .goodsList"));

                }
                check()
            }
        })
    }


    return{
        // sc_msg,
        btn_delete,
        jia_jian,
        goodsdownload,
        loadCarDate,



        // check,
    }

})