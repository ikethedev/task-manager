import { sideMenu } from "../../components/sideMenu/sideMenu.js";
import { topBar } from "../../components/topBar/topBar.js";


const mainPageTemplate = document.createElement("template");
mainPageTemplate.innerHTML = `
    <div class="mainPage">
        <div class="mainPage__topBar"></div>
        <div class="mainPage__sidemenu"></div>
        <div class="mainPage__content-container"></div>
    </div>
`

export default class Page{
    constructor(){
        this.rootElement = mainPageTemplate.content.cloneNode(true)
        this.body = document.querySelector("body");
    }

    render(){
        this.rootElement.querySelector(".mainPage__topBar").appendChild(topBar.render())
        this.rootElement.querySelector(".mainPage__sidemenu").appendChild(sideMenu.render())

        return this.rootElement
    }
}