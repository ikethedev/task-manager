import { sideBarState } from "./sideBarState.js";

export function resizeHandler() {
    const applyChanges = () => {
        console.log("running");
        let width = window.innerWidth;
        let sideBar = !sideBarState.getSideBarState();
        const addTaskBtn = document.querySelector(".add-task-btn");
        console.log(sideBar);
        // Ensure the button exists before modifying it
        if (!addTaskBtn) {
            console.warn("Add Task Button not found. Delaying execution.");
            setTimeout(applyChanges, 100); // Retry after 100ms if DOM isn't ready
            return;
        }

        if (width < 768) {
            document.querySelector(".sidemenu").style.display = "none";
            document.querySelector("#nav__logo").style.display = "none";
            document.querySelector(".nav__logo-mobile").style.display = "block";
            document.querySelector(".nav__arrow").style.display = "block";;
            addTaskBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.368 12V7.344H12V4.632H7.368V0H4.656V4.632H0V7.344H4.656V12H7.368Z" fill="white"/>
            </svg>`;
        } else {
            document.querySelector(".nav__logo-mobile").style.display = "none";
            document.querySelector(".nav__arrow").style.display = "none";

            if (sideBar) {
                document.querySelector("#nav__logo").style.display = "none";
                document.querySelector(".sidemenu").style.display = "block";
            } else {
              document.querySelector("#nav__logo").style.display = "block";
              document.querySelector(".sidemenu").style.display = "none";
            }
            document.querySelector("#nav__logo").classList.remove("hide");
            addTaskBtn.innerHTML = `<p> + Add New Task</p>`;
        }
    };

     // Subscribe to sidebar state changes
     sideBarState.subscribe((newState) => {
      console.log("Sidebar state changed:", newState);
      applyChanges(); // Apply the changes whenever the sidebar state changes
  });

    // Use requestAnimationFrame to ensure execution happens after DOM rendering
    requestAnimationFrame(() => {
        applyChanges();
        window.addEventListener("resize", applyChanges);
    });
}

// Ensure it runs when the DOM is fully ready
document.addEventListener("DOMContentLoaded", resizeHandler);
document.addEventListener("resize", resizeHandler);
