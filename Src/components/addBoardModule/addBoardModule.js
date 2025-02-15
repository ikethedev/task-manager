import { appData } from "../../utlis/appData.js";
import { topBar } from "../topBar/topBar.js";

const addBoardModuleTemplate = document.createElement("template");
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "Src/components/addTaskModule./addTaskModule.css";

addBoardModuleTemplate.innerHTML = `
<section class="add__task-modal">
  <form class="form">
    <h2 class="form__header">Add New Board</h2>
    <div class="form__input">
      <label class="form__heading">Name</label>
      <input class="form__board-name" placeholder="e.g. Web Design" />
    </div>
    <div class="form__columns">
      <label class="form__heading">Columns</label>
      <ul class="form__columns-list">
        <div class="form__columns-category">
          <li class="form__column--name">Todo</li>
          <img src="Src/assets/remove.svg" class="remove-column" alt="remove column" />
      </div>
        <div class="form__columns-category">
          <li class="form__column--name">Doing</li>
          <img src="Src/assets/remove.svg" class="remove-column" alt="remove column" />
        </div>
        <div class="form__columns-category">
          <li class="form__column--name">Done</li>
          <img src="Src/assets/remove.svg" class="remove-column" alt="remove column" />
        </div>
      </ul>
    </div>

    <div class="form__btns">
      <button class="secondary-btn btn create-column">+ Add New Column</button>
      <button class="primary-btn btn create-board">Save Changes</button>
    </div>
  </form>
</section>
`;

export default class AddBoard {
  constructor() {
    this.rootElement = addBoardModuleTemplate.content.cloneNode(true);
    // methods
    this.createBoard = this.createBoard.bind(this);
    this.createColumn = this.createColumn.bind(this);
    this.addColumnFromInput = this.addColumnFromInput.bind(this);

    // event listener
    this.rootElement
      .querySelector(".create-board")
      .addEventListener("click", this.createBoard);
    this.rootElement
      .querySelector(".create-column")
      .addEventListener("click", this.createColumn);
    this.rootElement
      .querySelector(".form__columns")
      .addEventListener("click", this.removeColumn);
  }

  createBoard(e) {
    e.preventDefault();
    const name = document.querySelector(".form__board-name").value;
    const columnElements = document.querySelectorAll(".form__column--name")

    topBar.setTopBarTitle(name);

    const columns = Array.from(columnElements).map(column => ({
      id: Math.random().toString(36).substr(2, 9), // Generate unique IDs for columns
      status: column.textContent.trim(),
      tasks: []
    }));
  
    const newBoard = appData.createBoard({title: name, columns });
    const sideMenuList = document.querySelector(".platform__create-new");

    const listItem = document.createElement("li");
    listItem.classList.add("sidemenu__list-item");
    listItem.setAttribute("data-id", newBoard.id);
    const boardImg = document.createElement("img");
    boardImg.src = "Src/assets/boardIcon.svg";
    const boardName = document.createElement("p");
    boardName.textContent = newBoard.title;
    listItem.appendChild(boardImg);
    listItem.appendChild(boardName);
  
    document.querySelector(".sidemenu__list-items").appendChild(listItem);
    console.log(newBoard);

    document.querySelector(".task__container").innerHTML = "";

    
    columns.forEach(column => {
 
      const columnSection = document.createElement("section");
      columnSection.classList.add("columns");
      columnSection.setAttribute("data-id", column.id);
  
      const columnHeader = document.createElement("h3");
      columnHeader.classList.add("columns__header-heading");
      columnHeader.textContent = column.status;
  
      const columnTasks = document.createElement("ul");
      columnTasks.classList.add("task-list");
      columnTasks.setAttribute("data-column-id", column.id);
  
      columnSection.appendChild(columnHeader);
      columnSection.appendChild(columnTasks);
  
      document.querySelector(".task__container").appendChild(columnSection);
    });
  
    document.querySelector(".add__task-modal").remove();

  }

  removeColumn(e) {
    console.log(e.target);
    if (e.target.classList.contains("remove-column")) {
      e.target.parentElement.remove();
    }
  }

  createInputField() {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter column name";
    input.classList.add("add-column-input");
    input.classList.add("form__column--name");
    input.style.marginTop = "10px";


    input.addEventListener("blur", () => {
      this.addColumnFromInput(input.value);
      input.remove(); // Remove the input field after use
    });

    return input;
  }

  createColumn(e) {
    e.preventDefault();
    const input = this.createInputField();
    document.querySelector(".form__columns").appendChild(input);
  }

  addColumnFromInput(columnName) {
    if (!columnName.trim()) {
      console.error("Column name cannot be empty.");
      return;
    }

    const columnDiv = document.createElement("div");
    columnDiv.classList.add("form__columns-category");

    const columnLi = document.createElement("li");
    columnLi.classList.add("form__column--name");
    columnLi.textContent = columnName;

    const removeImg = document.createElement("img");
    removeImg.src = "Src/assets/remove.svg";
    removeImg.classList.add("remove-column");
    removeImg.alt = "remove column";

    columnDiv.appendChild(columnLi);
    columnDiv.appendChild(removeImg);

    document.querySelector(".form__columns-list").appendChild(columnDiv);
  }

  render() {
    document.head.appendChild(link);
    return this.rootElement;
  }
}
