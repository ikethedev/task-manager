function createInputField(placeholder, inputClass, blurCallback) {
  const input = document.createElement("input");
  input.classList.add(".form__board-name")
  input.type = "text";
  input.placeholder = placeholder || "Enter text";
  input.classList.add(inputClass || "default-input-class");

  input.addEventListener("blur", () => {
    if (blurCallback) blurCallback(input.value);
    input.remove(); // Remove the input field after use
  });

  return input;
}

function createSubTaskComponent(
  containerSelector,
  currentCard,
  inputPlaceholder = "Enrer subtask name"
) {
    const container = document.querySelector(containerSelector);

  const subTaskComponent = document.createElement("div");
  subTaskComponent.classList.add("sub-task-component");

  const input = createInputField(
    inputPlaceholder,
    "form__board-name",
    (subtaskName) => {
      if (!subtaskName.trim()) {
        alert("Subtask name is required");
        return;
      }

      const subtaskDiv = document.createElement("div");
      subtaskDiv.classList.add("form__columns-category");
      
      const subtaskLi = document.createElement("li");
      subtaskLi.classList.add("form__column--name");
      subtaskLi.textContent = subtaskName;

      const deleteBtn = document.createElement("img");
      deleteBtn.src = "Src/assets/remove.svg";
      deleteBtn.alt = "Delete Subtask";
      deleteBtn.classList.add("form__delete");
  
      subtaskDiv.appendChild(subtaskLi);
      subtaskDiv.appendChild(deleteBtn);
      container.appendChild(subtaskDiv);
      console.log(currentCard)
      currentCard.subtasks.push({ name: subtaskName });
      console.log("Updated subtasks:", currentCard.subtasks);
    }

  );
  container.appendChild(input);
}

export function createSubTaskElement(subtaskName) {
    // Create the main container div
    const subTaskDiv = document.createElement("div");
    subTaskDiv.classList.add("form__columns-category");
  
    // Create the subtask name <li> element
    const subTaskLi = document.createElement("li");
    subTaskLi.classList.add("form__column--name");
    subTaskLi.textContent = subtaskName;
  
    // Create the delete button as an <img> element
    const deleteBtn = document.createElement("img");
    deleteBtn.src = "Src/assets/remove.svg"; // Path to your remove.svg asset
    deleteBtn.alt = "Delete Subtask";
    deleteBtn.classList.add("delete-btn");
  
    // Append the <li> and <img> elements to the container div
    subTaskDiv.appendChild(subTaskLi);
    subTaskDiv.appendChild(deleteBtn);
  
    return subTaskDiv;
  }

  export function showStatusOptions() {
    document.querySelector(".form__status-options").classList.toggle("hide");
  }
  

export { createInputField, createSubTaskComponent };
