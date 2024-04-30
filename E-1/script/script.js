// html이 로딩 되었을 때 함수를 실행
window.onload = function() {
    $('.menu > li').hover(
        function() {
            // 마우스를 올렸을 때
            $(this).children('ul').stop().slideDown('slow');
        }, function () {
            // 마우스를 뗐을 때
            $(this).children('ul').stop().slideUp('slow');
        }
    );

    let slide = $('.slide > a');
    let now = 0;
    let end = slide.length - 1;
    setInterval(function() {
        $(slide[now]).animate({'left': '-100%'}, 1000, function(){
            $(this).css('left', '100%');
        });
        now = now >= end ? 0 : now + 1;
        // if(now >= end) {
        //     now = 0;
        // } else {
        //     now = now + 1;
        // }
        $(slide[now]).animate({'left' : '0'}, 1000)
    }, 3000);

    $(".notice li").eq(0).click(function () { // 맨 위에 있는 li를 눌렀을 때
        $(".popup").css("display", "flex");
    });

    $(".close-btn").click(function () { // 닫기 버튼을 눌렀을 때
        $(".popup").hide();
    });
}