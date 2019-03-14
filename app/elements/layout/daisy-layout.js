import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '../daisy-elements/button-element/button-element.js';
import '../daisy-elements/result-element/result-element.js';
import '../daisy-elements/dynamic-list-element/dynamic-list-element.js';
import '../daisy-elements/dynamic-input/dynamic-input.js';
import '../daisy-elements/paper-autocomplete-custom/paper-autocomplete-custom.js';

/**
 * @customElement
 * @polymer
 */
class DaisyLayout extends PolymerElement {

    static get template() {
        return html`
      <style>
        :host {
          display: block;
        }
        .choosing-box{
          display: flex;
          width: 92%;
          min-height: 60px;
          padding: 20px;
          justify-content: space-between;
        }
        .container-dynamic-element{
          display: flex;
        }
        .container-dynamic-element > div{
          width: 40%;
          padding: 10px;
        }
      </style>
        <div class="choosing-box">
            <button-element color="green" on-change="changeColor"></button-element>
            <button-element color="blue" on-change="changeColor"></button-element>
        </div>
        <div>
            <result-element color="{{mainColor}}"></result-element>
        </div>
        <div>--------------------------------</div>
        <div class="container-dynamic-element">
            <div>
            <dynamic-list team-name="Warriors" players="{{players}}"></dynamic-list>
            </div>
            <div>
            <dynamic-input on-add-player="addPlayer"></dynamic-input>
            </div>
        </div>
        <paper-autocomplete id="suffix" class="autocomplete-states" source="[[players]]" default-value="[[playerDefault]]" label="Search Something" min-length="2" text-property="name">
            <paper-icon-button slot="suffix" suffix icon="search"></paper-icon-button>
        </paper-autocomplete>
        <paper-input label="test" value="{{stringValue}}"></paper-input>
    `;
    }

    static get properties() {
        return {
            players: {
                type: Array,
                notify: true,
                reflectToAttribute: true,
                value: [
                    {
                        numberShirt: 35,
                        name: 'KD',
                        text: 'vaffamoc'
                    },
                    {
                        numberShirt: 30,
                        name: 'Curry',
                        text: 'giusto'
                    },
                    {
                        numberShirt: 11,
                        name: 'Culo',
                        text: 'fatti due domande'
                    },
                ]
            },
            playerDefault: {
                type: Object,
                value: {
                    numberShirt: 35,
                    name: 'KD',
                    text: 'vaffamoc'
                }
            },
            stringValue: {
                type: String,
                value: 'tua madre'
            }
        }
    }

    changeColor(event) {
        this.mainColor = event.detail.color;
    }
    addPlayer(event) {
        this.push('players', event.detail.player);
    }
}

window.customElements.define('daisy-layout', DaisyLayout);
