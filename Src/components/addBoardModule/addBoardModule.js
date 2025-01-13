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
      <button class="secondary-btn btn">+ Add New Column</button>
      <button class="primary-btn btn">Save Changes</button>
    </div>
  </form>
</section>
`

export default class AddBoard{
    constructor(){
        this.rootElement = addBoardModuleTemplate.content.cloneNode(true)
    }

    render(){
        document.head.appendChild(link)
        return this.rootElement
    }
}