export default class Application {
	constructor() {
		this.rootElement = document.createElement('div');
	}
	render(el) {
		el.replaceChildren(this.rootElement);
        console.log("hello this is starting")
		return this.rootElement;
	}
	
	setRootView(view) {
        console.log(view)
        console.log(this.rootElement.children)
		this.rootElement.replaceChildren(view.render());
		this.rootView = view;
	}
}
