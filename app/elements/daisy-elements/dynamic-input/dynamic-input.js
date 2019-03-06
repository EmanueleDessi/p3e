import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */

class DynamicInput extends PolymerElement {
    static get template(){
        return html`
        <style>
            div.input-container{
                display: flex;
                flex-direction: column;
                padding: 10px;
            }
            div > button{
                height: 20px;
                width: 100px;
                margin-top: 20px;
            }
        </style>
        <h4>Add player</h4>
        <div class="input-container">
            <input type="number" value="{{numberShirt::input}}">
            <input type="text" value="{{name::input}}">
        </div>
        <div>
            <button on-click="triggerAddPlayer">ADD</button>
        </div>
        `
    }

    static get properties(){
        return {
            numberShirt: {
                type: Int16Array,
                notify: true
            },
            name: {
                type: String,
                notify: true
            }
        }
    }

    triggerAddPlayer(){
        this.dispatchEvent(new CustomEvent('add-player', {detail: {
            player: {
                numberShirt: parseInt(this.numberShirt),
                name: this.name
            }
        }}));
    }
}

window.customElements.define('dynamic-input', DynamicInput);