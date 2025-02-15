// To create this module go to the topbar component
import { appData } from "../../utlis/appData.js";
import {
  createInputField,
  createSubTaskComponent,
  createSubTaskElement,
} from "../../Scripts/utils.js";
import Card from "../card/card.js";
const addTaskModuleTemplate = document.createElement("template");
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "Src/components/addTaskModule./addTaskModule.css";

addTaskModuleTemplate.innerHTML = `
<section class="add__task-modal">
  <form class="form">
    <h2 class="form__header">Add New Task</h2>
    <div class="form__inputs">
      <div class="form__input-title">
        <label class="form__heading">Title</label>
        <input id="form__title" class="form__column-input title" placeholder="e.g. Take coffee break" />
      </div>
      <div  class="form__description">
        <label class="form__heading">Description</label>
        <textarea id="description" class="form__description-value" rows="4" cols="50" placeholder="Describe yourself here...">

</textarea>
      </div>
    </div>

    <div class="form__columns">
      <label class="form__heading"> Subtask </label>
      <ul class="form__columns-list">        
      </ul>
      <button class="secondary-btn btn add-subtask-btn">+ Add New Subtask</button>
    </div>

    <div class="form__status">
      <div class="form__current-status">
        <h3 class="form__current-heading">Current Status</h3>
        <div class="form__current-status-state">
          <p class="form__current-active-status">Select Status</p>
          <svg class="form__current-icon" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.79834 1.54863L5.49682 6.24711L10.1953 1.54863" stroke="#635FC7" stroke-width="2" />
          </svg>

        </div>
        <ul class="form__status-options hide">
        </ul>
      </div>
      <button class="primary-btn btn create-task-btn">Create Task</button>

    </div>
  </form>
</section>
`;

export default class AddTaskModule {
  constructor() {
    this.currentId = null;
    this.subtasks = []; // Temporary storage for subtasks
    console.log(appData.getCurrentBoard());
    this.rootElement = addTaskModuleTemplate.content.cloneNode(true);
    this.selectStatus = this.selectStatus.bind(this);
    this.createTask = this.createTask.bind(this);
    this.createSubTask = this.createSubTask.bind(this);
    this.populateStatusOptions = this.populateStatusOptions.bind(this);

    this.rootElement
      .querySelector(".create-task-btn")
      .addEventListener("click", this.createTask);
    this.rootElement
      .querySelector(".form__columns-list")
      .addEventListener("click", this.deleteSubTask);
      this.rootElement
      .querySelector(".form__current-status-state")
      .addEventListener("click", this.showStatusOptions);
    this.rootElement
      .querySelector(".form__status-options")
      .addEventListener("click", this.selectStatus);
    this.rootElement
      .querySelector(".add-subtask-btn")
      .addEventListener("click", this.createSubTask);

    this.populateStatusOptions();
  }

  showStatusOptions() {
    document.querySelector(".form__status-options").classList.toggle("hide");
  }

  selectStatus(e) {
    e.preventDefault();
    console.log(e.target);
    alert("hello");
    document.querySelector(".form__current-status-state").textContent =
      e.target.textContent;
    document.querySelector(".form__status-options").classList.toggle("hide");

    this.currentId = e.target.getAttribute("data-id");
    return this.currentId;
  }

  populateStatusOptions() {
    const statusOption = this.rootElement.querySelector(
      ".form__status-options"
    );
    statusOption.innerHTML = "";
    const currentBoard = appData.getCurrentBoard();
    console.log(currentBoard);
    currentBoard.columns.forEach((status) => {
      console.log(status);
      const listItem = document.createElement("li");
      listItem.setAttribute("data-id", status.id);
      listItem.setAttribute("data-status", status.status);
      listItem.classList.add("status")
      listItem.textContent = status.status;
      // listItem.addEventListener("click", this.selectStatus.bind(this));
      statusOption.appendChild(listItem);
    });
  }

  createTask(e) {
    e.preventDefault();
    console.log(this.currentId);
    const title = document.querySelector("#form__title").value;
    const description = document.querySelector("#description").value;

    const currentBoard = appData.getCurrentBoard();
    console.log(currentBoard);
    console.log(currentBoard.columns);
    // grab the current column from the board
    const targetColumn = currentBoard.columns.find(
      (column) => column.id === this.currentId

      // if (column.id === currentBoard.columns) {
      //   console.log(column);
      // }
    );

    console.log(targetColumn);

    // Create a new task with the temporary subtasks list
    const newTask = appData.createTask(
      title,
      description,
      this.subtasks,
      // targetColumn.status.toLowerCase()
      );

    targetColumn.tasks.push(newTask);

    // Clear the modal after task creation
    document
      .querySelector(".mainPage")
      .removeChild(document.querySelector(".add__task-modal"));

    // Re-render the columns
    document.querySelector(".task__container").innerHTML = "";
    currentBoard.columns.forEach((col) => {
      const columnSection = document.createElement("section");
      columnSection.classList.add("board-column");
      columnSection.setAttribute("data-id", col.id);
      console.log(columnSection);
      console.log(col);

      const column = document.createElement("div")
      column.classList.add("columns");

      const columnHeader = document.createElement("h3");
      columnHeader.classList.add("columns__header-heading");
      columnHeader.textContent = col.status;
      column.appendChild(columnHeader);
      columnSection.appendChild(column)
      // Create the task list for the column
      const taskList = document.createElement("ul");
      taskList.classList.add("task-list");
      taskList.setAttribute("data-column-id", col.id);

      if (Array.isArray(col.tasks)) {
        col.tasks.forEach((task) => {
          console.log(task)
          const card = new Card();
          card.setHeader(task.title);
          card.setTaskId(task.id);
          taskList.appendChild(card.render());
          console.log(taskList);
        });

        console.log(taskList);
        // // Append the column section to the task container
        column.appendChild(taskList)

        document.querySelector(".task__container").appendChild(columnSection);
      }
    });
  }

  createSubTask(e) {
    e.preventDefault();
    createSubTaskComponent(
      ".form__columns-list", // Container selector where subtasks are displayed
      [{ subtasks: this.subtasks, status: false }], // Pass the current temporary task with subtasks
      "Enter subtask name" // Placeholder text for the input field
    );
  }

  deleteSubTask(e) {
    if (e.target.classList.contains("delete-btn")) {
      e.target.closest(".form__columns-category").remove();
    }
  }

  render() {
    document.head.appendChild(link);
    return this.rootElement;
  }
}
