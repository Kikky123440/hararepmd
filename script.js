// Show/Hide Sections
const links = document.querySelectorAll("nav ul li a, .dept-list li a");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    // hide all sections
    sections.forEach(sec => sec.classList.add("hidden"));

    // remove active from nav
    document.querySelectorAll("nav ul li a").forEach(nav => nav.classList.remove("active"));

    // show target
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.classList.remove("hidden");
    }

    // highlight active nav only
    if (this.closest("nav")) {
      this.classList.add("active");
    }
  });
});


