$(document).ready(function(){
    
    //회원 버튼 (기본상태)
    $(".member_btn").css("color","#e20d3a");
    $("#nomember_wrap").hide();
    
    // 비회원 버튼 클릭
    $(".nomember_btn").click(function(){
        $(".member_btn").css("color","#000000");
        $(this).css("color","#e20d3a");
        
        $("#login_input_wrap").hide();
        $("#nomember_wrap").show();
    });
    
    // 회원 버튼 클릭
    $(".member_btn").click(function(){
        $(".nomember_btn").css("color","#000000");
        $(this).css("color","#e20d3a");
        
        $("#nomember_wrap").hide();
        $("#login_input_wrap").show();
    });
    
    
    //로그인 페이지 왼쪽 이미지 변경
    $(".login_img img:eq(1),.login_img img:eq(2)").css("display", "none");
    
    login_banner();

    function login_banner(){
        $(".login_img img:eq(0)").delay(2000).animate({left : "-580px"})
        $(".login_img img:eq(1)").delay(2000).css({display: "block", left: "580px"})
            .animate({left : "0"},function(){
                $(this).delay(2000).animate({left : "-580px"});
                $(".login_img img:eq(2)").delay(2000).css({display: "block", left: "580px"})
                    .animate({left : "0"},function(){
                        $(this).delay(2000).animate({left : "-580px"});
                        $(".login_img img:eq(0)").delay(2000).css({display: "block", left: "580px"})
                            .animate({left : "0"}, login_banner);
                });
        });
    };
    
    $(".join_btn1").click(function(){
        window.location.href ='join.html';
    });
    
    
    
});