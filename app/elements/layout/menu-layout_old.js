import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-pages/iron-pages.js';

import '../../service/modules-manager.js';

/**
 * @customElement
 * @polymer
 */
class MenuLayout extends PolymerElement {

    static get template() {
        return html`
        <div class="layout-vertical layout-center-aligned layout-menu">
            <template is="dom-repeat" items="{{modules}}">
                <paper-icon-button icon="icons:[[item.icon]]" on-click="_tapMenu" test="test" page-name$="page-[[index]]"></paper-icon-button>
            </template>
        </div>
        <iron-pages selected="{{selectedPage}}" attr-for-selected="selected-page" fallback-selection="fallback" class="layout-vertical layout-flex-auto layout-content">
            <template is="dom-repeat" items="{{modules}}">
                <div id$="page-[[index]]" class="container" selected-page$="page-[[index]]">

                </div>
            </template>
            <div selected-page="fallback">
                <div>WELCOME TO FLUID NEXT!!</div>
            </div>
        </iron-pages>
        `;
    }

    static get properties() {
        return {
            modules: {
                type: Array,
                notify: true
            },
            selectedPage: {
                type: String,
                notify: true
            }
        }
    }

    ready() {
        super.ready();
        console.warn(this);
        var tag = 'daisy-layout';
        var html = '<' + tag + '></' + tag + '>';
        // this.innerHTML(html);
        // this.injectBoundHTML(html, this.$.container);
    }

    _tapMenu(evt) {
        this.selectedPage = evt.target.getAttribute('page-name');
    };
}

window.customElements.define('menu-layout', MenuLayout);
