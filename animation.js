

function findHalfValue(stringValue){
    return  Math.floor(stringValue.length / 2);
}


function animateTitle(){
    const appTitle = document.querySelector(".title")
    const appTitleText = appTitle.textContent
    let spliteTitleText = appTitleText.split("")
    let halfValue = findHalfValue(spliteTitleText)
    
    let  value1 = "";
    let  value2 = "";
    
    spliteTitleText.forEach((char, index) => {
        if(index < halfValue){
            value1 += `<span class="first-value">${char}</span>`  
        }else{
            value2 += `<span class="second-value">${char}</span>`
        }
    })
    appTitle.innerHTML = value1 +" "+ value2;
    
    
    gsap.from(".first-value", {
        y : 50,
        duration: .8,
        stagger: 0.2,
        opacity: 0,
    });
    gsap.from(".second-value", {
        y : 50,
        duration: .5,
        stagger: -0.2,
        opacity: 0,
    });
}
animateTitle();

export function animateQuote(quoteText){
    const quoteTextValue =  quoteText.textContent;
    const quoteTextArray = quoteTextValue.split(" ");
    let value = "";
    quoteTextArray.forEach((char) => {
        value += ` <span class="quote-text-value">${char}</span>`
    })
    quoteText.innerHTML = value;

    gsap.from(".quote-text-value", {
        delay: .5,
        duration: .5,
        stagger: 0.1,
        opacity: 0,
    });
}

export function animateAuthor(quoteAuthor){
    gsap.from(quoteAuthor, {
        delay: 1,
        duration: 1.5,
        opacity: 0,
    });
}


function animateCircleCursor(){
    
    const circleCursor = document.querySelector(".circle-cursor");
    
    window.addEventListener("mousemove", (dets) => {
        circleCursor.style.left = `${dets.x - 10}px`;
        circleCursor.style.top = `${dets.y - 5}px`;
        gsap.to(circleCursor, {
            duration: 2.5,
            ease: "power2.inOut",
        })
    })
    
    document.querySelectorAll("[data-cursor='bottom']").forEach((element) => {
        element.addEventListener("mouseenter", () => {
        gsap.to(circleCursor, {
            backgroundColor: "yellow",
            opacity: .5,
            scale:4,
            ease: "power2.inOut",
        })
    })
    element.addEventListener("mouseleave", () => {
        gsap.to(circleCursor, {
            backgroundColor: "white",
            opacity: 1,
            scale:1,
            ease: "power2.inOut",
        })
    })
    })
}
animateCircleCursor();




