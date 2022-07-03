//***********Scroll Trigger GSAP Animations********

const headerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#navbar",
    defaults: { duration: 0.5, ease: "easeIn" },
  },
});
headerTimeline
  .from(".navbar-container", { y: "100%", opacity: 0 })
  .from(".homepage-socials", { x: 100, opacity: 0 }, "-=0.4")
  .from(".mid-nft", { y: 200, opacity: 0 }, "-=0.5")
  .from(".left-nft", { x: 100, rotate: "30deg", opacity: 0 }, "-=.2")
  .from(".right-nft", { x: -100, rotate: "-30deg", opacity: 0 }, "-=.5")
  .from(".kizuki-heading", { y: "100%", opacity: 0 }, "-=.6")
  .from(".homepage-left-container p ", { y: "100%", opacity: 0 }, "-=.8");
