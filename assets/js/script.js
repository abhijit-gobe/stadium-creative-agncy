
// function cursorAnimation() {
//     var cursor = document.getElementById('crsr');
//     document.addEventListener('mousemove', function (det) {
//         gsap.to('#crsr', {
//             left: det.x,
//             top: det.y
//         })
//     })
// }

// function stadiumAnimation() {
//     var tl = gsap.timeline();
//     tl.from('#hero-nav h3', {
//         y: 100,
//         duration: .5,
//         opacity: 0,
//     })
//     tl.from('#main-text h1', {
//         y: 100,
//         duration: .2,
//         opacity: 0,
//         stagger: 0.2
//     })
//     tl.from('#hero-bottom', {
//         y: 100,
//         duration: .2,
//         opacity: 0,
//         stagger: 0.2
//     })
//     window.addEventListener('onscroll', function (e) {
//         tl.from("#stadium", {
//             delay: 0.1,
//             y: 1600,
//             duration: 0.5,
//         });
//         tl.to("#hero", {
//             display: "none",
//         });
//     })
// }

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    multiplier: 0.7
});
function cursorAnimation() {
    const cursor = document.getElementById('crsr');
    if (cursor) {
        document.addEventListener('mousemove', (det) => {
            gsap.to(cursor, {
                left: det.clientX,
                top: det.clientY,
                duration: 0.3
            });
        });
    }
}

cursorAnimation();