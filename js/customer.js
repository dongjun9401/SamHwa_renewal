$(document).ready(function(){
    
    // 대리점 찾기  지역선택
    $(".region_list").hide();
    
    var click_motion_region = false;
    $("#agency_option_list01 button").click(function(){
        click_motion_region = !click_motion_region;
        
        if(click_motion_region){
            $(this).next("ul")
            .slideDown(300);
        $(this).css("background-image","url(images/customer/select_arrow02.png)");
        }else{
            $(".region_list").slideUp(300);
            $(this).css("background-image","url(images/customer/select_arrow01.png)");
        };
    });

    
    
    $(".region_list li").hover(function(){
        $(this).toggleClass("region_sel");
    }).click(function(){
        var regioin_select = $(this).text();
        $("#agency_option_list01 button").text(regioin_select);
        $(this).parent("ul").slideUp(300);
        $("#agency_option_list01 button").css("background-image","url(images/customer/select_arrow01.png)");
    });

    // 특징선택 
    $(".match_list").hide();
    
    var click_motion_color = false;
    $("#agency_option_list02 button").click(function(){
        click_motion_color = !click_motion_color;
        
        if(click_motion_color){
            $(this).next("ul")
            .slideDown(300);
        $(this).css("background-image","url(images/customer/select_arrow02.png)");
        }else{
            $(".match_list").slideUp(300);
            $(this).css("background-image","url(images/customer/select_arrow01.png)");
        };
      
    });
    
    $(".match_list li").hover(function(){
        $(this).toggleClass("color_match");
    }).click(function(){
        var match_select = $(this).text();
        $("#agency_option_list02 button").text(match_select);
        $(this).parent("ul").slideUp(300);
        $("#agency_option_list02 button").css("background-image","url(images/customer/select_arrow01.png)");
    });
    
    // 대리점 목록 클릭
    $(".agency_add00").click(function(){
        var map_address = $(this).attr("data-map");
        $("#agency_map_box iframe").attr("src", map_address);
    });
    
    //  << 1 2 3 4 5 >>
    $(".agency_list_num li a").hover(function(){
        $(this).toggleClass("agency_list_hover");
    }).click(function(){
        var page_num_index = $(this).parent("li").index();
        
        if( page_num_index == 0 || page_num_index ==6){
            return false;
        }else{
            $(".agency_list_num li a").removeClass("agency_list_active");
            $(this).addClass("agency_list_active");
            return false;
            
        }

    });
    
    
    // 고개문의
    
    // 문의 유형 선택
    $(".c_consult01 ul").hide();
    
    $(".c_consult01 ul li").hover(function(){
        $(this).toggleClass("consult_type_select");
    }).click(function(){
        var consulte_type = $(this).text();
        
        $("#consult_type_sel").text(consulte_type);
        $(this).parent("ul").slideUp();
    });
    
    var type_clk = false;
    $("#consult_type_sel").click(function(){    
        $(this).next("ul").slideToggle();
        
        type_clk = !type_clk;
        if(type_clk){
            $(this).css("background-image","url(images/customer/consult_arrow02.png");
        }else{
            $(this).css("background-image","url(images/customer/consult_arrow01.png");
        };
    });
    
    //첨부파일

    $(".c_consult04 input").change(function(){
        var file_name = $(this).val();
        
        if(file_name == ""){
            $(this).parent("label").css("background-color","#eaeaea");
            
        }else{
            $(this).parent("label").css("background-color","pink");
        }
    });
    
    

    
});