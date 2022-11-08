//main.js
console.log('main.js');

//준비함수
//메인이미지 슬라이더
$(function(){
    //배너 이미지 배열 생성
    let bgArr = [
        'images/main-banner1.jpg',
        'images/main-banner2.jpg',
        'images/main-banner3.jpg',
        'images/main-banner4.jpg' /* 경로 기준은 html파일 기준으로 생각해!! */
    ]

    //배열 이미지 번호 변수생성
    let bg_img_num = 0;

    //배경이미지 변경 및 재생
    /* 작성하는 순서를 꼭 지켜야 함. 1. 이미지 번호가 증가될때 2. 그 번호가 끝나는 배열까지 도달했을때 다시 원점배열 번호로 되돌아 간다. 3. 위의 요건을 충족시 다음의 배경이미지가 변동된다.  */
    setInterval (function(){
        bg_img_num++; //이미지 번호 증가
        if (bg_img_num >= bgArr.length){
            bg_img_num = 0;
        }; 
        console.log(bg_img_num);
        $('#main-banner .container').css({
            'background-image': `url(${bgArr[bg_img_num]})`
        });
 
    },5000);
    
});
/* 사이트맵 팝업창 */
$(function(){
    $('#btn-toggle').on('click', function(){
        $('#site-map-menu').toggleClass('show');
    });

    $('#site-menu-close').on('click', function(){
        $('#site-map-menu').removeClass('show');
    });
});