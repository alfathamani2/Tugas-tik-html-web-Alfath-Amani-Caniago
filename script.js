document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");
  const themeBtn = document.getElementById("themeBtn");


  // MENU MOBILE

  if (menuBtn) {

    menuBtn.addEventListener("click", () => {

      navMenu.classList.toggle("open");

    });

  }


  // DARK MODE

  if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    if (themeBtn) {
      themeBtn.textContent = "☀";
    }

  }


  if (themeBtn) {

    themeBtn.addEventListener("click", () => {

      document.body.classList.toggle("dark");

      const dark =
        document.body.classList.contains("dark");


      localStorage.setItem(
        "theme",
        dark ? "dark" : "light"
      );


      themeBtn.textContent =
        dark ? "☀" : "☾";

    });

  }


  // FORM KONTAK

  const form =
    document.getElementById("contactForm");


  if (form) {

    form.addEventListener("submit", (event) => {

      event.preventDefault();


      const name =
        document.getElementById("name").value.trim();


      alert(
        `Terima kasih, ${name}! Pesan berhasil diproses.`
      );


      form.reset();

    });

  }

});