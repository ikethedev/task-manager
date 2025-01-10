

const cardTemplate = document.createElement("template");
cardTemplate.innerHTML = `
    <div class="task__container">
        <section class="columns">
        <div class="columns__header">
            <div class="status__color"></div>
            <h3 class="columns__header-heading">TODO (4)</h3>
        </div>
        <div class="column__cards">
            <div class="card">
            <p class="card__header">Build UI for onboarding flow</p>
            <p class="card__subheader">0 of 3 substasks</p>
            </div>
        </div>
        </section>
    </div>
`;

export default class Card{
    constructor(){
        this.rootElement = cardTemplate.content.cloneNode(true);
    }

    render(){
        this.rootElement
    }
}

