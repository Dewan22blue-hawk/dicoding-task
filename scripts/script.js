// Toggle class active untuk hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar elemen

// Update script.js
const dropdownMenu = document.getElementById("dropdownMenu");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  dropdownMenu.classList.toggle("active"); // Tampilkan dropdown menu
};

// Menampilkan daftar proyek menggunakan JavaScript
const projects = ["Proyek E-commerce", "Proyek Landing Page", "Proyek Dashboard Admin", "Proyek Web Portofolio", "Proyek Toko Online"];

const projectList = document.getElementById("projectList");

projects.forEach((project) => {
  const li = document.createElement("li");
  li.textContent = project;
  projectList.appendChild(li);
});
