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
    this.linklocale = "#";
    this.linkdetails = "More details";
    this.different = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      :host([different]) .card {
        background-color: #671b1b;
      }
      .card {
        margin: 5px;
        background-color: #595959;
        display: flex;
        box-shadow: 5px 5px 5px ;
        transition: .6s all ease-in-out;
        border-radius: 15px;
        padding: 25px;
        height: auto;
        width: 300px;
      }
      .card-img {
      margin-right: auto;
      margin-top: auto;
      height: 200px;
      width: 200px;
      display: block;
      border-radius: 10px;
      }
      .descriptbox {
      margin-top: 15px;
      margin-left: auto;
      margin-right: auto;
      padding: 10px;
      width: 250px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 2px 2px 2px inset; 
      }
      .linkdetails{
      margin-left: auto;
      margin-right: auto;
      }
      p {
        text-size-adjust: 15px;
      }
      `;
  }
// put this anywhere on the MyCard class; just above render() is probably good
openChanged(e) {
  console.log(e.newState);
  if (e.newState === "open") {
    this.different = true;
  }
  else {
    this.different = false;
  }
}
  render() {
    return html`
    <div class="card">
        <div class="cardcontent">
          <img class="card-img" src=${this.imagelink}>
          <div class="descriptbox">
            <h3 class="header">${this.title}</h3>
            <details ?open="${this.different}" @toggle="${this.openChanged}">
            <slot>
            </slot>
            <a target="_blank" class="linkdetails" id="detailbtn" rel="noopener noreferrer" href=${this.linklocale}
            @click=${this.clickhandler}>  
              ${this.linkdetails}
            </a>
            </details>
          </div>
        </div>
    </div>
    
    `;
  }
  static get properties() {
    return {
      title: { type: String },
      imagelink: { type: String },
      linklocale: { type: String },
      linkdetails: { type: String },
      different: {type: Boolean, reflect: true},
      // What reflect does is whenever the value of different changes, it will reflect that on the website.
    };
  }
  
}

globalThis.customElements.define(MyCard.tag, MyCard);

