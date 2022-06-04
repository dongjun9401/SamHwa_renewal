$(document).ready(function(){

    // 포트폴리오 공지
    $("#notice_box p a").click(function(){
        $("#notice_box").slideUp();
    });
    

    //sh_main_img 메인 이미지
    
    //메인 배너 각 위치 설정
    $("#banner_img_box li").each(function(index){
        $(this).css( "left" , (index)*100+"%");
    });
    
    var current_img = 0;
    var banner_img_size = $("#banner_img_box li").size();
    var auto_move;
    
    $("#banner_btn_all li").click(function(){
        
        $("#banner_btn_all li").removeClass("banner_clk");
        $(this).addClass("banner_clk");
        
        var click_index = $(this).index(); 
        //1 2 3 0 1 2 3... - next_img값으로 자동 
        
        if( click_index == current_img ) return false;
        $("#banner_img_box li").eq(current_img).css("left","0%").stop().animate({ left : "-100%" },1000);
        $("#banner_img_box li").eq(click_index).css("left","100%").stop().animate({ left : "0%" },1000);
        
        current_img = click_index;
        
        return false;
    });
    
    $("#main_banner_wrap").hover(function(){
        clearInterval(auto_move);
    },function(){
        banner_move();
    });
    
    banner_move();
    function banner_move(){
         auto_move = setInterval(function(){
            var next_img = current_img + 1;
            
            if( next_img == banner_img_size ){
                next_img = 0;
            }
            
            $("#banner_btn_all li").eq(next_img).click();
            
        },3500);
    };
    
    // color inspiration 
    $("#inspiration_right img").hide();
    $("#inspiration_right img:first").fadeIn();
    $("#color_box_wrap .color_box:first").addClass("selct_color_box");
    
    $("#color_box_wrap .color_box").click(function(){
    
        var select_inspiration = $(this).index();
        if($("#inspiration_right img").eq(select_inspiration).css("display") == "none"){
            
            $("#inspiration_right img").fadeOut();
            $("#inspiration_right img").delay(200).eq(select_inspiration).fadeIn();

            $("#color_box_wrap .color_box").removeClass("selct_color_box");
            $(this).addClass("selct_color_box");
        }
    });
    
    //bussiness_area 이미지 이동
    
    $(".area_list_img li:last").prependTo(".area_list_img");
    $(".area_list_img").css("margin-left","-355px");
    
    $(".area_btn_l").click(function(){ // <
         
        $(".area_list_img:not(:animated)")
            .animate({marginLeft : parseInt($(".area_list_img").css("margin-left"))+355 +"px"},"slow","swing",function(){
            
                $(".area_list_img li:last").prependTo(".area_list_img");
                $(".area_list_img").css("margin-left","-355px");
            });
     });
    
    $(".area_btn_r").click(function(){ // >
        $(".area_list_img:not(:animated)")
            .animate({marginLeft : parseInt($(".area_list_img").css("margin-left"))-355+"px"}
                     ,"slow","swing",function(){
            
                $(".area_list_img li:first").appendTo(".area_list_img");
                $(".area_list_img").css("margin-left","-355px");
        });   
    });
    
    // 핫이슈 More view
    $(".more_view").click(function(){ return false; });
});

























