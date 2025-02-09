import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "The card title";
    this.imagelink = "https://safesendsoftware.com/wp-content/uploads/2016/06/Human-Error.jpg";
    this.description = "A description of the card";
    this.linklocale = "#";
    this.linkdetails = "More details";
    this.backgroundcolor = css `green`;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card {
        margin: 5px;
        background-color: red;
        display: inline-flex;
        box-shadow: 5px 5px 5px ;
        transition: .6s all ease-in-out;
        border-radius: 15px;
      }
      .card2 {
      background-color: #802000;
      display: inline-flex;
      }
      .card-img {
      margin: 15px;
      height: 150px;
      display: block;
      }
      .descriptbox {
      margin-right: 20px;
      margin-left: 20px;
      margin-bottom: 20px;
      padding: 10px;
      width: 250px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 2px 2px 2px inset; 
      }
      .linkdetails{
      margin-left: 90px;
      }
      `;
  }

  render() {
    return html`
    <div class="card">
        <div class="cardcontent">
          <img class="card-img" src=${this.imagelink}>
          <div class="descriptbox">
            <h3 class="header">${this.title}</h3>
            <p>  ${this.description}
            </p>
            <a class="linkdetails" href=${this.linklocale}>
              ${this.linkdetails}
            </a>
          </div>
        </div>
    </div>
    
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      imagelink: { type: String },
      description: { type: String },
      linklocale: { type: String },
      linkdetails: { type: String },
      backgroundcolor: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);


// Making buttons work is hard. I could not do dat yet.