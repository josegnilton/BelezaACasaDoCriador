// ------------------------------ Início Função para Scroll do Header ------------------------------

function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// ------------------------------ Fim Função para Scroll do Header ------------------------------

// ------------------------------ Início Função para explosão da Navbar ------------------------------
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
// ------------------------------ Fim Função para explosão da Navbar ------------------------------

// ------------------------------ Início Função para controlar o action dos links ------------------------------
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ------------------------------ Fim Função para controlar o action dos links ------------------------------

// ------------------------------ Início Função para controlar o tema da página ------------------------------

const themeButton = document.getElementById("theme-button");
const employeeContent_1 = document.getElementById("employee_content_1");
const employeeContent_2 = document.getElementById("employee_content_2");
const employeeContent_3 = document.getElementById("employee_content_3");
const employeeContent_4 = document.getElementById("employee_content_4");
const employeeContent_5 = document.getElementById("employee_content_5");
const employeeContent_6 = document.getElementById("employee_content_6");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}
window.addEventListener("load", changeImageSrc);

function changeImageSrc() {
  const img = document.getElementById("nav_logo");
  const prefersDark = getCurrentTheme() === "dark";
  if (prefersDark) {
    img.src = "assets/img/logo_dark.png";
  } else {
    img.src = img.dataset.src;
  }
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  changeImageSrc();

  const prefersDark = getCurrentTheme() === "dark";
  if (employeeContent_1 !== null) {
    if (prefersDark) {
      employeeContent_1.classList.add("employee_content_dark");
      employeeContent_2.classList.add("employee_content_dark");
      employeeContent_3.classList.add("employee_content_dark");
      employeeContent_4.classList.add("employee_content_dark");
      employeeContent_5.classList.add("employee_content_dark");
      employeeContent_6.classList.add("employee_content_dark");
    } else {
      employeeContent_1.classList.remove("employee_content_dark");
      employeeContent_2.classList.remove("employee_content_dark");
      employeeContent_3.classList.remove("employee_content_dark");
      employeeContent_4.classList.remove("employee_content_dark");
      employeeContent_5.classList.remove("employee_content_dark");
      employeeContent_6.classList.remove("employee_content_dark");
    }
  }
});

const prefersDark = getCurrentTheme() === "dark";

if (employeeContent_1 !== null) {
  if (prefersDark) {
    employeeContent_1.classList.add("employee_content_dark");
    employeeContent_2.classList.add("employee_content_dark");
    employeeContent_3.classList.add("employee_content_dark");
    employeeContent_4.classList.add("employee_content_dark");
    employeeContent_5.classList.add("employee_content_dark");
    employeeContent_6.classList.add("employee_content_dark");
  } else {
    employeeContent_1.classList.remove("employee_content_dark");
    employeeContent_2.classList.remove("employee_content_dark");
    employeeContent_3.classList.remove("employee_content_dark");
    employeeContent_4.classList.remove("employee_content_dark");
    employeeContent_5.classList.remove("employee_content_dark");
    employeeContent_6.classList.remove("employee_content_dark");
  }
}

// ------------------------------ Fim Função para controlar o tema da página ------------------------------

// ------------------------------ Início Função para controlar o o scroll ------------------------------

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ------------------------------ Fim Função para controlar o Scroll ------------------------------

// ------------------------------ Inicio Função para controlar o form do e-mail ------------------------------
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      } else {
        throw new Error("Ocorreu um erro ao enviar a mensagem.");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Ocorreu um erro ao enviar a mensagem.");
    });
});
// ------------------------------ Fim Função para controlar o form do e-mail ------------------------------

// ------------------------------ Inicio Função para controlar a imagem do carrossel ------------------------------
const minhaImagem_1 = document.getElementById("minha-imagem_1");
const minhaImagem_2 = document.getElementById("minha-imagem_2");
const minhaImagem_3 = document.getElementById("minha-imagem_3");
if(minhaImagem_1 !==null){
  function changeImageCarouselSrc() {
    const minhaImagem_1 = document.getElementById("minha-imagem_1");
    const minhaImagem_2 = document.getElementById("minha-imagem_2");
    const minhaImagem_3 = document.getElementById("minha-imagem_3");
    const largura =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (largura < 950) {
      minhaImagem_1.src = minhaImagem_1.dataset.src;
      minhaImagem_2.src = minhaImagem_2.dataset.src;
      minhaImagem_3.src = minhaImagem_3.dataset.src;
    } else {
      minhaImagem_1.src = "assets/img/carrossel_1.png";
      minhaImagem_2.src = "assets/img/carrossel_2.png";
      minhaImagem_3.src = "assets/img/carrossel_3.png";
    }
  }
  
  window.onload = function () {
    changeImageCarouselSrc();
  };
  
  window.addEventListener("resize", function () {
    changeImageCarouselSrc();
  });
}


// ------------------------------ Fim Função para controlar a imagem do carrossel ------------------------------
