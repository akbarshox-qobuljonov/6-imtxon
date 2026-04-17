var elHamburgbtn = document.getElementById("hamburg");
var elSiteNavbar = document.getElementById("navbar");

elHamburgbtn.addEventListener("click", function () {
  elSiteNavbar.classList.toggle("open-navbar");
  elHamburgbtn.classList.toggle(".close-btn");
});
