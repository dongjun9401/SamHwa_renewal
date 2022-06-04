$(document).ready(function(){
    
    // 주요공고 문서 이동
    var document_move = 0;
    $(".post_btn_r").click(function(){
        
        if( document_move < 5){
            document_move++;
            var pdf_move = -210*document_move;
            $(".document_list").stop().animate({left : pdf_move},600);
        }else{
            false;
        }
   
    });
    
    $(".post_btn_l").click(function(){
        if( document_move > 0){
            document_move--;
            var pdf_move = -210*document_move;
            $(".document_list").stop().animate({left : pdf_move},600);
        }else{
            false;
        }
    });
    
    
    // table tr 배경색 
    $("#ir_table tr:not(:eq(0))").hover(function(){
        $(this).css({backgroundColor : "#ffeaea", cursor : "pointer"});
        $("th", this).stop().animate({paddingLeft : "150px"}, 300);
    },function(){
        $("#ir_table tr").css({backgroundColor : ""});
        $("th", this).stop().animate({paddingLeft : "0px"},300);
    });
    
});