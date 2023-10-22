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

// JavaScript function to toggle the "active" class for responsive behavior
document.querySelector(".icon").addEventListener("click", function() {
    const options = document.getElementById("options");
    options.classList.toggle("active");
});




  