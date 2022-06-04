$(document).ready(function(){
    

    // 위치 설정
    $("#company_intro_wrap .intro_con00_txt, #company_intro_wrap .intro_con_img").css({
        marginTop : "900px",
        opacity : 0
    });
    
    // 회사쇅 최상단 콘텐츠
    $(window).load(function(){
        $("#company_intro_wrap .intro_con00_txt").animate({marginTop : "0px", opacity : "1"}, 900);
        
        $("#company_intro_wrap .intro_con_img").delay(200).animate({marginTop : "25px", opacity : "1"},1000);
    });
    
    $(window).scroll(function(){
        
        var screen_h = $(this).scrollTop();
        
        if( screen_h >= 350 && screen_h < 800 ){
            $(".intro_con01").animate({
                opacity : "1",
                marginLeft : "0px"
            },800);
        }else if( screen_h >= 860 && screen_h < 1200){
            $(".intro_con02").animate({
                    opacity : "1",
                    marginLeft : "0px"
                },800);

        }else if( screen_h >= 1210 && screen_h < 1500){
            $(".intro_con03").animate({
                    opacity : "1",
                    marginLeft : "0px"
            },800);
        }else if( screen_h >= 1930 && screen_h < 2400 ){ //책임경영
            
            $(".manage_eco_wrap figure").each(function(index){
                $(this).delay(300*index).animate({
                    opacity : "1" },600);
            });

            $(".manage_ethic_wrap figure").each(function(index){
                $(this).delay(1500-300*index).animate({
                    opacity : "1" },600);
            });
        }
     
    });

});