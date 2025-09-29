import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static properties = {
    title: { type: String },
    fancy: { type: Boolean, reflect: true }
  };

  constructor() {
    super();
    this.title = 'Default Title';
    this.fancy = true; // all cards start fancy
  }

  openChanged(e) {
    if (e.target.hasAttribute('open')) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  static styles = css`
    :host {
      display: block;
      width: 320px;
      border-radius: 15px;
      overflow: hidden;
      background-color: #fefefe;
      border: 2px solid #00796b;
      box-shadow: 0 6px 15px rgba(0,0,0,0.3);
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    :host(:hover) {
      transform: translateY(-5px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.4);
    }

    :host([fancy]) {
      background-color: #e0f7fa; 
      border-color: #004d40;
      box-shadow: 0 8px 20px rgba(0,0,0,0.35);
    }

    h2 {
      font-size: 1.5rem;
      margin: 0;
      padding: 1rem;
      text-align: center;
      color: #004d40;
      background-color: #b2ebf2; 
    }

    img {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
      display: block;
    }

    details summary {
      font-size: 1rem;
      padding: 0.75rem 1rem;
      cursor: pointer;
      font-weight: 600;
      color: #004d40;
    }

    details[open] summary {
      font-weight: bold;
      color: #00796b;
    }

    details div {
      padding: 0.75rem 1rem;
      font-size: 0.95rem;
      line-height: 1.4;
      border-top: 1px solid #ccc;
      max-height: 120px;
      overflow-y: auto;
      color: #333;
    }

    ::slotted(p) {
      margin: 0;
    }
  `;

  render() {
    return html`
      <h2>${this.title}</h2>
      <img src="https://thoughtsfromthebench.com/wp-content/uploads/2020/11/sadpanda.jpg" alt="Sad Panda">
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot></slot>
        </div>
      </details>
    `;
  }
}

customElements.define('my-card', MyCard);

