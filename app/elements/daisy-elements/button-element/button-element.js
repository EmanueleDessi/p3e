import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class ButtonElement extends PolymerElement {
    static get template() {
        return html`
        <style>
            div.button-pkg{
                display: flex;
                flex-direction: column;
            }
            div.button-pkg > span{
                width: 100px;
                text-align: center;
                color: {{color}}
            }
            button{
                text-align: center;
                width: 100px;
                height: 40px;
            }
        </style>
      <div class="button-pkg">
        <span>{{color}}</span>
        <button on-click="triggerColorEvent">Set Color</button>
      </div>`;
    }

    static get properties() {
        return {
            color: {
                type: String,
                notify: true,
                reflectToAttribute: true
            }
        };
    }

    triggerColorEvent(){
        this.dispatchEvent(new CustomEvent('change', { detail: { color: this.color } }));
    }
}

window.customElements.define('button-element', ButtonElement);
