// state manage in vanilla leveges the singleton pattern
class SidebarState{
    constructor(){
        this.state = {
            isSidebarOpen: false,
        }

        this.listeners = []
    }

    getSideBarState(){
        return this.state.isSidebarOpen;
    }

    setSideState(isOpen){
        this.state.isSidebarOpen = isOpen;
        this.notiftyListeners();
    }

    subscribe(listener){
        this.listeners.push(listener)
    }

    notiftyListeners(){
        this.listeners.forEach((listener) => listener(this.state));
    }
}

export default new SidebarState()