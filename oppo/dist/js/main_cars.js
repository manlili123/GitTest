console.log("加载完成4");

require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "parabola": "parabola",
        "index":"index",
        "cars":"cars",
        "goods":"goods",
        "goodslist":"goodslist",
        "cars":"cars"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
        //声明当前模块不遵从AMD
        "parabola": {
			exports: "_"
		}
    }
})

require(["index","cars"], function(index,cars){
    index.navdownload();
    index.nav();
    index.listSelect();
    
    // cars.sc_msg();

    cars.btn_delete();
    cars.jia_jian();
    cars.goodsdownload();
    cars.loadCarDate();

    
})