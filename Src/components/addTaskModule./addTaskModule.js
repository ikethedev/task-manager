import { appData } from "../../utlis/appData.js";

const addTaskModuleTemplate = document.createElement("template");
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'Src/components/addTaskModule./addTaskModule.css'; 


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
        <div class="form__columns-category">
          <li class="form__column--name">Todo</li>
          <svg class="delete-btn" class="form__delete" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12.728" width="3" height="18" transform="rotate(45 12.728 0)" fill="#828FA3" />
            <rect y="2.12109" width="3" height="18" transform="rotate(-45 0 2.12109)" fill="#828FA3" />
          </svg>

        </div>
        <div class="form__columns-category">
          <li class="form__column--name">Doing</li>
          <svg class="delete-btn" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12.728" width="3" height="18" transform="rotate(45 12.728 0)" fill="#828FA3" />
            <rect y="2.12109" width="3" height="18" transform="rotate(-45 0 2.12109)" fill="#828FA3" />
          </svg>

        </div>

        <div class="form__columns-category">
          <li class="form__column--name">Done</li>
          <svg class="delete-btn" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12.728" width="3" height="18" transform="rotate(45 12.728 0)" fill="#828FA3" />
            <rect y="2.12109" width="3" height="18" transform="rotate(-45 0 2.12109)" fill="#828FA3" />
          </svg>

        </div>
      </ul>
      <button class="secondary-btn btn create-subtask-btn">+ Add New Subtask</button>
    </div>

    <div class="form__status">
      <div class="form__current-status">
        <h3 class="form__current-heading">Current Status</h3>
        <div class="form__current-status-state">
          <p class="form__current-active-status">Doing</p>
          <svg class="form__current-icon" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.79834 1.54863L5.49682 6.24711L10.1953 1.54863" stroke="#635FC7" stroke-width="2" />
          </svg>

        </div>
        <ul class="form__status-options">
          <li class="form__status-option">Todo</li>
          <li class="form__status-option">Doing</li>
          <li class="form__status-option">Done</li>
        </ul>
      </div>
      <button class="primary-btn btn create-task-btn">Create Task</button>

    </div>
  </form>
</section>
`

export default class AddTaskModule{
    constructor(){
        this.rootElement = addTaskModuleTemplate.content.cloneNode(true)

        // methods
        this.createSubTask = this.createSubTask.bind(this)
        this.createTask = this.createTask.bind(this)
        this.addSubTaskFromInput = this.addSubTaskFromInput.bind(this)
        this.setTaskCurrentStatus = this.setTaskCurrentStatus.bind(this)
        this.showCurrentStatusOptions = this.showCurrentStatusOptions.bind(this)

        // event listeners
        this.rootElement.querySelector(".create-task-btn").addEventListener("click", this.createTask)
        this.rootElement.querySelector(".create-subtask-btn").addEventListener("click", this.createSubTask)
        this.rootElement.querySelector(".form__columns-list").addEventListener("click", this.deleteSubTask)
        this.rootElement.querySelector(".form__status").addEventListener("click", this.showCurrentStatusOptions)
        this.rootElement.querySelector(".form__status-options").addEventListener("click", this.setTaskCurrentStatus)
    }


    createTask(e){
        e.preventDefault()
        alert("Hello from create task")
        console.log(document.querySelector(".title").value)
        console.log(document.querySelector("#description").value)
      // add logic to give object access to the subtask 
        // document.querySelector(".mainPage").removeChild(document.querySelector(".add__task-modal"))
       
    }

    createSubTask(e){
        e.preventDefault()
        alert("subtask has been created")
        const input = this.createInputField();
        document.querySelector(".form__columns-list").appendChild(input)
    }

    createInputField() {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Enter column name";
      input.classList.add("form__columns-list");
  
      input.addEventListener("blur", () => {
        this.addSubTaskFromInput(input.value);
        input.remove(); // Remove the input field after use
      });
  
      return input;
    }

    addSubTaskFromInput(columnName) {
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

    showCurrentStatusOptions(){
      document.querySelector(".form__status-options").style.display = "flex"
    }

    setTaskCurrentStatus(e){
      e.stopPropagation()
      console.log(e.target.textContent)
      document.querySelector(".form__current-active-status").textContent = e.target.textContent
      document.querySelector(".form__status-options").style.display = "none"
        // if(e.currentTarget.classList.contains("form__status-option")){
        //   console.log(e.currentTarget.textContent)
        //   document.querySelector(".form__status").textContent = e.target.textContent
        //   document.querySelector(".form__status-options").style.display = "none"
        // }
    
    }



    deleteSubTask(e){
        if(e.target.classList.contains("delete-btn")){
            e.target.closest(".form__columns-category").remove()
        }
    }

    

    render(){
        document.head.appendChild(link)
        return this.rootElement
    }
} 