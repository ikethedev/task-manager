class AppData{
    constructor(){
        this.boards = []
        // ids are updated on current board and task click
        this.boardId = null;
        this.taskId = null;
    }

    createBoard({title, task = []} = {}){
        const board = {
            id: Math.random().toString(36).substr(2, 9),
            title,
            tasks: task,
        }
        this.boards.push(board)
        console.log(this.boards)
        return board; 
    }

    getBoardId(){

    }

    setBoardId(id){
        
    }

    getTaskId(){
        
    }

    setTaskId(id){
        
    }

    // this needs to push the task in the correct board
    createTask(title, taskDescription, subtasks = [], status = "todo"){
        const task = {
            id:  Math.random().toString(36).substr(2, 9),
            title,
            taskDescription,
            subtasks: subtasks,
            status: status
        }
        return task
    }

    // this needs to push the new subtask to the task with the same id
    createSubtask(title, isCompleted = false){
        const subtask = {
            id: Math.random().toString(36).substr(2, 9),
            title,
            isCompleted
        }
        return subtask
    }

    addSubtaskToTask(boardId, taskId, subtask){
        const board = this.boards.find(board => board.id === boardId)
        const task = board.tasks.find(task => task.id === taskId)
        task.subtasks.push(subtask)
    }

    addTaskToBoard(boardId, task){
        const board = this.boards.find(board => board.id === boardId)
        board.tasks.push(task)
    }

}

const appData = new AppData()
export { appData }