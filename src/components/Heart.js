//import { html, css, LitElement } from "https://unpkg.com/lit-element/lit-element.js?module";
import React from 'react';

// HeartToggle Component Code
class HeartToggle extends React {
  

  constructor() {
    super();
    this.loved = false;
    this.addEventListener("click", this._onClick);
  }

  static get is() {
    return "heart-toggle";
  }
  
//   static get properties() {
//     return {
//       loved: {
//         type: Boolean,
//         reflect: true,
//       }
//     }
//   }

  static get styles() {
    return `
      :host {
          --icon-size: 16vw;
          display: block;
          width: var(--icon-size);
          height: var(--icon-size);
          cursor: pointer;
      }
      span {
        display: block;
        width: 100%;
        height: 100%;
        background-image: url(https://image.flaticon.com/icons/svg/929/929559.svg);
        background-size: 100% auto;
      }
      :host span::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: url(https://image.flaticon.com/icons/svg/929/929417.svg);
        opacity: 0;
        transition: opacity 0.4s;
      }
      :host([loved]) span::after {
        opacity: 1;
      }
    `;
  }

  render() {
    return `
      <span></span>
    `;
  }

  _onClick() {
    this.loved = !this.loved;
  }
}

export default HeartToggle;