var title = document.querySelector(".title_welcome");
var titleGreen = document.querySelector(".title_welcome h1");
var titleOrange = document.querySelectorAll(
  ".title_welcome .navbar .navbar-brand, .title_welcome .w3l-footer-16 a.logo"
);
window.addEventListener("scroll", function () {
  let value = this.window.scrollY;
  console.log(value);
  title.style.top = value * 1.15 + "px";
  if (value > 700) {
    titleGreen.classList.add("text-white");
    titleOrange[0].classList.add("text-white");
    title.style.setProperty("z-index", "1000");
  } else {
    titleGreen.classList.remove("text-white");
    titleOrange[0].classList.remove("text-white");
    title.style.setProperty("z-index", "2");
  }
});