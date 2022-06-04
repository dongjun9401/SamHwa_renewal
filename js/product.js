
$(document).ready(function(){
    // 제품 검색 분류 select
    $("#category_select_02 select option:not(:eq(0))").attr("disabled","disabled").hide();
    $("#category_select_01 select").change(function(){

        var category_tit = $(this).attr("value");
        
        $("#category_select_02 select option:not(:eq(0))").attr("disabled","disabled").hide();
        $("#category_select_02 select option."+category_tit).removeAttr("disabled").show();
    });
   
    
    // 제품 브랜드    
    $("#brand_box ul li a").mouseover(function(){
        var brand_clk = !$(this).is("[class='brand_select']");
        
        if(brand_clk){ //a가 선택되있으면 hover class 미적용
            $("#brand_box ul li a").removeClass("brand_hover");
            $(this).addClass("brand_hover");
        }
        
    }).mouseout(function(){
        $(this).removeClass("brand_hover");
    });

    // 제품 초기화면
    $("#product_list_wrap figure:gt(8)").hide();


    $("#brand_box ul li a").click(function(){ //click class적용
            $("#brand_box ul li a").removeClass("brand_select");
            $(this).addClass("brand_select");

            // 브랜드 상품 보이기
            var brand_clk = $(this).attr("data-brand");
    
            $("#product_list_wrap figure").hide();
            $("#product_list_wrap figure."+brand_clk).show();

            $("#product_list_wrap figure").css("margin-left","80px");

            // $("#product_list_wrap figure:nth-child(3n+1):visible").css("margin-left","0px");
            // $("#product_list_wrap figure:visible:nth-").css("background-color","yellow");
            $("#product_list_wrap figure:visible").eq(0).css("margin-left","0px");
            $("#product_list_wrap figure:visible").eq(3).css("margin-left","0px");
            $("#product_list_wrap figure:visible").eq(6).css("margin-left","0px");

        return false;
    });
    
    // 브랜드 목록 이동
    var brand_num = 0;
    var brand_tle_w = $("#brand_box ul li").width(); // 200
    var brand_tle_size = $("#brand_box ul li").size(); // 7
    
     $(".brand_arrow_r").click(function(){
        brand_num++ //1 2 end
        
        var brand_tle_move = -(brand_tle_w*brand_num); //200 400
         
        if(brand_num == 3){
            brand_num = 2;
        }else{
            $("#brand_box ul").stop().animate({left : brand_tle_move+"px"}, 600);
        }
    });
    
    $(".brand_arrow_l").click(function(){
        brand_num--; //1 0 
        
        brand_tle_move = -(brand_tle_w*brand_num); //-200 0 end
        if(brand_num == -1){
            brand_num = 0;
        }else{
            $("#brand_box ul").stop().animate({ left : brand_tle_move}, 600);
        }
    });

    // 제품 브랜드 선택
    $("#brand_box ul li").click(function(){
        var brand_clk = $(this).children("a").attr("data-brand");

        $("#product_list_wrap figure").hide();
        $("#product_list_wrap figure."+brand_clk).show();
    });
    
    // 제품 소개 페이지
    $("#product_page_num a").click(function(){
        var page_index = $(this).index();
        var page_size = $("#product_page_num a").size(); 

        if( page_index == 0 || page_index == page_size-1){
            false;
        }else{
            $("#product_page_num a").removeClass("page_active");
            $(this).addClass("page_active");
        }

        // if("#");
        // 제품(개수)인덱스 수 확인 8이상이면 
        //페이지 넘버 추가 
        return false;


    });
   
});

