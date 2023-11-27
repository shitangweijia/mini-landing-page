// Apple switch
$(document).ready(function () {
    // Swiper: Slider
    new Swiper('.swiper-container', {
        loop: false,     //是否无限循环
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        noSwiping : true,   //不允許拖動
        slidesPerView: 3,   //定义了每个轮播视图中显示的幻灯片数量
        paginationClickable: true,      //允许通过点击分页器来导航到特定的幻灯片
        spaceBetween: 20,
        slidesOffsetBefore: 0,       //滑块左边的距离
        breakpoints: {      //不同屏幕宽度下的配置选项的对象
            // 2560: {
            //     slidesPerView: 4,
            //     spaceBetween: 30,
            //     slidesOffsetBefore: 822
            // },
            // 1920: {
            //     slidesPerView: 3,
            //     spaceBetween: 30,
            //     slidesOffsetBefore: 503
            // },
            1440: {
                slidesPerView: 3,
                slidesOffsetBefore: 253
            },
            1028: {
                slidesPerView: 3,
                slidesOffsetBefore: 253
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesOffsetBefore: 503
            }
        }
    });


    // mini-scroll-arrow
    var miniScrollArrow = document.querySelector('.mini-scroll-arrow');
    var miniClickBox = document.querySelector('.mini-click-box');
    var miniNewSvgAnimation = document.getElementById('mini-new-svg-animation');
    const windowHeight = window.innerHeight;    // 获取视口高度

    window.addEventListener('scroll', function () {
        if (miniScrollArrow){
            if (window.scrollY === 0) { // 当页面滚动到顶部时
                miniScrollArrow.style.opacity = '0';
                miniScrollArrow.classList.remove('mini-click-box')
            } else {
                miniScrollArrow.style.opacity = '.8';
                miniScrollArrow.classList.add('mini-click-box')
            }
        }
    })

    miniScrollArrow.addEventListener('click', function () {
        if (window.scrollY === 0) {
            scrollToTop();
        }
    });

    miniScrollArrow.onclick = function () {
        window.scrollTo({
            top: 0,     //滚动到顶部
            behavior: "smooth"  //流畅的滚动方式
        })
    }

    
    miniNewSvgAnimation.onclick = function () {
        window.scrollTo({
            top: windowHeight,     //滚动到
            behavior: "smooth"  //流畅的滚动方式
        })
    }
});