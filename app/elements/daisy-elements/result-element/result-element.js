import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class ResultElement extends PolymerElement {
    static get template() {
        return html`
        <style>
            span.blue{
                color: blue;
            }
            span.green{
                color: green;
            }
        </style>
      <div>
        The main Color is <span class$="{{color}}">{{color}}<span>
      </div>`;
    }

    static get properties() {
        return {
            color: {
                type: String,
                notify: true
            }
        };
    }
}

window.customElements.define('result-element', ResultElement);
