class AppData{
    constructor(){
        this.boards = []
    }

    createBoard({title, task = []} = {}){
        const board = {
            id: Math.random().toString(36).substr(2, 9),
            title,
            task,
        }
        this.boards.push(board)
        console.log(this.boards)
    }

    createTask(title, taskDescription, subtasks = [], status = "todo"){
        const task = {
            id:  Math.random().toString(36).substr(2, 9),
            title,
            d, taskDescription,
            subtasks: subtasks,
            status: status
        }
        return task
    }

}

const appData = new AppData()
export { appData }