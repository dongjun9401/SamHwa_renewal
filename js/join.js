$(document).ready(function(){
    
    // 위로 올라가기 버튼
    $("#top_btn").click(function(){
            $("html, body").stop().animate({ scrollTop : 0 },800);
    });

    // 회원가입 페이지 이동
    $("#join_page2,#join_page3").hide();
    $(".join_prev_page").hide();
    
    var pagenum = 1;
    
    $(".join_next_page").click(function(){ // next click
        
        if(pagenum < 4){
            pagenum++; // 2 3 
            
            $(".join_prev_page").show();
            $("#join_box > div").hide();
            $("#join_page"+pagenum).show();
            $("html,body").animate({ scrollTop : "0" },0);
            if( pagenum == 3 ){
                $(".join_next_page").hide();
            }
        }else{
            false;
        }
    });
    
    $(".join_prev_page").click(function(){ //prev click
        if(pagenum > 0){
            
            pagenum--; // 2 1
            $(".join_next_page").show();
            $("#join_box > div").hide();
            $("#join_page"+pagenum).show();
            $("html,body").animate({ scrollTop : "0" },0);
            if( pagenum == 1 ){$(".join_prev_page").hide();}
        }else{
            false;
        }
    });
    
    // 약관 show & hide 
    $(".agree_txt_box_btn").toggle(function(){
        $(this).attr("src" , "images/join/agree_icon_down.png");
        $(this).next().slideUp();
    },function(){
        $(this).attr( "src" , "images/join/agree_icon_up.png");
        $(this).next().slideDown();
    });
    

    //전체 동의 체크, 해제
    $("#all_agree_chk").change(function(){
        var chk_all = $("#all_agree_chk").prop("checked");
        
        $("input[name='join_chk']").prop("checked",chk_all);
    });
    
    $("input[name='join_chk']").change(function(){
        var join_chk1 = $("#agree01").prop("checked");
        var join_chk2 = $("#agree02").prop("checked");
        var join_chk3 = $("#agree03").prop("checked");

        if(join_chk1 == true && join_chk2 == true && join_chk3 == true){
            $("#all_agree_chk").prop("checked", true);
        }else{
            $("#all_agree_chk").prop("checked", false);
        }
    });
    
    
    // page2
    
    // 이메일 직접입력 or 선택
    $(".select_box select").change(function(){
        var email_select = $(this).attr("value");
        
        if( email_select == "direct_input"){
            $("#email_add_select").attr({
                "disabled" : false,
                "value" : ""
            })
        }else{
            $("#email_add_select").attr({
            "disabled" : true,
            "value" : email_select
        });
            
        }
       
    });
    
    


    
  
    
    

    
});