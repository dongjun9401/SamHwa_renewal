$(document).ready(function(){

    // 컬러 코드 예시 파트
    
    //초기설정
    $(".ncs_ex_box").css("width", "160px");
    $(".ncs_ex_box01").css("width","");
    $(".excolor01 .excolor_tle").css({ color : "#333333", top : "0px" });
    
    
    $(".ncs_ex_box").click(function(){
        $(".ncs_ex_box").stop().animate({ width : "160px" },300);
        $(this).stop().animate({ width : "840px" },300);
        
        $(".excolor_tle").css( "color", "#666666" ).stop().animate({ top : "300px" });
        $(".excolor_tle",this).css( "color", "#333333" ).stop().animate({ top : "0px" },300);
    });
    
    //컬러 디자인 센터_컬러커뮤니케이션
    
    $(".dc4_img_box img:gt(0)").hide();
    
    function dc_img_chg(){
        $(".dc4_img_box img:first").fadeOut(2000).next().fadeIn();
        $(".dc4_img_box img:first").appendTo(".dc4_img_box");
    };

    var img_chg = setInterval(function(){
        dc_img_chg();
    },4000);
    

    $(".design_center_txt4_sub ul li:last").prependTo(".design_center_txt4_sub ul");
    $(".design_center_txt4_sub ul").css( "margin-left", "-400px" );
    
    function dc_txt_chg(){
        $(".design_center_txt4_sub ul").animate({marginLeft : "-800px"},1000,function(){
            
            $("li",this).eq(0).appendTo(this);
            $(".design_center_txt4_sub ul").css( "margin-left", "-400px" );
    
        });
        
    }

    var txt_chg = setInterval(function(){
        dc_txt_chg();
    },4000);
    
});