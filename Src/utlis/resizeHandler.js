export function resizeHandler() {
    const applyChanges = () => {
        let width = window.innerWidth;
        let sideBar = true;
        const addTaskBtn = document.querySelector(".add-task-btn");
        console.log(addTaskBtn)
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


   
    window.addEventListener("resize", applyChanges)
  };
  
  
//   window.addEventListener("resize", checkScreenSize);
