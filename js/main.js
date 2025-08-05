/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')


const langToggle = document.querySelector(".lang-toggle");
const langMenu = document.querySelector(".lang-menu");
const langItems = document.querySelectorAll(".lang-menu li");

langToggle.addEventListener("click", () => {
  langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
});

langItems.forEach(item => {
  item.addEventListener("click", () => {
    langItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    langToggle.textContent = item.dataset.lang + " ▾";
    langMenu.style.display = "none";
    // Здесь можешь вызывать функцию смены языка
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-dropdown")) {
    langMenu.style.display = "none";
  }
});






const ITEMS_PER_PAGE = 9;
let currentPage = 1;

function renderCatalog() {
  const catalogList = document.getElementById("catalogList");
  const pagination = document.getElementById("pagination");
  const search = document.getElementById("search").value.toLowerCase();
  const type = document.getElementById("typeFilter").value;
  const brand = document.getElementById("brandFilter").value;

  let filtered = products.filter(product => {
    return (
      product.name.toLowerCase().includes(search) &&
      (type === "" || product.type === type) &&
      (brand === "" || product.brand === brand)
    );
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  // РИСУЕМ КАРТОЧКИ!
  catalogList.innerHTML = paginated.map(p => `
    <div class="kard">
      <div class="card-inner">
        <img src="${p.image}" alt="${p.name}">
        <h2>${p.name}</h2>
        <p>${p.description}</p>
        ${p.article ? `<p><strong>Артикул:</strong> ${p.article}</p>` : ""}
      </div>
      ${p.showContact ? `<a href="#contact" class="contact-btn">Связаться</a>` : ""}
    </div>
  `).join('');

  // pagination
  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `<button onclick="changePage(${i})" class="${i === currentPage ? 'active' : ''}">${i}</button>`;
  }
}

function changePage(page) {
  currentPage = page;
  renderCatalog();
}

document.getElementById("search").addEventListener("input", () => {
  currentPage = 1;
  renderCatalog();
});

document.getElementById("typeFilter").addEventListener("change", () => {
  currentPage = 1;
  renderCatalog();
});

document.getElementById("brandFilter").addEventListener("change", () => {
  currentPage = 1;
  renderCatalog();
});

document.addEventListener("DOMContentLoaded", renderCatalog);

// Чтобы работал onclick из HTML
window.changePage = changePage;



const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
    //do nothing if form not validated
  if (!validateForm(form)) return;

  //if form valid submit

  alert("Message succefully sent");
});

const validateForm = (form) => {
  let valid = true;
  //check for emty fiels
  let name = form.querySelector(".name");
  let message = form.querySelector(".message");
  let email = form.querySelector(".email");

  if (name.value == "") {
    giveError(name, "Please enter your name");
    valid = false;
  }
  if (message.value == "") {
    giveError(message, "Please enter your message");
    valid = false;
  }

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailValue = email.value;
  if (!emailRegex.test(emailValue)) {
    giveError(email, "Please enter a valid email");
    valid = false;
  }


  if (valid) {
    return true;
  }
};


const giveError = (field, message) => {
  let parentElement = field.parentElement;
  parentElement.classList.add("error");
  let existingError = parentElement.querySelector(".err-msg");
  if (existingError) {
    existingError.remove();
  }
  let error = document.createElement("span");
  error.textContent = message;
  error.classList.add("err-msg");
  parentElement.appendChild(error);
};

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

let allFields = [... inputs, ... textareas];

allFields.forEach((field) => {
  field.addEventListener("input", () => {
    removeError(field);
  });
});

const removeError = (field) => {
  let parentElement = field.parentElement;
  parentElement.classList.remove("error");
  let error = parentElement.querySelector("err-msg");
  if (error) {
    error.remove();
  }
};