import Application from "../components/app.js";
import Card from "../components/card.js";
import Page from "../components/homePage.js";

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