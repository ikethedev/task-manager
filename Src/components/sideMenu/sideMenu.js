const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "Src/components/sideMenu/sideMenu.css";
// import { createListItem } from "../../utlis/ulits";
import { sideBarState } from "../../utlis/sideBarState.js";
import AddBoard from "../addBoardModule/addBoardModule.js";
import { topBar } from "../topBar/topBar.js";
import { appData } from "../../utlis/appData.js";
import Card from "../card/card.js";

const sideMenuTemplate = document.createElement("template");
sideMenuTemplate.innerHTML = `
<aside class="sidemenu">
<header class="sidemenu__header">
  <picture>
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="6" height="25" rx="2" fill="#635FC7" />
      <rect opacity="0.75" x="9" width="6" height="25" rx="2" fill="#635FC7" />
      <rect opacity="0.5" x="18" width="6" height="25" rx="2" fill="#635FC7" />
    </svg>
    <svg width="114" height="26" viewBox="0 0 114 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.56001 24.9999V19.6559L7.48001 17.5439L11.928 24.9999H17.368L11.064 14.5679L17.4 7.52788H11.48L5.56001 13.8319V0.775879H0.76001V24.9999H5.56001ZM24.92 25.3839C27.096 25.3839 28.8453 24.7119 30.168 23.3679V24.9999H34.648V13.4799C34.648 12.2212 34.3333 11.1172 33.704 10.1679C33.0747 9.21855 32.1947 8.47721 31.064 7.94388C29.9333 7.41055 28.632 7.14388 27.16 7.14388C25.304 7.14388 23.6773 7.57055 22.28 8.42388C20.8827 9.27721 19.928 10.4292 19.416 11.8799L23.256 13.7039C23.5547 12.9359 24.0293 12.3172 24.68 11.8479C25.3307 11.3785 26.0827 11.1439 26.936 11.1439C27.832 11.1439 28.5413 11.3679 29.064 11.8159C29.5867 12.2639 29.848 12.8185 29.848 13.4799V13.9599L25.016 14.7279C22.9253 15.0692 21.368 15.7199 20.344 16.6799C19.32 17.6399 18.808 18.8559 18.808 20.3279C18.808 21.9065 19.3573 23.1439 20.456 24.0399C21.5547 24.9359 23.0427 25.3839 24.92 25.3839ZM24.376 21.4159C24.7813 21.7145 25.2827 21.8639 25.88 21.8639C27.0747 21.8639 28.0347 21.4905 28.76 20.7439C29.4853 19.9972 29.848 19.0905 29.848 18.0239V17.4799L25.88 18.1839C25.1973 18.3119 24.6747 18.5305 24.312 18.8399C23.9493 19.1492 23.768 19.5919 23.768 20.1679C23.768 20.7012 23.9707 21.1172 24.376 21.4159ZM42.968 24.9999V14.7919C42.968 13.7892 43.2667 12.9839 43.864 12.3759C44.4613 11.7679 45.2293 11.4639 46.168 11.4639C47.1067 11.4639 47.8747 11.7679 48.472 12.3759C49.0693 12.9839 49.368 13.7892 49.368 14.7919V24.9999H54.168V13.7679C54.168 12.4452 53.8907 11.2879 53.336 10.2959C52.7813 9.30388 52.008 8.53055 51.016 7.97588C50.024 7.42121 48.8667 7.14388 47.544 7.14388C46.4347 7.14388 45.4533 7.35188 44.6 7.76788C43.7467 8.18388 43.096 8.81855 42.648 9.67188V7.52788H38.168V24.9999H42.968ZM71.704 24.1679C70.36 24.9785 68.8347 25.3839 67.128 25.3839C66.0613 25.3839 65.064 25.2079 64.136 24.8559C63.208 24.5039 62.4347 23.9972 61.816 23.3359V24.9999H57.336V0.775879H62.136V8.99988C63.3733 7.76255 65.048 7.14388 67.16 7.14388C68.824 7.14388 70.328 7.54921 71.672 8.35988C73.016 9.17055 74.0827 10.2639 74.872 11.6399C75.6613 13.0159 76.056 14.5572 76.056 16.2639C76.056 17.9492 75.6667 19.4852 74.888 20.8719C74.1093 22.2585 73.048 23.3572 71.704 24.1679ZM66.552 21.0639C65.2507 21.0639 64.1893 20.6212 63.368 19.7359C62.5467 18.8505 62.136 17.6932 62.136 16.2639C62.136 14.8559 62.5467 13.7039 63.368 12.8079C64.1893 11.9119 65.2507 11.4639 66.552 11.4639C67.8747 11.4639 68.9627 11.9172 69.816 12.8239C70.6693 13.7305 71.096 14.8772 71.096 16.2639C71.096 17.6719 70.6693 18.8239 69.816 19.7199C68.9627 20.6159 67.8747 21.0639 66.552 21.0639ZM89.528 23.3679C88.2053 24.7119 86.456 25.3839 84.28 25.3839C82.4027 25.3839 80.9147 24.9359 79.816 24.0399C78.7173 23.1439 78.168 21.9065 78.168 20.3279C78.168 18.8559 78.68 17.6399 79.704 16.6799C80.728 15.7199 82.2853 15.0692 84.376 14.7279L89.208 13.9599V13.4799C89.208 12.8185 88.9467 12.2639 88.424 11.8159C87.9013 11.3679 87.192 11.1439 86.296 11.1439C85.4427 11.1439 84.6907 11.3785 84.04 11.8479C83.3893 12.3172 82.9147 12.9359 82.616 13.7039L78.776 11.8799C79.288 10.4292 80.2427 9.27721 81.64 8.42388C83.0373 7.57055 84.664 7.14388 86.52 7.14388C87.992 7.14388 89.2933 7.41055 90.424 7.94388C91.5547 8.47721 92.4347 9.21855 93.064 10.1679C93.6933 11.1172 94.008 12.2212 94.008 13.4799V24.9999H89.528V23.3679ZM85.24 21.8639C84.6427 21.8639 84.1413 21.7145 83.736 21.4159C83.3307 21.1172 83.128 20.7012 83.128 20.1679C83.128 19.5919 83.3093 19.1492 83.672 18.8399C84.0347 18.5305 84.5573 18.3119 85.24 18.1839L89.208 17.4799V18.0239C89.208 19.0905 88.8453 19.9972 88.12 20.7439C87.3947 21.4905 86.4347 21.8639 85.24 21.8639ZM102.328 14.7919V24.9999H97.528V7.52788H102.008V9.67188C102.456 8.81855 103.107 8.18388 103.96 7.76788C104.813 7.35188 105.795 7.14388 106.904 7.14388C108.227 7.14388 109.384 7.42121 110.376 7.97588C111.368 8.53055 112.141 9.30388 112.696 10.2959C113.251 11.2879 113.528 12.4452 113.528 13.7679V24.9999H108.728V14.7919C108.728 13.7892 108.429 12.9839 107.832 12.3759C107.235 11.7679 106.467 11.4639 105.528 11.4639C104.589 11.4639 103.821 11.7679 103.224 12.3759C102.627 12.9839 102.328 13.7892 102.328 14.7919Z" fill="#000112" />
    </svg>

  </picture>
</header>
<div class="sidemenu__platform">
  <header class="sidemenu__platform-header">
    <h2 class="sidemenu__platform-heading">ALL BOARDS</h2>
  </header>
  <ul class="sidemenu__list">
    <div class="sidemenu__list-items">
    </div>
  
    <li class="sidemenu__list-item platform__create-new">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="create__path" fill-rule="evenodd" clip-rule="evenodd" d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z" />
      </svg>

      <p class="sidemenu__add-item">+ Create New Board</p>
    </li>
  </ul>
  <div class="views__container">

  </div>
  <div class="sidemenu__toggle-hide">
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7923 8.76153C16.7538 10.5238 15.1854 11.941 13.3062 12.8081L14.8099 14.9563C14.9286 15.1259 14.8874 15.3598 14.7177 15.4785L14.0697 15.9322C13.9 16.051 13.6662 16.0097 13.5474 15.84L3.19013 1.04373C3.07135 0.874074 3.11263 0.64023 3.28229 0.521481L3.93032 0.067825C4.09998 -0.050956 4.33382 -0.00967486 4.45257 0.159981L6.18775 2.63888C7.08163 2.38573 8.02525 2.25001 9 2.25001C12.7456 2.25001 16.0311 4.24982 17.7923 7.23847C18.0692 7.7084 18.0692 8.2916 17.7923 8.76153ZM1.50001 8C2.99714 10.5406 5.79513 12.25 9 12.25C9.07946 12.2499 9.15892 12.2487 9.23834 12.2465L10.239 13.676C9.82784 13.7253 9.4141 13.75 9 13.75C5.25438 13.75 1.96889 11.7502 0.207702 8.76156C-0.069234 8.29163 -0.069234 7.7084 0.207702 7.23847C0.997544 5.89816 2.09379 4.75732 3.4001 3.90623L4.26076 5.13569C3.12813 5.86432 2.17986 6.84635 1.50001 8ZM8.52194 11.2231C6.00685 10.9415 4.26532 8.50791 4.86788 6.00303L8.52194 11.2231ZM9.74494 3.78104C12.6351 4.02282 15.1201 5.65835 16.5 8C15.5721 9.57456 14.1446 10.8297 12.4302 11.5566L11.596 10.3649C13.2731 9.06931 13.7072 6.7886 12.75 4.99869L12.75 5C12.75 5.9665 11.9665 6.75 11 6.75C10.0335 6.75 9.25 5.9665 9.25 5C9.25 4.52594 9.43881 4.09619 9.74494 3.78104Z" fill="#828FA3" />
    </svg>
    <p>Hide Sidebar</p>
  </div>
</div>
</aside>
`;

class SideMenu {
  constructor() {
    this.rootElement = sideMenuTemplate.content.cloneNode(true);

    // methods
    this.changeBoard = this.changeBoard.bind(this);
    this.createNewBoard = this.createNewBoard.bind(this);
    this.hideSideMenu = this.hideSideMenu.bind(this);
    this.selectActive = this.selectActive.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.replaceCurrentBoard = this.replaceCurrentBoard.bind(this);

    //event listeners
    this.rootElement
      .querySelector(".sidemenu__add-item")
      .addEventListener("click", this.createNewBoard);
    this.rootElement
      .querySelector(".sidemenu__toggle-hide")
      .addEventListener("click", this.hideSideMenu);
    this.rootElement
      .querySelector(".sidemenu__list")
      .addEventListener("click", this.selectActive);
    // this.rootElement
    //   .querySelector(".platform__create-new")
    //   .addEventListener("click", this.createNewBoard);

  }

  hideSideMenu() {
    const currentState = sideBarState.getSideBarState();
    sideBarState.setSideState(!currentState);

    if (currentState) {
      document.querySelector(".sidemenu").classList.remove("sidemenu__hide");
    } else {
      document.querySelector(".sidemenu").classList.add("sidemenu__hide");
    }
  }

  toggleDarkMode() {
    const element = document.querySelector(".view__toggle-btn");
    element.classList.toggle("dark-active");
    //remove
    alert("dark-mode toggled");
  }

  selectActive(e) {
    let currentId = e.target.dataset.id;
    console.log(appData.setCurrentBoard(currentId));
    const newBoardData = appData.getCurrentBoard();
    if (e.target.classList.contains("sidemenu__add-item")) return;
    if (e.target.parentElement.classList.contains("sidemenu__list-item")) {
      currentId = e.target.parentElement.dataset.id;
      appData.setCurrentBoard(currentId);
    }
    document.querySelectorAll(".sidemenu__list-item").forEach((listItem) => {
      listItem.classList.remove("active");
    });

    if (
      e.target.parentElement.classList.contains("sidemenu__list-item") ||
      e.target.classList.contains("sidemenu__list-item")
    ) {
      const listItem = e.target.closest(".sidemenu__list-item");
      if (listItem) {
        listItem.classList.add("active");
      }
    }

    this.replaceCurrentBoard(newBoardData);
  }

  replaceCurrentBoard(newBoardData) {
    const currentBoardId = appData.getCurrentBoard()?.id;
    if (!currentBoardId) {
      console.error("No board selected for replacement.");
      return;
    }

    // Replace the board data
    console.log(newBoardData);
    // Update the UI
    this.changeBoard(newBoardData);
  }

  changeBoard(newBoardData) {
    document.querySelector(".task__container").innerHTML = "";
    console.log("A Change is happening");
    const currentBoard = appData.getCurrentBoard();
    const taskBoardContainer = document.querySelector(".mainPage__task-board");
    topBar.setTopBarTitle(appData.getCurrentBoard().title);

    console.log(currentBoard.columns);

    // const taskList = document.createElement("ul");
    // taskList.classList.add("task-list");

    console.log(currentBoard);
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

  createNewBoard() {
    console.log("hhell")
    const addBoardModule = new AddBoard();
    document.querySelector(".mainPage").appendChild(addBoardModule.render());
    if(window.innerWidth < 768){
      document.querySelector(".sidemenu").style.display = "none"
    }
  }

  render() {
    document.head.appendChild(link);
    return this.rootElement;
  }
}

const sideMenu = new SideMenu();
export { sideMenu };
