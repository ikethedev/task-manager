import { appData } from "../../utlis/appData.js";
import Card from "../card/card.js";
import {
  createInputField,
  createSubTaskComponent,
  createSubTaskElement,
  showStatusOptions,
} from "../../Scripts/utils.js";
const editTaskModuleTemplate = document.createElement("template");
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "Src/components/editTaskModule/editTaskModule.css";

editTaskModuleTemplate.innerHTML = `
<section class="edit__task-modal">
<form class="form">
  <h2 class="form__header">Edit Task</h2>
  <div class="form__inputs">
    <div class="form__input-title">
      <label class="form__heading">Title</label>
      <h1 class="form__task-name">Hello from edit module</h1>
    </div>
    <div class="form__description">
      <label class="form__heading">Description</label>
      <textarea class="form__description-value" rows="4" cols="50" placeholder="Describe yourself here...">
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
      <h3 class="form__current-heading">Status</h3>
      <div class="form__current-status-state">
        <p class="form__current-active-status">Todo</p>
        <svg class="form__current-icon" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.79834 1.54863L5.49682 6.24711L10.1953 1.54863" stroke="#635FC7" stroke-width="2" />
        </svg>

      </div>
      <ul class="form__status-options hide">
     
      </ul>
    </div>
    <button class="primary-btn btn save-task-btn">Save Changes</button>

  </div>
</form>
</section>
`;

export default class EditTaskModule {
  constructor() {
    this.currentCard = null;
    this.currentId = null;
    this.currentTaskId = null;
    this.rootElement = editTaskModuleTemplate.content.cloneNode(true);
    this.setEditModuleStatus = this.setEditModuleStatus.bind(this);
    this.getCurrentCard = this.getCurrentCard.bind(this);
    this.createSubTask = this.createSubTask.bind(this);
    this.showStatusOptions = this.showStatusOptions.bind(this);
    this.selectStatus = this.selectStatus.bind(this);

    this.rootElement
      .querySelector(".add-subtask-btn")
      .addEventListener("click", this.createSubTask);
    this.rootElement
      .querySelector(".save-task-btn")
      .addEventListener("click", this.saveTaskChanges);
    this.rootElement
      .querySelector(".form__current-status-state")
      .addEventListener("click", this.showStatusOptions);
    this.rootElement
      .querySelector(".form__status-options")
      .addEventListener("click", this.selectStatus);

    this.populateStatusOptions();
  }

  getCardData(e) {
    const data = appData.getCurrentBoard();
    const currentColumn = data.columns.filter(
      (column) => column.id === e.target.closest(".board-column").dataset.id
    );
    console.log(currentColumn);
    const currentCard = currentColumn[0].tasks.filter(
      (task) => {
        console.log(task.id);
        console.log(e.target.dataset.taskId);
        if(task.id === e.target.dataset.taskId){
          return task
        }}
    );
    this.setEditModuleTask(currentCard[0]);
    this.setEditModuleSubTasks(e);

    return currentCard;
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
      listItem.textContent = status.status;
      // listItem.addEventListener("click", this.selectStatus.bind(this));
      statusOption.appendChild(listItem);
    });
  }

  setCurrentTaskId(taskId) {
    this.currentTaskId = taskId;

  }

  showStatusOptions(e) {
    document.querySelector(".form__status-options").classList.toggle("hide");
  }

  setCurrentCard(card) {
    this.currentCard = card;
    console.log(this.currentCard);
  }

  getCurrentCard() {
    return this.currentCard;
  }

  getCurrentColumn() {
    return this.currentColumn;
  }

  setEditModuleTask(task) {
    console.log(task.title);

    this.rootElement.querySelector(".form__task-name").textContent = task.title;
  }

  setEditModuleSubTasks(e) {
    const data = appData.getCurrentBoard();
    const currentColumn = data.columns.find(
      (column) => {
        if(column.id === e.target.closest(".board-column").dataset.id){
          return column
        }
      }
    );
    console.log(currentColumn)
    console.log(this.currentTaskId)

    const currentCard = currentColumn.tasks.find(
      (task) => {
        console.log(task.id) // logs the current id
       
        if(task.id === this.currentTaskId){
          return task
        }
      }
    );
    console.log(currentCard)
    // find current board, column and card
    this.setEditModuleTask(currentCard)

    currentCard.subtasks.forEach((subtasks) => {
      const subTaskElement = createSubTaskElement(subtasks.name);
      this.rootElement
        .querySelector(".form__columns-list")
        .appendChild(subTaskElement);
    });
    this.setCurrentCard(currentCard);
  }

  selectStatus(e) {
    e.preventDefault();
    console.log(e.target);
    alert("hello");
    document.querySelector(".form__current-status-state").textContent =
      e.target.textContent;
    document.querySelector(".form__status-options").classList.toggle("hide");
    
    this.currentId = e.target.getAttribute("data-id");
    console.log(this.currentId);
    this.setEditModuleStatus(e);
    return this.currentId;
  }


  setEditModuleStatus(e) {
    const newStatusId = e.target.dataset.id; // Get the selected status
    const currentCard = this.currentCard[0]; // Get the task being edited
    const currentBoard = appData.getCurrentBoard(); // Get the current board data
    const columns = currentBoard.columns; // Get the columns array from the board data
    
    for (const group of currentBoard.columns) {
      console.log(`Status: ${group.status}`);
      for (const task of group.tasks) {
        console.log(this.currentId)
        console.log(this.currentTaskId)
        console.log(group)
        console.log(task.id)
        console.log(`- Task: ${task.title}`);
      }
    }
   
    columns.forEach(cols =>{ 
      if(cols.id === this.currentId){
        console.log(cols)
      }
  
      cols.tasks.forEach((task) => {
        console.log(this.currentTaskId)
        if(task.id === this.currentTaskId){
          const oldStatus = task.status
          const newStatus = e.target.dataset.status
          console.log(newStatus)
        
          if(oldStatus !== newStatus){
            const [movedTask] = cols.tasks.splice(cols.tasks.indexOf(task), 1)

            movedTask.status = newStatus;

            const newCol = columns.find(col => col.status === newStatus);
            console.log(columns)

            if(newCol){
              newCol.tasks.push(movedTask)
            }

            console.log(movedTask)
          }

    
          console.log(task)
          console.log(oldStatus)
        }
       
        // console.log
        // if(task.id === this.currentId){
        //   console.log(task)
        // }
      })
    })


    // remove the card from the current column
    // find the column that the card is in

    // find new column where task should be move

    //update CurrentCard status
    // use the status to psh into the correct column and rerender the page

    document.querySelector(".task__cointainer").innerHTML = "";
    this.saveTaskChanges(e)
    console.log(`Moved task to ${newColumn.status}`);

  }

  createSubTask(e) {
    e.preventDefault();
    const currentCard = this.getCurrentCard();
    console.log(createInputField);
    createSubTaskComponent(
      ".form__columns-list",
      currentCard,
      "Enter subtask name"
    );
  }

  saveTaskChanges(e) {
    e.preventDefault();
    const currentBoard = appData.getCurrentBoard();
    console.log(currentBoard);
    document.querySelector(".edit__task-modal").remove();

    // Re-render the columns
    document.querySelector(".task__container").innerHTML = "";
    console.log(currentBoard.columns);
    currentBoard.columns.forEach((column) => {
      const columnSection = document.createElement("section");
      columnSection.classList.add("board-column");
      columnSection.setAttribute("data-id", column.id);

      const columnHeader = document.createElement("h3");
      columnHeader.classList.add("column-header");
      columnHeader.textContent = column.status;
      columnSection.appendChild(columnHeader);

      const taskList = document.createElement("ul");
      taskList.classList.add("task-list");
      taskList.setAttribute("data-column-id", column.id);

      if (Array.isArray(column.tasks)) {
        column.tasks.forEach((task) => {
          const id = Math.random().toString(36).substr(2, 9);
          const card = new Card(id);
          card.setHeader(task.title);
          card.setTaskId(task.id);

          // Add subtasks to the card

          taskList.appendChild(card.render());
        });
      }

      columnSection.appendChild(taskList);
      document.querySelector(".task__container").appendChild(columnSection);
    });
    alert("task saved");
  }

  render() {
    document.head.appendChild(link);
    return this.rootElement;
  }
}
