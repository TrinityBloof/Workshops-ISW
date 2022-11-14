let header = document.querySelector("#header");
let footer = document.querySelector("#footer");

fetch("/anthony/homeworks/project1/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
    let menuBtn = document.querySelector("#menu-btn");
    let navbar = document.querySelector(".header .flex .navbar");

    menuBtn.onclick = () => {
      menuBtn.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    };
  });

fetch("/anthony/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });