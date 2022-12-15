var amount = 60,
    between = (min, max) => min + Math.random() * (max - min),
    colors = ['#275EFE', '#5C86FF', '#362A89', '#6D58FF', '#F04949', '#16BF78'],
    current = 0;

let interval = setInterval(() => {
    if (current < amount) {
        animate(createConfetti());
    }
}, 50);

setTimeout(() => clearInterval(interval), 4000);

function createConfetti() {
    let div = document.createElement('div');
    gsap.set(div, {
        attr: {
            class: 'confetti',
            style: '--color: ' + colors[Math.floor(Math.random() * colors.length)]
        },
        x: between(0, window.innerWidth),
        y: -window.innerHeight / 4,
        z: between(-80, 80)
    });
    current++;
    document.body.appendChild(div);
    return div;
}

function animate(element) {
    gsap.to(element, {
        y: window.innerHeight + 40,
        ease: 'power1.out',
        delay: between(0, .25),
        duration: between(2, 5),
        onComplete() {
            if (element instanceof Element || element instanceof HTMLDocument) {
                current--;
                element.remove();
            }
        }
    });
    gsap.to(element, {
        rotationZ: between(90, 180),
        repeat: -1,
        yoyo: true,
        duration: between(3, 6)
    });
    gsap.to(element, {
        rotationX: between(0, 360),
        rotationY: between(0, 360),
        repeat: -1,
        yoyo: true,
        duration: between(3, 6)
    });
}
