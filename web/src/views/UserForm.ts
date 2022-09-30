export class UserForm {
  constructor(public parent: Element | null) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
    };
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

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    if (this.parent) {
      this.parent.append(templateElement.content);
    }
  }
}
