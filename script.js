const hero = document.querySelector('.hero')
const txt = hero.querySelector('h1')
const walk = 500 //500 px


hero.addEventListener('mousemove', function (event) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = event;

    x += event.target.offsetLeft;
    y += event.target.offsetTop;
    const xWalk = Math.round((x / width * walk) - (walk / 2))
    const yWalk = Math.round((y / height * walk) - (walk / 2))

    txt.style.textShadow = `${xWalk}px ${yWalk}px 0 #fab1a0,${xWalk * -1}px ${yWalk}px 0 #b2bec3, ${yWalk}px ${xWalk * -1}px 0 #ffeaa7,${yWalk * -1}px ${xWalk}px 0 #00cec9`
})