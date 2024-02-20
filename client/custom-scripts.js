/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 49:
/***/ (() => {

class Page1 extends LitElement {

  render() {
    return html`
      <style>
        p {
          margin: 15px;
        }
        paper-button {
          background: #CCC;
        }
      </style>
      <paper-button @click="${this.goBack}"><mwc-icon>chevron_left</mwc-icon>Go back</paper-button>
      <p>
        This is page 1.
      </p>
    `
  }

  goBack() {
    window.customApp.open('')
  }

}

customElements.define('page-1', Page1)


/***/ }),

/***/ 568:
/***/ (() => {

class Page2 extends LitElement {

  render() {
    return html`
      <style>
        p {
          margin: 25px;
        }
        paper-button {
          background: #CCC;
        }
      </style>
      <paper-button @click="${this.goBack}"><mwc-icon>chevron_left</mwc-icon>Go back</paper-button>
      <p>
        This is page 2.
      </p>
    `
  }

  goBack() {
    window.customApp.open('')
  }

}

customElements.define('page-2', Page2)


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./components/shared-styles.js
const sharedStyles = css`
  .blue-button {
    color: white;
    background-color: blue;
  }
  .blue-button:disabled {
    background-color: grey;
  }
  
  /* Page Setup */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
      line-height: 1.15;
      font-size: 1.3vw;
      height: 100%;
      height: -webkit-fill-available;
  }
  body {
      background-color: #f7f6f6 !important;
      /*min-height: 100vh;*/
      height: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
      font-family: 'Andika', sans-serif !important;
      font-size: 1.3rem !important;
      font-weight: 400 !important;
      line-height: 1.5 !important;
      margin: 0 !important;
      color: #212121 !important;
      background-image: url("./images/orange_hills_75.png") !important;
      background-size: cover !important;
      background-attachment: fixed !important;
      background-repeat: no-repeat !important;
  }
  body.demo {
      background-image: url("./images/blue_hills_75.png");
  }
  main {
      width: 80vw;
      height: 90vh;
      display: flex;
      flex-direction: column;
  }
  header {
      text-align: center;
  }
  #letters header {
      margin-left: -5vw;
      margin-right: -5vw;
  }
  header .btn {
    font-size: 3rem;
    width: 4.5rem;
    height: 4.5rem;
    margin: 0.5rem;
    padding: 0;
    text-transform: lowercase;
  }
  #letters header .btn {
      font-size: 2.7rem;
      width: 4rem;
      height: 4rem;
  }
  #content {
      background-color: #fff;
      border-radius: 1rem;
      padding: 4rem 1.2rem;
      font-size: 4rem;
      font-weight: 700;
      text-align: center;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: lowercase;
    margin-top: 1rem;
    margin-bottom: 1rem;
    letter-spacing: .4rem;
    position: relative;
  }
  [data-windows] #content {
      padding: 2rem 1.2rem;
  }
  #content > div {
      min-height: 1.5em;
  }
  #content > .btn {
      width: 4rem;
      height: 4rem;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  #content #erase {
      right: 1rem;
      top: 1rem;
  }
  #content #question {
      left: 1rem;
      top: 1rem;
  }
  #content #more {
      right: 1rem;
      bottom: 1rem;
  }
  .demo #content #more svg path,
  .demo #done svg path,
  .demo #question svg g {
      fill: #0c2fff;
  }
  .demo #content #erase svg path.tangerine {
      fill: #0c2fff;
  }
  /*
  #content > div {
      position: relative;
      padding: 1rem 0;
      background-image: url("./images/eraser2.svg");
      background-size: 2rem auto;
      background-repeat: no-repeat;
      background-position: right bottom;
  }
  */
  [data-numcompare] #content div {
      width: 100%;
      height: 100%;
  }
  [data-sound] #content div,
  [data-decoding] #content div {
      width:  100%;
  }
  [data-windows] #content > div {
      width:  80%;
  }
  [data-windows="kofi"] #content > div,
  [data-windows="mary"] #content > div {
      width:  100%;
  }
  #navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
  #navigation .buttons {
      display: flex;
      align-items: center;
      margin-right: -2rem;
  }
  #navigation .btn {
      width: 6.5rem;
      height: 6.5rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  #navigation .btn:last-child {
      margin-right: 0;
  }
  #navigation #skip.btn {
      width: 5.5rem;
      height: 5.5rem;
      background-color: #fff1de;
      border-color: #fff1de;
  }
  
  
  /* Special Components */
  #tangerineMan {
    margin-top: -5rem;
    margin-left: -3rem;
    z-index: 10;
    position: relative;
    transition: color 0.7s;
  }
  #tangerineMan img {
      max-height: 11.5rem;
  }
  #tangerineMan.animate {
      outline: none;
  }
  #tangerineMan:before {
      position: absolute;
      top: 0;
      left: 0;
      margin: -1rem 0 0 -1rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      content: '';
      opacity: 0;
      pointer-events: none;
      box-shadow: 0 0 0 2px rgba(255,170,0,1);
      clip-path: polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%);
  }
  #tangerineMan:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      margin: -1rem 0 0 -1rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
      box-shadow: 0 0 0 2px rgba(255,170,0,1);
      clip-path: polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%);
  }
  .demo #tangerineMan:before, .demo #tangerineMan:after {
      box-shadow: 0 0 0 2px rgba(12,47,255,1);
  }
  #tangerineMan.animate:before {
      animation: anim-sound 0.7s forwards;
  }
  #tangerineMan.animate:after {
      animation: anim-sound-2 0.7s forwards;
  }
  #window-pane {
    padding: 0.5rem;
    border: 4px solid #ffbf09;
    border-radius: 1rem;
    margin: 0 5rem;
    text-transform: none;
    font-size: 1.4rem;
    text-align: left;
  }
  .demo #window-pane {
      border-color: #a6bdff;
  }
  .compare-nums {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .window-qs {
      display: flex;
      flex-direction: column;
      width: 100%;
  }
  .window-qs p {
      margin-top: 0;
      margin: 0;
      text-transform: none;
      font-size: 2rem;
  }
  .toggle {
      position: absolute;
      clip: rect(0,0,0,0);
      pointer-events: none;
  }
  .toggle:active + label, .toggle:checked + label {
      border-color: #ff620c;
  }
  .demo .toggle:active + label, .demo .toggle:checked + label {
      border-color: #0c2fff;
  }
  .non-game, .sound-qs {
      display: flex;
      width: 100%;
      justify-content: space-around;
  }
  .non-game {
      flex-wrap: wrap;
      text-transform: none;
  }
  .non-game h1 {
      margin: 0;
  }
  .non-game p {
      font-size: 3rem;
      margin-top: 0;
  }
  .equation-container {
      min-width: 50%;
      display: flex;
      align-items: flex-start;
  }
  #maths {
      margin-right: 1rem;
  }
  
  /* Buttons */
  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0rem; 
    vertical-align: middle;
    user-select: none;
    padding: 0.375rem 0.75rem;
    font-family: 'Andika', sans-serif;
    font-size: 1.3rem;
    line-height: 1.5;
    border-radius: 0.5rem;
    color: #2a3f55;
    border: 1px solid #ffbf09;
    text-decoration: none;
    box-shadow: 0px 1px 6px 3px #ffaa004d;
    background-color: #ffbf09;
    transition-duration: 0.4s;
    position: relative;
  }
  .btn:after {
      content: "";
    display: block;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 40px #ffaa004d;
  }
  .btn:active:after {
      box-shadow: 0 0 0 0 #ffaa004d;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }
  .demo .btn {
      background-color: #a6bdff;
      border-color: #a6bdff;
      box-shadow: 0px 1px 6px 3px #5682ff4d;
  }
  .demo .btn:after {
      box-shadow: 0 0 10px 40px #5682ff4d;
  }
  .demo .btn:active:after {
      box-shadow: 0 0 0 0 #5682ff4d;
  }
  .btn img,
  .btn svg {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
  }
  .btn-lg {
      width: 6.5rem;
      height: 6.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin: 0 .25rem;
  }
  .non-game .btn-lg {
      width: 9rem;
      height: 9rem;
      font-size: 3rem;
  }
  .compare-nums .btn {
      width: 9rem;
      height: 9rem;
      border-width: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.5rem;
  }
  .window-qs .btn {
      text-align: left;
      font-size: 1.8rem;
      margin-top: 0.5rem;
      border-width: 4px;
      text-transform: none;
  }
  .sound-qs .btn {
      border-width: 4px;
  }
  
  
  @keyframes press {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.92);
    }
    to {
      transform: scale(1);
    }
  }
  
  @keyframes anim-sound {
      0% {
          opacity: 1;
          transform: scale3d(0.3, 0.3, 1);
      }
      100% {
          opacity: 0;
          transform: scale3d(1, 1, 1);
      }
  }
  @keyframes anim-sound-2 {
      0% {
          opacity: 1;
          transform: scale3d(0.5, 0.5, 1);
      }
      100% {
          opacity: 0;
          transform: scale3d(1.5, 1.5, 1);
      }
  }
  
  /* Utilities */
  .grey {
      color: #f0f0f0;
  }
  .transform-none {
      text-transform: none;
  }
  .w-100 {
      width: 100%;
  }
  
  
  /* Example Page */
  #exampleScreen #navigation {
      justify-content: flex-end;
  }
  #topTangerine {
      height: 4rem;
      width: auto;
      position: absolute;
      right: 1rem;
      top: 1rem;
  }
  #ear {
      top: 1rem;
      right: 6rem;
  } 
  `;

;// CONCATENATED MODULE: ../node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const css_tag_t=window,e=css_tag_t.ShadowRoot&&(void 0===css_tag_t.ShadyCSS||css_tag_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o(n,t,s)},S=(s,n)=>{e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=css_tag_t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ../node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var reactive_element_s;const reactive_element_e=window,reactive_element_r=reactive_element_e.trustedTypes,h=reactive_element_r?reactive_element_r.emptyScript:"",reactive_element_o=reactive_element_e.reactiveElementPolyfillSupport,reactive_element_n={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:reactive_element_n,reflect:!1,hasChanged:a},d="finalized";class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty(d))return!1;this[d]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c(i))}else void 0!==i&&s.push(c(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:reactive_element_n).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:reactive_element_n;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}u[d]=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==reactive_element_o||reactive_element_o({ReactiveElement:u}),(null!==(reactive_element_s=reactive_element_e.reactiveElementVersions)&&void 0!==reactive_element_s?reactive_element_s:reactive_element_e.reactiveElementVersions=[]).push("1.6.3");
//# sourceMappingURL=reactive-element.js.map

;// CONCATENATED MODULE: ../node_modules/lit/node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lit_html_t;const lit_html_i=window,lit_html_s=lit_html_i.trustedTypes,lit_html_e=lit_html_s?lit_html_s.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_o="$lit$",lit_html_n=`lit$${(Math.random()+"").slice(9)}$`,lit_html_l="?"+lit_html_n,lit_html_h=`<${lit_html_l}>`,lit_html_r=document,lit_html_u=()=>lit_html_r.createComment(""),lit_html_d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,lit_html_c=Array.isArray,v=t=>lit_html_c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),lit_html_a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${lit_html_a}(?:([^\\s"'>=/]+)(${lit_html_a}*=${lit_html_a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=lit_html_r.createTreeWalker(lit_html_r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==lit_html_e?lit_html_e.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+lit_html_h:v>=0?(e.push(d),s.slice(0,v)+lit_html_o+s.slice(v)+lit_html_n+w):s+lit_html_n+(-2===v?(e.push(void 0),i):w)}return[P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(lit_html_o)||i.startsWith(lit_html_n)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+lit_html_o).split(lit_html_n),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k})}else v.push({type:6,index:r})}for(const i of t)h.removeAttribute(i)}if(y.test(h.tagName)){const t=h.textContent.split(lit_html_n),i=t.length-1;if(i>0){h.textContent=lit_html_s?lit_html_s.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],lit_html_u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],lit_html_u())}}}else if(8===h.nodeType)if(h.data===lit_html_l)v.push({type:2,index:r});else{let t=-1;for(;-1!==(t=h.data.indexOf(lit_html_n,t+1));)v.push({type:7,index:r}),t+=lit_html_n.length-1}r++}}static createElement(t,i){const s=lit_html_r.createElement("template");return s.innerHTML=t,s}}function lit_html_S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=lit_html_d(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=lit_html_S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:lit_html_r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h]}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++)}return C.currentNode=lit_html_r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=lit_html_S(this,t,i),lit_html_d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&lit_html_d(this._$AH)?this._$AA.nextSibling.data=t:this.$(lit_html_r.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else{const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){lit_html_c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(lit_html_u()),this.k(lit_html_u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=lit_html_S(this,t,i,0),n=!lit_html_d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=lit_html_S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!lit_html_d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const I=lit_html_s?lit_html_s.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=lit_html_S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){lit_html_S(this,t)}}const j={O:lit_html_o,P:lit_html_n,A:lit_html_l,C:1,M:V,L:M,R:v,D:lit_html_S,I:R,V:k,H:L,N:z,U:H,F:Z},B=lit_html_i.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(lit_html_t=lit_html_i.litHtmlVersions)&&void 0!==lit_html_t?lit_html_t:lit_html_i.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(lit_html_u(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l};
//# sourceMappingURL=lit-html.js.map

;// CONCATENATED MODULE: ../node_modules/lit/node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lit_element_l,lit_element_o;const lit_element_r=(/* unused pure expression or super */ null && (t));class lit_element_s extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}lit_element_s.finalized=!0,lit_element_s._$litElement$=!0,null===(lit_element_l=globalThis.litElementHydrateSupport)||void 0===lit_element_l||lit_element_l.call(globalThis,{LitElement:lit_element_s});const lit_element_n=globalThis.litElementPolyfillSupport;null==lit_element_n||lit_element_n({LitElement:lit_element_s});const lit_element_h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(lit_element_o=globalThis.litElementVersions)&&void 0!==lit_element_o?lit_element_o:globalThis.litElementVersions=[]).push("3.3.3");
//# sourceMappingURL=lit-element.js.map

;// CONCATENATED MODULE: ../node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./components/home-component.js




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

class HomeComponent extends lit_element_s {

  static get styles() {
    return [
      sharedStyles,
      i`
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
    return x`
      <ul>
        ${this.forms.map(form => x`
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

// EXTERNAL MODULE: ./components/page-1.js
var page_1 = __webpack_require__(49);
// EXTERNAL MODULE: ./components/page-2.js
var page_2 = __webpack_require__(568);
;// CONCATENATED MODULE: ./components/custom-app.js




class CustomApp extends LitElement {

  static get properties() {
    return { 
      route: { type: String },
      forms: { type: Array }
    };
  }

  constructor() {
    super()
    window.customApp = this
    this.route = ''
  }

  render() {
    return html`
      ${this.route === '' ? html`
        <home-component></home-component>
      `: ``}
      ${this.route === 'page1' ? html`
        <page-1></page-1>
      `: ``}
      ${this.route === 'page2' ? html`
        <page-2></page-2>
      `: ``}
    `
  }

  open(route) {
    this.route = route
  }

}

customElements.define('custom-app', CustomApp)

;// CONCATENATED MODULE: ./index.js


//window.queue = function(path) {
//  if (!window.sounds) window.sounds = []
//  window.sounds.push(new Audio(path))
//}
//window.play = function() {
//  window.sounds.forEach(sound => {
//    sound.pause()
//    sound.currentTime = 0
//  })
//  window.sounds[window.sounds.length-1].play()
//}
//

window.queue = (path, id, clean = false) => {
	if (!window.sounds || clean) window.sounds = []

	var audio = new Audio(path);
	audio.preload = 'metadata';
	window.sounds.push({
		sound: audio,
		id: id
	})
}



window.play = (times = 1, multiple = false) => {
	window.sounds.forEach(sound => {
	    if (!multiple)
	    	sound.sound.pause()
	    sound.sound.currentTime = 0
	  })
	var durationTotal = 0
	var thisSound = ''
	thisSound = window.sounds[window.sounds.length - times].sound;

	thisSound.eleId = window.sounds[window.sounds.length - times].id
	thisSound.elePos = times
	window.sounds[window.sounds.length - times].sound.currentTime = 0
	thisSound.preload = 'metadata';
	var duration = 0

	thisSound.play()
	duration = (thisSound.duration) * 1000;
	durationTotal += duration
	console.log(`Play ${thisSound.eleId} Loop: ${duration}`)
	if (thisSound.eleId.length != 1)
		window.showDuration(thisSound.eleId)
	else
		window.showOptionDuration(thisSound.eleId)
	thisSound.onended = function() {
			window.hideDuration()
			window.hideOptionDuration()

		if (times > 1) {
			setTimeout(function() {
				window.play(times - 1, true)
			}, thisSound.duration);
			
		}
	//workaround for browser limitation on media objects
	//this.currentSrc = null;
        this.src = null;
        this.srcObject = null;
	thisSound = null;
        this.remove();
	if (window.sounds.length>30)
	for (var t = 1; t<= window.sounds.length-20; t++) {
		sounds.shift();
	}
	};
}



window.showDuration = function(id, i = 1) {

	let clicked = document.querySelector(`img[id='${id}']`)
	//thisSound.preload = 'metadata';
	clicked.style.borderColor = '#ff620c';
	clicked.style.opacity = '1';
	
	if (id == 'prompt') {
		document.querySelector(`img[id='instructions']`).style.opacity = '0.5';
		document.querySelector(`img[id='instructions']`).style.borderColor = 'transparent';
	} else {
		document.querySelector(`img[id='prompt']`).style.opacity = '0.5';
		document.querySelector(`img[id='prompt']`).style.borderColor = 'transparent';
	};


};


window.hideDuration = () => {
	document.querySelector(`img[id='instructions']`).style.borderColor = 'transparent';
	document.querySelector(`img[id='instructions']`).style.opacity = '1';
	document.querySelector(`img[id='prompt']`).style.borderColor = 'transparent';
	document.querySelector(`img[id='prompt']`).style.opacity = '1';


};



window.showOptionDuration = (id) => {
//    var notVal = (id == '0'?'1':'0')

		//document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${id}']`).shadowRoot.querySelector('label').style.borderColor = '#ff620c';
		//document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${notVal}']`).style.opacity = '0.5';
//the calling ID
Array.from(document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelectorAll(`tangy-radio-block`)).filter(el => el.name == `${id}`).forEach(x=> {
	x.style.border = 'solid 5px #ff620c';
	x.style.boxSizing = 'border-box';	
})  
	//the rest of the elements on this input
Array.from(document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelectorAll(`tangy-radio-block`)).filter(el => el.name != `${id}`).forEach(x=> x.style.opacity = '0.5')	 


};

window.hideOptionDuration = (id=1) => {
//	var notVal = (id == '0'?'1':'0')
//		document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${id}']`).shadowRoot.querySelector('label').style.borderColor = 'transparent';
//		document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${id}']`).style.opacity = '1';
//		document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${notVal}']`).shadowRoot.querySelector('label').style.borderColor = 'transparent';
//		document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${notVal}']`).style.opacity = '1';

	//reset all
Array.from(document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelectorAll(`tangy-radio-block`)).forEach(x=> {
	//if (x.shadowRoot.querySelector('label').style.borderColor == 'ff620c')
	x.style.borderColor = 'transparent';
	x.style.border = 'none'
	x.style.opacity = '1';
})
	
};

})();

/******/ })()
;
//# sourceMappingURL=custom-scripts.js.map