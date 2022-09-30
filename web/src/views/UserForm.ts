export class UserForm {
  constructor(public parent: Element | null) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }

  onHeaderHover(): void {
    console.log('h1 was hovered');
  }

  onButtonClick(): void {
    console.log('Hello World!');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click Me!</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    if (this.parent) {
      this.parent.append(templateElement.content);
    }
  }
}
