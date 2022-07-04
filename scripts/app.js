//****************Hamburegr fucntionality******************
const hambuerger = document.querySelector(".hamburger-menu");
const hambuergerMoboScreen = document.querySelector(
  ".hamburger-item-container"
);
hambuerger.addEventListener("click", () => {
  hambuergerMoboScreen.style.display = "block";
  document.body.style.overflowY = "hidden";
  hambuergerMoboScreen.addEventListener("click", (e) => {
    hambuergerMoboScreen.style.display = "none";
    document.body.style.overflowY = "scroll";
  });
});

//****************Click to Top****************
const mybutton = document.querySelector(".move-top");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
window.onscroll = function () {
  scrollFunction();
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
mybutton.addEventListener("click", topFunction);
//***********Homepage GSAP Animations********
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
  .from(".homepage-left-container p ", { y: "100%", opacity: 0 }, "-=.8")
  .from(".header-btns a ", { y: "100%", opacity: 0 }, "-=.5");
