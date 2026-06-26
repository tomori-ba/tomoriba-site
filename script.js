const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.10)";
  } else {
    header.style.boxShadow = "none";
  }
});
