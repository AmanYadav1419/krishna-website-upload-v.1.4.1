const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7
})

// //cursor
// var cursor = document.querySelector(".cursor");
// var page6Body = document.querySelector("#page6");

// page6Body.addEventListener("mousemove",function(dets){
//     cursor.style.left = dets.x + "px"
//     cursor.style.top = dets.y + "px"
// })