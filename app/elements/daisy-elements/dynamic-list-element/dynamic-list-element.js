import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { } from '@polymer/polymer/lib/elements/dom-repeat.js';

/**
 * @customElement
 * @polymer
 */

 class DynamicListElement extends PolymerElement {

    static get template() {
        return html`
        <style>
            div.list-container{
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
        <h1>{{teamName}}</h1>
        <div class="list-container">
            <dom-repeat items="{{players}}">
                <template>
                    <div class="player"><span>{{item.numberShirt}}</span> - <span>{{item.name}}</span></div>
                </template>
            </dom-repeat>
        </div>
        <div>
            <button on-click="spliceArray">Delete Item</button>
        </div>
        `
    }

    static get properties() {
        return {
            teamName: {
                type: String,
                notify: true
            }
        }
    }

    spliceArray(){
        this.splice('players', 0, 1);
    }
 }

window.customElements.define('dynamic-list', DynamicListElement);