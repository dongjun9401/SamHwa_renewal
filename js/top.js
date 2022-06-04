$(document).ready(function(){
//상단 네비게이션
    $(".left_sub").hide();
    
    $("#top_menu_left ul li").mouseover(function(){
        $(this).children("ul").stop().fadeIn(400);
    }).mouseout(function(){
        $(this).children("ul").stop().fadeOut(300);
    });

    
    $(".right_sub").hide();

    $("#top_menu_right ul li").mouseover(function(){
        $(this).children("ul").stop().fadeIn(500);
    }).mouseout(function(){
        $(this).children("ul").stop().fadeOut(300);
    });
    
    //menu 아이콘 popup
    $("#menu_popup_wrap").hide();
    
    $("#quick_menu_btn").click(function(){
        $(this).toggleClass("menu_chk");
        $("#menu_popup_wrap").delay(500).fadeIn(500);
        
        
    });
    
    $(".popup_btn").click(function(){
        $("#menu_popup_wrap").fadeOut(300);
        $("#quick_menu_btn").removeClass("menu_chk");
    });
    
    $("#popup_navi ul li a").mouseover(function(){
        $("#popup_navi ul li a").addClass("not_select");
        $(this).removeClass("not_select");
    }).mouseout(function(){
        $("#popup_navi ul li a").removeClass("not_select");
    });
    
    $("#menu_popup_wrap").mousewheel(function(e, delta){
        return false;
    });
    
    // 위로 올라가기 버튼
    $("#top_btn").click(function(){
        $("html, body").stop().animate({ scrollTop : 0 },800);
    });


    
});