window.onload = function () {

    let mainTitle = document.querySelector('.main-title')
    let headernav = document.querySelector('header')
    let arrow = document.querySelector('.arrow')
    let myText = document.querySelector('.mytext')
    arrow.style.opacity = 1

    window.onscroll = function (e) {
        var scrollTop = document.documentElement.scrollTop

        if (scrollTop > headernav.offsetHeight) {
            headernav.style.display = 'block'

        }

        if (scrollTop < headernav.offsetHeight ) {
            headernav.style.display = "none"
        }

        if (!headernav.offsetHeight) {
            // headernav.style.display = "none"
            arrow.style.opacity = 1
            $(".main-title p:nth-child(1)").css({
                "animation": "move .8s .3s ease-in-out forwards",
                "display": 'block'
            })
            $(".main-title p:nth-child(2)").css({
                "animation": "move1 .8s .5s ease-in-out 1 forwards",
                "display": 'block'
            })
        }

        if (scrollTop > mainTitle.offsetHeight  - headernav.offsetHeight) {
            arrow.style.opacity = 0
            $(".main-title p:nth-child(1)").css({
                "animation": "none",
                "display": 'none'
            })
            $(".main-title p:nth-child(2)").css({
                "animation": "none",
                "display": 'none'
            })
        }
    }

    let top = 0
    let timer;
    arrow.onclick = function () {
        timer = setInterval(() => {
            top += 20
            document.documentElement.scrollTop = top
            if (document.documentElement.scrollTop >= mainTitle.offsetHeight  - headernav.offsetHeight) {
                myText.scrollTop = mainTitle.offsetHeight - headernav.offsetHeight
                top = 0
                console.log('hello')
                clearInterval(timer)
            }
        }, 4)

    }

    let can = document.querySelector(".canvas-person")
    let cxt = can.getContext('2d')
    cxt.beginPath()
    cxt.moveTo(20, 20)
    cxt.lineTo(200, 20)
    cxt.strokeStyle = 'red'
    cxt.stroke()

    cxt.beginPath()
    cxt.moveTo(20, 20)
    cxt.lineTo(100, 50)
    cxt.strokeStyle = 'blue'
    cxt.stroke()
    // b 这些会被转成字符串
    const a = {}
    const b = {key: 'b'}
    const c = {key: 'c'}
    a[b] = 123
    a[c] = 456
    console.log(a[b], a[c], a, b + '')
}