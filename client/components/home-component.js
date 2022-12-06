import { sharedStyles } from './shared-styles.js';
import {LitElement, html, css} from 'lit';


function getJson(url) {
  return new Promise((resolve, reject) => {
    function reqListener () {
      resolve(JSON.parse(this.responseText))
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", url);
    oReq.send();
  })
}

class HomeComponent extends LitElement {

  static get styles() {
    return [
      sharedStyles,
      css`
        li {
          font-size: 50px !important;
          margin: 0px 30px;
        }
      `
    ];
  }

  constructor() {
    super()
    this.forms = []
  }

  static get properties() {
    return { 
      forms: { type: Array }
    };
  }

  async connectedCallback() {
    super.connectedCallback()
    this.forms = (await getJson('./assets/forms.json'))
 	      .filter(form => (typeof form.archived == 'undefined' || form.archived == false))
 
  }

  render() {
    return html`
      <ul>
        ${this.forms.map(form => html`
          <li class="btn" @click=${() => this.open(form.id)}>${form.title}</li>
        `)}
      </ul>
    `
  }

  open(formId) {
    window.location.hash = `#/tangy-forms/new/${formId}`
  }

}

customElements.define('home-component', HomeComponent)
