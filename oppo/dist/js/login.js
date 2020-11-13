define(["jquery"],function($){
    function login_type(){
        $(".content .page .type a").click(function(){
            if(this.innerHTML == "密码登录"){
                $(".content .page .msg").css("display","none")
                $(".content .page .password").css("display","block")
                $(this).css("color","black")
                $(this).siblings("a").css("color","#9B9B9B")
            }else if(this.innerHTML == "短信验证码登录"){
                $(".content .page .msg").css("display","block")
                $(".content .page .password").css("display","none")
                $(this).css("color","black")
                $(this).siblings("a").css("color","#9B9B9B")
            }
            return false
        })
    }
    return{
        login_type,
    }
})