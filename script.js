var typed = new Typed(".auto-type", {
    strings: ["Programmer", "Designer", "Youtuber", "Frontend Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var tl = gsap.timeline();

tl.from("#options a", {
    y: -100, duration: .2, stagger:.3
})
.from("#profile_pic",{
    opacity:1
})

document.querySelector(".icon").addEventListener("click", function () {
    const links = document.querySelectorAll("#options a");
    
    links.forEach(function (link) {
        link.style.display = link.style.display === "block" ? "none" : "block";
    });
});




  