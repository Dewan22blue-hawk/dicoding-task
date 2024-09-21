document.addEventListener("DOMContentLoaded", () => {
  // Data JSON untuk menu (dimuat langsung di sini)
  const menuData = [
    {
      image: "report-desk.jpg",
      title: "Report Desk Wapl",
      description:
        "Report desk wapl adalah Aplikasi E-Reporting berbasis WEB yang digunakan untuk membuat laporan dan penugasan bagi para teknisi ISP/jaringan komputer yang sedang bertugas.",
    },
    {
      image: "",
      title: "Pustaka booking",
      description:
        "Sebuah proyek layanan perpustakaan, saya membuatnya menggunakan PHP Codeigniter 3 Framework.",
    },
    {
      image: "mobile-e-antrean.jpg",
      title: "Mobile Apps E-Antrean",
      description:
        "Proyek ini merupakan kelanjutan dari Laradev E-Antrean, dimana aplikasi ini diintegrasikan dengan Mobile Apps yang dibuat menggunakan Flutter dengan API Laravel Sanctum.",
    },
    {
      title: "Caramel Aice Macchiato",
      description:
        "Terbuat dari biji kopi pilihan dan dengan susu yang segar, di padukan dengan caramel dan es, menghasilkan sensasi segar dan gurih yang nikmat.",
    },
    {
      title: "Cuban Coffee Espresso",
      description:
        "Dibuat dengan biji kopi robusta pilihan dari Brazil, dipadukan dengan gula aren menghasilkan rasa kopi yang pekat dari biji robusta dan manis dari gula aren.",
    },
    {
      title: "Mocca Big Iced Espresso",
      description:
        "Menggunakan kopi hitam pilihan di padukan dengan susu yang segar di tambah dengan es, menghasilkan cita rasa yang pahit manis dan segar.",
    },
    {
      title: "Big Aice Kampul Thai tea",
      description:
        "Menggunakan daun teh pilihan, yang mempunyai cita rasa unik dan segar, dipadukan dengan es, menambah sensasi nikmat dan segar.",
    },
  ];
  // Menampilkan data menu
  const menuContainer = document.querySelector(".card-menu");

  if (menuContainer) {
    menuData.forEach((item, index) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");

      menuItem.innerHTML = `
                          <div class="card-custom">
                      <img src="assets/images/menu/kedaikopi-menu${
                        index + 1
                      }.png" alt="Card image" class="card-img">
                      <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <p class="card-text">${item.description}</p>
                      </div>
                    </div> 
                      `;

      menuContainer.appendChild(menuItem);
    });
  }
});
