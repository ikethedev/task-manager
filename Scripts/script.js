const addTaskBtn = document.querySelector(".add-task-btn");
let sideBar = true;

function toggleMenuBtn() {
  sideBar != sideBar;
}

const checkScreenSize = () => {
  let width = window.innerWidth;
  if (width < 768) {
    document.querySelector(".sidemenu").style.display = "none";
    document.querySelector("#nav__logo").style.display = "none";
    document.querySelector(".nav__logo-mobile").classList.remove("hide");
    document.querySelector(".nav__arrow").classList.remove("hide");
    addTaskBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.368 12V7.344H12V4.632H7.368V0H4.656V4.632H0V7.344H4.656V12H7.368Z" fill="white"/>
</svg>`;
  } else {
    document.querySelector(".nav__logo-mobile").classList.add("hide");
    document.querySelector(".nav__arrow").classList.add("hide");

    if (sideBar === true) {
      document.querySelector("#nav__logo").style.display = "none";
      document.querySelector(".sidemenu").style.display = "block";
    }
    document.querySelector("#nav__logo").classList.remove("hide");
    addTaskBtn.innerHTML = ` <button class="primary-btn add-task-btn">+ Add New Task</button> `;
  }
};

const hidebtn = document.querySelector(".sidemenu__toggle-hide");

function toggleSideMenu() {
  sideBar = false;
  document.querySelector(".sidemenu").classList.add("sidemenu__hide");
  document.querySelector("#nav__logo").style.display = "flex";
}

document.querySelector("#nav__logo").addEventListener("click", () => {
  sideBar = true;
  if (sideBar === true) {
    document.querySelector(".sidemenu").classList.remove("sidemenu__hide");
    document.querySelector("#nav__logo").style.display = "none";
  } else {
  }
  console.log(sideBar);
});

hidebtn.addEventListener("click", toggleSideMenu);
window.addEventListener("resize", checkScreenSize);
window.addEventListener("load", checkScreenSize);

// Change active link

function setActiveLink(e) {
  if (!e.target.parentElement.classList.contains("sidemenu__list-item") || e.target.parentElement.classList.contains("platform__create-new")) {
    console.log("hello");
    return;
  }

  document
    .querySelectorAll(".sidemenu__list-item")
    .forEach((item) => item.classList.remove("active"));
  e.target.parentElement.classList.add("active");
}

function createNewBoard() {
  alert("creating new board");
}

function toggleDarkMode() {
  const element = document.querySelector(".view__toggle-btn");
  element.classList.toggle("dark-active");
  console.log(element.classList);
}

document
  .querySelector(".sidemenu__list")
  .addEventListener("click", setActiveLink);

document
  .querySelector(".add-task-btn")
  .addEventListener("click", createNewBoard);

document
  .querySelector(".view__toggle-btn")
  .addEventListener("click", toggleDarkMode);
