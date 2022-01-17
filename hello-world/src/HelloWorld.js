import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    // I know this super is important but have no idea what this is
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
    // I Understand this its just a counter
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>

      <button @click=${this.__increment}>increment</button>
    `;
  }
  // I dont understand why the page reads Hello owc world! when
  // this.title is 'Hey there'
}
