const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'Src/components/taskBoard/taskBoard.css'; 

const taskBoardTemplate = document.createElement("template");
taskBoardTemplate.innerHTML = `
<div class="task__container">
  <section class="columns">
  </section>
</div>
`;

class TaskBoard {
  constructor() {
    this.rootElement = taskBoardTemplate.content.cloneNode(true);
  }

  render() {
    document.head.appendChild(link);
    return this.rootElement;
  }
}

const taskBoard = new TaskBoard();
export { taskBoard };
