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
      border-radius: 12px;
      overflow: hidden;
      background-color: #ffffff;
      border: 2px solid #ccc;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      cursor: pointer;
    }

    :host([fancy]) {
      background-color: #ffe0e0; /* soft red for drama */
      border-color: #ff4d4d;
      box-shadow: 0 8px 20px rgba(255,0,0,0.4);
    }

    h2 {
      margin: 0;
      padding: 1rem;
      text-align: center;
      background: linear-gradient(90deg, #ff9999, #ff4d4d);
      color: #fff;
      font-size: 1.4rem;
    }

    img {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
      display: block;
      border-bottom: 2px solid #ccc;
    }

    details summary {
      padding: 0.75rem 1rem;
      font-weight: bold;
      color: #333;
      cursor: pointer;
      background-color: #f4f4f4;
    }

    details[open] summary {
      background-color: #ffcccc;
      color: #900;
    }

    details div {
      padding: 0.75rem 1rem;
      border-top: 1px solid #ccc;
      max-height: 120px;
      overflow-y: auto;
      font-size: 0.95rem;
      line-height: 1.4;
      color: #222;
    }

    ::slotted(p) {
      margin: 0;
    }

    :host(:hover) {
      transform: translateY(-5px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.35);
    }
  `;

  render() {
    return html`
      <h2>${this.title}</h2>
      <img src="https://thoughtsfromthebench.com/wp-content/uploads/2020/11/sadpanda.jpg" 
           alt="Sad Panda" 
           onerror="this.onerror=null;this.src='https://imgflip.com/s/meme/Yall-Got-Any-More-Of-That.jpg';">
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
