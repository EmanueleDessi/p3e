import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/paper-styles/default-theme';
import '@polymer/iron-flex-layout/iron-flex-layout';

const template = html`
<custom-style id="app-style">
    <style is="custom-style">
    
    
     :root {
            
            --dark-primary-color:       #E64A19;
            --default-primary-color:    #FF5722;
            --light-primary-color:      #FFCCBC;
            --text-primary-color:       #FFFFFF;
            --accent-color:             #4CAF50;
            --primary-background-color: #FFCCBC;
            --primary-text-color:       #212121;
            --secondary-text-color:     #757575;
            --disabled-text-color:      #BDBDBD;
            --divider-color:            #BDBDBD;
    
            --drawer-menu-color:           #ffffff;
            --drawer-border-color:         1px solid #ccc;
            --drawer-toolbar-border-color: 1px solid rgba(0, 0, 0, 0.22);
    
            --paper-menu-background-color: #fff;
            --menu-link-color:             #111111;
    
            --paper-input-container-color:       rgba(255, 255, 255, 0.64);
            --paper-input-container-focus-color: rgba(255, 255, 255, 1);
            --paper-input-container-input-color: #fff;--paper-button
            /*          
            --dark-primary-color:       #5D4037;
            --default-primary-color:    #795548;
            --light-primary-color:      #D7CCC8;
            --text-primary-color:       #FFFFFF;
            --accent-color:             #CDDC39;
            --primary-background-color: #D7CCC8;
            --primary-text-color:       #212121;
            --secondary-text-color:     #757575;
            --disabled-text-color:      #BDBDBD;
            --divider-color:            #BDBDBD;
        
            --drawer-menu-color:           #ffffff;
            --drawer-border-color:         1px solid #ccc;
            --drawer-toolbar-border-color: 1px solid rgba(0, 0, 0, 0.22);

            --paper-menu-background-color: #fff;
            --menu-link-color:             #111111;

            --paper-input-container-color:       var(--primary-text-color);
            --paper-input-container-focus-color: var(--secondary-text-color)
            --paper-input-container-input-color: var(--primary-text-color);
            */
      
            --menu-width: 56px;
            --content-padding: 8px;
            
            /**********************************************************
                            GLOBAL LAYOUT ELEMENTS
            **********************************************************/
            
            --paper-badge : {}
            
            --paper-button : {
                background: var(--accent-color);
                background-color: var(--accent-color);
                color: var(--text-primary-color);
            };
            
            --paper-badge : {}
            
            --paper-card : {}
            
            --paper-dropdown-menu : {}
                    
            --paper-icon-button : {}        
                        
            --paper-item : {}
            
            --paper-menu-button : {}
            
            --paper-swatch-picker-icon : {}
            
            --paper-tabs : {
                 background: var(--accent-color);
                 background-color: var(--accent-color);
                 color: var(--text-primary-color);
            }
            
            --paper-toolbar : {
                 background: var(--accent-color);
                 background-color: var(--accent-color);
                 color: var(--text-primary-color);
            }
            
            --paper-tooltip : {}
         }

        /*******************************************
                    LAYOUT STYLE
        *******************************************/
        body, html {
            height: max-content;
        }

        body {
            margin: 0;
            font-family: 'Roboto', 'Noto', sans-serif;
            color: var(--primary-text-color);
        }

        app-toolbar {
            background-color: var(--default-primary-color);
            color: var(--text-primary-color);
        }
       

        /*******************************************
                    FLEX LAYOUT
         *******************************************/

        .layout {
            @apply --layout;
        }

        .layout-horizontal {
            @apply --layout-horizontal;
        }

        .layout-vertical {
            @apply --layout-vertical;
        }

        .layout-flex-auto {
            @apply  --layout-flex-auto;
        }

        .layout-menu {
            width: var(--menu-width);
            border-right: var(--divider-color) solid 1px;
        }

        .layout-center-aligned {
            @apply  --layout-center;
        }

        .layout-center-justified {
            @apply --layout-center-justified;
        }

        .layout-container {
            height: 100%;
        }
        
        .layout-content {
            padding: var(--content-padding);
        }
      
    </style>
</custom-style>`;

template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);