
/*헤더-----------------------------------------------------------*/

/*슬라이드 메뉴 열기*/
    $("ul.menu-pc > li").on("mouseover",function(){
    $(".menuon").toggleClass('on');
    $("#menu_box ul.submenu-pc").toggleClass('slide');
    });

    $("ul.menu-pc > li").on("mouseout",function(){
    $(".menuon").toggleClass('on');
    $("#menu_box ul.submenu-pc").toggleClass('slide');
    });

/*풀 메뉴 열기*/
    let menuAllBtn = document.querySelector(".menu_all > a:nth-of-type(1)");
    let fullMenuOpen = document.querySelector("#fullmenu");
    let fullCloseBtn = document.querySelector(".full_close");

    menuAllBtn.addEventListener("click", function(){
        fullMenuOpen.classList.toggle("open");
    });
    fullCloseBtn.addEventListener("click", function(){
        fullMenuOpen.classList.toggle("open");
    });

/*search 열기*/
    let gnbSearchBtn = document.querySelector(".gnb-search");
    let searchPcOpen = document.querySelector("#search-pc");
    let gnbCloseBtn = document.querySelector(".btn-close");

    gnbSearchBtn.addEventListener("click", function(){
        searchPcOpen.classList.toggle("open");
    });
    gnbCloseBtn.addEventListener("click",function(){
        searchPcOpen.classList.toggle("open");
    });

/*aside메뉴 열기*/
let asideBtn = document.querySelector(".menu_all > a:nth-of-type(2)");
let asideOpen = document.querySelector("#aside");
let asideClose = document.querySelector(".aside-close-btn");
let bodyScrollRock = document.querySelector("body");

function scroll(){
    bodyScrollRock.classList.toggle("scrollRock");
}

asideBtn.addEventListener("click", function(){
    asideOpen.classList.toggle("open");
    scroll();
});

asideClose.addEventListener("click", function(){
    asideOpen.classList.toggle("open");
    scroll();
});
