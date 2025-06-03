let timeLine = gsap.timeline();
timeLine.from("#quote-text", {
    duration: 1,
    stagger: 1,
    delay: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out"
});
timeLine.from("#quote-author", {
    duration: 1,
    stagger: 1,
    opacity: 0,
    x: 25,
    ease: "bounce.out",
});

gsap.from("#time-display-value", {
    duration: 1,
    ease: "power3.out",
});

