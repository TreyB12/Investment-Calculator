addEventListener("DOMContentLoaded", () => {

    const timeline = gsap.timeline({defaults: {duration: 1, opacity: 0}})
    timeline
    .from(".header", { y: "-300%", ease: "bounce"})
    .from(".user-inputs", { stagger: .5})
    .from(".calculation-button", { scale: 0, ease: "bounce.out"})
    .from(".calculation-output", {scale:0, ease: "elastic"})

   

})
