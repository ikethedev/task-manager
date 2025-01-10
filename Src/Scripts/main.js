import Application from "../Scripts/app.js";
import Card from "../components/card/card.js";
import Page from "../pages/homePage/homePage.js";

import appFacade from "../facade/appFacade.js";

appFacade;

class MainPage {
    constructor(){
        this.rootElement = document.createElement("div");
        this.body = document.querySelector("body");
    }

    render(){
        const page = new Page()
        this.body.replaceChildren(page.render())
        return this.rootElement;
    }
   
}

const app = new Application()
const homePage = new MainPage()
app.setRootView(homePage)