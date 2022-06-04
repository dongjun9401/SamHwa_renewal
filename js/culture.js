$(document).ready(function(){
    
    $("#culture_story_wrap section:gt(4)").hide();
    
    $("#story_btn_wrap button").click(function(){
        $("#culture_story_wrap section:gt(4)").show();
        $(this).parent("p").hide();
    });
    
    $(".stroy_wrap").mouseover(function(){
        $(this).addClass("stroy_hover");
    }).mouseout(function(){
        $(".stroy_wrap").removeClass("stroy_hover");
    });
    
    // 삼화앤 피플 매거진
    $(".mg_btn_l").click(function(){
        $(".magazine_cover img:first").appendTo(".magazine_cover");
        $(".magazine_txt_wrap > div:first").appendTo(".magazine_txt_wrap");
    });
    
    $(".mg_btn_r").click(function(){
        $(".magazine_cover img:last").prependTo(".magazine_cover");
        $(".magazine_txt_wrap > div:last").prependTo(".magazine_txt_wrap");
    });
});