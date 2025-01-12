import {sideBarState} from "./sideBarState.js";

console.log(sideBarState)
document.querySelector(".sidemenu__toggle-hide").addEventListener("click", () => {
        let currentState = sideBarState.getSideBarState();
        sideBarState.setSideState(!currentState)
        
        if(currentState === true){
            document.querySelector(".sidemenu").classList.add("sidemenu__hide")
        }
    }
)