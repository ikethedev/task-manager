import EditTaskModule from "../editTaskModule/editTaskModule.js";
const cardTemplate = document.createElement("template");
cardTemplate.innerHTML = `
        <div class="column__cards">
            <div class="card">
            <p class="card__header">Build UI for onboarding flow</p>
            </div>
        </div>
      
    
`;

export default class Card{
    constructor(){
        this.rootElement = cardTemplate.content.cloneNode(true);
        this.rootElement.querySelector(".card").addEventListener("click", this.editTask);
    }

    setHeader(header){
        console.log(header)
        this.rootElement.querySelector(".card__header").textContent = header;
    }

    // setSubTask(subtask){
    //     this.rootElement.querySelector(".card__subheader").innerText = subtask;
    // }

    setTaskId(id){
        this.rootElement.querySelector(".card").setAttribute("data-task-id", id);
    }

    editTask(e){
        const taskId = e.target.closest(".card").dataset.taskId; // Get Task ID
        console.log(taskId)
        console.log("Editing Task ID:", taskId);

        const editModule = new EditTaskModule();
        editModule.setCurrentTaskId(taskId);
        editModule.getCardData(e)
        
        document.body.appendChild(editModule.render());
        alert("Card clicked")
    }

    render(){
        return this.rootElement
    }
}

