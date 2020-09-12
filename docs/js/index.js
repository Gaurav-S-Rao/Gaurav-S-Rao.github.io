const showcase = document.getElementById("showcase");
const navbar = document.getElementById("navbar");
// console.log(`${navbar} and ${showcase}`);
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 150) {
    navbar.style.background = "rgba(0,0,0,0.8)";
  } else {
    navbar.style.background = "transparent";
  }
});
