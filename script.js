const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});
