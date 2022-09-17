window.onload = function() {

    let mainTitle = document.querySelector('.main-title')
    let headernav = document.querySelector('header')
    window.onscroll = function(e) {
        var scrollTop = document.documentElement.scrollTop
        // console.log(scrollTop);
        // console.log(document.body.scrollTop,  window.screen.height)
        // console.log(mainTitle.scrollTop)

        if (scrollTop > headernav.offsetHeight) {
            headernav.style.display = 'block'
            console.log(scrollTop, headernav.offsetHeight)
        }

        if (scrollTop < headernav.offsetHeight) {
            headernav.style.display = "none"
        }
    } 
}