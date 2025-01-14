import { appData } from "../../utlis/appData.js";

const addBoardModuleTemplate = document.createElement("template");
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'Src/components/addTaskModule./addTaskModule.css'; 

addBoardModuleTemplate.innerHTML = `
<section class="add__task-modal">
  <form class="form">
    <h2 class="form__header">Add New Board</h2>
    <div class="form__input">
      <label class="form__heading">Name</label>
      <input class="form__column-input" placeholder="e.g. Web Design" />
    </div>
    <div class="form__columns">
      <label class="form__heading"> Columns</label>
      <ul class="form__columns-list">
        <div class="form__columns-category">
          <li class="form__column--name">Todo</li>
          <svg class="form__delete" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12.728" width="3" height="18" transform="rotate(45 12.728 0)" fill="#828FA3" />
            <rect y="2.12109" width="3" height="18" transform="rotate(-45 0 2.12109)" fill="#828FA3" />
          </svg>

        </div>
        <div class="form__columns-category">
          <li class="form__column--name">Doing</li>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12.728" width="3" height="18" transform="rotate(45 12.728 0)" fill="#828FA3" />
            <rect y="2.12109" width="3" height="18" transform="rotate(-45 0 2.12109)" fill="#828FA3" />
          </svg>

        </div>

        <div class="form__columns-category">
          <li class="form__column--name">Done</li>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12.728" width="3" height="18" transform="rotate(45 12.728 0)" fill="#828FA3" />
            <rect y="2.12109" width="3" height="18" transform="rotate(-45 0 2.12109)" fill="#828FA3" />
          </svg>

        </div>
      </ul>
    </div>

    <div class="form__btns">
      <button class="secondary-btn btn create-column">+ Add New Column</button>
      <button class="primary-btn btn create-board">Save Changes</button>
    </div>
  </form>
</section>
`

export default class AddBoard{
    constructor(){
        this.rootElement = addBoardModuleTemplate.content.cloneNode(true)
        this.rootElement.querySelector(".create-board").addEventListener("click", this.createBoard)
        this.rootElement.querySelector(".create-column").addEventListener("click", this.createColumn)
    }

    createBoard(e){
      e.preventDefault()
      const newBoard = appData.createBoard({title: "New Board"})
      console.log(newBoard)
    }

    createColumn(e){
      e.preventDefault()
      const newColumn = appData.createColumn({title: "New Column"})
      console.log(newColumn)
    }

    render(){
        document.head.appendChild(link)
        return this.rootElement
    }
}