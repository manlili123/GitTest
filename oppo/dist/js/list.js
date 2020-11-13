define(["jquery","jquery-cookie"],function($){
    function download(){
        $.ajax({
            url:"../data/goods.json",
            success:function(arr){
                    var node = $(`<div class="modulA">
                    <img src="images/list1.jpg" alt="">
                    <a href="goods.html?id=${arr[0].id}"></a>
                </div>
        
                <div class="modulB">
                    <img src="images/list2.jpg" alt="">
                    <a href="goods.html?id=${arr[1].id}"></a>
                    <a href="goods.html?id=${arr[2].id}"></a>
                </div>
        
                <div class="modulC">
                    <img src="images/list3.jpg" alt="">
                    <a href="goods.html?id=${arr[3].id}"></a>
                    <a href="goods.html?id=${arr[4].id}"></a>
                </div>
        
                <div class="modulD">
                    <img src="images/list4.jpg" alt="">
                    <a href="goods.html?id=${arr[5].id}"></a>
                    <a href="goods.html?id=${arr[6].id}"></a>
                </div>
        
                <div class="modulE">
                    <img src="images/list5.jpg" alt="">
                    <a href="goods.html?id=${arr[7].id}"></a>
                </div>
        
                <div class="modulF">
                    <img src="images/list6.jpg" alt="">
                    <a href="goods.html?id=${arr[8].id}"></a>
                    <a href="goods.html?id=${arr[9].id}"></a>
                    <a href="goods.html?id=${arr[10].id}"></a>
                    <a href="goods.html?id=${arr[11].id}"></a>
                    <a href="goods.html?id=${arr[12].id}"></a>
                </div>
        
                <div class="modulG">
                    <img src="images/list7.jpg" alt="">
                    <a href="goods.html?id=${arr[13].id}"></a>
                    <a href="goods.html?id=${arr[14].id}"></a>
                </div>`)
                node.appendTo(".header")

            },
            error:function(msg){
                console.log(msg);
            }
            
        })
    }



    return{
        download,
    }
})
