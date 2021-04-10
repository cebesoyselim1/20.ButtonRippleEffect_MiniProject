const btn = document.querySelector(".btn-ripple");

btn.addEventListener("click",(e) => {
    let xClient = e.clientX;
    let yClient = e.clientY;

    let buttonLeft = e.target.offsetLeft;
    let buttonTop = e.target.offsetTop;
    
    let xInside = xClient - buttonLeft;
    let yInside = yClient - buttonTop;

    console.log(`
        xClient : ${xClient}, buttonLeft : ${buttonLeft}, xInside : ${xInside}
    `)

    console.log(`
        yClient : ${yClient}, buttonTop : ${buttonTop}, yInside : ${yInside}
    `)
    
    
    let circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;
    btn.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    },500)
})