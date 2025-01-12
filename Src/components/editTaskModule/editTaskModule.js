const editTaskModuleTemplate = document.createElement("template");
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'Src/components/editTaskModule/editTaskModule.css'; 

editTaskModuleTemplate.innerHTML = `
<section class="edit__task-modal">
<form class="form">
  <h2 class="form__header">Edit Task</h2>
  <div class="form__inputs">
    <div class="form__input-title">
      <label class="form__heading">Title</label>
      <input class="form__column-input" placeholder="e.g. Take coffee break" />
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
    <button class="secondary-btn btn">+ Add New Subtask</button>
  </div>

  <div class="form__status">
    <div class="form__current-status">
      <h3 class="form__current-heading">Status</h3>
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
    <button class="primary-btn btn">Save Changes</button>

  </div>
</form>
</section>
`

export default class EditTaskModule{
    constructor(){
        this.rootElement = editTaskModuleTemplate.content.cloneNode(true)
    }

    render(){
        return this.rootElement
    }
}