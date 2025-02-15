import EditBoard from "../editBoardModule/editBoardModule.js";
import DeleteBoardModule from "../deleteBoardModule/deleteBoardModule.js";
import { appData } from "../../utlis/appData.js";
const editBoardOptionsTemplate = document.createElement("template");
editBoardOptionsTemplate.innerHTML = `
    <ul class="board-options">
        <li class="edit-board"><a href="#">Edit Board</a></li>
        <li class="delete-board"><a href="#">Delete Board</a></li>
    </ul>
`

 class EditBoardOptions {
    constructor() {
        this.rootElement = editBoardOptionsTemplate.content.cloneNode(true);
        this.deleteBoard = this.deleteBoard.bind(this);
        this.editBoard = this.editBoard.bind(this);
        this.rootElement.querySelector(".edit-board").addEventListener("click", this.editBoard.bind(this));
        this.rootElement.querySelector(".delete-board").addEventListener("click", this.deleteBoard.bind(this));
    }

    editBoard() {
        console.log("Edit Board");
        const editBoard = new EditBoard();
        document.querySelector(".mainPage").appendChild(editBoard.render());
        document.querySelector(".board-options").remove();
    }

    deleteBoard() {
        const deleteBoard = new DeleteBoardModule();
        document.querySelector(".mainPage").appendChild(deleteBoard.render());
        document.querySelector(".board-options").remove();
    }
    
    render() {
        return this.rootElement;
    }
}

export { EditBoardOptions };

