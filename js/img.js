let imgq = document.querySelector('.imgq')
let deg = 0
let imgx = 0
let imgy = 0
let imgl = 0
let imgt = 0
let y = 0
let index = 0

window.addEventListener('mousemove', function(xyz) {
    imgx = xyz.x - imgq.offsetLeft - imgq.clientWidth / 2
    imgy = xyz.y - imgq.offsetTop - imgq.clientHeight / 2
    deg = 360 * Math.atan(imgy / imgx) / (2 * Math.PI)
    index = 0
    let x = event.clientX
    if (imgq.offsetLeft < x) {
        y = -180
    } else {
        y = 0
    }

})
setInterval(() => {
    imgq.style.transform = "rotateZ(" + deg + "deg)rotateY(" + y + "deg)"
    index++
    if (index < 50) {
        imgl += imgx / 50
        imgt += imgy / 50
    }
    imgq.style.left = imgl + "px"
    imgq.style.top = imgt + "px"
}, 10)