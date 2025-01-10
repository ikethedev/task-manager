import { resizeHandler } from "../utlis/resizeHandler.js"

class AppFacade {
    constructor(){
        document.addEventListener("DOMContentLoaded", () => {
            console.log("DOM fully loaded. Initializing app.");
            this.initResizeListener();
        });
    }

    initResizeListener(){
        resizeHandler()
    }
}


export default new AppFacade()