// 方案一
window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let parallaxBg = document.querySelector(".parallax-bg");

    // 讓背景視差滾動，但只影響這個區塊
    if (parallaxBg) {
        parallaxBg.style.backgroundPosition = `center ${-scrollTop * 0.3}px`;
    }
});

// 方案二-讓 .parallax-bg 整個往上移動
// window.addEventListener("scroll", function () {
//     let scrollTop = window.scrollY;
//     let parallaxBg = document.querySelector(".parallax-bg");

//     if (parallaxBg) {
//         parallaxBg.style.top = `${-scrollTop * 0.3}px`;
//     }
// });