const deleteBoardModuleTemplate = document.createElement("template");
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'Src/components/deleteBoardModule/deleteBoardModule.css'; 

import { appData } from "../../utlis/appData.js";
import { topBar } from "../topBar/topBar.js";
deleteBoardModuleTemplate.innerHTML = `
  <div id="modal__delete-task" class="modal__delete-task">
    <h2 class="modal__delete-task-header">Delete this board?</h2>
    <p class="modal__delete-task-text">Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.
    </p>
    <div>
      <div class="modal__delete-task-btns">
        <button class="btn btn__danger">Delete</button>
        <button class="btn btn__cancel">Cancel</button>
      </div>
    </div>
`;


export default class DeleteBoardModule {
  constructor() {
    this.rootElement = deleteBoardModuleTemplate.content.cloneNode(true);
    this.deleteBoard = this.deleteBoard.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.rootElement
      .querySelector(".btn__danger")
      .addEventListener("click", this.deleteBoard);
    this.rootElement
      .querySelector(".btn__cancel")
      .addEventListener("click", this.cancelDelete);
  }

  deleteBoard() {
    // find current board id and remove it for the
    // array and my previous board the current
    console.log(appData.selectedBoardId)
    appData.boards = appData.boards.filter(
        (board) => board.id !== appData.selectedBoardId.id
    );
    console.log(appData.boards);
    this.updateSidebarMenuUI(appData.boards)
    this.clearBoardUI();

    document.querySelector(".modal__delete-task").remove();
  }

  clearBoardUI() {
    // Clear the board content
    const taskContainer = document.querySelector(".task__container");
    if (taskContainer) {
      taskContainer.innerHTML = `
                <div class="empty-board">
                    <p>No board selected. Create or select a new board to get started.</p>
                </div>
            `;
    }
    
    // Update the title to reflect no board selected
    topBar.setTopBarTitle("No Board Selected");
  }


  updateSidebarMenuUI(remainingBoards) {
    const sideMenuHTML = remainingBoards.map((board) => {
        return `
            <li class="sidemenu__list-item" data-id="${board.id}">
                <img src="Src/assets/boardIcon.svg">
                <p>${board.title}</p>
            </li>
        `;
    }).join(''); // Join the array into a string

    // Update the side menu with the new HTML
    const sideMenu = document.querySelector(".sidemenu__list-items");
        sideMenu.innerHTML = sideMenuHTML;
    
}

  cancelDelete() {
    document.querySelector(".modal__delete-task").remove();
  }

  render() {
    document.head.appendChild(link)
    return this.rootElement;
  }
}
