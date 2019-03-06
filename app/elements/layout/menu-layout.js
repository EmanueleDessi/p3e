import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-pages/iron-pages.js';

/**
 * @customElement
 * @polymer
 */
class MenuLayout extends PolymerElement {

    static get template() {
        return html`
        <style>
            .layout-menu-vertical{
                display: flex;
                flex-direction: column;
                width: 70px;
            }
        </style>
        <div class="layout-menu layout-menu-vertical">
            <paper-icon-button icon="icons:apps" on-click="_tapMenu" page-name="page-1"></paper-icon-button>
            <paper-icon-button icon="icons:polymer" on-click="_tapMenu" page-name="page-2"></paper-icon-button>
        </div>
        <div class="layout-flex-auto layout-container">
            <iron-pages selected="[[selectedPage]]" attr-for-selected="name" fallback-selection="fallback">
                <div name="page-1" class="layout-vertical layout-flex-auto layout-content">
                    <demo-elements></demo-elements>
                </div>
                <div name="page-2" class="layout-vertical layout-flex-auto layout-content">
                    <daisy-layout></daisy-layout>
                </div>
                <div name="fallback">
                    <div class="fallback">WELCOME TO FLUID NEXT!!</div>
                </div>
            </iron-pages>
        </div>
        `;
    }

    static get properties() {
        return {
            selectedPage: {
                type: String,
                notify: true
            }
        }
    }

    // ready(){
    //     super.ready();
    //     console.warn(this);
    //     var tag = 'daisy-layout';
    //     var html = '<' + tag + '></' + tag + '>';
    //     // this.innerHTML(html);
    //     // this.injectBoundHTML(html, this.$.container);
    // }

    _tapMenu(evt){
        this.selectedPage = evt.target.getAttribute('page-name');
    };
}

window.customElements.define('menu-layout', MenuLayout);
